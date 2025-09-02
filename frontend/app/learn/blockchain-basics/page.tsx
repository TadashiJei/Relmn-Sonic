"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Shield, Zap, Globe, Wallet, Database, Network } from "lucide-react"
import { motion } from "framer-motion"

export default function BlockchainBasicsPage() {
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

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
              <Shield className="w-4 h-4 mr-2" />
              Blockchain Basics
            </Badge>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Understanding{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Blockchain Technology
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl text-pretty mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Learn the fundamental concepts behind blockchain technology and how it powers Relmn's decentralized
              knowledge network. No technical background required - we'll guide you through everything you need to know.
            </motion.p>
          </div>
        </section>

        {/* Key Concepts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Key Concepts</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Master these essential blockchain concepts to fully understand how Relmn works.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href="/learn/blockchain-basics/sonic-blockchain">
                  <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-colors cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-lg bg-background/50">
                          <Database className="w-6 h-6 text-blue-400" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Sonic Blockchain</h3>
                      <p className="text-muted-foreground">
                        The high-speed, low-cost blockchain that powers Relmn's decentralized knowledge network.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href="/learn/blockchain-basics/wallet-connections">
                  <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-colors cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-lg bg-background/50">
                          <Wallet className="w-6 h-6 text-green-400" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Wallet Connections</h3>
                      <p className="text-muted-foreground">
                        How to connect your digital wallet to interact with the Relmn platform and receive rewards.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2 * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href="/learn/blockchain-basics/on-chain-publishing">
                  <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-colors cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-lg bg-background/50">
                          <Network className="w-6 h-6 text-purple-400" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">On-chain Publishing</h3>
                      <p className="text-muted-foreground">
                        Understanding how your content is permanently stored and verified on the blockchain.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Blockchain */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What is Blockchain?</h2>
              <p className="text-lg text-muted-foreground">
                A simple explanation of the technology that makes decentralized knowledge networks possible.
              </p>
            </div>

            <div className="space-y-8">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Database className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Distributed Ledger</h3>
                      <p className="text-muted-foreground">
                        Think of blockchain as a digital ledger (like a record book) that's copied across thousands of
                        computers worldwide. When you publish content on Relmn, it's recorded in this ledger, making it
                        permanent and tamper-proof.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Decentralization</h3>
                      <p className="text-muted-foreground">
                        Unlike traditional platforms controlled by single companies, blockchain networks are
                        decentralized. This means no single entity can censor, delete, or manipulate your content once
                        it's published on Relmn.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Smart Contracts</h3>
                      <p className="text-muted-foreground">
                        These are self-executing contracts with terms directly written into code. On Relmn, smart
                        contracts automatically handle reward distribution through FeeM, ensuring you're paid fairly
                        without human intervention.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Sonic Blockchain */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Sonic Blockchain?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Relmn chose Sonic blockchain for its superior performance and user experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Lightning Fast</h3>
                  <p className="text-muted-foreground text-sm">
                    Transactions complete in seconds, not minutes or hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <Globe className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Low Costs</h3>
                  <p className="text-muted-foreground text-sm">
                    Minimal transaction fees make micro-rewards economically viable.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Secure</h3>
                  <p className="text-muted-foreground text-sm">
                    Enterprise-grade security protects your content and earnings.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <Network className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Scalable</h3>
                  <p className="text-muted-foreground text-sm">
                    Handles millions of users without compromising performance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-600/10 rounded-2xl p-8 border border-border/50 backdrop-blur-sm text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Now that you understand blockchain basics, you're ready to join the Relmn network and start sharing your
                knowledge with the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/learn/becoming-a-scribe"
                  className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-8 py-4"
                >
                  Become a Scribe
                </Link>
                <Link
                  href="/signup"
                  className="font-medium transition-colors hover:text-foreground text-muted-foreground cursor-pointer flex items-center gap-2"
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
