import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'

function isAuthenticated(req: NextRequest): boolean {
  const session = req.cookies.get('lvk_admin')?.value
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword || !session) return false
  return session === Buffer.from(adminPassword).toString('base64')
}

export async function GET(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: 'Niet geautoriseerd.' }, { status: 401 })
  }

  const supabase = createServerClient()

  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

  const [viewsAll, views30d, views7d, contacts] = await Promise.all([
    supabase.from('page_views').select('visited_at, page', { count: 'exact' }),
    supabase
      .from('page_views')
      .select('visited_at, page')
      .gte('visited_at', thirtyDaysAgo.toISOString()),
    supabase
      .from('page_views')
      .select('id', { count: 'exact', head: true })
      .gte('visited_at', sevenDaysAgo.toISOString()),
    supabase
      .from('contact_submissions')
      .select('*')
      .order('submitted_at', { ascending: false }),
  ])

  // Group views by day (last 30 days)
  const viewsByDay: Record<string, number> = {}
  for (let i = 0; i < 30; i++) {
    const d = new Date()
    d.setDate(d.getDate() - (29 - i))
    viewsByDay[d.toISOString().slice(0, 10)] = 0
  }
  for (const row of views30d.data ?? []) {
    const day = row.visited_at.slice(0, 10)
    if (viewsByDay[day] !== undefined) viewsByDay[day]++
  }

  // Group views by page
  const viewsByPage: Record<string, number> = {}
  for (const row of viewsAll.data ?? []) {
    viewsByPage[row.page] = (viewsByPage[row.page] ?? 0) + 1
  }
  const topPages = Object.entries(viewsByPage)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([page, count]) => ({ page, count }))

  const submissions = contacts.data ?? []
  const unreadCount = submissions.filter((s) => !s.read).length

  return NextResponse.json({
    pageViews: {
      total: viewsAll.count ?? 0,
      last30days: views30d.data?.length ?? 0,
      last7days: views7d.count ?? 0,
      byDay: Object.entries(viewsByDay).map(([date, count]) => ({ date, count })),
      byPage: topPages,
    },
    contacts: {
      total: submissions.length,
      unread: unreadCount,
      submissions,
    },
  })
}
