'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const shellStyle: React.CSSProperties = {
    position: "fixed",
    top: scrolled ? "16px" : "0",
    left: scrolled ? "16px" : "0",
    right: scrolled ? "16px" : "0",
    zIndex: 50,
    display: "flex",
    justifyContent: "center",
    pointerEvents: scrolled ? "auto" : "none",
    transition: "all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  }

  const bubbleStyle: React.CSSProperties = {
    pointerEvents: "auto",
    width: "100%",
    borderRadius: scrolled ? "9999px" : "0",
    background: scrolled ? "rgba(0,0,0,0.82)" : "transparent",
    border: scrolled ? "1px solid rgba(255,255,255,0.16)" : "none",
    backdropFilter: scrolled ? "blur(24px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
    boxShadow: scrolled ? "0 20px 60px rgba(0,0,0,0.60)" : "none",
    opacity: scrolled ? 1 : 0,
    transform: scrolled ? "scale(1)" : "scale(0.98)",
    transition: "all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  }

  const innerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    padding: scrolled ? "14px 24px" : "16px 24px",
    transition: "padding 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  }

  const navStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "28px",
  }

  const linkStyle: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: 500,
    color: "rgba(255,255,255,0.85)",
    textDecoration: "none",
    transition: "color 200ms ease",
    whiteSpace: "nowrap",
  }

  const ctaStyle: React.CSSProperties = {
    padding: "11px 22px",
    fontSize: "14px",
    fontWeight: 700,
    background: "#dc2626",
    color: "white",
    borderRadius: "9999px",
    textDecoration: "none",
    transition: "all 200ms ease",
    whiteSpace: "nowrap",
    border: "none",
    cursor: "pointer",
  }

  return (
    <header style={shellStyle}>
      <div style={bubbleStyle}>
        <div style={innerStyle}>
          {/* Left: Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              color: "white",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              fontSize: 16,
              transition: "opacity 200ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <span
              style={{
                width: 36,
                height: 36,
                borderRadius: 12,
                background: "linear-gradient(135deg, #dc2626 0%, #f43f5e 100%)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                fontWeight: 900,
              }}
            >
              Z
            </span>
            <span>ZB Rental</span>
          </Link>

          {/* Middle: Nav */}
          <nav style={navStyle}>
            <Link
              href="/fahrzeuge"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
            >
              Fahrzeuge
            </Link>
            <Link
              href="/#ablauf"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
            >
              Ablauf
            </Link>
            <Link
              href="/#faq"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
            >
              FAQ
            </Link>
            <Link
              href="/#kontakt"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
            >
              Kontakt
            </Link>
          </nav>

          {/* Right: CTA */}
          <Link
            href="/anfrage"
            style={ctaStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#b91c1c"
              e.currentTarget.style.transform = "translateY(-2px)"
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(220, 38, 38, 0.35)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#dc2626"
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            Anfrage senden
          </Link>
        </div>
      </div>
    </header>
  )
}
