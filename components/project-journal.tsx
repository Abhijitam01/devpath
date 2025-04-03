// Project journal component
// Allows users to add journal entries for each step of their project
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Save } from "lucide-react"

interface Step {
  id: string
  title: string
  description: string
  isCompleted: boolean
}

interface ProjectJournalProps {
  projectId: string
  steps: Step[]
}

interface JournalEntry {
  stepId: string
  content: string
  isPublic: boolean
  createdAt: string
}

// Mock journal entries - would be fetched from API in real implementation
const mockJournalEntries: Record<string, JournalEntry> = {
  step1: {
    stepId: "step1",
    content:
      "Set up the project using Create React App. Installed necessary dependencies including axios for API calls and tailwind for styling.",
    isPublic: true,
    createdAt: new Date().toISOString(),
  },
  step2: {
    stepId: "step2",
    content:
      "Integrated with the OpenWeatherMap API. Had some issues with the API key at first, but figured it out by checking the documentation more carefully.",
    isPublic: true,
    createdAt: new Date().toISOString(),
  },
}

export default function ProjectJournal({ projectId, steps }: ProjectJournalProps) {
  const [selectedStepId, setSelectedStepId] = useState<string>(steps[0]?.id || "")
  const [journalEntries, setJournalEntries] = useState<Record<string, JournalEntry>>(mockJournalEntries)

  const currentEntry = selectedStepId ? journalEntries[selectedStepId] : null

  const [content, setContent] = useState<string>(currentEntry?.content || "")
  const [isPublic, setIsPublic] = useState<boolean>(currentEntry?.isPublic || false)

  const handleStepChange = (stepId: string) => {
    setSelectedStepId(stepId)
    const entry = journalEntries[stepId]
    setContent(entry?.content || "")
    setIsPublic(entry?.isPublic || false)
  }

  const saveJournalEntry = () => {
    if (!selectedStepId) return

    setJournalEntries({
      ...journalEntries,
      [selectedStepId]: {
        stepId: selectedStepId,
        content,
        isPublic,
        createdAt: new Date().toISOString(),
      },
    })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Project Journal</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="step-select">Select Step</Label>
            <Select value={selectedStepId} onValueChange={handleStepChange}>
              <SelectTrigger id="step-select">
                <SelectValue placeholder="Select a step" />
              </SelectTrigger>
              <SelectContent>
                {steps.map((step, index) => (
                  <SelectItem key={step.id} value={step.id}>
                    {index + 1}. {step.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedStepId && (
            <>
              <div className="space-y-2">
                <Label htmlFor="journal-entry">Journal Entry</Label>
                <Textarea
                  id="journal-entry"
                  placeholder="Document what you learned, challenges you faced, and how you solved them..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={8}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="public-journal" checked={isPublic} onCheckedChange={setIsPublic} />
                <Label htmlFor="public-journal">Make this journal entry public</Label>
              </div>
            </>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={saveJournalEntry} disabled={!selectedStepId || !content}>
            <Save className="mr-2 h-4 w-4" /> Save Journal Entry
          </Button>
        </CardFooter>
      </Card>

      {Object.keys(journalEntries).length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Journal History</h3>

          {Object.values(journalEntries)
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .map((entry) => {
              const step = steps.find((s) => s.id === entry.stepId)
              if (!step) return null

              return (
                <Card key={entry.stepId}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{step.title}</h4>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <CalendarIcon className="mr-1 h-3 w-3" />
                        {new Date(entry.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    <p className="text-sm whitespace-pre-line">{entry.content}</p>
                    {entry.isPublic && (
                      <div className="mt-2">
                        <Badge variant="outline" className="text-xs">
                          Public
                        </Badge>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
        </div>
      )}
    </div>
  )
}

