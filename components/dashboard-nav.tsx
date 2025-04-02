// Dashboard navigation component
// Provides navigation for the dashboard area
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu"
import { LayoutDashboard, FileText, BarChart, Settings, Users, Bell, LogOut, Menu, X } from "lucide-react"
import { useState } from "react"

export default function DashboardNav() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "My Blogs",
      href: "/dashboard/blogs",
      icon: FileText,
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: BarChart,
    },
    {
      title: "Team",
      href: "/dashboard/team",
      icon: Users,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  return (
    <header className="border-b border-white/10 bg-black/40 backdrop-blur-sm sticky top-0 z-30">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold gradient-text mr-8">
              Quarkk
            </Link>

            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center text-sm font-medium transition-colors ${
                    pathname === item.href ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative text-white/60 hover:text-white">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-cyan-400"></span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-black/90 border-white/10">
                <DropdownMenuItem className="text-white/80 focus:text-white focus:bg-white/10">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/80 focus:text-white focus:bg-white/10">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/80 focus:text-white focus:bg-white/10">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white/60 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-sm">
          <nav className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center p-2 rounded-md ${
                  pathname === item.href ? "bg-white/10 text-white" : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

