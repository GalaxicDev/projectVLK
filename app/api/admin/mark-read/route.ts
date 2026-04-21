import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'

function isAuthenticated(req: NextRequest): boolean {
  const session = req.cookies.get('lvk_admin')?.value
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword || !session) return false
  return session === Buffer.from(adminPassword).toString('base64')
}

export async function POST(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: 'Niet geautoriseerd.' }, { status: 401 })
  }

  const { id, read } = await req.json()
  if (!id) return NextResponse.json({ error: 'ID vereist.' }, { status: 400 })

  const supabase = createServerClient()
  const { error } = await supabase
    .from('contact_submissions')
    .update({ read: read ?? true })
    .eq('id', id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
