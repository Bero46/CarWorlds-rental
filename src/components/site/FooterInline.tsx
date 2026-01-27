import Link from "next/link"

export function FooterInline() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255, 255, 255, 0.10)", background: "red", padding: "56px 16px" }}>
      <div style={{ maxWidth: "1536px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "32px", marginBottom: "32px" }}>
          {/* Brand */}
          <div>
            <div style={{ fontSize: "18px", fontWeight: 700, color: "white", marginBottom: "12px" }}>
              ZB Rental
            </div>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
              Premium Fahrzeugvermietung in NRW. Sportwagen & Camper für jeden Anlass.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "white", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Navigation
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "14px", transition: "color 200ms ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.75)"}>
                Startseite
              </Link>
              <Link href="/fahrzeuge" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "14px", transition: "color 200ms ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.75)"}>
                Fahrzeuge
              </Link>
              <Link href="/anfrage" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "14px", transition: "color 200ms ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.75)"}>
                Anfrage senden
              </Link>
            </div>
          </div>

          {/* Rechtliches */}
          <div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "white", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Rechtliches
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Link href="/agb" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "14px", transition: "color 200ms ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.75)"}>
                AGB
              </Link>
              <Link href="/impressum" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "14px", transition: "color 200ms ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.75)"}>
                Impressum
              </Link>
              <Link href="/datenschutz" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "14px", transition: "color 200ms ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.75)"}>
                Datenschutz
              </Link>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "white", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Kontakt
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px" }}>
              <a href="tel:+491749994777" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", transition: "color 200ms ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.75)"}>
                +49 174 999 4777
              </a>
              <a href="mailto:Info@ZB-Rental.de" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", transition: "color 200ms ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.75)"}>
                Info@ZB-Rental.de
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.10)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", fontSize: "12px", color: "rgba(255,255,255,0.55)" }}>
          <div>© 2026 CarWorlds-Rental • ZB-Rental.de • NRW</div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/agb" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>AGB</Link>
            <Link href="/impressum" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Impressum</Link>
            <Link href="/datenschutz" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
