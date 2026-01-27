import Link from "next/link"
import { Header } from "@/components/site/Header"

export default function AgbPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#07070a", color: "rgba(255,255,255,0.92)" }}>
      <Header />

      <section style={{ paddingTop: "120px", paddingBottom: "64px", paddingLeft: "16px", paddingRight: "16px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <h1 style={{ fontSize: 40, fontWeight: 750, letterSpacing: "-0.02em", marginBottom: 8 }}>
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>
          <p style={{ fontSize: 18, fontWeight: 600, color: "rgba(255,255,255,0.75)", marginBottom: 24 }}>
            CarWorlds GmbH – Fahrzeugvermietung
          </p>

          <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 22, padding: 28, lineHeight: 1.8, color: "rgba(255,255,255,0.85)" }}>
            
            {/* § 1 */}
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, color: "white", marginBottom: 12 }}>
                § 1 Geltungsbereich und Individualabreden
              </h2>
              <ul style={{ paddingLeft: 20, listStyleType: "disc" }}>
                <li style={{ marginBottom: 8 }}>
                  Diese AGB gelten für alle Mietverträge über Kraftfahrzeuge (Sportwagen, PKW, Wohnmobile) der CarWorlds GmbH.
                </li>
                <li>
                  Unsere Mietpreise werden für jeden Auftrag individuell kalkuliert. Ausschlaggebend ist allein der im jeweiligen Einzelmietvertrag schriftlich vereinbarte Preis.
                </li>
              </ul>
            </div>

            {/* § 2 */}
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, color: "white", marginBottom: 12 }}>
                § 2 Reservierung und Anzahlung
              </h2>
              <ul style={{ paddingLeft: 20, listStyleType: "disc" }}>
                <li style={{ marginBottom: 8 }}>
                  Eine Reservierung wird erst nach Eingang der vereinbarten Anzahlung verbindlich.
                </li>
                <li>
                  Im Falle einer Stornierung oder Nichtabnahme durch den Mieter wird die Anzahlung <strong>nicht erstattet</strong>. Sie verbleibt als pauschalierte Aufwandsentschädigung und Reservierungsgebühr beim Vermieter.
                </li>
              </ul>
            </div>

            {/* § 3 */}
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, color: "white", marginBottom: 12 }}>
                § 3 Kaution und Schadensabwicklung
              </h2>
              <ul style={{ paddingLeft: 20, listStyleType: "disc" }}>
                <li style={{ marginBottom: 8 }}>
                  Vor Fahrzeugübergabe ist eine Kaution in vereinbarter Höhe zu hinterlegen.
                </li>
                <li style={{ marginBottom: 8 }}>
                  <strong>Prüffrist:</strong> Der Vermieter ist berechtigt, die Kaution bis zu <strong>14 Tage</strong> nach Rückgabe einzubehalten, um das Fahrzeug auf versteckte Mängel und elektronische Fehlerspeicher-Einträge zu prüfen.
                </li>
                <li style={{ marginBottom: 8 }}>
                  <strong>Schadensfall:</strong> Bei Feststellung von Schäden wird die Kaution zur Verrechnung einbehalten. Dies gilt für die Beauftragung von Fachbetrieben sowie für die Eigenreparatur durch den Vermieter.
                </li>
                <li>
                  <strong>Unfälle mit ungeklärter Schuld:</strong> Bei Unfällen mit Drittbeteiligung wird die Kaution erst dann zurückgezahlt, wenn die gegnerische Versicherung den Schaden vollumfänglich reguliert hat oder ein rechtskräftiges Gerichtsurteil vorliegt, das die volle Haftung der Gegenseite bestätigt.
                </li>
              </ul>
            </div>

            {/* § 4 */}
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, color: "white", marginBottom: 12 }}>
                § 4 GPS-Überwachung und Telematik
              </h2>
              <ul style={{ paddingLeft: 20, listStyleType: "disc" }}>
                <li style={{ marginBottom: 8 }}>
                  Sämtliche Fahrzeuge der CarWorlds GmbH sind <strong>mehrfach GPS-überwacht</strong> und mit Telematik-Systemen ausgestattet.
                </li>
                <li>
                  Der Mieter willigt ein, dass Standort, Geschwindigkeit sowie Fahrparameter (z.B. Motordrehzahl, Beschleunigungswerte) aufgezeichnet werden. Diese Daten dienen dem Diebstahlschutz und dem Nachweis von vertragswidriger Nutzung.
                </li>
              </ul>
            </div>

            {/* § 5 */}
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, color: "white", marginBottom: 12 }}>
                § 5 Nutzungsbeschränkungen und Ausland
              </h2>
              <ul style={{ paddingLeft: 20, listStyleType: "disc" }}>
                <li style={{ marginBottom: 8 }}>
                  <strong>Auslandsfahrten:</strong> Fahrten außerhalb Deutschlands sind strikt untersagt. Ausnahmen bedürfen der ausdrücklichen schriftlichen Genehmigung im Mietvertrag.
                </li>
                <li style={{ marginBottom: 8 }}>
                  <strong>Vertragsstrafe:</strong> Bei unbefugter Grenzüberquerung wird die <strong>gesamte Kaution als Vertragsstrafe einbehalten</strong>. Der Versicherungsschutz erlischt in diesem Fall sofort.
                </li>
                <li>
                  <strong>Fahrverhalten:</strong> Die Nutzung auf Rennstrecken, bei Fahrsicherheitstrainings oder für motorsportliche Zwecke ist untersagt.
                </li>
              </ul>
            </div>

            {/* § 6 */}
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, color: "white", marginBottom: 12 }}>
                § 6 Ausschluss des Versicherungsschutzes (Haftung des Mieters)
              </h2>
              <p style={{ marginBottom: 12 }}>
                Der Mieter haftet trotz Versicherung <strong>vollumfänglich</strong> (auch über die Kaution hinaus), wenn:
              </p>
              <ul style={{ paddingLeft: 20, listStyleType: "disc" }}>
                <li style={{ marginBottom: 8 }}>
                  das Fahrzeug unter Einfluss von Alkohol, Drogen oder reaktionshemmenden Medikamenten geführt wurde.
                </li>
                <li style={{ marginBottom: 8 }}>
                  der Fahrer keine gültige Fahrerlaubnis besitzt.
                </li>
                <li style={{ marginBottom: 8 }}>
                  das Fahrzeug arglistig, grob fahrlässig oder unsachgemäß behandelt wurde (z.B. Burnouts, Überdrehen des Motors, mutwillige Sachbeschädigung).
                </li>
                <li>
                  Unfälle oder Schäden der Polizei nicht unverzüglich gemeldet wurden.
                </li>
              </ul>
            </div>

            {/* § 7 */}
            <div>
              <h2 style={{ fontSize: 18, fontWeight: 800, color: "white", marginBottom: 12 }}>
                § 7 Rückgabe
              </h2>
              <p>
                Das Fahrzeug ist zum vereinbarten Zeitpunkt im gleichen Zustand wie bei Übergabe (sauber und vollgetankt) zurückzugeben. Bei Verstoß werden Reinigungskosten und Tankgebühren direkt mit der Kaution verrechnet. Ohne Nachweis über die richtige Betankung (z.B. Super+, Ultimate oder V-Power bei Shell) wird die <strong>gesamte Kaution einbehalten</strong>.
              </p>
            </div>

            <p style={{ marginTop: 24, fontSize: 12, color: "rgba(255,255,255,0.60)", borderTop: "1px solid rgba(255,255,255,0.10)", paddingTop: 16 }}>
              ⚠️ <strong>Rechtlicher Hinweis:</strong> Diese AGB wurden nach deinen Vorgaben erstellt. Bitte vor Livegang durch einen Rechtsanwalt prüfen lassen, um vollständige DSGVO- und Verbraucherschutz-Konformität zu gewährleisten.
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
