// Explore page component
// Allows users to search and browse public projects created by the community
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import ProjectCard from "@/components/project-card"
import ProjectFilter from "@/components/project-filter"

// This would be replaced with actual data fetching in the real implementation
const mockProjects = [
  {
    id: "1",
    title: "Weather Dashboard",
    description: "A weather app that displays current and forecasted weather data",
    techStack: ["React", "API", "Tailwind CSS"],
    progress: 8,
    totalSteps: 8,
    createdAt: new Date().toISOString(),
    isPublic: true,
    creator: {
      name: "John Smith",
      id: "user456",
    },
    upvotes: 24,
  },
  {
    id: "2",
    title: "Blog Platform",
    description: "A full-stack blog platform with authentication and markdown support",
    techStack: ["Next.js", "MongoDB", "Auth.js"],
    progress: 10,
    totalSteps: 10,
    createdAt: new Date().toISOString(),
    isPublic: true,
    creator: {
      name: "Sarah Johnson",
      id: "user789",
    },
    upvotes: 42,
  },
  {
    id: "3",
    title: "E-commerce Store",
    description: "A full-stack e-commerce application with payment integration",
    techStack: ["React", "Node.js", "Stripe", "MongoDB"],
    progress: 12,
    totalSteps: 12,
    createdAt: new Date().toISOString(),
    isPublic: true,
    creator: {
      name: "Jane Doe",
      id: "user123",
    },
    upvotes: 18,
  },
  {
    id: "4",
    title: "Task Management App",
    description: "A Kanban-style task management application",
    techStack: ["Vue.js", "Firebase", "Tailwind CSS"],
    progress: 7,
    totalSteps: 7,
    createdAt: new Date().toISOString(),
    isPublic: true,
    creator: {
      name: "Mike Wilson",
      id: "user321",
    },
    upvotes: 31,
  },
]

export default function ExplorePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Explore Projects</h1>
        <p className="text-muted-foreground mb-6">
          Discover projects created by the community. Find inspiration or start building one yourself.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search projects..." className="pl-8" />
        </div>
        <ProjectFilter />
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockProjects.map((project) => (
          <ProjectCard key={project.id} project={project} showCreator showUpvotes />
        ))}
      </div>
    </div>
  )
}

