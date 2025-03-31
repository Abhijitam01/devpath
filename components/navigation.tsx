// Navigation component
// Includes the main navigation sidebar and top bar
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "../components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu"
import { ModeToggle } from "../components/mode-toggle"
import { Home, Search, PlusCircle, BookOpen, Bell, Settings, LogOut, User } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()
  const { isMobile } = useSidebar()

  // Mock authentication state - would be replaced with actual auth check
  const isAuthenticated = true

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home,
      requiresAuth: true,
    },
    {
      title: "Explore",
      href: "/explore",
      icon: Search,
      requiresAuth: false,
    },
    {
      title: "Create Project",
      href: "/projects/new",
      icon: PlusCircle,
      requiresAuth: true,
    },
    {
      title: "My Projects",
      href: "/projects",
      icon: BookOpen,
      requiresAuth: true,
    },
    {
      title: "Notifications",
      href: "/notifications",
      icon: Bell,
      requiresAuth: true,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
      requiresAuth: true,
    },
  ]

  const filteredNavItems = isAuthenticated ? navItems : navItems.filter((item) => !item.requiresAuth)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <div className="flex items-center gap-2">
          {isMobile && <SidebarTrigger />}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl">DevPath</span>
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/auth/signin">Sign in</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/auth/signup">Sign up</Link>
              </Button>
            </div>
          )}
        </div>
      </header>

      <Sidebar>
        <SidebarContent>
          <SidebarMenu>
            {filteredNavItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        {isAuthenticated && (
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button>
                    <LogOut />
                    <span>Log out</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        )}
      </Sidebar>
    </>
  )
}

