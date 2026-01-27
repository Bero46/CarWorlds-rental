"use client"

import type { ReactNode } from "react"

import * as Sidebar from "@/components/ui/sidebar"
import * as Prefs from "@/stores/preferences/preferences-provider"
import { AppSidebar } from "./_components/sidebar/app-sidebar"

const SidebarProvider =
  // named export
  (Sidebar as any).SidebarProvider ??
  // default export
  (Sidebar as any).default

const PreferencesStoreProvider =
  // named export
  (Prefs as any).PreferencesStoreProvider ??
  // default export
  (Prefs as any).default

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <PreferencesStoreProvider>
        <div className="min-h-screen">
          <div className="flex">
            <AppSidebar />
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </PreferencesStoreProvider>
    </SidebarProvider>
  )
}
