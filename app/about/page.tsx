// About page component
// Displays information about the platform and team
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-grid-pattern py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Quarkk</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            The story behind the open-source blogging platform that's changing how content evolves.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
            <p className="text-white/70 mb-4">
              Quarkk was born from a simple observation: traditional blogging platforms treat content as static, leading
              to outdated information and diminishing relevance over time.
            </p>
            <p className="text-white/70 mb-4">
              We believe content should evolve like knowledge itself—through collaboration, iteration, and community
              contribution. Our mission is to create a platform where content remains eternally relevant through the
              power of community.
            </p>
            <p className="text-white/70">
              By making our platform open-source, we're not just building a product; we're fostering an ecosystem where
              the best ideas rise to the top and knowledge is continuously refined.
            </p>
          </div>
          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Key Principles</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full p-1 mr-3 mt-1">
                  <span className="block h-2 w-2 rounded-full bg-black"></span>
                </div>
                <div>
                  <h3 className="font-medium text-white">Community-Driven Evolution</h3>
                  <p className="text-white/70">
                    Content improves through collective intelligence and diverse perspectives.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full p-1 mr-3 mt-1">
                  <span className="block h-2 w-2 rounded-full bg-black"></span>
                </div>
                <div>
                  <h3 className="font-medium text-white">Transparency</h3>
                  <p className="text-white/70">Open-source code and visible content history builds trust.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full p-1 mr-3 mt-1">
                  <span className="block h-2 w-2 rounded-full bg-black"></span>
                </div>
                <div>
                  <h3 className="font-medium text-white">Accessibility</h3>
                  <p className="text-white/70">
                    Knowledge should be available to everyone, regardless of technical ability.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full p-1 mr-3 mt-1">
                  <span className="block h-2 w-2 rounded-full bg-black"></span>
                </div>
                <div>
                  <h3 className="font-medium text-white">Creator Ownership</h3>
                  <p className="text-white/70">
                    Authors maintain control while benefiting from community contributions.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Founder & CEO",
                bio: "Former tech lead at Medium with a passion for knowledge sharing and open source.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sarah Johnson",
                role: "CTO",
                bio: "Full-stack developer with 10+ years experience building scalable content platforms.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Miguel Rodriguez",
                role: "Head of Community",
                bio: "Community builder who previously grew the DEV.to contributor network to over 100k members.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member) => (
              <Card key={member.name} className="bg-black/20 backdrop-blur-sm border-white/10 overflow-hidden">
                <div className="aspect-square relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-cyan-400 mb-2">{member.role}</p>
                  <p className="text-white/70 mb-4">{member.bio}</p>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20">
                      <Twitter className="h-4 w-4 text-white" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20">
                      <Linkedin className="h-4 w-4 text-white" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20">
                      <Github className="h-4 w-4 text-white" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Join Our Journey</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            We're always looking for passionate individuals to contribute to our open-source project or join our growing
            team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:opacity-90">
              View Open Positions
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Github className="mr-2 h-4 w-4" />
              Contribute on GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

