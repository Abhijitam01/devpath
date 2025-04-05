// Project creation page component
// Allows users to create a new project with steps and publish settings
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import ProjectStepForm from "@/components/project-step-form"
import TechStackSelect from "@/components/tech-stack-select"

export default function NewProjectPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Create New Project</h1>

      <Card>
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Project Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Project Title</Label>
            <Input id="title" placeholder="E.g., Weather Dashboard App" />
          </div>

          {/* Project Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe what this project is about and what you'll learn"
              rows={4}
            />
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <Label>Tech Stack</Label>
            <TechStackSelect />
          </div>

          {/* Project Steps */}
          <div className="space-y-4">
            <Label>Project Steps</Label>
            <p className="text-sm text-muted-foreground">Break down your project into clear, manageable steps.</p>
            <ProjectStepForm />
          </div>

          {/* Visibility Settings */}
          <div className="space-y-4 pt-4 border-t">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="public">Make Project Public</Label>
                <p className="text-sm text-muted-foreground">
                  Public projects are visible to everyone and can receive community feedback.
                </p>
              </div>
              <Switch id="public" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-4">
          <Button variant="outline">Save as Draft</Button>
          <Button>Create Project</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

