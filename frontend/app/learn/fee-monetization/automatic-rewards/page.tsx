"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Zap, Clock, TrendingUp, CheckCircle, AlertCircle, Coins } from "lucide-react"
import { motion } from "framer-motion"

export default function AutomaticRewardsPage() {
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  const rewardTriggers = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: "Content Views",
      description: "Earn rewards every time someone reads your Scribbles",
      multiplier: "1x base rate",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      title: "Engagement Actions",
      description: "Higher rewards for likes, shares, and comments",
      multiplier: "2-5x base rate",
    },
    {
      icon: <Coins className="w-6 h-6 text-yellow-400" />,
      title: "Knowledge Building",
      description: "Premium rewards when others build upon your content",
      multiplier: "10x base rate",
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
            href="/learn/fee-monetization"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to FeeM</span>
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
              <Zap className="w-4 h-4 mr-2" />
              Automatic Rewards
            </Badge>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Instant Rewards for{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Every Interaction
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl text-pretty mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Relmn's automatic reward system ensures you earn compensation the moment your content provides value. No
              manual claims, no waiting periods - just instant, fair rewards for your knowledge contributions.
            </motion.p>
          </div>
        </section>

        {/* Reward Triggers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Triggers Rewards</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every meaningful interaction with your content automatically generates rewards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {rewardTriggers.map((trigger, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-lg bg-background/50">{trigger.icon}</div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 text-center">{trigger.title}</h3>
                      <p className="text-muted-foreground text-center mb-4">{trigger.description}</p>
                      <div className="text-center">
                        <Badge variant="secondary" className="text-xs">
                          {trigger.multiplier}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Real-Time Reward Processing</h2>
              <p className="text-lg text-muted-foreground">
                Understanding the technology behind instant reward distribution.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Instant Detection</h3>
                  <p className="text-muted-foreground">
                    Our blockchain monitors all interactions with your content in real-time. Every view, like, share, or
                    comment is immediately detected and processed by the reward system.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Value Calculation</h3>
                  <p className="text-muted-foreground">
                    Smart contracts automatically calculate the value of each interaction based on content quality, user
                    engagement patterns, and network-wide metrics to determine fair compensation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Immediate Distribution</h3>
                  <p className="text-muted-foreground">
                    Rewards are instantly transferred to your connected wallet. No manual claims, no processing delays -
                    you earn as your content creates value for the community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Benefits of Automatic Rewards</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No Manual Claims</h3>
                  <p className="text-muted-foreground text-sm">
                    Forget about complex claiming processes. Your rewards flow automatically as your content generates
                    value.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Real-Time Earnings</h3>
                  <p className="text-muted-foreground text-sm">
                    See your earnings grow in real-time as users interact with your content throughout the day.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Fair Distribution</h3>
                  <p className="text-muted-foreground text-sm">
                    Transparent algorithms ensure rewards are distributed fairly based on actual value created.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <AlertCircle className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Transparent Process</h3>
                  <p className="text-muted-foreground text-sm">
                    All reward calculations are visible on the blockchain, ensuring complete transparency and trust.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-600/10 rounded-2xl p-8 border border-border/50 backdrop-blur-sm text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Start Earning?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Learn about smart contracts and value-based earnings to maximize your automatic rewards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/learn/fee-monetization/smart-contracts"
                  className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-8 py-4"
                >
                  Learn Smart Contracts
                </Link>
                <Link
                  href="/learn/fee-monetization/value-based-earnings"
                  className="font-medium transition-colors hover:text-foreground text-muted-foreground cursor-pointer flex items-center gap-2"
                >
                  Value-Based Earnings
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
