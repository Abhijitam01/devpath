// Project comments component
// Displays and allows adding comments to a project
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { formatDistanceToNow } from "date-fns"

interface ProjectCommentsProps {
  projectId: string
}

// Mock comments - would be fetched from API in real implementation
const mockComments = [
  {
    id: "1",
    content: "This is a great project! I especially like how you structured the API integration step.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    user: {
      id: "user123",
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "2",
    content:
      "I struggled with the same weather API integration. Your journal notes really helped me understand how to handle the API key properly.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    user: {
      id: "user456",
      name: "Mike Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
]

export default function ProjectComments({ projectId }: ProjectCommentsProps) {
  const [comments, setComments] = useState(mockComments)
  const [newComment, setNewComment] = useState("")

  const addComment = () => {
    if (!newComment.trim()) return

    const comment = {
      id: `comment-${Date.now()}`,
      content: newComment,
      createdAt: new Date().toISOString(),
      user: {
        id: "current-user",
        name: "John Doe",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    }

    setComments([comment, ...comments])
    setNewComment("")
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Your avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="text-sm font-medium">Add a comment</div>
          </div>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Share your thoughts, feedback, or questions about this project..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={4}
          />
        </CardContent>
        <CardFooter>
          <Button onClick={addComment} disabled={!newComment.trim()}>
            Post Comment
          </Button>
        </CardFooter>
      </Card>

      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
                    <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium">{comment.user.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                      </div>
                    </div>
                    <p className="text-sm">{comment.content}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            No comments yet. Be the first to share your thoughts!
          </div>
        )}
      </div>
    </div>
  )
}

