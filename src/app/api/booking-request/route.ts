import { NextResponse } from "next/server"
import { Resend } from "resend"
import { createClient } from "@supabase/supabase-js"

// Env-Variablen mit Checks
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
const RESEND_KEY = process.env.RESEND_API_KEY

if (!SUPABASE_URL) console.error("❌ Missing NEXT_PUBLIC_SUPABASE_URL")
if (!SERVICE_KEY) console.error("❌ Missing SUPABASE_SERVICE_ROLE_KEY")
if (!RESEND_KEY) console.error("❌ Missing RESEND_API_KEY")

const resend = new Resend(RESEND_KEY || "")

const supabase = createClient(
  SUPABASE_URL || "",
  SERVICE_KEY || ""
)

function buildWhatsappLink(message: string) {
  const number = "491749994777"
  const text = encodeURIComponent(message)
  return `https://wa.me/${number}?text=${text}`
}

export async function POST(req: Request) {
  try {
    // Prüfe ob Keys vorhanden sind
    if (!SUPABASE_URL || !SERVICE_KEY) {
      return NextResponse.json(
        { ok: false, error: "Server config missing: Supabase URL / Service Role Key" },
        { status: 500 }
      )
    }

    const body = await req.json()
    const { vehicle, city, from_date, to_date, notes, name, email, phone } = body

    // Validierung
    if (!vehicle || !city || !from_date || !to_date || !name || !email || !phone) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      )
    }

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
      console.error("❌ Supabase error:", error)
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 })
    }

    console.log("✅ Booking saved:", data.id)

    const adminEmail = process.env.ADMIN_NOTIFY_EMAIL || "info@zb-rental.de"
    const fromEmail = process.env.FROM_EMAIL || "noreply@zb-rental.de"

    const waLink = buildWhatsappLink(
      `Hi, ich habe eine Frage zu meiner Anfrage: ${vehicle} (${from_date} bis ${to_date}) in ${city}. Name: ${name}`
    )

    // 2) Mail an Admin
    if (RESEND_KEY) {
      try {
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
        console.log("✅ Admin email sent")
      } catch (mailErr) {
        console.error("⚠️ Admin email failed:", mailErr)
      }
    }

    // 3) Bestätigung an Kunde
    if (RESEND_KEY) {
      try {
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
        console.log("✅ Customer email sent")
      } catch (mailErr) {
        console.error("⚠️ Customer email failed:", mailErr)
      }
    }

    return NextResponse.json({ ok: true, id: data.id })
  } catch (e: any) {
    console.error("❌ API error:", e)
    return NextResponse.json(
      { ok: false, error: e?.message || "Unknown error" },
      { status: 500 }
    )
  }
}
