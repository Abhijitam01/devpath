// Contact page component
// Displays a contact form and contact information
"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Phone, Send, Check } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send the form data to your backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-grid-pattern py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-black/20 backdrop-blur-sm border-white/10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center p-8 h-full">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full p-3 mb-4">
                  <Check className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/70 text-center mb-6">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: "", email: "", subject: "", message: "" })
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <CardHeader>
                  <CardTitle className="text-white">Contact Us</CardTitle>
                  <CardDescription className="text-white/70">
                    Fill out the form below and we'll respond as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white">
                        Subject
                      </Label>
                      <Select value={formData.subject} onValueChange={handleSelectChange}>
                        <SelectTrigger className="bg-white/5 border-white/10 text-white [&_svg]:text-white">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent className="bg-black/90 border-white/10">
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="billing">Billing Question</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        required
                        className="min-h-32 bg-white/5 border-white/10 text-white placeholder:text-white/40"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:opacity-90"
                    onClick={handleSubmit}
                  >
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </CardFooter>
              </>
            )}
          </Card>

          <div className="space-y-8">
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-cyan-400/20 to-blue-500/20 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Email</h3>
                    <p className="text-white/70">hello@quarkk.io</p>
                    <p className="text-white/70">support@quarkk.io</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-cyan-400/20 to-blue-500/20 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Phone</h3>
                    <p className="text-white/70">+1 (555) 123-4567</p>
                    <p className="text-white/70">Mon-Fri, 9am-5pm PT</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-cyan-400/20 to-blue-500/20 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Office</h3>
                    <p className="text-white/70">123 Innovation Way</p>
                    <p className="text-white/70">San Francisco, CA 94107</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium text-white mb-1">How quickly will you respond?</h3>
                  <p className="text-white/70">
                    We typically respond to inquiries within 24 hours during business days.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Do you offer custom development?</h3>
                  <p className="text-white/70">
                    Yes, we provide custom development services for enterprise clients with specific needs.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Can I schedule a demo?</h3>
                  <p className="text-white/70">
                    Use the contact form to request a demo and we'll set up a time that works for you.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

