// Empty state component
// Displays a message when there is no content to show
import type { ReactNode } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface EmptyStateProps {
  title: string
  description: string
  action?: ReactNode
  icon?: ReactNode
}

export default function EmptyState({ title, description, action, icon }: EmptyStateProps) {
  return (
    <Card className="w-full border-dashed">
      <CardContent className="flex flex-col items-center justify-center py-12 text-center">
        {icon && <div className="mb-4 text-muted-foreground">{icon}</div>}
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground max-w-md">{description}</p>
      </CardContent>
      {action && <CardFooter className="flex justify-center pb-8">{action}</CardFooter>}
    </Card>
  )
}

