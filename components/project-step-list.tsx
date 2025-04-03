// Project step list component
// Displays the steps of a project with completion status
"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

interface Step {
  id: string
  title: string
  description: string
  isCompleted: boolean
}

interface ProjectStepListProps {
  steps: Step[]
}

export default function ProjectStepList({ steps: initialSteps }: ProjectStepListProps) {
  const [steps, setSteps] = useState<Step[]>(initialSteps)
  const [expandedSteps, setExpandedSteps] = useState<Record<string, boolean>>({})

  const toggleStep = (id: string) => {
    setSteps(steps.map((step) => (step.id === id ? { ...step, isCompleted: !step.isCompleted } : step)))
  }

  const toggleExpand = (id: string) => {
    setExpandedSteps((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <Card key={step.id} className={step.isCompleted ? "bg-muted/50" : ""}>
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm font-medium shrink-0 mt-0.5">
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id={`step-${step.id}`}
                      checked={step.isCompleted}
                      onCheckedChange={() => toggleStep(step.id)}
                    />
                    <label
                      htmlFor={`step-${step.id}`}
                      className={`font-medium ${step.isCompleted ? "line-through text-muted-foreground" : ""}`}
                    >
                      {step.title}
                    </label>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => toggleExpand(step.id)} className="h-8 w-8 p-0">
                    {expandedSteps[step.id] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </div>

                {expandedSteps[step.id] && (
                  <div className="mt-2 text-sm text-muted-foreground pl-6">{step.description}</div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

