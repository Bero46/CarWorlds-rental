"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, Tooltip } from "recharts"

import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useIsMobile } from "@/hooks/use-mobile"

type Row = { date: string; desktop: number; mobile: number }

const chartData: Row[] = [
  { date: "2024-06-24", desktop: 132, mobile: 180 },
  { date: "2024-06-25", desktop: 141, mobile: 190 },
  { date: "2024-06-26", desktop: 434, mobile: 380 },
  { date: "2024-06-27", desktop: 448, mobile: 490 },
  { date: "2024-06-28", desktop: 149, mobile: 200 },
  { date: "2024-06-29", desktop: 103, mobile: 160 },
  { date: "2024-06-30", desktop: 446, mobile: 400 },
]

export function ChartAreaInteractive() {
  const isMobile = Boolean(useIsMobile())
  const [timeRange, setTimeRange] = React.useState<"90d" | "30d" | "7d">("90d")

  React.useEffect(() => {
    if (isMobile) setTimeRange("7d")
  }, [isMobile])

  const filteredData = React.useMemo<Row[]>(() => {
    const base = Array.isArray(chartData) ? chartData : []
    const referenceDate = new Date("2024-06-30")
    const daysToSubtract = timeRange === "30d" ? 30 : timeRange === "7d" ? 7 : 90
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)

    return base.filter((item) => new Date(item.date) >= startDate)
  }, [timeRange])

  const safeData: Row[] = Array.isArray(filteredData) ? filteredData : []

  if (safeData.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Übersicht</CardTitle>
          <CardDescription>Keine Daten verfügbar.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Sobald Buchungsanfragen reinkommen, kannst du hier Trends sehen.
        </CardContent>
      </Card>
    )
  }

  const defaultIndex = isMobile ? -1 : Math.min(2, safeData.length - 1)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard (Demo)</CardTitle>
        <CardDescription>Diese Grafik ist nur Platzhalter.</CardDescription>

        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={(v) => setTimeRange((v as "90d" | "30d" | "7d") || "90d")}
            variant="outline"
            className="hidden @[767px]/card:flex *:data-[slot=toggle-group-item]:px-4!"
          >
            <ToggleGroupItem value="90d">90d</ToggleGroupItem>
            <ToggleGroupItem value="30d">30d</ToggleGroupItem>
            <ToggleGroupItem value="7d">7d</ToggleGroupItem>
          </ToggleGroup>

          <Select value={timeRange} onValueChange={(v) => setTimeRange((v as "90d" | "30d" | "7d") || "90d")}>
            <SelectTrigger className="w-40" size="sm" aria-label="Select a value">
              <SelectValue placeholder="90d" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                90d
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                30d
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                7d
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>

      <CardContent className="pt-4">
        <div className="h-[260px] w-full">
          <AreaChart width={800} height={260} data={safeData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} strokeOpacity={0.2} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => new Date(value).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" })}
            />

            <Tooltip />

            <Area dataKey="mobile" type="monotone" fill="url(#fillMobile)" stroke="#22c55e" stackId="a" />
            <Area dataKey="desktop" type="monotone" fill="url(#fillDesktop)" stroke="#3b82f6" stackId="a" />
          </AreaChart>
        </div>

        <p className="mt-3 text-xs text-muted-foreground">
          Hinweis: Wenn du willst, ersetzen wir dieses Demo-Dashboard später durch echte Stats aus Supabase (Anfragen pro Tag).
        </p>
      </CardContent>
    </Card>
  )
}
