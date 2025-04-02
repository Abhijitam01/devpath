// app/api/projects/[id]/journal/route.ts
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { PrismaClient } from "@prisma/client"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

const prisma = new PrismaClient()

// GET /api/projects/[id]/journal - Get journal entries for a project
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions)
  const projectId = params.id
  
  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    })
    
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }
    
    // If the project is not public and the user is not the owner, only return public entries
    const where = {
      projectId,
      ...(project.userId !== session?.user?.id && !project.isPublic
        ? { isPublic: true }
        : {}),
    }
    
    const journalEntries = await prisma.journalEntry.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        step: true,
      },
      orderBy: { createdAt: "desc" },
    })
    
    return NextResponse.json(journalEntries)
  } catch (error) {
    console.error("Error fetching journal entries:", error)
    return NextResponse.json(
      { error: "Failed to fetch journal entries" },
      { status: 500 }
    )
  }
}

// POST /api/projects/[id]/journal - Create a journal entry
export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions)
  
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  
  const projectId = params.id
  
  try {
    // Check if the project exists
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    })
    
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }
    
    const body = await request.json()
    const { content, stepId, isPublic } = body
    
    if (!content || !stepId) {
      return NextResponse.json(
        { error: "Content and stepId are required" },
        { status: 400 }
      )
    }
    
    // Check if the step exists and belongs to the project
    const step = await prisma.step.findUnique({
      where: { id: stepId },
    })
    
    if (!step || step.projectId !== projectId) {
      return NextResponse.json({ error: "Step not found" }, { status: 404 })
    }
    
    // Create the journal entry
    const journalEntry = await prisma.journalEntry.create({
      data: {
        content,
        isPublic: isPublic || false,
        userId: session.user.id,
        projectId,
        stepId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        step: true,
      },
    })
    
    return NextResponse.json(journalEntry)
  } catch (error) {
    console.error("Error creating journal entry:", error)
    return NextResponse.json(
      { error: "Failed to create journal entry" },
      { status: 500 }
    )
  }
}