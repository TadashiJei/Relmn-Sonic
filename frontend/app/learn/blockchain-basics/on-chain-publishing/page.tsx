"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Database, Shield, Clock, Globe, CheckCircle, FileText, Hash, Lock } from "lucide-react"
import { motion } from "framer-motion"

export default function OnChainPublishingPage() {
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  const publishingSteps = [
    {
      step: 1,
      title: "Create Your Scribble",
      description: "Write your insight, tip, or knowledge piece in the Relmn editor.",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      step: 2,
      title: "Content Hashing",
      description: "Your content is converted into a unique cryptographic hash for verification.",
      icon: <Hash className="w-5 h-5" />,
    },
    {
      step: 3,
      title: "Blockchain Transaction",
      description: "The hash and metadata are submitted to the Sonic blockchain in a transaction.",
      icon: <Database className="w-5 h-5" />,
    },
    {
      step: 4,
      title: "Immutable Storage",
      description: "Once confirmed, your content becomes permanently stored and verifiable.",
      icon: <Lock className="w-5 h-5" />,
    },
  ]

  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: "Censorship Resistance",
      description: "No single entity can delete or modify your published content once it's on-chain.",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      title: "Permanent Timestamps",
      description: "Blockchain provides immutable proof of when your content was first published.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-400" />,
      title: "Authenticity Verification",
      description: "Anyone can verify that content came from your wallet address and hasn't been tampered with.",
    },
    {
      icon: <Globe className="w-6 h-6 text-yellow-400" />,
      title: "Global Accessibility",
      description: "Your content is accessible worldwide through the decentralized blockchain network.",
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
              On-Chain Publishing
            </Badge>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Publishing{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                On-Chain
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl text-pretty mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover how your content gets permanently stored on the blockchain, creating an immutable record of your
              knowledge contributions. Learn about the benefits and process of decentralized publishing.
            </motion.p>
          </div>
        </section>

        {/* What is On-Chain Publishing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What is On-Chain Publishing?</h2>
              <p className="text-lg text-muted-foreground">
                Understanding how blockchain technology revolutionizes content publishing.
              </p>
            </div>

            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Database className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Decentralized Content Storage</h3>
                    <p className="text-muted-foreground mb-4">
                      On-chain publishing means your content is stored directly on the blockchain, distributed across
                      thousands of nodes worldwide. Unlike traditional platforms where your content lives on company
                      servers, blockchain storage is permanent, transparent, and censorship-resistant.
                    </p>
                    <p className="text-muted-foreground">
                      When you publish a Scribble on Relmn, you're not just uploading to a website – you're creating a
                      permanent record in the global blockchain ledger that will exist as long as the network operates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Publishing Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Publishing Process</h2>
              <p className="text-lg text-muted-foreground">
                Step-by-step breakdown of how your content gets stored on the blockchain.
              </p>
            </div>

            <div className="space-y-6">
              {publishingSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">{step.step}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="text-muted-foreground">{step.icon}</div>
                            <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                          </div>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Benefits of On-Chain Publishing</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Why blockchain-based publishing is superior to traditional content platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
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
                        <div className="flex-shrink-0 p-3 rounded-lg bg-background/50">{benefit.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                          <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Traditional vs On-Chain */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Traditional vs On-Chain Publishing
              </h2>
              <p className="text-lg text-muted-foreground">
                See the key differences between centralized and decentralized content publishing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-red-500/5 border-red-500/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Traditional Publishing</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-red-400">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-sm">Platform controls your content</span>
                    </div>
                    <div className="flex items-center gap-3 text-red-400">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-sm">Can be deleted or censored</span>
                    </div>
                    <div className="flex items-center gap-3 text-red-400">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-sm">Revenue sharing with platform</span>
                    </div>
                    <div className="flex items-center gap-3 text-red-400">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-sm">Algorithm determines visibility</span>
                    </div>
                    <div className="flex items-center gap-3 text-red-400">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-sm">No ownership verification</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-500/5 border-green-500/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6 text-center">On-Chain Publishing</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">You own your content forever</span>
                    </div>
                    <div className="flex items-center gap-3 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Censorship resistant</span>
                    </div>
                    <div className="flex items-center gap-3 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Direct rewards via FeeM</span>
                    </div>
                    <div className="flex items-center gap-3 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Transparent, merit-based discovery</span>
                    </div>
                    <div className="flex items-center gap-3 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Cryptographic proof of authorship</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Implementation</h2>
              <p className="text-lg text-muted-foreground">
                How Relmn implements efficient on-chain publishing on Sonic blockchain.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Hash className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Content Hashing</h3>
                      <p className="text-muted-foreground">
                        Your content is processed through cryptographic hashing (SHA-256) to create a unique
                        fingerprint. This hash is stored on-chain while the full content can be retrieved through IPFS
                        or similar decentralized storage networks.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Database className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Smart Contract Storage</h3>
                      <p className="text-muted-foreground">
                        Metadata including content hash, author address, timestamp, and FeeM parameters are stored in
                        smart contracts on Sonic blockchain. This creates an immutable record that can be verified by
                        anyone.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Decentralized Retrieval</h3>
                      <p className="text-muted-foreground">
                        Content can be accessed from multiple sources including IPFS nodes, ensuring availability even
                        if Relmn's servers are offline. The blockchain record serves as the authoritative source of
                        truth.
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
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-600/10 rounded-2xl p-8 border border-border/50 backdrop-blur-sm text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Publish On-Chain?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Now that you understand on-chain publishing, you're ready to become a Scribe and start sharing your
                knowledge with the decentralized world.
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
