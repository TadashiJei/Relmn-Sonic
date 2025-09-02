"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Zap, Shield, Network, Database, Clock, DollarSign } from "lucide-react"
import { motion } from "framer-motion"

export default function SonicBlockchainPage() {
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  const sonicFeatures = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Sub-Second Finality",
      description: "Transactions are confirmed in under 1 second, providing instant feedback for your interactions.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: "Ultra-Low Fees",
      description: "Transaction costs are fractions of a penny, making micro-rewards economically viable.",
    },
    {
      icon: <Network className="w-6 h-6 text-purple-400" />,
      title: "High Throughput",
      description: "Processes thousands of transactions per second without network congestion.",
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: "EVM Compatible",
      description: "Fully compatible with Ethereum tools and smart contracts for seamless integration.",
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
            href="/learn/blockchain-basics"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Blockchain Basics</span>
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
              <Database className="w-4 h-4 mr-2" />
              Sonic Blockchain
            </Badge>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              The{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Sonic Blockchain
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl text-pretty mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover why Relmn chose Sonic blockchain as the foundation for our decentralized knowledge network. Learn
              about its revolutionary speed, cost-effectiveness, and scalability features.
            </motion.p>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Sonic?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Sonic blockchain provides the perfect foundation for a knowledge-sharing platform that rewards creators
                fairly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sonicFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-3 rounded-lg bg-background/50">{feature.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Specifications</h2>
              <p className="text-lg text-muted-foreground">
                The numbers that make Sonic blockchain perfect for Relmn's use case.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-foreground mb-2">~0.8s</div>
                  <p className="text-muted-foreground text-sm">Block Time</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-foreground mb-2">2,000+</div>
                  <p className="text-muted-foreground text-sm">TPS Capacity</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-foreground mb-2">$0.001</div>
                  <p className="text-muted-foreground text-sm">Avg. Fee</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-foreground mb-2">100%</div>
                  <p className="text-muted-foreground text-sm">EVM Compatible</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Powers Relmn */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How Sonic Powers Relmn</h2>
              <p className="text-lg text-muted-foreground">
                Understanding how Sonic's features directly benefit the Relmn ecosystem.
              </p>
            </div>

            <div className="space-y-8">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Instant Publishing</h3>
                      <p className="text-muted-foreground">
                        When you publish a Scribble, it's confirmed on the blockchain in under a second. This means your
                        content is immediately available to the network and you can start earning rewards right away.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Micro-Rewards Viability</h3>
                      <p className="text-muted-foreground">
                        With transaction fees under $0.001, it's economically viable to send small rewards for quality
                        content. Even a $0.10 reward is profitable after fees, enabling true micro-monetization.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <Network className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Scalable Growth</h3>
                      <p className="text-muted-foreground">
                        As Relmn grows to millions of users, Sonic's high throughput ensures the network remains fast
                        and responsive. No congestion means consistent user experience regardless of network activity.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-border/50 backdrop-blur-sm text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Experience Sonic Speed?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Now that you understand Sonic blockchain, learn how to connect your wallet and start interacting with
                the network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/learn/blockchain-basics/wallet-connections"
                  className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-8 py-4"
                >
                  Learn About Wallets
                </Link>
                <Link
                  href="/learn/blockchain-basics"
                  className="font-medium transition-colors hover:text-foreground text-muted-foreground cursor-pointer flex items-center gap-2"
                >
                  Back to Blockchain Basics
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
