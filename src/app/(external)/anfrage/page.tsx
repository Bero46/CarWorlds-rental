"use client"

export const dynamic = "force-dynamic"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Header } from "../../../components/site/Header"

export default function AnfragePage() {
  const [vehicleFromUrl, setVehicleFromUrl] = useState("")
  const [step, setStep] = useState<1 | 2>(1)
  const [loading, setLoading] = useState(false)
  const [vehicle, setVehicle] = useState("")
  const [city, setCity] = useState("")
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState("")
  const [notes, setNotes] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const v = params.get("vehicle") || ""
    setVehicleFromUrl(v)
    setVehicle(v)
  }, [])

  const step1Valid = vehicle.trim() && city.trim() && fromDate.trim() && toDate.trim()

  function nextStep() {
    if (!step1Valid) return
    setStep(2)
  }

  async function submit() {
    setLoading(true)
    try {
      const res = await fetch("/api/booking-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vehicle, city, from_date: fromDate, to_date: toDate, notes, name, email, phone }),
      })
      const json = await res.json()
      if (!json.ok) {
        alert("Fehler: " + (json.error || "Unbekannt"))
        setLoading(false)
        return
      }
      alert("Anfrage gespeichert! Wir melden uns schnellstmöglich.")
      setStep(1)
      setVehicle("")
      setCity("")
      setFromDate("")
      setToDate("")
      setNotes("")
      setName("")
      setEmail("")
      setPhone("")
      setLoading(false)
    } catch (err) {
      alert("Netzwerkfehler: " + String(err))
      setLoading(false)
    }
  }

  return (
    <main style={{ minHeight: "100vh", background: "#07070a", color: "rgba(255,255,255,0.92)" }}>
      <Header />
      <section style={{ position: "relative", overflow: "hidden", paddingTop: "112px", paddingBottom: "56px", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="/images/cars/m4-cabrio/hero.jpg" alt="Anfrage" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.20), rgba(0,0,0,0.50), #07070a)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 20% 10%, rgba(220, 38, 38, 0.12), transparent 55%)" }} />
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "55%", background: "linear-gradient(to top, #07070a, rgba(7,7,10,0.50), transparent)" }} />
        </div>
        <div style={{ maxWidth: "768px", margin: "0 auto", padding: "0 16px", position: "relative", zIndex: 1, width: "100%", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "9999px", border: "1px solid rgba(255, 255, 255, 0.10)", background: "rgba(0, 0, 0, 0.35)", padding: "8px 16px", fontSize: "14px", color: "rgba(255, 255, 255, 0.75)", backdropFilter: "blur(12px)" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444" }} />
            Schnellanfrage
          </div>
          <h1 style={{ marginTop: "24px", fontSize: "48px", fontWeight: "700", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Dein Fahrzeug wartet – <span style={{ background: "linear-gradient(90deg, #dc2626 0%, #f43f5e 45%, #f97316 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Anfrage in 2 Min</span>
          </h1>
          <p style={{ marginTop: "20px", fontSize: "18px", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.6 }}>
            Unverbindlich & kostenlos. Wir melden uns schnell zurück.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: "0", paddingBottom: "64px", paddingLeft: "16px", paddingRight: "16px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", marginTop: "-80px", position: "relative", zIndex: 10 }}>
          <div style={{ background: "rgba(0, 0, 0, 0.70)", border: "1px solid rgba(255, 255, 255, 0.16)", backdropFilter: "blur(24px)", borderRadius: "28px", padding: "32px", boxShadow: "0 20px 60px rgba(0, 0, 0, 0.60)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "50%", background: step >= 1 ? "#dc2626" : "rgba(255,255,255,0.10)", color: "white", fontWeight: 700, fontSize: 14 }}>1</div>
              <div style={{ flex: 1, height: "2px", background: step >= 2 ? "#dc2626" : "rgba(255,255,255,0.10)" }} />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "50%", background: step >= 2 ? "#dc2626" : "rgba(255,255,255,0.10)", color: "white", fontWeight: 700, fontSize: 14 }}>2</div>
            </div>
            {step === 1 ? (
              <>
                <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px" }}>Schritt 1: Eckdaten</h2>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", marginBottom: "24px" }}>Welches Fahrzeug, wann, wo?</p>
                <div style={{ display: "grid", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.70)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>Fahrzeug</label>
                    <input type="text" value={vehicle} onChange={(e) => setVehicle(e.target.value)} placeholder="z.B. BMW M4 Competition" style={{ width: "100%", padding: "12px 14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "white", fontSize: "14px" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.70)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>Ort</label>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="z.B. Düsseldorf" style={{ width: "100%", padding: "12px 14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "white", fontSize: "14px" }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.70)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>Von</label>
                      <input type="text" value={fromDate} onChange={(e) => setFromDate(e.target.value)} placeholder="TT.MM.JJJJ" style={{ width: "100%", padding: "12px 14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "white", fontSize: "14px" }} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.70)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>Bis</label>
                      <input type="text" value={toDate} onChange={(e) => setToDate(e.target.value)} placeholder="TT.MM.JJJJ" style={{ width: "100%", padding: "12px 14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "white", fontSize: "14px" }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.70)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>Nachricht (optional)</label>
                    <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="z.B. Abholung morgens, Event am Samstag, ..." style={{ width: "100%", padding: "12px 14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "white", fontSize: "14px", minHeight: "100px", fontFamily: "inherit", resize: "vertical" }} />
                  </div>
                  <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end", marginTop: "12px" }}>
                    <Link href="/fahrzeuge" style={{ padding: "12px 24px", fontSize: "14px", fontWeight: 600, background: "rgba(255,255,255,0.08)", color: "white", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", textDecoration: "none", display: "inline-block" }}>Abbrechen</Link>
                    <button onClick={nextStep} disabled={!step1Valid} style={{ padding: "12px 24px", fontSize: "14px", fontWeight: 600, background: step1Valid ? "#dc2626" : "rgba(255,255,255,0.10)", color: "white", border: "none", borderRadius: "8px", cursor: step1Valid ? "pointer" : "not-allowed", opacity: step1Valid ? 1 : 0.5 }}>Weiter zu Kontaktdaten →</button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px" }}>Schritt 2: Kontaktdaten</h2>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", marginBottom: "24px" }}>Damit wir dich erreichen können.</p>
                <div style={{ display: "grid", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.70)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Vor- und Nachname" style={{ width: "100%", padding: "12px 14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "white", fontSize: "14px" }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.70)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>E-Mail</label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@email.de" style={{ width: "100%", padding: "12px 14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "white", fontSize: "14px" }} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.70)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>Telefon</label>
                      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+49 ..." style={{ width: "100%", padding: "12px 14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "white", fontSize: "14px" }} />
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "12px", justifyContent: "space-between", marginTop: "12px" }}>
                    <button onClick={() => setStep(1)} style={{ padding: "12px 24px", fontSize: "14px", fontWeight: 600, background: "rgba(255,255,255,0.08)", color: "white", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", cursor: "pointer" }}>← Zurück</button>
                    <button onClick={submit} disabled={!name || !email || !phone || loading} style={{ padding: "12px 24px", fontSize: "14px", fontWeight: 600, background: name && email && phone && !loading ? "#dc2626" : "rgba(255,255,255,0.10)", color: "white", border: "none", borderRadius: "8px", cursor: name && email && phone && !loading ? "pointer" : "not-allowed", opacity: name && email && phone && !loading ? 1 : 0.5 }}>{loading ? "Wird gesendet..." : "Anfrage senden ✓"}</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
