'use client'

import Link from "next/link"
import { Header } from "../../components/site/Header"
import { getFeaturedVehicles } from "../../lib/vehicles"

const LOCATIONS = ["Köln", "Düsseldorf", "Leverkusen", "Dortmund", "Wuppertal", "Bonn", "Monheim"]

function FooterInline() {
  return (
    <footer style={{ marginTop: "56px", borderTop: "1px solid rgba(255, 255, 255, 0.10)", background: "rgba(0, 0, 0, 0.30)" }}>
      <div style={{ maxWidth: "1536px", margin: "0 auto", padding: "48px 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px" }}>
          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "600", color: "white" }}>ZB Rental</h3>
            <p style={{ marginTop: "8px", fontSize: "14px", color: "rgba(255, 255, 255, 0.60)" }}>Premium Fahrzeugvermietung in NRW</p>
          </div>
          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "600", color: "white" }}>Navigation</h3>
            <ul style={{ listStyle: "none", marginTop: "12px" }}>
              <li style={{ marginTop: "8px" }}><Link href="/fahrzeuge" style={{ color: "rgba(255, 255, 255, 0.60)", transition: "color 200ms" }}>Fahrzeuge</Link></li>
              <li style={{ marginTop: "8px" }}><Link href="/#ablauf" style={{ color: "rgba(255, 255, 255, 0.60)", transition: "color 200ms" }}>Ablauf</Link></li>
              <li style={{ marginTop: "8px" }}><Link href="/#faq" style={{ color: "rgba(255, 255, 255, 0.60)", transition: "color 200ms" }}>FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "600", color: "white" }}>Kontakt</h3>
            <ul style={{ listStyle: "none", marginTop: "12px", fontSize: "14px" }}>
              <li style={{ marginTop: "8px" }}><a href="tel:+491749994777" style={{ color: "rgba(255, 255, 255, 0.60)" }}>+49 174 999 4777</a></li>
              <li style={{ marginTop: "8px" }}><a href="mailto:Info@ZB-Rental.de" style={{ color: "rgba(255, 255, 255, 0.60)" }}>Info@ZB-Rental.de</a></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "600", color: "white" }}>Rechtliches</h3>
            <ul style={{ listStyle: "none", marginTop: "12px" }}>
              <li style={{ marginTop: "8px" }}><Link href="/agb" style={{ color: "rgba(255, 255, 255, 0.60)", fontSize: "14px" }}>AGB</Link></li>
              <li style={{ marginTop: "8px" }}><Link href="/impressum" style={{ color: "rgba(255, 255, 255, 0.60)", fontSize: "14px" }}>Impressum</Link></li>
              <li style={{ marginTop: "8px" }}><Link href="/datenschutz" style={{ color: "rgba(255, 255, 255, 0.60)", fontSize: "14px" }}>Datenschutz</Link></li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: "40px", borderTop: "1px solid rgba(255, 255, 255, 0.10)", paddingTop: "32px", textAlign: "center", fontSize: "12px", color: "rgba(255, 255, 255, 0.45)" }}>
          © {new Date().getFullYear()} ZB-Rental NRW
        </div>
      </div>
    </footer>
  )
}

