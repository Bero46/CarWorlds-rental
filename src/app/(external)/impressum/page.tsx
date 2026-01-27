import Link from "next/link"
import { Header } from "@/components/site/Header"

export default function ImpressumPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#07070a", color: "rgba(255,255,255,0.92)" }}>
      <Header />

      <section style={{ paddingTop: "120px", paddingBottom: "64px", paddingLeft: "16px", paddingRight: "16px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h1 style={{ fontSize: 40, fontWeight: 750, letterSpacing: "-0.02em" }}>Impressum</h1>

          <div style={{ marginTop: 18, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 22, padding: 22, lineHeight: 1.7, color: "rgba(255,255,255,0.85)" }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, color: "white" }}>Angaben gemäß § 5 TMG</h2>

            <p style={{ marginBottom: 14 }}>
              <strong>CarWorlds GmbH</strong><br />
              Rheinpromenade 11<br />
              40789 Monheim am Rhein<br />
              Deutschland
            </p>

            <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 20, marginBottom: 12, color: "white" }}>Kontakt</h2>
            <p style={{ marginBottom: 14 }}>
              <strong>Telefon:</strong> <a href="tel:+491749994777" style={{ color: "#f43f5e", textDecoration: "none" }}>+49 174 999 4777</a><br />
              <strong>E-Mail:</strong> <a href="mailto:Info@ZB-Rental.de" style={{ color: "#f43f5e", textDecoration: "none" }}>Info@ZB-Rental.de</a>
            </p>

            <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 20, marginBottom: 12, color: "white" }}>Geschäftsführer</h2>
            <p style={{ marginBottom: 14 }}>
              Berdar Gülcubuk
            </p>

            <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 20, marginBottom: 12, color: "white" }}>Umsatzsteuer-ID</h2>
            <p style={{ marginBottom: 14 }}>
              DE[230/5702/4994]
            </p>

            <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 20, marginBottom: 12, color: "white" }}>Handelsregister</h2>
            <p style={{ marginBottom: 14 }}>
              Amtsgericht Düsseldorf<br />
              HRB [110935/1 0002 1 (212)]
            </p>

            <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 20, marginBottom: 12, color: "white" }}>Haftungsausschluss</h2>
            <p style={{ marginBottom: 14 }}>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>

            <p style={{ marginTop: 20, fontSize: 12, color: "rgba(255,255,255,0.60)" }}>
              ⚠️ <strong>Hinweis:</strong> Bitte fülle die Felder [DEINE-STEUERNUMMER] und [DEINE-HRB-NUMMER] mit deinen echten Daten aus.
            </p>
          </div>

          <Link
            href="/"
            style={{
              display: "inline-block",
              marginTop: 24,
              padding: "12px 18px",
              borderRadius: 8,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.14)",
              color: "white",
              textDecoration: "none",
            }}
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </section>
    </main>
  )
}
