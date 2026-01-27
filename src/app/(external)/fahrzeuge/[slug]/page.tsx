"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { Header } from "@/components/site/Header"
import { getFeaturedVehicles } from "@/lib/vehicles"

export default function FahrzeugDetailPage() {
  const params = useParams<{ slug: string }>()
  const slug = params?.slug

  const vehicle = getFeaturedVehicles().find((v) => v.slug === slug)

  if (!vehicle) {
    return (
      <main style={{ minHeight: "100vh", background: "#07070a", color: "white" }}>
        <Header />
        <section style={{ paddingTop: "120px", paddingLeft: 16, paddingRight: 16, paddingBottom: 64 }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h1 style={{ fontSize: 32, fontWeight: 700 }}>Fahrzeug nicht gefunden</h1>
            <p style={{ marginTop: 12, color: "rgba(255,255,255,0.65)" }}>
              Der Link ist ungültig oder das Fahrzeug ist noch nicht hinterlegt.
            </p>
            <Link
              href="/fahrzeuge"
              style={{
                display: "inline-block",
                marginTop: 18,
                padding: "12px 18px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "white",
                textDecoration: "none",
              }}
            >
              ← Zur Übersicht
            </Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main style={{ minHeight: "100vh", background: "#07070a", color: "rgba(255,255,255,0.92)" }}>
      <Header />

      <section style={{ paddingTop: "120px", paddingBottom: "64px", paddingLeft: "16px", paddingRight: "16px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Link href="/fahrzeuge" style={{ color: "rgba(255,255,255,0.70)", textDecoration: "none" }}>
            ← Alle Fahrzeuge
          </Link>

          <div
            style={{
              marginTop: 18,
              borderRadius: 28,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(255,255,255,0.06)",
            }}
          >
            <div style={{ position: "relative", height: 460 }}>
              <img src={vehicle.image} alt={vehicle.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.78), rgba(0,0,0,0.12), transparent)" }} />
              <div style={{ position: "absolute", left: 18, top: 18, padding: "8px 12px", borderRadius: 999, background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.10)", backdropFilter: "blur(12px)", fontSize: 12 }}>
                {vehicle.priceFrom}
              </div>
            </div>

            <div style={{ padding: 22 }}>
              <h1 style={{ fontSize: 36, fontWeight: 750, letterSpacing: "-0.02em" }}>{vehicle.name}</h1>
              <p style={{ marginTop: 10, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{vehicle.description}</p>

              <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 8 }}>
                {vehicle.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.75)",
                      padding: "6px 10px",
                      borderRadius: 999,
                      border: "1px solid rgba(255,255,255,0.10)",
                      background: "rgba(0,0,0,0.35)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: 22, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link
                  href={`/anfrage?vehicle=${encodeURIComponent(vehicle.name)}`}
                  style={{
                    padding: "12px 18px",
                    borderRadius: 999,
                    background: "#dc2626",
                    color: "white",
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  Anfrage für dieses Fahrzeug
                </Link>
                <Link
                  href="/anfrage"
                  style={{
                    padding: "12px 18px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    color: "white",
                    textDecoration: "none",
                    fontWeight: 650,
                  }}
                >
                  Allgemeine Anfrage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
