import { NextResponse } from "next/server"
import { Resend } from "resend"
import { createClient } from "@supabase/supabase-js"

const resend = new Resend(process.env.RESEND_API_KEY!)

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

function buildWhatsappLink(message: string) {
  const number = process.env.WHATSAPP_NUMBER || ""
  const text = encodeURIComponent(message)
  return `https://wa.me/${491749994777}?text=${text}`
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { vehicle, city, from_date, to_date, notes, name, email, phone } = body

    // 1) In DB speichern
    const { data, error } = await supabase
      .from("booking_requests")
      .insert([
        {
          status: "new",
          vehicle,
          city,
          from_date,
          to_date,
          notes,
          name,
          email,
          phone,
        },
      ])
      .select("*")
      .single()

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 })
    }

    const adminEmail = process.env.ADMIN_NOTIFY_EMAIL!
    const fromEmail = process.env.FROM_EMAIL!

    const waLink = buildWhatsappLink(
      `Hi, ich habe eine Frage zu meiner Anfrage: ${vehicle} (${from_date} bis ${to_date}) in ${city}. Name: ${name}`
    )

    // 2) Mail an Admin
    await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `Neue Anfrage: ${vehicle} (${from_date}–${to_date})`,
      html: `
        <h2>Neue Buchungsanfrage</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>E-Mail:</b> ${email}</p>
        <p><b>Telefon:</b> ${phone}</p>
        <p><b>Fahrzeug:</b> ${vehicle}</p>
        <p><b>Ort:</b> ${city}</p>
        <p><b>Zeitraum:</b> ${from_date} → ${to_date}</p>
        <p><b>Notiz:</b> ${notes || "-"}</p>
        <p><a href="${waLink}">WhatsApp öffnen</a></p>
      `,
    })

    // 3) Bestätigung an Kunde
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: `Wir haben deine Anfrage erhalten (${vehicle})`,
      html: `
        <h2>Danke, ${name}!</h2>
        <p>Wir haben deine Anfrage erhalten und melden uns schnellstmöglich.</p>
        <p><b>Fahrzeug:</b> ${vehicle}</p>
        <p><b>Ort:</b> ${city}</p>
        <p><b>Zeitraum:</b> ${from_date} → ${to_date}</p>
        <p>Wenn du Fragen hast, schreib uns direkt auf WhatsApp:</p>
        <p><a href="${waLink}">WhatsApp Chat öffnen</a></p>
      `,
    })

    return NextResponse.json({ ok: true, id: data.id })
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Unknown error" },
      { status: 500 }
    )
  }
}
