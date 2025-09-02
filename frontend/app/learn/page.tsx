"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Coins, Globe, Shield, Users, Zap, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export default function LearnPage() {
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  const learningModules = [
    {
      icon: <BookOpen className="w-6 h-6 text-blue-400" />,
      title: "What is Relmn?",
      description: "Discover how our decentralized knowledge network revolutionizes information sharing",
      topics: ["Blockchain-based publishing", "Scribe ecosystem", "Immutable knowledge storage"],
    },
    {
      icon: <Coins className="w-6 h-6 text-green-400" />,
      title: "Fee Monetization (FeeM)",
      description: "Learn how creators earn fair compensation for their valuable insights",
      topics: ["Automatic rewards", "Smart contracts", "Value-based earnings"],
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: "Blockchain Basics",
      description: "Understanding the technology that powers decentralized knowledge",
      topics: ["Sonic blockchain", "Wallet connections", "On-chain publishing"],
    },
    {
      icon: <Users className="w-6 h-6 text-orange-400" />,
      title: "Becoming a Scribe",
      description: "Step-by-step guide to joining our community of knowledge creators",
      topics: ["Account setup", "Content guidelines", "Community standards"],
    },
  ]

  const benefits = [
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Global Accessibility",
      description: "Access knowledge from experts worldwide, 24/7, without geographical restrictions.",
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Censorship Resistant",
      description: "Your content is permanently stored on-chain, immune to takedowns or manipulation.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Instant Rewards",
      description: "Earn immediately when your knowledge provides value to the community.",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Expert Network",
      description: "Connect with verified experts and build your professional reputation.",
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
          <Link href="/" className="flex items-center">
            <img
              src="https://cdn.tomeku.com/logo/Realm-Light-logo.svg"
              alt="Relmn Logo"
              className="w-10 h-10 object-contain"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Network
            </Link>
            <Link
              href="/#how-scribes-work"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/#testimonials"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Community
            </Link>
            <span className="text-sm font-medium text-foreground">Learn</span>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Connect Wallet
            </Link>
            <Link
              href="/signup"
              className="rounded-md font-bold bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-4 py-2 text-sm hover:-translate-y-0.5 transition duration-200"
            >
              Become a Scribe
            </Link>
          </div>
        </div>
      </header>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 text-sm font-medium">
              Knowledge Center
            </Badge>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Learn About the Future of{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Knowledge
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover how Relmn is revolutionizing knowledge sharing through blockchain technology, creating a
              decentralized ecosystem where expertise is valued, verified, and rewarded fairly.
            </motion.p>
          </div>
        </section>

        {/* Learning Modules */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Learning Modules</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Master the fundamentals of decentralized knowledge networks and start your journey as a Scribe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {learningModules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/learn/${module.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)/g, "")}`}
                  >
                    <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="p-3 rounded-lg bg-background/50 group-hover:bg-background/70 transition-colors">
                            {module.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-foreground mb-2">{module.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{module.description}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {module.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-center text-sm text-muted-foreground">
                              <ChevronRight className="w-4 h-4 mr-2 text-primary" />
                              {topic}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Relmn?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the advantages of a decentralized knowledge ecosystem built for the future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-background/50 border border-border/50">{benefit.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-border/50 backdrop-blur-sm text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Start Your Journey?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of experts already sharing knowledge and earning rewards on the Relmn network. Your
                expertise has value - let's unlock it together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/signup"
                  className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-8 py-4 text-lg"
                >
                  Become a Scribe
                </Link>
                <Link
                  href="/#how-scribes-work"
                  className="font-medium transition-colors hover:text-foreground text-muted-foreground cursor-pointer flex items-center gap-2 text-lg"
                >
                  See How It Works <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
          <div className="max-w-7xl mx-auto text-center">
            <Link href="/" className="inline-block mb-4">
              <img
                src="https://cdn.tomeku.com/logo/Realm-Light-logo.svg"
                alt="Relmn Logo"
                className="w-12 h-12 object-contain mx-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm">
              © 2024 Relmn. Building the future of decentralized knowledge.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
