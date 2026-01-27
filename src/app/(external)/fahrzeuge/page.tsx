"use client"

import Link from "next/link"
import { Header } from "@/components/site/Header"
import { getFeaturedVehicles } from "@/lib/vehicles"

export default function FahrzeugePage() {
  const vehicles = getFeaturedVehicles()

  return (
    <main style={{ minHeight: "100vh", background: "#07070a", color: "rgba(255,255,255,0.92)" }}>
      <Header />

      <section style={{ paddingTop: "120px", paddingBottom: "64px", paddingLeft: "16px", paddingRight: "16px" }}>
        <div style={{ maxWidth: "1536px", margin: "0 auto" }}>
          <div style={{ marginBottom: "28px" }}>
            <h1 style={{ fontSize: "40px", fontWeight: 700, letterSpacing: "-0.02em" }}>Alle Fahrzeuge</h1>
            <p style={{ marginTop: "10px", color: "rgba(255,255,255,0.65)" }}>
              Wähle dein Fahrzeug und sende eine Anfrage – wir melden uns schnell zurück.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {vehicles.map((v) => (
              <Link
                key={v.slug}
                href={`/fahrzeuge/${v.slug}`}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: "22px",
                  overflow: "hidden",
                  textDecoration: "none",
                  color: "white",
                  transition: "all 220ms ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "rgba(220,38,38,0.35)" }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)" }}
              >
                <div style={{ position: "relative", height: "220px" }}>
                  <img src={v.image} alt={v.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.70), rgba(0,0,0,0.10), transparent)" }} />
                  <div style={{ position: "absolute", left: 16, top: 16, padding: "6px 12px", borderRadius: 999, background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.10)", backdropFilter: "blur(12px)", fontSize: 12 }}>
                    {v.priceFrom}
                  </div>
                </div>

                <div style={{ padding: "18px" }}>
                  <div style={{ fontSize: 18, fontWeight: 650 }}>{v.name}</div>
                  <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {v.tags.slice(0, 4).map((t) => (
                      <span key={t} style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", padding: "6px 10px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.10)", background: "rgba(0,0,0,0.35)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <p style={{ marginTop: 12, fontSize: 14, color: "rgba(255,255,255,0.60)", lineHeight: 1.6 }}>
                    {v.description}
                  </p>
                  <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,0.75)", fontSize: 14 }}>
                    <span>Details ansehen</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
