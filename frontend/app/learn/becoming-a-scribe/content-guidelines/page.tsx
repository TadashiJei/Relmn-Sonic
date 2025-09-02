"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, FileText, CheckCircle, AlertTriangle, Star, Target, Users, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

export default function ContentGuidelinesPage() {
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  const guidelines = [
    {
      icon: <Target className="w-6 h-6 text-blue-400" />,
      title: "Quality First",
      description: "Focus on accuracy, depth, and practical value in every Scribble you create.",
      details: [
        "Research thoroughly before publishing",
        "Provide actionable insights and solutions",
        "Use clear, professional language",
        "Include relevant examples and case studies",
      ],
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
      title: "Original Insights",
      description: "Share your unique perspective and expertise rather than rehashing common knowledge.",
      details: [
        "Draw from personal experience and expertise",
        "Offer fresh perspectives on existing topics",
        "Share lessons learned from real projects",
        "Avoid copying content from other sources",
      ],
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: "Clear Communication",
      description: "Write in a clear, accessible style that serves your audience effectively.",
      details: [
        "Use simple, jargon-free language when possible",
        "Structure content with clear headings and sections",
        "Include visual aids when helpful",
        "Write for your target audience's knowledge level",
      ],
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      title: "Cite Sources",
      description: "Always credit your sources and provide references for claims and data.",
      details: [
        "Link to original sources and research",
        "Credit other experts and their work",
        "Use reputable, up-to-date sources",
        "Distinguish between facts and opinions",
      ],
    },
  ]

  const contentTypes = [
    {
      title: "How-To Guides",
      description: "Step-by-step instructions for solving specific problems",
      examples: ["Setting up development environments", "Implementing security protocols", "Optimizing workflows"],
    },
    {
      title: "Industry Analysis",
      description: "Deep dives into trends, challenges, and opportunities",
      examples: ["Market trend analysis", "Technology adoption patterns", "Regulatory impact assessments"],
    },
    {
      title: "Case Studies",
      description: "Real-world examples of problems solved and lessons learned",
      examples: ["Project success stories", "Failure analysis and recovery", "Implementation challenges"],
    },
    {
      title: "Best Practices",
      description: "Proven methods and approaches in your field of expertise",
      examples: ["Code review processes", "Team management strategies", "Quality assurance methods"],
    },
  ]

  const avoidList = [
    "Plagiarized or copied content from other sources",
    "Misleading or false information",
    "Content that violates intellectual property rights",
    "Promotional content without educational value",
    "Personal attacks or discriminatory language",
    "Spam or repetitive low-value posts",
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
              <FileText className="w-4 h-4 mr-2" />
              Content Guidelines
            </Badge>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Creating{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Valuable Content
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl text-pretty mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Learn how to create high-quality Scribbles that provide real value to the Relmn community. Follow these
              guidelines to maximize your impact and earnings.
            </motion.p>
          </div>
        </section>

        {/* Core Guidelines */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core Content Principles</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These fundamental principles guide all successful content on Relmn.
              </p>
            </div>

            <div className="space-y-8">
              {guidelines.map((guideline, index) => (
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
                            {guideline.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-3">{guideline.title}</h3>
                          <p className="text-lg text-muted-foreground mb-6">{guideline.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {guideline.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{detail}</span>
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

        {/* Content Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Popular Content Types</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These content formats tend to perform well and provide significant value to the community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contentTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Star className="w-6 h-6 text-yellow-400" />
                        <h3 className="text-xl font-bold text-foreground">{type.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{type.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground text-sm">Examples:</h4>
                        <ul className="space-y-1">
                          {type.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1 h-1 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Avoid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-red-500/10 to-orange-600/10 rounded-2xl p-8 border border-border/50 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Content to Avoid</h3>
                  <p className="text-muted-foreground">
                    These types of content violate our guidelines and may result in account restrictions.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {avoidList.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Learn Community Standards?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Understanding our community standards will help you engage positively and build lasting relationships
                with other Scribes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/learn/becoming-a-scribe/community-standards"
                  className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-8 py-4"
                >
                  Learn Community Standards
                </Link>
                <Link
                  href="/learn/becoming-a-scribe/account-setup"
                  className="font-medium transition-colors hover:text-foreground text-muted-foreground cursor-pointer flex items-center gap-2"
                >
                  Back to Account Setup
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
