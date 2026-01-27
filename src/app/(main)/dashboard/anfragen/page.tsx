"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type BookingRequest = {
  id: string
  created_at: string
  status: string
  vehicle: string
  city: string
  from_date: string
  to_date: string
  notes: string | null
  name: string
  email: string
  phone: string
}

function StatusBadge({ status }: { status: string }) {
  const base = "text-white"
  if (status === "accepted") {
    return <Badge className={`${base} bg-green-600`}>accepted</Badge>
  }
  if (status === "declined") {
    return <Badge className={`${base} bg-red-600`}>declined</Badge>
  }
  return <Badge variant="secondary">new</Badge>
}

export default function AnfragenPage() {
  const [rows, setRows] = useState<BookingRequest[]>([])
  const [loading, setLoading] = useState(true)

  async function load() {
    setLoading(true)
    const { data, error } = await supabase
      .from("booking_requests")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      alert("Fehler beim Laden: " + error.message)
      setLoading(false)
      return
    }

    setRows((data as BookingRequest[]) ?? [])
    setLoading(false)
  }

  async function setStatus(id: string, status: "accepted" | "declined") {
    const { error } = await supabase
      .from("booking_requests")
      .update({ status })
      .eq("id", id)

    if (error) {
      alert("Fehler beim Update: " + error.message)
      return
    }

    await load()
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Anfragen</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Neue Buchungsanfragen ansehen und annehmen/ablehnen.
          </p>
        </div>
        <Button variant="outline" onClick={load} disabled={loading}>
          Aktualisieren
        </Button>
      </div>

      <div className="mt-6 grid gap-4">
        {loading ? (
          <Card className="p-5">Lade…</Card>
        ) : rows.length === 0 ? (
          <Card className="p-5">Noch keine Anfragen.</Card>
        ) : (
          rows.map((r) => (
            <Card key={r.id} className="p-5">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-medium">{r.name}</p>
                    <StatusBadge status={r.status} />
                    <span className="text-xs text-muted-foreground">
                      {new Date(r.created_at).toLocaleString("de-DE")}
                    </span>
                  </div>

                  <p className="mt-2 text-sm">
                    <span className="font-medium">Fahrzeug:</span> {r.vehicle}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {r.city} • {r.from_date} → {r.to_date}
                  </p>

                  <p className="mt-2 text-sm">
                    <span className="font-medium">Kontakt:</span> {r.email} •{" "}
                    {r.phone}
                  </p>

                  {r.notes ? (
                    <p className="mt-2 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">
                        Notiz:
                      </span>{" "}
                      {r.notes}
                    </p>
                  ) : null}
                </div>

                <div className="flex gap-2 md:flex-col md:items-end">
                  <Button
                    className={
                      r.status === "accepted"
                        ? "bg-green-600 hover:bg-green-700"
                        : ""
                    }
                    variant={r.status === "accepted" ? "default" : "outline"}
                    onClick={() => setStatus(r.id, "accepted")}
                  >
                    Annehmen
                  </Button>

                  <Button
                    className={
                      r.status === "declined"
                        ? "bg-red-600 hover:bg-red-700"
                        : ""
                    }
                    variant={r.status === "declined" ? "default" : "outline"}
                    onClick={() => setStatus(r.id, "declined")}
                  >
                    Ablehnen
                  </Button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </main>
  )
}
