// Project card component
// Displays a project with its details, progress, and actions
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Bookmark, BookmarkCheck, ThumbsUp, ArrowRight } from "lucide-react"

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    techStack: string[]
    progress: number
    totalSteps: number
    createdAt: string
    isPublic: boolean
    creator?: {
      name: string
      id: string
    }
    upvotes?: number
  }
  isBookmarked?: boolean
  showCreator?: boolean
  showUpvotes?: boolean
}

export default function ProjectCard({
  project,
  isBookmarked = false,
  showCreator = false,
  showUpvotes = false,
}: ProjectCardProps) {
  const progressPercentage = (project.progress / project.totalSteps) * 100

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          {isBookmarked ? <BookmarkCheck className="h-4 w-4 text-primary" /> : <Bookmark className="h-4 w-4" />}
          <span className="sr-only">{isBookmarked ? "Remove bookmark" : "Bookmark project"}</span>
        </Button>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-1 mb-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{project.description}</p>

        {showCreator && project.creator && (
          <div className="text-xs text-muted-foreground mb-2">
            Created by{" "}
            <Link href={`/profile/${project.creator.id}`} className="font-medium text-foreground hover:underline">
              {project.creator.name}
            </Link>
          </div>
        )}

        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span>
              {project.progress} of {project.totalSteps} steps
            </span>
          </div>
          <Progress value={progressPercentage} className="h-1" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        {showUpvotes && project.upvotes !== undefined && (
          <div className="flex items-center text-sm text-muted-foreground">
            <ThumbsUp className="mr-1 h-3.5 w-3.5" />
            <span>{project.upvotes}</span>
          </div>
        )}
        <Button variant="ghost" size="sm" className="ml-auto" asChild>
          <Link href={`/projects/${project.id}`}>
            View <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

