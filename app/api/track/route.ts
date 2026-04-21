import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { page } = body

    if (!page || typeof page !== 'string') {
      return NextResponse.json({ error: 'Invalid page.' }, { status: 400 })
    }

    const supabase = createServerClient()
    await supabase.from('page_views').insert({ page: page.slice(0, 200) })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: true }) // Silently fail
  }
}
