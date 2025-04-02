// app/api/projects/[id]/steps/[stepId]/route.ts
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { PrismaClient } from "@prisma/client"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

const prisma = new PrismaClient()

// PATCH /api/projects/[id]/steps/[stepId] - Update a step
export async function PATCH(
  request: Request,
  { params }: { params: { id: string; stepId: string } }
) {
  const session = await getServerSession(authOptions)
  
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  
  const { id: projectId, stepId } = params
  
  try {
    // Check if the project exists and belongs to the user
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    })
    
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }
    
    if (project.userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    
    // Check if the step exists
    const step = await prisma.step.findUnique({
      where: { id: stepId },
    })
    
    if (!step || step.projectId !== projectId) {
      return NextResponse.json({ error: "Step not found" }, { status: 404 })
    }
    
    const body = await request.json()
    const { title, description, isCompleted } = body
    
    // Update the step
    const updatedStep = await prisma.step.update({
      where: { id: stepId },
      data: {
        ...(title && { title }),
        ...(description && { description }),
        ...(isCompleted !== undefined && { isCompleted }),
      },
    })
    
    return NextResponse.json(updatedStep)
  } catch (error) {
    console.error("Error updating step:", error)
    return NextResponse.json(
      { error: "Failed to update step" },
      { status: 500 }
    )
  }
}

// DELETE /api/projects/[id]/steps/[stepId] - Delete a step
export async function DELETE(
  request: Request,
  { params }: { params: { id: string; stepId: string } }
) {
  const session = await getServerSession(authOptions)
  
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  
  const { id: projectId, stepId } = params
  
  try {
    // Check if the project exists and belongs to the user
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    })
    
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }
    
    if (project.userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    
    // Check if the step exists
    const step = await prisma.step.findUnique({
      where: { id: stepId },
    })
    
    if (!step || step.projectId !== projectId) {
      return NextResponse.json({ error: "Step not found" }, { status: 404 })
    }
    
    // Delete the step
    await prisma.step.delete({
      where: { id: stepId },
    })
    
    // Reorder remaining steps
    const remainingSteps = await prisma.step.findMany({
      where: { projectId },
      orderBy: { order: "asc" },
    })
    
    for (let i = 0; i < remainingSteps.length; i++) {
      await prisma.step.update({
        where: { id: remainingSteps[i].id },
        data: { order: i },
      })
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting step:", error)
    return NextResponse.json(
      { error: "Failed to delete step" },
      { status: 500 }
    )
  }
}