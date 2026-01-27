"use client"

import { useEffect, useRef, useState } from "react"

const PRESETS = ["1", "2", "3", "4"] as const
type Preset = (typeof PRESETS)[number]

export function BackgroundProvider({ children }: { children: React.ReactNode }) {
  const [preset, setPreset] = useState<Preset>("1")
  const startX = useRef<number | null>(null)

  useEffect(() => {
    const saved = (localStorage.getItem("bg_preset") as Preset | null) ?? "1"
    setPreset(saved)
    document.documentElement.dataset.bg = saved
  }, [])

  const applyPreset = (next: Preset) => {
    setPreset(next)
    localStorage.setItem("bg_preset", next)
    document.documentElement.dataset.bg = next
  }

  const nextPreset = (dir: 1 | -1) => {
    const idx = PRESETS.indexOf(preset)
    const next = PRESETS[(idx + dir + PRESETS.length) % PRESETS.length]
    applyPreset(next)
  }

  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      startX.current = e.touches[0]?.clientX ?? null
    }
    const onTouchEnd = (e: TouchEvent) => {
      if (startX.current == null) return
      const endX = e.changedTouches[0]?.clientX ?? startX.current
      const dx = endX - startX.current
      startX.current = null
      if (Math.abs(dx) < 60) return
      nextPreset(dx < 0 ? 1 : -1)
    }

    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchend", onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchend", onTouchEnd)
    }
  }, [preset])

  return <>{children}</>
}
