// Notifications page component
// Shows user notifications like comments, upvotes, and user follows
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, MessageSquare, ThumbsUp, UserPlus, Code } from "lucide-react"
import Link from "next/link"

// This would be replaced with actual data fetching in the real implementation
const mockNotifications = [
  {
    id: "1",
    type: "comment",
    message: "Sarah Johnson commented on your Weather Dashboard project",
    timestamp: "2 hours ago",
    read: false,
    link: "/projects/1",
  },
  {
    id: "2",
    type: "upvote",
    message: "Your Blog Platform project received 5 new upvotes",
    timestamp: "1 day ago",
    read: true,
    link: "/projects/2",
  },
  {
    id: "3",
    type: "follow",
    message: "Mike Wilson started following you",
    timestamp: "2 days ago",
    read: true,
    link: "/profile/user321",
  },
  {
    id: "4",
    type: "project",
    message: "Jane Doe started a new project: E-commerce Store",
    timestamp: "3 days ago",
    read: true,
    link: "/projects/3",
  },
]

const getNotificationIcon = (type: string) => {
  switch (type) {
    case "comment":
      return <MessageSquare className="h-5 w-5" />
    case "upvote":
      return <ThumbsUp className="h-5 w-5" />
    case "follow":
      return <UserPlus className="h-5 w-5" />
    case "project":
      return />
    case "follow":
      return <UserPlus className="h-5 w-5" />
    case "project":
      return <Code className="h-5 w-5" />
    default:
      return <Bell className="h-5 w-5" />
  }
}

export default function NotificationsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
        <Button variant="outline" size="sm">
          Mark all as read
        </Button>
      </div>

      <div className="space-y-4">
        {mockNotifications.map((notification) => (
          <Card key={notification.id} className={notification.read ? "" : "border-primary"}>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className={`rounded-full p-2 ${notification.read ? "bg-muted" : "bg-primary/10"}`}>
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className={`${notification.read ? "" : "font-medium"}`}>{notification.message}</p>
                    <span className="text-xs text-muted-foreground">{notification.timestamp}</span>
                  </div>
                  <div className="mt-2">
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link href={notification.link}>View</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

