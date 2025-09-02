"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, PenTool, Coins, Globe, Users, Zap, Shield, Database, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function HowItWorksPage() {
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  const scribeSteps = [
    {
      icon: <PenTool className="w-8 h-8 text-blue-400" />,
      title: "Create Scribbles",
      description:
        "Write short-form insights, research findings, or expert knowledge on any topic. Each Scribble is published directly on the Sonic blockchain.",
      badge: "Step 1",
    },
    {
      icon: <Coins className="w-8 h-8 text-green-400" />,
      title: "Earn Through FeeM",
      description:
        "Get rewarded through Fee Monetization (FeeM) when users interact with your content. Quality insights generate sustainable income.",
      badge: "Step 2",
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: "Build Your Network",
      description:
        "Connect with other experts worldwide. Your reputation grows as your Scribbles gain traction and provide value to the community.",
      badge: "Step 3",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: "Shape Knowledge",
      description:
        "Contribute to a decentralized knowledge ecosystem where expertise is valued, verified, and rewarded fairly across the network.",
      badge: "Step 4",
    },
  ]

  const platformFeatures = [
    {
      icon: <Database className="w-6 h-6 text-blue-400" />,
      title: "Blockchain-Based Publishing",
      description:
        "All content is stored immutably on the Sonic blockchain, ensuring permanent accessibility and authenticity.",
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Automatic Rewards",
      description: "Earn instantly when your content provides value. No manual claims or waiting periods required.",
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: "Censorship Resistant",
      description: "Your knowledge is permanently stored on-chain, immune to takedowns or manipulation.",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: "Global Expert Network",
      description: "Connect with verified experts worldwide in a decentralized knowledge ecosystem.",
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
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
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
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 text-sm font-medium">
              How It Works
            </Badge>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              How Relmn{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Works
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover how our decentralized knowledge network revolutionizes the way experts share insights and earn
              rewards. From publishing your first Scribble to building a global reputation, here's your complete guide
              to the Relmn ecosystem.
            </motion.p>
          </div>
        </section>

        {/* How Scribes Work */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">How Scribes Work on Relmn</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join a decentralized network where knowledge creators are rewarded for their expertise. Here's how you
                can become a Scribe and start earning from your insights.
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {scribeSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-start space-y-4">
                        <Badge variant="secondary" className="text-xs">
                          {step.badge}
                        </Badge>
                        <div className="p-3 rounded-lg bg-background/50 group-hover:bg-background/70 transition-colors">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Arrow connector for desktop */}
                  {index < scribeSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-muted-foreground/50" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Platform Features</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built on cutting-edge blockchain technology to ensure fair, transparent, and permanent knowledge
                sharing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm text-center">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-lg bg-background/50">{feature.icon}</div>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Complete Process</h2>
              <p className="text-lg text-muted-foreground">
                From joining the network to earning rewards, here's how the entire ecosystem works together.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Join as a Scribe</h3>
                  <p className="text-muted-foreground">
                    Sign up, connect your wallet, and verify your expertise. Become part of a global network of
                    knowledge creators committed to sharing valuable insights.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Publish Knowledge On-Chain</h3>
                  <p className="text-muted-foreground">
                    Create Scribbles - short-form insights published directly to the Sonic blockchain. Your knowledge
                    becomes part of the permanent, immutable record.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Earn Through Engagement</h3>
                  <p className="text-muted-foreground">
                    Automatic rewards flow to you as users interact with your content. Fee Monetization (FeeM) ensures
                    fair compensation for every valuable interaction.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Build Your Reputation</h3>
                  <p className="text-muted-foreground">
                    As your content gains traction and provides value, your reputation grows. Connect with other experts
                    and shape the future of decentralized knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-border/50 backdrop-blur-sm text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Become a Scribe?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of experts already earning from their knowledge on the Relmn network. Start publishing
                your insights and get rewarded for your expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/signup"
                  className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-8 py-4 text-lg"
                >
                  Start as a Scribe
                </Link>
                <Link
                  href="/learn"
                  className="font-medium transition-colors hover:text-foreground text-muted-foreground cursor-pointer flex items-center gap-2 text-lg"
                >
                  Learn More <ArrowRight className="w-5 h-5" />
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
