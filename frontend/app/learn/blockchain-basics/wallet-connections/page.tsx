"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Wallet, Shield, Key, Smartphone, Monitor, Download, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function WalletConnectionsPage() {
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  const walletTypes = [
    {
      icon: <Monitor className="w-6 h-6 text-blue-400" />,
      title: "Browser Extension Wallets",
      description: "MetaMask, Phantom, and other browser-based wallets for desktop users.",
      pros: ["Easy to use", "Wide compatibility", "Secure"],
    },
    {
      icon: <Smartphone className="w-6 h-6 text-green-400" />,
      title: "Mobile Wallets",
      description: "Trust Wallet, Coinbase Wallet, and mobile-first wallet solutions.",
      pros: ["Always accessible", "Built-in DApp browser", "QR code scanning"],
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: "Hardware Wallets",
      description: "Ledger, Trezor, and other cold storage solutions for maximum security.",
      pros: ["Highest security", "Offline storage", "Multi-chain support"],
    },
  ]

  const connectionSteps = [
    {
      step: 1,
      title: "Install a Wallet",
      description: "Download and install a compatible wallet like MetaMask from the official website.",
    },
    {
      step: 2,
      title: "Create or Import Account",
      description: "Set up a new wallet or import an existing one using your seed phrase.",
    },
    {
      step: 3,
      title: "Add Sonic Network",
      description: "Configure your wallet to connect to the Sonic blockchain network.",
    },
    {
      step: 4,
      title: "Connect to Relmn",
      description: "Visit Relmn and click 'Connect Wallet' to link your account.",
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
              <Wallet className="w-4 h-4 mr-2" />
              Wallet Connections
            </Badge>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Connect Your{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Digital Wallet
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl text-pretty mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Learn how to set up and connect a digital wallet to interact with Relmn. Your wallet is your key to
              publishing content, earning rewards, and participating in the decentralized knowledge network.
            </motion.p>
          </div>
        </section>

        {/* What is a Wallet */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What is a Digital Wallet?</h2>
              <p className="text-lg text-muted-foreground">
                Think of it as your digital identity and bank account combined.
              </p>
            </div>

            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Key className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Your Digital Identity</h3>
                    <p className="text-muted-foreground mb-4">
                      A digital wallet is a software application that stores your private keys and allows you to
                      interact with blockchain networks. It's like having a secure digital ID card and bank account in
                      one.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Stores your cryptocurrency and tokens
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Signs transactions to prove ownership
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Connects to decentralized applications (DApps)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Receives rewards from Fee Monetization
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Wallet Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Types of Wallets</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the wallet type that best fits your needs and security preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {walletTypes.map((wallet, index) => (
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
                        <div className="p-3 rounded-lg bg-background/50">{wallet.icon}</div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 text-center">{wallet.title}</h3>
                      <p className="text-muted-foreground mb-4 text-center">{wallet.description}</p>
                      <div className="space-y-2">
                        {wallet.pros.map((pro, proIndex) => (
                          <div key={proIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            {pro}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Connection Steps */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How to Connect</h2>
              <p className="text-lg text-muted-foreground">
                Follow these simple steps to connect your wallet to Relmn.
              </p>
            </div>

            <div className="space-y-6">
              {connectionSteps.map((step, index) => (
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
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">{step.step}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
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

        {/* Security Tips */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Security Best Practices</h2>
              <p className="text-lg text-muted-foreground">
                Keep your wallet and funds secure with these essential tips.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">Secure Your Seed Phrase</h3>
                  <p className="text-muted-foreground text-sm">
                    Write down your 12-24 word seed phrase and store it offline. Never share it with anyone or store it
                    digitally.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Key className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">Use Strong Passwords</h3>
                  <p className="text-muted-foreground text-sm">
                    Create a unique, strong password for your wallet. Consider using a password manager for added
                    security.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Download className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">Download from Official Sources</h3>
                  <p className="text-muted-foreground text-sm">
                    Only download wallets from official websites or app stores. Verify URLs and check reviews before
                    installing.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">Verify Transactions</h3>
                  <p className="text-muted-foreground text-sm">
                    Always double-check transaction details before confirming. Verify recipient addresses and amounts.
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
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Connect?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Now that you understand wallets, learn about on-chain publishing and how your content gets stored on the
                blockchain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/learn/blockchain-basics/on-chain-publishing"
                  className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-8 py-4"
                >
                  Learn On-Chain Publishing
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
