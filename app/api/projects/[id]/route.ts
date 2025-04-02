// app/api/projects/[id]/route.ts
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { PrismaClient } from "@prisma/client"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

const prisma = new PrismaClient()

// GET /api/projects/[id] - Get a specific project
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions)
  const projectId = params.id

  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: {
        steps: { orderBy: { order: "asc" } },
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        _count: {
          select: {
            upvotes: true,
            comments: true,
          },
        },
      },
    })

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }

    // Check if user can access this project
    if (!project.isPublic && project.userId !== session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    return NextResponse.json(project)
  } catch (error) {
    console.error("Error fetching project:", error)
    return NextResponse.json(
      { error: "Failed to fetch project" },
      { status: 500 }
    )
  }
}

// PATCH /api/projects/[id] - Update a project
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions)
  
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  
  const projectId = params.id
  
  try {
    // Check if the project exists and belongs to the user
    const existingProject = await prisma.project.findUnique({
      where: { id: projectId },
    })
    
    if (!existingProject) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }
    
    if (existingProject.userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    
    const body = await request.json()
    const { title, description, techStack, isPublic } = body
    
    // Update the project
    const updatedProject = await prisma.project.update({
      where: { id: projectId },
      data: {
        ...(title && { title }),
        ...(description && { description }),
        ...(techStack && { techStack }),
        ...(isPublic !== undefined && { isPublic }),
      },
    })
    
    return NextResponse.json(updatedProject)
  } catch (error) {
    console.error("Error updating project:", error)
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    )
  }
}

// DELETE /api/projects/[id] - Delete a project
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions)
  
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  
  const projectId = params.id
  
  try {
    // Check if the project exists and belongs to the user
    const existingProject = await prisma.project.findUnique({
      where: { id: projectId },
    })
    
    if (!existingProject) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }
    
    if (existingProject.userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    
    // Delete the project
    await prisma.project.delete({
      where: { id: projectId },
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting project:", error)
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    )
  }
}