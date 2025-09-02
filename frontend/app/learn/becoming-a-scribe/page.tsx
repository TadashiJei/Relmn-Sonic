"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Users, CheckCircle, FileText, Shield, Star, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function BecomingAScribePage() {
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  const steps = [
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Account Setup",
      description: "Create your Relmn account and connect your digital wallet to start your journey as a Scribe.",
    },
    {
      icon: <FileText className="w-6 h-6 text-green-400" />,
      title: "Content Guidelines",
      description: "Learn our content standards and best practices for creating valuable, engaging Scribbles.",
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: "Community Standards",
      description: "Understand our community values and how to contribute positively to the knowledge network.",
    },
  ]

  const guidelines = [
    {
      title: "Quality First",
      description: "Focus on accuracy, depth, and practical value in every Scribble you create.",
    },
    {
      title: "Original Insights",
      description: "Share your unique perspective and expertise rather than rehashing common knowledge.",
    },
    {
      title: "Clear Communication",
      description: "Write in a clear, accessible style that serves your audience effectively.",
    },
    {
      title: "Cite Sources",
      description: "Always credit your sources and provide references for claims and data.",
    },
    {
      title: "Stay Current",
      description: "Keep your content up-to-date and relevant to current trends and developments.",
    },
    {
      title: "Engage Respectfully",
      description: "Interact with the community professionally and constructively.",
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
            href="/learn"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Learn</span>
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
              <Users className="w-4 h-4 mr-2" />
              Becoming a Scribe
            </Badge>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Join Our Community of{" "}
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Knowledge Creators
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl text-pretty mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Become a Scribe on Relmn and transform your expertise into a sustainable income stream. Join thousands of
              experts who are already sharing knowledge and earning rewards in our decentralized ecosystem.
            </motion.p>
          </div>
        </section>

        {/* Getting Started Steps */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Getting Started</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Follow these essential steps to begin your journey as a Relmn Scribe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={
                      index === 0
                        ? "/learn/becoming-a-scribe/account-setup"
                        : index === 1
                          ? "/learn/becoming-a-scribe/content-guidelines"
                          : "/learn/becoming-a-scribe/community-standards"
                    }
                    className="block h-full group"
                  >
                    <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm group-hover:bg-card/70 transition-colors">
                      <CardContent className="p-6 text-center">
                        <div className="flex justify-center mb-4">
                          <div className="p-3 rounded-lg bg-background/50 group-hover:bg-background/70 transition-colors">
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Setup Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Step-by-Step Setup</h2>
              <p className="text-lg text-muted-foreground">
                Detailed instructions to get you started as a Scribe on Relmn.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Create Your Account</h3>
                  <p className="text-muted-foreground mb-4">
                    Sign up for a Relmn account using your email address. You'll receive a verification email to confirm
                    your account and secure your profile.
                  </p>
                  <div className="bg-card/30 rounded-lg p-4 border border-border/30">
                    <p className="text-sm text-muted-foreground">
                      <strong>Tip:</strong> Use a professional email address that you check regularly, as this will be
                      your primary communication channel with the Relmn community.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-green-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Connect Your Wallet</h3>
                  <p className="text-muted-foreground mb-4">
                    Link a compatible digital wallet to receive FeeM rewards. We support popular wallets like MetaMask,
                    WalletConnect, and others that work with the Sonic blockchain.
                  </p>
                  <div className="bg-card/30 rounded-lg p-4 border border-border/30">
                    <p className="text-sm text-muted-foreground">
                      <strong>New to wallets?</strong> Don't worry! We provide step-by-step guides for setting up your
                      first digital wallet safely and securely.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-400 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Complete Your Profile</h3>
                  <p className="text-muted-foreground mb-4">
                    Add your expertise areas, professional background, and a brief bio. A complete profile helps the
                    community understand your knowledge areas and builds trust.
                  </p>
                  <div className="bg-card/30 rounded-lg p-4 border border-border/30">
                    <p className="text-sm text-muted-foreground">
                      <strong>Profile tip:</strong> Include relevant credentials, experience, and areas of expertise to
                      establish credibility with the community.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <span className="text-orange-400 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Publish Your First Scribble</h3>
                  <p className="text-muted-foreground mb-4">
                    Create your first piece of content! Start with something you're passionate about and can provide
                    unique insights on. Remember, quality over quantity is key.
                  </p>
                  <div className="bg-card/30 rounded-lg p-4 border border-border/30">
                    <p className="text-sm text-muted-foreground">
                      <strong>First post idea:</strong> Share a recent insight from your field, a solution to a common
                      problem, or your take on an industry trend.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Content Guidelines</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Follow these best practices to create valuable content that resonates with the community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guidelines.map((guideline, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-foreground">{guideline.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">{guideline.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits of Being a Scribe */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Become a Scribe?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the unique benefits of joining Relmn's community of knowledge creators.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Instant Rewards</h3>
                  <p className="text-muted-foreground text-sm">
                    Earn immediately when your content provides value to the community.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <Star className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Build Reputation</h3>
                  <p className="text-muted-foreground text-sm">
                    Establish yourself as a thought leader in your field of expertise.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Own Your Content</h3>
                  <p className="text-muted-foreground text-sm">
                    Your content is permanently yours, stored immutably on the blockchain.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Global Network</h3>
                  <p className="text-muted-foreground text-sm">
                    Connect with experts and learners from around the world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 rounded-2xl p-8 border border-border/50 backdrop-blur-sm text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Become a Scribe?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of experts who are already earning rewards by sharing their knowledge. Your expertise has
                value - let's unlock it together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/signup"
                  className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-8 py-4"
                >
                  Start Your Journey
                </Link>
                <Link
                  href="/learn"
                  className="font-medium transition-colors hover:text-foreground text-muted-foreground cursor-pointer flex items-center gap-2"
                >
                  Back to Learning Center
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
