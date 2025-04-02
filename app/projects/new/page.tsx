// app/projects/new/page.tsx
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
// Rest of imports remain the same

export default function NewProjectPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: [] as string[],
    isPublic: false
  })
  const [steps, setSteps] = useState([{ id: "1", title: "", description: "" }])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleTechStackChange = (techStack: string[]) => {
    setFormData(prev => ({ ...prev, techStack }))
  }

  const handlePublicToggle = (checked: boolean) => {
    setFormData(prev => ({ ...prev, isPublic: checked }))
  }

  const handleStepsChange = (newSteps: { id: string; title: string; description: string }[]) => {
    setSteps(newSteps)
  }

  const handleSubmit = async (e: React.FormEvent, isDraft: boolean = false) => {
    e.preventDefault()
    setError("")
    
    // Validate form
    if (!formData.title.trim()) {
      setError("Project title is required")
      return
    }
    
    if (!formData.description.trim()) {
      setError("Project description is required")
      return
    }
    
    if (formData.techStack.length === 0) {
      setError("Please select at least one technology")
      return
    }
    
    const validSteps = steps.filter(step => step.title.trim() && step.description.trim())
    if (validSteps.length === 0) {
      setError("Please add at least one valid step")
      return
    }
    
    setIsLoading(true)
    
    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          techStack: formData.techStack,
          steps: validSteps,
          isPublic: isDraft ? false : formData.isPublic
        })
      })
      
      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to create project")
      }
      
      const project = await response.json()
      router.push(`/projects/${project.id}`)
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Create New Project</h1>

      <Card>
        <form onSubmit={(e) => handleSubmit(e, false)}>
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {error && (
              <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md">
                {error}
              </div>
            )}
            
            {/* Project Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input 
                id="title" 
                placeholder="E.g., Weather Dashboard App" 
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            {/* Project Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe what this project is about and what you'll learn"
                rows={4}
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <Label>Tech Stack</Label>
              <TechStackSelect 
                selectedTech={formData.techStack}
                onChange={handleTechStackChange}
              />
            </div>

            {/* Project Steps */}
            <div className="space-y-4">
              <Label>Project Steps</Label>
              <p className="text-sm text-muted-foreground">Break down your project into clear, manageable steps.</p>
              <ProjectStepForm 
                steps={steps}
                onChange={handleStepsChange}
              />
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
                <Switch 
                  id="public" 
                  checked={formData.isPublic}
                  onCheckedChange={handlePublicToggle}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end space-x-4">
            <Button 
              variant="outline" 
              type="button" 
              onClick={(e) => handleSubmit(e, true)}
              disabled={isLoading}
            >
              Save as Draft
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Project"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}