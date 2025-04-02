// The GET method is already implemented in the provided code
// Add proper error handling and validation

// Update the POST method to properly create projects
export async function POST(request: Request) {
    const session = await getServerSession(authOptions)
  
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
  
    try {
      const body = await request.json()
      const { title, description, techStack, steps, isPublic } = body
  
      // Validate required fields
      if (!title || !description || !Array.isArray(techStack) || !Array.isArray(steps) || steps.length === 0) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
      }
  
      // Create project with steps
      const project = await prisma.project.create({
        data: {
          title,
          description,
          techStack,
          isPublic: isPublic || false,
          userId: session.user.id,
          steps: {
            create: steps.map((step: any, index: number) => ({
              title: step.title,
              description: step.description,
              order: index,
            })),
          },
        },
        include: {
          steps: true,
          user: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
      })
  
      return NextResponse.json(project)
    } catch (error) {
      console.error("Error creating project:", error)
      return NextResponse.json({ error: "Failed to create project" }, { status: 500 })
    }
  }