// Landing page component
// Displays a hero section, features, and call-to-action for new users
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, BookOpen, Share2 } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
        <div className="container px-4 md:px-6 space-y-10 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Build, Track, Share—Escape Tutorial Hell
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Document your coding journey, build real projects, and get feedback from the community.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/signup">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/explore">Explore Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="bg-primary/10 p-3 rounded-full">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Create Structured Projects</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Define clear steps for your projects and track your progress as you build.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="bg-primary/10 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Journal Your Journey</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Document challenges, solutions, and insights as you work through each step.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="bg-primary/10 p-3 rounded-full">
                <Share2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Get Community Feedback</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Share your projects and receive valuable feedback from other developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Teaser */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Featured Project</h2>
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-2">Weather Dashboard App</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                React
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                API
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                Tailwind
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              A step-by-step project to build a weather dashboard using React and a weather API.
            </p>
            <div className="flex justify-end">
              <Button variant="outline" asChild>
                <Link href="/signup">View Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter">Ready to escape tutorial hell?</h2>
          <p className="mx-auto max-w-[600px]">
            Join DevPath today and start building real projects that showcase your skills.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/signup">Create Your Account</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

