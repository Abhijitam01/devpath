// Project step form component
// Allows users to add and edit steps when creating a project
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Trash } from "lucide-react"

interface Step {
  id: string
  title: string
  description: string
}

export default function ProjectStepForm() {
  const [steps, setSteps] = useState<Step[]>([{ id: "1", title: "", description: "" }])

  const addStep = () => {
    const newId = (steps.length + 1).toString()
    setSteps([...steps, { id: newId, title: "", description: "" }])
  }

  const removeStep = (id: string) => {
    if (steps.length === 1) return
    setSteps(steps.filter((step) => step.id !== id))
  }

  const updateStep = (id: string, field: keyof Step, value: string) => {
    setSteps(steps.map((step) => (step.id === id ? { ...step, [field]: value } : step)))
  }

  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <Card key={step.id} className="relative">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                {index + 1}
              </div>
              <Input
                placeholder="Step title"
                value={step.title}
                onChange={(e) => updateStep(step.id, "title", e.target.value)}
                className="flex-1"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeStep(step.id)}
                disabled={steps.length === 1}
                className="h-8 w-8"
              >
                <Trash className="h-4 w-4" />
                <span className="sr-only">Remove step</span>
              </Button>
            </div>
            <Textarea
              placeholder="Describe what to do in this step..."
              value={step.description}
              onChange={(e) => updateStep(step.id, "description", e.target.value)}
              rows={3}
            />
          </CardContent>
        </Card>
      ))}

      <Button variant="outline" onClick={addStep} className="w-full">
        <Plus className="mr-2 h-4 w-4" /> Add Step
      </Button>
    </div>
  )
}

