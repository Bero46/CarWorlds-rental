export type Vehicle = {
  name: string
  slug: string
  priceFrom: string
  image: string
  tags: string[]
  specs: { label: string; value: string }[]
  description: string
  isFeatured?: boolean
}

export const vehicles: Vehicle[] = [
  {
    name: "BMW M4 Competition Cabrio",
    slug: "bmw-m4-competition-cabrio",
    priceFrom: "ab 249€/Tag",
    image: "/images/cars/m4-cabrio/hero.jpg",
    tags: ["Sport", "Automatik", "Premium"],
    specs: [
      { label: "Getriebe", value: "Automatik" },
      { label: "Sitze", value: "4" },
      { label: "Kraftstoff", value: "Benzin" },
      { label: "Standort", value: "NRW" },
    ],
    description: "Premium Performance mit maximalem Komfort. Ideal für Wochenenden, Events oder Business-Fahrten.",
    isFeatured: true,
  },
  {
    name: "Mercedes-AMG C63s Cabrio",
    slug: "mercedes-amg-c63s-cabrio",
    priceFrom: "ab 229€/Tag",
    image: "/images/cars/mercedes-c63-amg/hero.jpg",
    tags: ["Sport", "Automatik", "Premium"],
    specs: [
      { label: "Getriebe", value: "Automatik" },
      { label: "Sitze", value: "4" },
      { label: "Kraftstoff", value: "Benzin" },
      { label: "Standort", value: "NRW" },
    ],
    description: "AMG Feeling pur. Sound, Punch und Cabrio-Feeling – unkompliziert per Anfrage.",
    isFeatured: true,
  },
  {
    name: "Audi RS3",
    slug: "audi-rs3",
    priceFrom: "ab 199€/Tag",
    image: "/images/cars/audi-rs3/hero.jpg",
    tags: ["Sport", "Quattro", "Premium"],
    specs: [
      { label: "Getriebe", value: "Automatik" },
      { label: "Sitze", value: "5" },
      { label: "Kraftstoff", value: "Benzin" },
      { label: "Standort", value: "NRW" },
    ],
    description: "Kompakt, brutal schnell, Allrad. Anfrage senden und wir melden uns mit Bestätigung.",
    isFeatured: true,
  },
  {
    name: "VW Crafter (Camper)",
    slug: "vw-crafter-camper",
    priceFrom: "ab 169€/Tag",
    image: "/images/cars/crafter/hero.jpg",
    tags: ["Camper", "Automatik", "Reise"],
    specs: [
      { label: "Getriebe", value: "Automatik" },
      { label: "Sitze", value: "4" },
      { label: "Kraftstoff", value: "Diesel" },
      { label: "Standort", value: "NRW" },
    ],
    description: "Vollausgestatteter Crafter für Roadtrips. Anfrage senden und wir klären Verfügbarkeit & Details.",
    isFeatured: true,
  },
]

export function getVehicles() {
  return vehicles
}

export function getFeaturedVehicles() {
  return vehicles.filter((v) => v.isFeatured)
}

export function getVehicleBySlug(slug: string) {
  return vehicles.find((v) => v.slug === slug) ?? null
}
