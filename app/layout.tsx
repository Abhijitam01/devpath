// Main layout component that wraps all pages
// Includes the SidebarProvider, ThemeProvider, and global navigation
import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Navigation from "@/components/navigation"
import "@/app/globals.css"

export const metadata = {
  title: "DevPath - Escape Tutorial Hell",
  description: "Build, Track, Share—Escape Tutorial Hell",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <Navigation />
            <div className="flex-1 p-8 md:p-8 pt-16">{children}</div>
            <Toaster />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

