// Project filter component
// Allows filtering projects by various criteria
"use client"

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Check, ChevronsUpDown, Filter } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const techFilters = [
  { value: "react", label: "React" },
  { value: "next", label: "Next.js" },
  { value: "vue", label: "Vue.js" },
  { value: "node", label: "Node.js" },
  { value: "mongodb", label: "MongoDB" },
  { value: "tailwind", label: "Tailwind CSS" },
  { value: "typescript", label: "TypeScript" },
]

const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "most-upvotes", label: "Most Upvotes" },
  { value: "most-comments", label: "Most Comments" },
]

export default function ProjectFilter() {
  const [openTech, setOpenTech] = useState(false)
  const [openSort, setOpenSort] = useState(false)
  const [selectedTech, setSelectedTech] = useState<string[]>([])
  const [selectedSort, setSelectedSort] = useState("newest")

  const handleTechSelect = (tech: string) => {
    setSelectedTech((current) => {
      if (current.includes(tech)) {
        return current.filter((t) => t !== tech)
      }
      return [...current, tech]
    })
  }

  const handleSortSelect = (sort: string) => {
    setSelectedSort(sort)
    setOpenSort(false)
  }

  const clearFilters = () => {
    setSelectedTech([])
    setSelectedSort("newest")
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Popover open={openTech} onOpenChange={setOpenTech}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" aria-expanded={openTech} className="justify-between">
            <Filter className="mr-2 h-4 w-4" />
            {selectedTech.length > 0 ? `${selectedTech.length} technologies` : "Filter by Tech"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search technologies..." />
            <CommandList>
              <CommandEmpty>No technology found.</CommandEmpty>
              <CommandGroup>
                {techFilters.map((tech) => (
                  <CommandItem key={tech.value} value={tech.value} onSelect={() => handleTechSelect(tech.value)}>
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

      <Popover open={openSort} onOpenChange={setOpenSort}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" aria-expanded={openSort}>
            {sortOptions.find((option) => option.value === selectedSort)?.label || "Sort by"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandList>
              <CommandGroup>
                {sortOptions.map((option) => (
                  <CommandItem key={option.value} value={option.value} onSelect={() => handleSortSelect(option.value)}>
                    <Check
                      className={cn("mr-2 h-4 w-4", selectedSort === option.value ? "opacity-100" : "opacity-0")}
                    />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {(selectedTech.length > 0 || selectedSort !== "newest") && (
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Clear Filters
        </Button>
      )}
    </div>
  )
}

