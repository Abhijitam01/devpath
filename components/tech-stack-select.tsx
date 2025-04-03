// Tech stack select component
// Allows users to select technologies used in their project
"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Check, ChevronsUpDown, X } from "lucide-react"
import { cn } from "@/lib/utils"

const techOptions = [
  { value: "react", label: "React" },
  { value: "next", label: "Next.js" },
  { value: "vue", label: "Vue.js" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "node", label: "Node.js" },
  { value: "express", label: "Express" },
  { value: "mongodb", label: "MongoDB" },
  { value: "postgresql", label: "PostgreSQL" },
  { value: "mysql", label: "MySQL" },
  { value: "firebase", label: "Firebase" },
  { value: "supabase", label: "Supabase" },
  { value: "tailwind", label: "Tailwind CSS" },
  { value: "bootstrap", label: "Bootstrap" },
  { value: "material-ui", label: "Material UI" },
  { value: "typescript", label: "TypeScript" },
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "csharp", label: "C#" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "aws", label: "AWS" },
  { value: "azure", label: "Azure" },
  { value: "gcp", label: "Google Cloud" },
  { value: "docker", label: "Docker" },
  { value: "kubernetes", label: "Kubernetes" },
  { value: "graphql", label: "GraphQL" },
  { value: "rest", label: "REST API" },
  { value: "redux", label: "Redux" },
]

export default function TechStackSelect() {
  const [open, setOpen] = useState(false)
  const [selectedTech, setSelectedTech] = useState<string[]>([])

  const handleSelect = (tech: string) => {
    setSelectedTech((current) => {
      if (current.includes(tech)) {
        return current.filter((t) => t !== tech)
      }
      return [...current, tech]
    })
  }

  const handleRemove = (tech: string) => {
    setSelectedTech((current) => current.filter((t) => t !== tech))
  }

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {selectedTech.map((tech) => {
          const option = techOptions.find((o) => o.value === tech)
          return (
            <Badge key={tech} variant="secondary" className="px-2 py-1">
              {option?.label}
              <Button variant="ghost" size="icon" className="h-4 w-4 ml-1 p-0" onClick={() => handleRemove(tech)}>
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {option?.label}</span>
              </Button>
            </Badge>
          )
        })}
      </div>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
            {selectedTech.length > 0 ? `${selectedTech.length} technologies selected` : "Select technologies"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search technologies..." />
            <CommandList>
              <CommandEmpty>No technology found.</CommandEmpty>
              <CommandGroup className="max-h-64 overflow-y-auto">
                {techOptions.map((tech) => (
                  <CommandItem key={tech.value} value={tech.value} onSelect={() => handleSelect(tech.value)}>
                    <Check
                      className={cn("mr-2 h-4 w-4", selectedTech.includes(tech.value) ? "opacity-100" : "opacity-0")}
                    />
                    {tech.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