export default function HomePage() {
  const featured = getFeaturedVehicles()
  const crafter = featured.find((v) => v.slug === "vw-crafter-camper")
  const carsOnly = featured.filter((v) => v.slug !== "vw-crafter-camper")

  return (
    <main style={{ minHeight: "100vh", background: "#07070a", color: "rgba(255, 255, 255, 0.92)", position: "relative" }}>
      <Header />

      {/* Orbs & Grid */}
      <div style={{ pointerEvents: "none", position: "fixed", inset: 0, zIndex: -10, overflow: "hidden" }}>
        <div style={{ position: "absolute", width: "640px", height: "640px", left: "-224px", top: "-224px", borderRadius: "9999px", background: "rgba(220, 38, 38, 0.22)", filter: "blur(90px)" }} />
        <div style={{ position: "absolute", width: "560px", height: "560px", right: "-256px", top: "10px", borderRadius: "9999px", background: "rgba(244, 63, 94, 0.16)", filter: "blur(90px)" }} />
        <div style={{ position: "absolute", width: "720px", height: "720px", left: "96px", bottom: "-288px", borderRadius: "9999px", background: "rgba(249, 115, 22, 0.12)", filter: "blur(90px)" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.28, backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
      </div>

        {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", paddingTop: "112px", paddingBottom: "56px", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Background Image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src="/images/cars/m4-cabrio/hero.jpg"
            alt="BMW M4 Cabrio"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />

          {/* Overlays */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.10), rgba(0,0,0,0.35), #07070a)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 20% 10%, rgba(220, 38, 38, 0.12), transparent 55%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "55%",
              background:
                "linear-gradient(to top, #07070a, rgba(7,7,10,0.50), transparent)",
            }}
          />
        </div>
        {/* Content */}
        <div style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 16px", position: "relative", zIndex: 1, width: "100%", textAlign: "center" }}>
          <div style={{ maxWidth: "768px", margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "9999px", border: "1px solid rgba(255, 255, 255, 0.10)", background: "rgba(0, 0, 0, 0.35)", padding: "8px 16px", fontSize: "14px", color: "rgba(255, 255, 255, 0.75)", backdropFilter: "blur(12px)" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444" }} />
              ZB-Rental.de • NRW
            </div>

            <h1 style={{ marginTop: "24px", fontSize: "48px", fontWeight: "700", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Sportwagen & Camper mieten in NRW – <span style={{ background: "linear-gradient(90deg, #dc2626 0%, #f43f5e 45%, #f97316 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Premium</span> Look, schnelle Anfrage.
            </h1>

            <p style={{ marginTop: "20px", fontSize: "18px", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.6 }}>
              Exklusive Fahrzeuge, klare Kommunikation, schnelle Rückmeldung. Du stöberst – wir machen den Rest.
            </p>

            <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px" }}>
              <Link href="/fahrzeuge" style={{ padding: "14px 28px", fontSize: "16px", fontWeight: "600", background: "#dc2626", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", textDecoration: "none", display: "inline-block", transition: "all 200ms ease" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#b91c1c"; e.currentTarget.style.transform = "translateY(-2px)" }} onMouseLeave={(e) => { e.currentTarget.style.background = "#dc2626"; e.currentTarget.style.transform = "translateY(0)" }}>
                Fahrzeuge entdecken
              </Link>
              <Link href="/anfrage" style={{ padding: "14px 28px", fontSize: "16px", fontWeight: "600", background: "rgba(255, 255, 255, 0.08)", color: "white", border: "1px solid rgba(255, 255, 255, 0.18)", borderRadius: "8px", cursor: "pointer", textDecoration: "none", display: "inline-block", transition: "all 200ms ease" }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)"; e.currentTarget.style.transform = "translateY(-2px)" }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)"; e.currentTarget.style.transform = "translateY(0)" }}>
                Schnellanfrage
              </Link>
            </div>

            {/* Search Panel */}
            <div style={{ marginTop: "48px", maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", background: "rgba(0, 0, 0, 0.60)", border: "1px solid rgba(255, 255, 255, 0.16)", backdropFilter: "blur(24px)", borderRadius: "28px", padding: "24px", boxShadow: "0 20px 60px rgba(0, 0, 0, 0.60)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: "14px", alignItems: "center" }}>
                <div style={{ background: "rgba(255, 255, 255, 0.07)", border: "1px solid rgba(255, 255, 255, 0.12)", backdropFilter: "blur(18px)", borderRadius: "22px", padding: "18px" }}>
                  <div style={{ fontSize: "11px", letterSpacing: "0.05em", color: "rgba(255, 255, 255, 0.50)", textTransform: "uppercase" }}>WOHIN</div>
                  <div style={{ marginTop: "6px", fontSize: "15px", fontWeight: "600", color: "rgba(255, 255, 255, 0.95)" }}>Fahrzeug wählen</div>
                  <div style={{ marginTop: "4px", fontSize: "12px", color: "rgba(255, 255, 255, 0.55)" }}>Sportwagen oder Camper</div>
                </div>

                <div style={{ background: "rgba(255, 255, 255, 0.07)", border: "1px solid rgba(255, 255, 255, 0.12)", backdropFilter: "blur(18px)", borderRadius: "22px", padding: "18px" }}>
                  <div style={{ fontSize: "11px", letterSpacing: "0.05em", color: "rgba(255, 255, 255, 0.50)", textTransform: "uppercase" }}>WANN</div>
                  <div style={{ marginTop: "6px", fontSize: "15px", fontWeight: "600", color: "rgba(255, 255, 255, 0.95)" }}>Zeitraum</div>
                  <div style={{ marginTop: "4px", fontSize: "12px", color: "rgba(255, 255, 255, 0.55)" }}>Flexibel buchbar</div>
                </div>

                <div style={{ background: "rgba(255, 255, 255, 0.07)", border: "1px solid rgba(255, 255, 255, 0.12)", backdropFilter: "blur(18px)", borderRadius: "22px", padding: "18px" }}>
                  <div style={{ fontSize: "11px", letterSpacing: "0.05em", color: "rgba(255, 255, 255, 0.50)", textTransform: "uppercase" }}>WO</div>
                  <div style={{ marginTop: "6px", fontSize: "15px", fontWeight: "600", color: "rgba(255, 255, 255, 0.95)" }}>Standort</div>
                  <div style={{ marginTop: "4px", fontSize: "12px", color: "rgba(255, 255, 255, 0.55)" }}>NRW (Köln, Düsseldorf, …)</div>
                </div>

                <Link href="/anfrage" style={{ height: "60px", width: "60px", borderRadius: "16px", background: "#dc2626", color: "white", border: "none", fontSize: "24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 200ms ease", textDecoration: "none" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#b91c1c"; e.currentTarget.style.transform = "translateY(-2px)" }} onMouseLeave={(e) => { e.currentTarget.style.background = "#dc2626"; e.currentTarget.style.transform = "translateY(0)" }}>
                  →
                </Link>
              </div>

              <div style={{ marginTop: "18px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px" }}>
                {LOCATIONS.map((loc) => (
                  <Link key={loc} href={`/fahrzeuge?location=${encodeURIComponent(loc)}`} style={{ display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "9999px", border: "1px solid rgba(255, 255, 255, 0.12)", background: "rgba(255, 255, 255, 0.06)", padding: "8px 14px", fontSize: "13px", color: "rgba(255, 255, 255, 0.78)", textDecoration: "none", transition: "all 200ms ease" }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)"; e.currentTarget.style.color = "rgba(255, 255, 255, 1)" }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)"; e.currentTarget.style.color = "rgba(255, 255, 255, 0.78)" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#dc2626" }} />
                    {loc}
                  </Link>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "28px", fontSize: "12px", color: "rgba(255, 255, 255, 0.55)" }}>
              Tipp: Klick auf ein Fahrzeug → Details ansehen → Anfrage senden.
            </div>
          </div>
        </div>
      </section>


      {/* FEATURED */}
      <section style={{ padding: "64px 16px" }}>
        <div style={{ maxWidth: "1536px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "40px" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "9999px", border: "1px solid rgba(255, 255, 255, 0.10)", background: "rgba(255, 255, 255, 0.05)", padding: "8px 16px", fontSize: "14px", color: "rgba(255, 255, 255, 0.70)" }}>Highlights</div>
              <h2 style={{ marginTop: "16px", fontSize: "36px", fontWeight: "600" }}>
                Entdecke unsere <span style={{ background: "linear-gradient(90deg, #dc2626 0%, #f43f5e 45%, #f97316 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Top-Fahrzeuge</span>
              </h2>
              <p style={{ marginTop: "8px", fontSize: "16px", color: "rgba(255, 255, 255, 0.60)" }}>Horizontal scrollen – wie ein Premium-Katalog.</p>
            </div>
            <Link href="/fahrzeuge" style={{ padding: "12px 24px", fontSize: "16px", fontWeight: "500", background: "rgba(255, 255, 255, 0.05)", color: "white", border: "1px solid rgba(255, 255, 255, 0.15)", borderRadius: "8px", cursor: "pointer", textDecoration: "none", display: "inline-block", transition: "all 200ms ease" }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.10)"} onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"}>
              Alle Fahrzeuge
            </Link>
          </div>

          <div style={{ overflowX: "auto", paddingBottom: "16px", scrollBehavior: "smooth" }}>
            <div style={{ display: "flex", gap: "24px", minWidth: "min-content" }}>
              {carsOnly.map((v) => (
                <Link key={v.slug} href={`/fahrzeuge/\${v.slug}`} style={{ width: "340px", flexShrink: 0, background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.10)", backdropFilter: "blur(18px)", borderRadius: "22px", overflow: "hidden", transition: "all 220ms ease", textDecoration: "none", display: "block" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "rgba(255, 255, 255, 0.085)"; e.currentTarget.style.borderColor = "rgba(220, 38, 38, 0.35)" }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)"; e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.10)" }}>
                  <div style={{ position: "relative", height: "224px", overflow: "hidden" }}>
                    <img src={v.image} alt={v.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 500ms ease" }} onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.06)"} onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.15), transparent)" }} />
                    <div style={{ position: "absolute", left: "16px", top: "16px", borderRadius: "9999px", border: "1px solid rgba(255, 255, 255, 0.10)", background: "rgba(0, 0, 0, 0.45)", padding: "6px 12px", fontSize: "12px", color: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(12px)" }}>
                      {v.priceFrom}
                    </div>
                  </div>

                  <div style={{ padding: "20px" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: "600" }}>{v.name}</h3>

                    <div style={{ marginTop: "8px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {v.tags.slice(0, 3).map((t) => (
                        <span key={t} style={{ borderRadius: "9999px", border: "1px solid rgba(255, 255, 255, 0.10)", background: "rgba(0, 0, 0, 0.35)", padding: "6px 12px", fontSize: "12px", color: "rgba(255, 255, 255, 0.70)" }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <p style={{ marginTop: "12px", fontSize: "14px", color: "rgba(255, 255, 255, 0.60)", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {v.description}
                    </p>

                    <div style={{ marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.70)" }}>Details ansehen</span>
                      <span style={{ color: "rgba(255, 255, 255, 0.80)", transition: "color 200ms ease" }}>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CRAFTER */}
      {crafter && (
        <section style={{ padding: "64px 16px" }}>
          <div style={{ maxWidth: "1536px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "9999px", border: "1px solid rgba(255, 255, 255, 0.10)", background: "rgba(255, 255, 255, 0.05)", padding: "8px 16px", fontSize: "14px", color: "rgba(255, 255, 255, 0.70)", width: "fit-content" }}>
                Wohnmobil
              </div>

              <div style={{ background: "rgba(0, 0, 0, 0.55)", border: "1px solid rgba(255, 255, 255, 0.14)", backdropFilter: "blur(22px)", borderRadius: "28px", padding: "32px", boxShadow: "0 18px 55px rgba(0, 0, 0, 0.55)" }}>
                <h2 style={{ fontSize: "32px", fontWeight: "600", marginBottom: "12px" }}>{crafter.name}</h2>
                <p style={{ color: "rgba(255, 255, 255, 0.60)", marginBottom: "24px" }}>{crafter.description}</p>

                <ul style={{ listStyle: "none", marginBottom: "28px" }}>
                  <li style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.75)", marginBottom: "8px" }}>✓ Vollständig ausgestattet</li>
                  <li style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.75)", marginBottom: "8px" }}>✓ Flexible Buchung ab 1 Nacht</li>
                  <li style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.75)" }}>✓ Kostenlose Beratung</li>
                </ul>

                <div style={{ display: "flex", gap: "12px", flexDirection: "column" }}>
                  <Link href={`/fahrzeuge/\${crafter.slug}`} style={{ padding: "12px 24px", fontSize: "16px", fontWeight: "500", background: "#dc2626", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", textDecoration: "none", display: "inline-block", transition: "all 200ms ease", textAlign: "center" }} onMouseEnter={(e) => e.currentTarget.style.background = "#b91c1c"} onMouseLeave={(e) => e.currentTarget.style.background = "#dc2626"}>
                    Crafter ansehen
                  </Link>
                  <Link href="/anfrage" style={{ padding: "12px 24px", fontSize: "16px", fontWeight: "500", background: "rgba(255, 255, 255, 0.05)", color: "white", border: "1px solid rgba(255, 255, 255, 0.15)", borderRadius: "8px", cursor: "pointer", textDecoration: "none", display: "inline-block", transition: "all 200ms ease", textAlign: "center" }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.10)"} onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"}>
                    Verfügbarkeit anfragen
                  </Link>
                </div>
              </div>

              <div style={{ position: "relative", overflow: "hidden", borderRadius: "24px", border: "1px solid rgba(255, 255, 255, 0.10)", background: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(12px)" }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.10), transparent)" }} />
                <img src={crafter.image} alt={crafter.name} style={{ height: "420px", width: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* STATS */}
      <section style={{ borderTop: "1px solid rgba(255, 255, 255, 0.10)", borderBottom: "1px solid rgba(255, 255, 255, 0.10)", background: "rgba(255, 255, 255, 0.05)", padding: "56px 16px" }}>
        <div style={{ maxWidth: "1536px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px" }}>
          {[{ v: "Premium", l: "Fahrzeuge" }, { v: "NRW", l: "Standorte" }, { v: "24/7", l: "Erreichbarkeit" }, { v: "Schnell", l: "Rückmeldung" }].map((x) => (
            <div key={x.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "36px", fontWeight: "600", color: "white" }}>{x.v}</div>
              <div style={{ marginTop: "8px", fontSize: "14px", color: "rgba(255, 255, 255, 0.60)" }}>{x.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABLAUF */}
      <section id="ablauf" style={{ padding: "64px 16px" }}>
        <div style={{ maxWidth: "1536px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "9999px", border: "1px solid rgba(255, 255, 255, 0.10)", background: "rgba(255, 255, 255, 0.05)", padding: "8px 16px", fontSize: "14px", color: "rgba(255, 255, 255, 0.70)" }}>
              Prozess
            </div>
            <h2 style={{ marginTop: "16px", fontSize: "36px", fontWeight: "600" }}>So funktioniert's</h2>
            <p style={{ marginTop: "8px", fontSize: "16px", color: "rgba(255, 255, 255, 0.60)" }}>Einfach, schnell, unkompliziert.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
            {[{ n: "1", t: "Fahrzeug wählen", d: "Angebote ansehen & Favorit auswählen." }, { n: "2", t: "Anfrage senden", d: "In 1 Minute – ohne Stress." }, { n: "3", t: "Bestätigung", d: "Wir melden uns schnell mit Verfügbarkeit & Preis." }, { n: "4", t: "Abholen & fahren", d: "Startklar – genießen." }].map((s) => (
              <div key={s.n} style={{ background: "rgba(0, 0, 0, 0.55)", border: "1px solid rgba(255, 255, 255, 0.14)", backdropFilter: "blur(22px)", borderRadius: "28px", padding: "24px", boxShadow: "0 18px 55px rgba(0, 0, 0, 0.55)" }}>
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "50%", background: "#dc2626", color: "white", fontWeight: "600" }}>
                  {s.n}
                </div>
                <h3 style={{ marginTop: "16px", fontSize: "18px", fontWeight: "600", color: "white" }}>{s.t}</h3>
                <p style={{ marginTop: "8px", fontSize: "14px", color: "rgba(255, 255, 255, 0.60)" }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "64px 16px" }}>
        <div style={{ maxWidth: "1536px", margin: "0 auto" }}>
          <div style={{ maxWidth: "768px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "9999px", border: "1px solid rgba(255, 255, 255, 0.10)", background: "rgba(255, 255, 255, 0.05)", padding: "8px 16px", fontSize: "14px", color: "rgba(255, 255, 255, 0.70)" }}>
                FAQ
              </div>
              <h2 style={{ marginTop: "16px", fontSize: "36px", fontWeight: "600" }}>Häufige Fragen</h2>
              <p style={{ marginTop: "8px", fontSize: "16px", color: "rgba(255, 255, 255, 0.60)" }}>Kurz & klar – wenn was offen ist, schreib uns.</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { q: "Wie läuft die Anfrage ab?", a: "Du sendest eine Anfrage, wir prüfen Verfügbarkeit und melden uns schnell mit Preis & Bestätigung." },
                { q: "Gibt es eine Kaution?", a: "Ja, je nach Fahrzeug. Details bekommst du transparent vor der Bestätigung." },
                { q: "Welche Unterlagen brauche ich?", a: "Gültiger Führerschein und Ausweis. Weitere Infos je nach Fahrzeugklasse." },
                { q: "Kann ich stornieren?", a: "Je nach Zeitpunkt ist eine kostenfreie Stornierung möglich. Wir klären das fair im Angebot." },
                { q: "Wo findet die Übergabe statt?", a: "In NRW – je nach Fahrzeug und Absprache (z.B. Köln, Düsseldorf, Monheim)." },
              ].map((f, idx) => (
                <details key={idx} style={{ background: "rgba(0, 0, 0, 0.55)", border: "1px solid rgba(255, 255, 255, 0.14)", backdropFilter: "blur(22px)", borderRadius: "28px", overflow: "hidden" }}>
                  <summary style={{ width: "100%", padding: "20px", background: "none", border: "none", color: "white", fontWeight: "600", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "16px", transition: "all 200ms ease" }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"} onMouseLeave={(e) => e.currentTarget.style.background = "none"}>
                    {f.q}
                    <span style={{ transition: "transform 200ms ease" }}>▼</span>
                  </summary>
                  <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.10)", padding: "12px 20px 20px", fontSize: "14px", color: "rgba(255, 255, 255, 0.60)" }}>
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 16px" }}>
        <div style={{ maxWidth: "1536px", margin: "0 auto" }}>
          <div style={{ background: "rgba(0, 0, 0, 0.55)", border: "1px solid rgba(255, 255, 255, 0.14)", backdropFilter: "blur(22px)", borderRadius: "28px", padding: "56px", boxShadow: "0 18px 55px rgba(0, 0, 0, 0.55)", position: "relative", overflow: "hidden", textAlign: "center" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, rgba(220, 38, 38, 0.18), transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ fontSize: "36px", fontWeight: "600" }}>Bereit für deine Anfrage?</h2>
              <p style={{ marginTop: "12px", fontSize: "16px", color: "rgba(255, 255, 255, 0.60)" }}>
                Sag uns kurz wann & welches Fahrzeug – wir melden uns schnell zurück.
              </p>
              <div style={{ marginTop: "28px", display: "flex", flexDirection: "row", justifyContent: "center", gap: "12px" }}>
                <Link href="/anfrage" style={{ padding: "12px 24px", fontSize: "16px", fontWeight: "500", background: "#dc2626", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", textDecoration: "none", display: "inline-block", transition: "all 200ms ease" }} onMouseEnter={(e) => e.currentTarget.style.background = "#b91c1c"} onMouseLeave={(e) => e.currentTarget.style.background = "#dc2626"}>
                  Jetzt Anfrage stellen
                </Link>
                <Link href="/fahrzeuge" style={{ padding: "12px 24px", fontSize: "16px", fontWeight: "500", background: "rgba(255, 255, 255, 0.05)", color: "white", border: "1px solid rgba(255, 255, 255, 0.15)", borderRadius: "8px", cursor: "pointer", textDecoration: "none", display: "inline-block", transition: "all 200ms ease" }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.10)"} onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"}>
                  Fahrzeuge ansehen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" style={{ padding: "64px 16px" }}>
        <div style={{ maxWidth: "1536px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div style={{ background: "rgba(0, 0, 0, 0.55)", border: "1px solid rgba(255, 255, 255, 0.14)", backdropFilter: "blur(22px)", borderRadius: "28px", padding: "32px", boxShadow: "0 18px 55px rgba(0, 0, 0, 0.55)" }}>
              <h3 style={{ fontSize: "24px", fontWeight: "600" }}>Kontakt</h3>
              <p style={{ marginTop: "8px", fontSize: "14px", color: "rgba(255, 255, 255, 0.60)" }}>Schnellster Weg: WhatsApp/Telefon oder E-Mail.</p>

              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "16px", fontSize: "14px" }}>
                <div>
                  <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.50)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Telefon</div>
                  <div style={{ marginTop: "4px", color: "white" }}>
                    <a href="tel:+491749994777" style={{ color: "white", transition: "color 200ms ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "#f43f5e"} onMouseLeave={(e) => e.currentTarget.style.color = "white"}>
                      +49 174 999 4777
                    </a>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.50)", textTransform: "uppercase", letterSpacing: "0.05em" }}>E-Mail</div>
                  <div style={{ marginTop: "4px", color: "white" }}>
                    <a href="mailto:Info@ZB-Rental.de" style={{ color: "white", transition: "color 200ms ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "#f43f5e"} onMouseLeave={(e) => e.currentTarget.style.color = "white"}>
                      Info@ZB-Rental.de
                    </a>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.50)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Adresse</div>
                  <div style={{ marginTop: "4px", color: "white" }}>
                    CarWorlds GmbH, Rheinpromenade 11, 40789 Monheim am Rhein
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: "rgba(0, 0, 0, 0.55)", border: "1px solid rgba(255, 255, 255, 0.14)", backdropFilter: "blur(22px)", borderRadius: "28px", padding: "32px", boxShadow: "0 18px 55px rgba(0, 0, 0, 0.55)" }}>
              <h3 style={{ fontSize: "24px", fontWeight: "600" }}>Schnellanfrage</h3>
              <p style={{ marginTop: "8px", fontSize: "14px", color: "rgba(255, 255, 255, 0.60)" }}>Für echte Anfragen nutze bitte die Anfrage-Seite.</p>
              <Link href="/anfrage" style={{ marginTop: "24px", width: "100%", padding: "12px 24px", background: "#dc2626", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: "500", cursor: "pointer", textDecoration: "none", display: "block", textAlign: "center", transition: "all 200ms ease" }} onMouseEnter={(e) => e.currentTarget.style.background = "#b91c1c"} onMouseLeave={(e) => e.currentTarget.style.background = "#dc2626"}>
                Zur Anfrage →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterInline />
    {/* WhatsApp Sticky Button */}
<a
  href="https://wa.me/491749994777?text=Hallo%20ZB-Rental%2C%20ich%20interessiere%20mich%20für%20eine%20Fahrzeugmiete"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    bottom: "24px",
    right: "24px",
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    background: "#25D366",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)",
    zIndex: 999,
    transition: "all 200ms ease",
    textDecoration: "none",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.1)";
    e.currentTarget.style.boxShadow = "0 6px 20px rgba(37, 211, 102, 0.6)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 211, 102, 0.4)";
  }}
  title="Schreib uns auf WhatsApp"
>
  💬
</a>
</main>
  )
}


