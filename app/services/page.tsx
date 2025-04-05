// Services page component
// Displays the services offered by the platform
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Code, Users, Zap, Globe, Shield, BarChart } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-grid-pattern py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Our Services</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive solutions to help you create, publish, and evolve your content.
          </p>
        </div>

        <Tabs defaultValue="platform" className="w-full mb-16">
          <TabsList className="grid grid-cols-3 max-w-md mx-auto bg-black/20 border border-white/10">
            <TabsTrigger
              value="platform"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-blue-500 data-[state=active]:text-black"
            >
              Platform
            </TabsTrigger>
            <TabsTrigger
              value="enterprise"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-blue-500 data-[state=active]:text-black"
            >
              Enterprise
            </TabsTrigger>
            <TabsTrigger
              value="consulting"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-blue-500 data-[state=active]:text-black"
            >
              Consulting
            </TabsTrigger>
          </TabsList>

          <TabsContent value="platform" className="mt-8">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Content Publishing",
                  description: "Publish and distribute your content across multiple platforms with a single click.",
                  icon: Globe,
                  features: [
                    "Multi-platform distribution",
                    "SEO optimization",
                    "Scheduled publishing",
                    "Version control",
                  ],
                },
                {
                  title: "Community Engagement",
                  description: "Build a community around your content with powerful engagement tools.",
                  icon: Users,
                  features: ["Commenting system", "User profiles", "Content suggestions", "Contribution tracking"],
                },
                {
                  title: "Analytics & Insights",
                  description: "Understand your audience and measure the impact of your content.",
                  icon: BarChart,
                  features: [
                    "Real-time analytics",
                    "Audience demographics",
                    "Content performance",
                    "Engagement metrics",
                  ],
                },
              ].map((service) => (
                <Card key={service.title} className="bg-black/20 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <div className="bg-gradient-to-r from-cyan-400/20 to-blue-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <CardTitle className="text-white">{service.title}</CardTitle>
                    <CardDescription className="text-white/70">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-white/80">
                          <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 p-0 hover:bg-transparent">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="enterprise" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Enterprise Solutions</h3>
                <p className="text-white/70 mb-6">
                  Custom solutions designed for large organizations with complex content needs. Our enterprise services
                  provide scalable infrastructure, advanced security, and dedicated support.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-cyan-400 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-white">Enhanced Security</h4>
                      <p className="text-white/70">
                        SSO integration, role-based access control, and compliance features.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Code className="h-5 w-5 text-cyan-400 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-white">API Access</h4>
                      <p className="text-white/70">
                        Full API access for custom integrations with your existing systems.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Zap className="h-5 w-5 text-cyan-400 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-white">Dedicated Infrastructure</h4>
                      <p className="text-white/70">Isolated environments with guaranteed uptime and performance.</p>
                    </div>
                  </div>
                </div>
                <Button className="mt-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:opacity-90">
                  Request Enterprise Demo
                </Button>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Success Stories</h3>
                <div className="space-y-6">
                  <div className="pb-6 border-b border-white/10">
                    <blockquote className="text-white/80 italic mb-4">
                      "Quarkk transformed how our marketing team manages content across our global brand. The
                      community-driven updates keep our documentation fresh without constant maintenance."
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 mr-3"></div>
                      <div>
                        <p className="text-white font-medium">Sarah Williams</p>
                        <p className="text-white/60 text-sm">CMO, TechGlobal Inc.</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <blockquote className="text-white/80 italic mb-4">
                      "The enterprise API allowed us to integrate Quarkk seamlessly with our existing CMS, giving us the
                      best of both worlds."
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 mr-3"></div>
                      <div>
                        <p className="text-white font-medium">Michael Chen</p>
                        <p className="text-white/60 text-sm">CTO, Innovate Solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="consulting" className="mt-8">
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Content Strategy Consulting</CardTitle>
                <CardDescription className="text-white/70">
                  Expert guidance to help you maximize the impact of your content.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-black/30 rounded-lg p-6">
                    <h4 className="font-medium text-white mb-2">Content Audit</h4>
                    <p className="text-white/70 mb-4">
                      Comprehensive analysis of your existing content to identify strengths, weaknesses, and
                      opportunities for improvement.
                    </p>
                    <p className="text-cyan-400 font-medium">Starting at $2,500</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-6">
                    <h4 className="font-medium text-white mb-2">Strategy Development</h4>
                    <p className="text-white/70 mb-4">
                      Custom content strategy aligned with your business goals, audience needs, and industry best
                      practices.
                    </p>
                    <p className="text-cyan-400 font-medium">Starting at $5,000</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-6">
                    <h4 className="font-medium text-white mb-2">Implementation Support</h4>
                    <p className="text-white/70 mb-4">
                      Hands-on assistance with implementing your content strategy, including training, workflow design,
                      and ongoing optimization.
                    </p>
                    <p className="text-cyan-400 font-medium">Starting at $3,500/month</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg p-6">
                  <h4 className="font-medium text-white mb-2">Why Choose Our Consulting Services?</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-white/80">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 mr-2"></div>
                      Expertise in community-driven content development
                    </li>
                    <li className="flex items-center text-white/80">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 mr-2"></div>
                      Data-driven approach to content optimization
                    </li>
                    <li className="flex items-center text-white/80">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 mr-2"></div>
                      Proven methodologies from working with leading brands
                    </li>
                    <li className="flex items-center text-white/80">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 mr-2"></div>
                      Tailored recommendations specific to your industry and audience
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:opacity-90">
                  Schedule a Consultation
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Need Something Custom?</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            We offer tailored solutions to meet your specific content needs. Contact us to discuss how we can help you
            achieve your goals.
          </p>
          <Button className="bg-white text-black hover:bg-white/90">Contact Our Team</Button>
        </div>
      </div>
    </div>
  )
}

