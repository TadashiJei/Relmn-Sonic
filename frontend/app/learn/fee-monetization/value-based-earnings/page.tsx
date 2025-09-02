"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, TrendingUp, Users, Star, Target, BarChart3, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function ValueBasedEarningsPage() {
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  const valueFactors = [
    {
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      title: "Content Quality",
      description: "Well-researched, accurate, and insightful content receives higher multipliers",
      impact: "Up to 5x multiplier",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Community Engagement",
      description: "Content that sparks meaningful discussions and interactions",
      impact: "2-10x multiplier",
    },
    {
      icon: <Target className="w-6 h-6 text-green-400" />,
      title: "Knowledge Impact",
      description: "Content that helps others learn and build upon existing knowledge",
      impact: "10-50x multiplier",
    },
  ]

  const earningTiers = [
    {
      tier: "Bronze",
      range: "1-10 RELMN",
      description: "Basic content with standard engagement",
      color: "text-orange-400",
    },
    {
      tier: "Silver",
      range: "10-100 RELMN",
      description: "Quality content with good community response",
      color: "text-gray-400",
    },
    {
      tier: "Gold",
      range: "100-1000 RELMN",
      description: "High-value content that drives significant engagement",
      color: "text-yellow-400",
    },
    {
      tier: "Platinum",
      range: "1000+ RELMN",
      description: "Exceptional content that becomes foundational knowledge",
      color: "text-purple-400",
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
              <TrendingUp className="w-4 h-4 mr-2" />
              Value-Based Earnings
            </Badge>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Earn Based on{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Real Value Created
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl text-pretty mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Relmn's value-based earning system ensures your compensation directly correlates with the actual value
              your content creates for the community. The more valuable your insights, the higher your rewards.
            </motion.p>
          </div>
        </section>

        {/* Value Factors */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Determines Value</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Multiple factors contribute to your content's value assessment and earning potential.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {valueFactors.map((factor, index) => (
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
                        <div className="p-3 rounded-lg bg-background/50">{factor.icon}</div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 text-center">{factor.title}</h3>
                      <p className="text-muted-foreground text-center mb-4">{factor.description}</p>
                      <div className="text-center">
                        <Badge variant="secondary" className="text-xs">
                          {factor.impact}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Earning Tiers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Earning Tiers</h2>
              <p className="text-lg text-muted-foreground">
                Understanding the potential earning ranges based on content value and impact.
              </p>
            </div>

            <div className="space-y-6">
              {earningTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`text-2xl font-bold ${tier.color}`}>{tier.tier}</div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">{tier.range}</h3>
                            <p className="text-muted-foreground text-sm">{tier.description}</p>
                          </div>
                        </div>
                        <Award className={`w-8 h-8 ${tier.color}`} />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Calculation */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How Value is Calculated</h2>
              <p className="text-lg text-muted-foreground">
                The algorithmic process behind fair value assessment and reward distribution.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Engagement Metrics</h3>
                  <p className="text-muted-foreground">
                    The system analyzes views, time spent reading, shares, comments, and other engagement signals to
                    understand how valuable users find your content.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Community Feedback</h3>
                  <p className="text-muted-foreground">
                    Peer reviews, quality ratings, and community endorsements from other Scribes contribute to your
                    content's overall value score and earning multiplier.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Knowledge Impact</h3>
                  <p className="text-muted-foreground">
                    Content that becomes foundational knowledge, gets referenced by others, or enables new discoveries
                    receives the highest value multipliers and long-term earning potential.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Network Effects</h3>
                  <p className="text-muted-foreground">
                    As the Relmn network grows and your content continues to provide value over time, your historical
                    contributions can generate ongoing passive rewards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maximizing Value */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Maximizing Your Earnings</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Strategies to create high-value content that generates maximum rewards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Star className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Focus on Quality</h3>
                  <p className="text-muted-foreground text-sm">
                    Invest time in research, fact-checking, and creating comprehensive, well-structured content that
                    provides genuine value to readers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Engage with Community</h3>
                  <p className="text-muted-foreground text-sm">
                    Respond to comments, participate in discussions, and build relationships with other Scribes to
                    increase your content's visibility and impact.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Target className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Address Real Problems</h3>
                  <p className="text-muted-foreground text-sm">
                    Create content that solves actual problems, answers important questions, or provides insights that
                    help others make better decisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Build on Others' Work</h3>
                  <p className="text-muted-foreground text-sm">
                    Reference and build upon existing knowledge in the network, creating connections and contributing to
                    the collective intelligence of the community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-500/10 to-blue-600/10 rounded-2xl p-8 border border-border/50 backdrop-blur-sm text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Start Creating Value</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to create high-value content and earn based on the real impact you make? Learn how to become a
                Scribe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/learn/becoming-a-scribe"
                  className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-8 py-4"
                >
                  Become a Scribe
                </Link>
                <Link
                  href="/learn/fee-monetization/smart-contracts"
                  className="font-medium transition-colors hover:text-foreground text-muted-foreground cursor-pointer flex items-center gap-2"
                >
                  Learn Smart Contracts
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
