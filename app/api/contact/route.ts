import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { naam, email, telefoon, bericht } = body

    if (!naam || !email || !bericht) {
      return NextResponse.json({ error: 'Verplichte velden ontbreken.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Ongeldig e-mailadres.' }, { status: 400 })
    }

    const supabase = createServerClient()
    const { error } = await supabase.from('contact_submissions').insert({
      naam: naam.trim().slice(0, 200),
      email: email.trim().slice(0, 200),
      telefoon: telefoon ? telefoon.trim().slice(0, 50) : null,
      bericht: bericht.trim().slice(0, 5000),
    })

    if (error) throw error

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Interne serverfout.' }, { status: 500 })
  }
}
