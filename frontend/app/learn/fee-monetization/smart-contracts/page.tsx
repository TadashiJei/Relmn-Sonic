"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Code, Shield, Zap, CheckCircle, Lock, Eye } from "lucide-react"
import { motion } from "framer-motion"

export default function SmartContractsPage() {
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  const contractFeatures = [
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: "Trustless Execution",
      description: "No intermediaries needed - contracts execute automatically when conditions are met",
    },
    {
      icon: <Eye className="w-6 h-6 text-green-400" />,
      title: "Full Transparency",
      description: "All contract code and transactions are visible on the blockchain for complete transparency",
    },
    {
      icon: <Lock className="w-6 h-6 text-purple-400" />,
      title: "Immutable Rules",
      description: "Once deployed, contract rules cannot be changed, ensuring fair and consistent rewards",
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
              <Code className="w-4 h-4 mr-2" />
              Smart Contracts
            </Badge>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Transparent{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Automated Rewards
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl text-pretty mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Smart contracts power Relmn's reward system, ensuring transparent, automated, and fair distribution of
              earnings. These self-executing contracts eliminate the need for intermediaries and guarantee that creators
              are compensated fairly for their contributions.
            </motion.p>
          </div>
        </section>

        {/* Contract Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Smart Contracts Matter</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Understanding the key benefits of blockchain-powered reward distribution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contractFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-lg bg-background/50">{feature.icon}</div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How Contracts Work */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How Reward Contracts Work</h2>
              <p className="text-lg text-muted-foreground">
                The technical process behind automated reward distribution.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Event Detection</h3>
                  <p className="text-muted-foreground">
                    Smart contracts continuously monitor the blockchain for specific events like content views,
                    interactions, and engagement metrics. Each event triggers the reward calculation process.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-green-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Value Assessment</h3>
                  <p className="text-muted-foreground">
                    The contract evaluates multiple factors including content quality scores, user engagement patterns,
                    and network-wide metrics to determine the appropriate reward amount for each interaction.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-400 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Automatic Execution</h3>
                  <p className="text-muted-foreground">
                    Once the reward amount is calculated, the smart contract automatically transfers the tokens to the
                    creator's wallet. This happens instantly without any manual intervention required.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <span className="text-orange-400 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Transparent Recording</h3>
                  <p className="text-muted-foreground">
                    Every reward transaction is permanently recorded on the blockchain, creating an immutable audit
                    trail that ensures transparency and allows creators to verify their earnings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contract Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Types of Reward Contracts</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Different smart contracts handle various aspects of the reward ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Engagement Contracts</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Handle rewards for basic interactions like views, likes, and shares. These contracts process the
                    majority of daily reward transactions.
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    Real-time execution
                  </Badge>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Quality Contracts</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Evaluate content quality and apply appropriate multipliers to base rewards. These contracts ensure
                    high-quality content receives proportionally higher compensation.
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    Quality-based multipliers
                  </Badge>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Governance Contracts</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Manage network-wide parameters like base reward rates and quality thresholds. These contracts can be
                    updated through community governance processes.
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    Community governed
                  </Badge>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Lock className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Treasury Contracts</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Manage the reward pool and ensure sustainable token distribution. These contracts balance immediate
                    rewards with long-term network sustainability.
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    Sustainable economics
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-border/50 backdrop-blur-sm text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Explore Value-Based Earnings</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Learn how smart contracts calculate rewards based on the actual value your content creates for the
                community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/learn/fee-monetization/value-based-earnings"
                  className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-8 py-4"
                >
                  Value-Based Earnings
                </Link>
                <Link
                  href="/learn/fee-monetization/automatic-rewards"
                  className="font-medium transition-colors hover:text-foreground text-muted-foreground cursor-pointer flex items-center gap-2"
                >
                  Back to Automatic Rewards
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
