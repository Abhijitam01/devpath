import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-grid-pattern py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Simple, Transparent Pricing</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include core features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <Card className="bg-black/20 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Free</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-white/60 ml-2">/month</span>
              </div>
              <CardDescription className="text-white/60 mt-2">
                Perfect for hobbyists and small personal blogs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {["3 blogs", "10 posts per blog", "Basic analytics", "Community support"].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-emerald-400 mr-2" />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-white text-black hover:bg-white/90">Get Started</Button>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm border-white/10 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium py-1 px-4 rounded-full text-sm">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle className="text-white">Pro</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">$19</span>
                <span className="text-white/60 ml-2">/month</span>
              </div>
              <CardDescription className="text-white/60 mt-2">For creators and small businesses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {[
                  "10 blogs",
                  "Unlimited posts",
                  "Advanced analytics",
                  "Priority support",
                  "Custom domain",
                  "Remove branding",
                ].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-emerald-400 mr-2" />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:opacity-90">
                Subscribe Now
              </Button>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="bg-black/20 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Enterprise</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">$99</span>
                <span className="text-white/60 ml-2">/month</span>
              </div>
              <CardDescription className="text-white/60 mt-2">
                For large organizations with advanced needs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {[
                  "Unlimited blogs",
                  "Unlimited posts",
                  "Enterprise analytics",
                  "Dedicated support",
                  "Custom domain",
                  "Remove branding",
                  "SSO Authentication",
                  "API access",
                  "Custom integrations",
                ].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-emerald-400 mr-2" />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-white text-black hover:bg-white/90">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/60 mb-4">Need a custom plan? We've got you covered.</p>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  )
}

