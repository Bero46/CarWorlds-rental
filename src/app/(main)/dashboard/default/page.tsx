import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="p-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Admin-Bereich für ZB-Rental. (Stats bauen wir später aus echten Anfragen.)
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="bg-card/70">
            <CardHeader>
              <CardTitle>Anfragen</CardTitle>
              <CardDescription>Alle Buchungsanfragen ansehen</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/dashboard/anfragen">Zu den Anfragen</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/70">
            <CardHeader>
              <CardTitle>Fahrzeuge</CardTitle>
              <CardDescription>Öffentliche Ansicht / später Flotte verwalten</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-2">
              <Button asChild variant="outline" className="w-full">
                <Link href="/fahrzeuge">Öffentlich</Link>
              </Button>
              <Button asChild variant="secondary" className="w-full">
                <Link href="/anfrage">Anfrage</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/70">
            <CardHeader>
              <CardTitle>Kontakt</CardTitle>
              <CardDescription>WhatsApp / Telefon</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-2">
              <Button asChild variant="outline" className="w-full">
                <a href="tel:+491749994777">Anrufen</a>
              </Button>
              <Button asChild className="w-full">
                <a href="http://wa.me/491749994777">WhatsApp</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card className="bg-card/60">
            <CardHeader>
              <CardTitle>Nächste Schritte</CardTitle>
              <CardDescription>Damit die Website “live-ready” wird</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc space-y-2 pl-5">
                <li>Homepage im UnterkunftNRW-Look finalisieren</li>
                <li>Fahrzeuge Listing + Detail auf eine Datenquelle umstellen</li>
                <li>Anfrage-Formular → Supabase + Resend Emails</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/60">
            <CardHeader>
              <CardTitle>Status</CardTitle>
              <CardDescription>Technik</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc space-y-2 pl-5">
                <li>Dashboard läuft stabil</li>
                <li>Providers ok</li>
                <li>Nächster Fokus: Frontend/Design</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
