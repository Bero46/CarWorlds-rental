import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const vehicles = [
  {
    name: "BMW M4 Competition",
    slug: "bmw-m4-competition",
    priceFrom: "ab 249€/Tag",
    tags: ["Sport", "Automatik", "Premium"],
  },
  {
    name: "Mercedes C63 AMG",
    slug: "mercedes-c63-amg",
    priceFrom: "ab 229€/Tag",
    tags: ["Sport", "Automatik"],
  },
  {
    name: "Audi RS3",
    slug: "audi-rs3",
    priceFrom: "ab 199€/Tag",
    tags: ["Sport", "Quattro"],
  },
]

export default function SearchPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Fahrzeuge suchen</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Wähle Zeitraum & Ort – danach siehst du passende Fahrzeuge und kannst eine Anfrage stellen.
      </p>

      {/* Search bar (wie UnterkunftNRW: simple, prominent) */}
      <Card className="mt-6 p-4">
        <div className="grid gap-3 md:grid-cols-4">
          <div>
            <p className="mb-2 text-xs font-medium text-muted-foreground">Ort</p>
            <Input placeholder="z.B. Düsseldorf" />
          </div>
          <div>
            <p className="mb-2 text-xs font-medium text-muted-foreground">Von</p>
            <Input placeholder="TT.MM.JJJJ" />
          </div>
          <div>
            <p className="mb-2 text-xs font-medium text-muted-foreground">Bis</p>
            <Input placeholder="TT.MM.JJJJ" />
          </div>
          <div className="flex items-end">
            <Button className="w-full">Suche</Button>
          </div>
        </div>
      </Card>

      {/* Results */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((v) => (
          <Link key={v.slug} href={`/fahrzeuge/${v.slug}`}>
            <Card className="p-5 transition hover:shadow-md">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium">{v.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {v.priceFrom}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">→</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {v.tags.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="mt-4">
                <Button variant="outline" className="w-full">
                  Details ansehen
                </Button>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  )
}
