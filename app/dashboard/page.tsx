// Dashboard page component
// Shows user's active projects, bookmarked projects, and options to create new projects
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus, Bookmark, ArrowRight } from "lucide-react"
import ProjectCard from "@/components/project-card"
import EmptyState from "@/components/empty-state"

// This would be replaced with actual data fetching in the real implementation
const mockProjects = [
  {
    id: "1",
    title: "Personal Portfolio",
    description: "A responsive portfolio website to showcase my projects",
    techStack: ["React", "Tailwind CSS", "Next.js"],
    progress: 3,
    totalSteps: 5,
    createdAt: new Date().toISOString(),
    isPublic: true,
  },
  {
    id: "2",
    title: "Task Manager API",
    description: "RESTful API for a task management application",
    techStack: ["Node.js", "Express", "MongoDB"],
    progress: 2,
    totalSteps: 6,
    createdAt: new Date().toISOString(),
    isPublic: false,
  },
]

const mockBookmarks = [
  {
    id: "3",
    title: "E-commerce Store",
    description: "A full-stack e-commerce application with payment integration",
    techStack: ["React", "Node.js", "Stripe", "MongoDB"],
    progress: 0,
    totalSteps: 8,
    createdAt: new Date().toISOString(),
    isPublic: true,
    creator: {
      name: "Jane Doe",
      id: "user123",
    },
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <Button asChild>
          <Link href="/projects/new">
            <Plus className="mr-2 h-4 w-4" /> Create Project
          </Link>
        </Button>
      </div>

      {/* My Projects Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">My Projects</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/projects">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {mockProjects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No projects yet"
            description="Create your first project to get started on your coding journey."
            action={
              <Button asChild>
                <Link href="/projects/new">
                  <Plus className="mr-2 h-4 w-4" /> Create Project
                </Link>
              </Button>
            }
          />
        )}
      </div>

      {/* Bookmarked Projects Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Bookmarked Projects</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/explore">
              Explore More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {mockBookmarks.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockBookmarks.map((project) => (
              <ProjectCard key={project.id} project={project} isBookmarked />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No bookmarks yet"
            description="Explore projects and bookmark them to save for later."
            action={
              <Button asChild variant="outline">
                <Link href="/explore">
                  <Bookmark className="mr-2 h-4 w-4" /> Explore Projects
                </Link>
              </Button>
            }
          />
        )}
      </div>
    </div>
  )
}

