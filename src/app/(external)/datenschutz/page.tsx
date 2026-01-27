import Link from "next/link"
import { Header } from "@/components/site/Header"

export default function DatenschutzPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#07070a", color: "rgba(255,255,255,0.92)" }}>
      <Header />

      <section style={{ paddingTop: "120px", paddingBottom: "64px", paddingLeft: "16px", paddingRight: "16px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h1 style={{ fontSize: 40, fontWeight: 750, letterSpacing: "-0.02em" }}>Datenschutz</h1>

          <div style={{ marginTop: 18, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 22, padding: 22, lineHeight: 1.7, color: "rgba(255,255,255,0.85)" }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, color: "white" }}>1. Datenschutz auf einen Blick</h2>
            <p style={{ marginBottom: 14 }}>
              Die Betreiber dieser Seiten nehmen den Schutz deiner persönlichen Daten sehr ernst. Wir behandeln deine personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 20, marginBottom: 12, color: "white" }}>2. Allgemeine Hinweise</h2>
            <p style={{ marginBottom: 14 }}>
              Die nachfolgende Datenschutzerklärung gilt für die Website zb-rental.de. Durch die Nutzung dieser Website erklärst du dich mit der Erfassung, Verarbeitung und Nutzung von Daten gemäß dieser Erklärung einverstanden.
            </p>

            <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 20, marginBottom: 12, color: "white" }}>3. Kontaktformular</h2>
            <p style={{ marginBottom: 14 }}>
              Wenn du uns über das Kontaktformular eine Anfrage sendest, werden deine Angaben (Name, E-Mail, Telefon, Nachricht) gespeichert, um deine Anfrage zu bearbeiten und dir antworten zu können. Diese Daten werden nicht an Dritte weitergegeben.
            </p>

            <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 20, marginBottom: 12, color: "white" }}>4. Cookies</h2>
            <p style={{ marginBottom: 14 }}>
              Diese Website verwendet Cookies, um dir ein besseres Nutzungserlebnis zu bieten. Du kannst die Verwendung von Cookies in deinen Browser-Einstellungen deaktivieren.
            </p>

            <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 20, marginBottom: 12, color: "white" }}>5. Deine Rechte</h2>
            <p style={{ marginBottom: 14 }}>
              Du hast das Recht, Auskunft über deine gespeicherten Daten zu erhalten, diese zu korrigieren oder zu löschen. Kontaktiere uns unter Info@ZB-Rental.de.
            </p>

            <p style={{ marginTop: 20, fontSize: 12, color: "rgba(255,255,255,0.60)" }}>
              ⚠️ <strong>Hinweis:</strong> Dies ist eine Basis-Datenschutzerklärung. Bitte konsultiere einen Rechtsanwalt für eine vollständige DSGVO-konforme Erklärung.
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
