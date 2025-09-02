"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Shield, Heart, Users, MessageCircle, CheckCircle, AlertTriangle, Star } from "lucide-react"
import { motion } from "framer-motion"

export default function CommunityStandardsPage() {
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  const coreValues = [
    {
      icon: <Heart className="w-6 h-6 text-red-400" />,
      title: "Respect & Inclusivity",
      description: "We foster an environment where all voices are heard and valued.",
      principles: [
        "Treat all community members with dignity and respect",
        "Embrace diverse perspectives and backgrounds",
        "Use inclusive language in all communications",
        "Support newcomers and help them succeed",
      ],
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: "Integrity & Honesty",
      description: "Truth and transparency are the foundation of our knowledge network.",
      principles: [
        "Share accurate, well-researched information",
        "Acknowledge when you don't know something",
        "Correct mistakes promptly and transparently",
        "Disclose any conflicts of interest",
      ],
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: "Collaboration & Support",
      description: "We succeed together by helping each other grow and learn.",
      principles: [
        "Provide constructive feedback and suggestions",
        "Share knowledge freely and generously",
        "Celebrate others' successes and achievements",
        "Offer help when you see someone struggling",
      ],
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      title: "Excellence & Growth",
      description: "We continuously strive to improve and deliver exceptional value.",
      principles: [
        "Commit to continuous learning and improvement",
        "Set high standards for your own work",
        "Seek feedback and act on it constructively",
        "Share best practices with the community",
      ],
    },
  ]

  const engagementGuidelines = [
    {
      title: "Constructive Discussions",
      description: "Engage in meaningful conversations that add value",
      dos: [
        "Ask thoughtful questions",
        "Provide detailed, helpful responses",
        "Share relevant experiences and insights",
        "Build on others' ideas constructively",
      ],
      donts: [
        "Make personal attacks or insults",
        "Derail conversations with off-topic content",
        "Spam or post repetitive content",
        "Engage in heated arguments or flame wars",
      ],
    },
    {
      title: "Professional Networking",
      description: "Build meaningful professional relationships",
      dos: [
        "Connect with others in your field",
        "Offer genuine help and collaboration",
        "Share opportunities with the community",
        "Maintain professional boundaries",
      ],
      donts: [
        "Use the platform solely for self-promotion",
        "Send unsolicited sales pitches",
        "Share inappropriate personal information",
        "Harass or persistently contact others",
      ],
    },
  ]

  const reportingProcess = [
    {
      step: "1",
      title: "Identify the Issue",
      description: "Recognize content or behavior that violates community standards",
    },
    {
      step: "2",
      title: "Document the Violation",
      description: "Take screenshots or note specific examples of the problematic behavior",
    },
    {
      step: "3",
      title: "Submit a Report",
      description: "Use our reporting system to flag the content or user for review",
    },
    {
      step: "4",
      title: "Follow Up",
      description: "Our moderation team will investigate and take appropriate action",
    },
  ]

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%), #000000",
        }}
      />

      {/* Header */}
      <header className="sticky top-4 z-50 mx-auto max-w-5xl px-4 py-2">
        <div className="flex items-center justify-between rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg px-6 py-3">
          <Link
            href="/learn/becoming-a-scribe"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Becoming a Scribe</span>
          </Link>
          <Link href="/" className="flex items-center">
            <img
              src="https://cdn.tomeku.com/logo/Realm-Light-logo.svg"
              alt="Relmn Logo"
              className="w-10 h-10 object-contain"
            />
          </Link>
        </div>
      </header>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-sm font-medium">
              <Shield className="w-4 h-4 mr-2" />
              Community Standards
            </Badge>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Building a{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Positive Community
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl text-pretty mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our community standards ensure Relmn remains a welcoming, productive space for knowledge sharing. Learn
              how to contribute positively and help maintain our collaborative culture.
            </motion.p>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These values guide every interaction and decision in our community.
              </p>
            </div>

            <div className="space-y-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-background/50 rounded-xl flex items-center justify-center">
                            {value.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                          <p className="text-lg text-muted-foreground mb-6">{value.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {value.principles.map((principle, principleIndex) => (
                              <div key={principleIndex} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{principle}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Guidelines */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Engagement Guidelines</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Best practices for positive and productive community interactions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {engagementGuidelines.map((guideline, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <MessageCircle className="w-6 h-6 text-blue-400" />
                        <h3 className="text-xl font-bold text-foreground">{guideline.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-6">{guideline.description}</p>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            Do This
                          </h4>
                          <div className="space-y-2">
                            {guideline.dos.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-start gap-2">
                                <span className="w-1 h-1 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-sm text-muted-foreground">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-red-400 mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4" />
                            Avoid This
                          </h4>
                          <div className="space-y-2">
                            {guideline.donts.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-start gap-2">
                                <span className="w-1 h-1 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-sm text-muted-foreground">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reporting Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Reporting Violations</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Help us maintain community standards by reporting inappropriate behavior or content.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reportingProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-primary font-bold text-lg">{step.step}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-2xl p-8 border border-border/50 backdrop-blur-sm text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Join Our Community?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Now that you understand our standards and values, you're ready to become an active, positive member of
                the Relmn community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/signup"
                  className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-8 py-4"
                >
                  Start Your Journey
                </Link>
                <Link
                  href="/learn/becoming-a-scribe"
                  className="font-medium transition-colors hover:text-foreground text-muted-foreground cursor-pointer flex items-center gap-2"
                >
                  Back to Becoming a Scribe
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
