"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Coins, Zap, TrendingUp, DollarSign, Clock, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function FeeMonetizationPage() {
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  const feemFeatures = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Automatic Rewards",
      description: "Earn instantly when your content provides value. No manual payouts or complex processes required.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: "Smart Contracts",
      description: "Transparent, automated reward distribution powered by blockchain smart contracts.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      title: "Value-based Earnings",
      description: "Your compensation directly correlates with the value and engagement your content generates.",
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
              <Coins className="w-4 h-4 mr-2" />
              Fee Monetization (FeeM)
            </Badge>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Fair Compensation for{" "}
              <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Valuable Insights
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl text-pretty mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Fee Monetization (FeeM) is Relmn's revolutionary reward system that ensures creators earn fair
              compensation for their valuable knowledge contributions. Every interaction with your content generates
              automatic rewards, creating a sustainable economy for knowledge sharing.
            </motion.p>
          </div>
        </section>

        {/* FeeM Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How FeeM Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Understanding the mechanics behind our fair and transparent reward system.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {feemFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={
                      feature.title === "Automatic Rewards"
                        ? "/learn/fee-monetization/automatic-rewards"
                        : feature.title === "Smart Contracts"
                          ? "/learn/fee-monetization/smart-contracts"
                          : "/learn/fee-monetization/value-based-earnings"
                    }
                    className="block h-full"
                  >
                    <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-colors cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <div className="flex justify-center mb-4">
                          <div className="p-3 rounded-lg bg-background/50">{feature.icon}</div>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Earning Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Earning Process</h2>
              <p className="text-lg text-muted-foreground">
                From content creation to reward distribution - here's how you earn with FeeM.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Create Valuable Content</h3>
                  <p className="text-muted-foreground">
                    Publish high-quality Scribbles that provide genuine value to the community. The more insightful and
                    useful your content, the higher your earning potential.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-green-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Community Engagement</h3>
                  <p className="text-muted-foreground">
                    When users interact with your content - reading, sharing, or building upon it - these interactions
                    trigger the FeeM system to calculate your rewards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-400 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Smart Contract Execution</h3>
                  <p className="text-muted-foreground">
                    Blockchain smart contracts automatically calculate and distribute rewards based on engagement
                    metrics, content quality, and community value assessment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <span className="text-orange-400 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Instant Reward Distribution</h3>
                  <p className="text-muted-foreground">
                    Rewards are automatically transferred to your wallet in real-time. No waiting periods, no manual
                    claims - just instant compensation for your valuable contributions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Earning Factors */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Affects Your Earnings</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Multiple factors contribute to your FeeM rewards, ensuring fair compensation for quality content.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Content Quality</h3>
                  <p className="text-muted-foreground text-sm">
                    Well-researched, accurate, and insightful content receives higher reward multipliers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Engagement Level</h3>
                  <p className="text-muted-foreground text-sm">
                    Higher interaction rates, shares, and community discussions increase your earnings.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Network Growth</h3>
                  <p className="text-muted-foreground text-sm">
                    As the Relmn network grows, the value of all contributions increases proportionally.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-500/10 to-yellow-600/10 rounded-2xl p-8 border border-border/50 backdrop-blur-sm text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Start Earning with FeeM</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to turn your expertise into earnings? Learn how to become a Scribe and start contributing to the
                decentralized knowledge economy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/learn/becoming-a-scribe"
                  className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-8 py-4"
                >
                  Become a Scribe
                </Link>
                <Link
                  href="/learn/blockchain-basics"
                  className="font-medium transition-colors hover:text-foreground text-muted-foreground cursor-pointer flex items-center gap-2"
                >
                  Learn Blockchain Basics
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
