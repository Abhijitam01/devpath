// Project detail page component
// Shows project details, steps, and allows users to track progress and add journal entries
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Share2, ThumbsUp } from "lucide-react"
import ProjectStepList from "@/components/project-step-list"
import ProjectJournal from "@/components/project-journal"
import ProjectComments from "@/components/project-comments"

// This would be replaced with actual data fetching in the real implementation
const mockProject = {
  id: "1",
  title: "Weather Dashboard",
  description:
    "A weather app that displays current and forecasted weather data using a third-party API. This project will teach you how to work with APIs, handle asynchronous data, and build a responsive UI.",
  techStack: ["React", "API", "Tailwind CSS"],
  steps: [
    {
      id: "step1",
      title: "Project Setup",
      description: "Initialize the project and set up the basic structure",
      isCompleted: true,
    },
    {
      id: "step2",
      title: "API Integration",
      description: "Connect to the weather API and fetch data",
      isCompleted: true,
    },
    {
      id: "step3",
      title: "Current Weather UI",
      description: "Build the UI for displaying current weather data",
      isCompleted: false,
    },
    {
      id: "step4",
      title: "Forecast UI",
      description: "Build the UI for displaying weather forecast",
      isCompleted: false,
    },
    {
      id: "step5",
      title: "Location Search",
      description: "Add functionality to search for different locations",
      isCompleted: false,
    },
    { id: "step6", title: "Styling & Polish", description: "Add final styling and polish the UI", isCompleted: false },
    { id: "step7", title: "Error Handling", description: "Add error handling and loading states", isCompleted: false },
    {
      id: "step8",
      title: "Deployment",
      description: "Deploy the application to a hosting service",
      isCompleted: false,
    },
  ],
  progress: 2,
  totalSteps: 8,
  createdAt: new Date().toISOString(),
  isPublic: true,
  creator: {
    name: "John Smith",
    id: "user456",
  },
  upvotes: 24,
  comments: 8,
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = mockProject
  const progressPercentage = (project.progress / project.totalSteps) * 100

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" /> Share
          </Button>
          {project.isPublic && (
            <Button variant="outline" size="sm">
              <ThumbsUp className="mr-2 h-4 w-4" /> Upvote
            </Button>
          )}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project Progress</CardTitle>
          <CardDescription>
            {project.progress} of {project.totalSteps} steps completed
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={progressPercentage} className="h-2" />
        </CardContent>
      </Card>

      <Tabs defaultValue="steps">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="steps">Steps</TabsTrigger>
          <TabsTrigger value="journal">Journal</TabsTrigger>
          <TabsTrigger value="comments">Comments {project.comments > 0 && `(${project.comments})`}</TabsTrigger>
        </TabsList>

        <TabsContent value="steps" className="mt-6">
          <ProjectStepList steps={project.steps} />

          <div className="flex justify-between mt-6">
            <Button variant="outline" disabled>
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous Step
            </Button>
            <Button>
              Next Step <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="journal" className="mt-6">
          <ProjectJournal projectId={project.id} steps={project.steps} />
        </TabsContent>

        <TabsContent value="comments" className="mt-6">
          <ProjectComments projectId={project.id} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

