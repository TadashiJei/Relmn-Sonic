"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Users, Mail, Wallet, User, Shield, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function AccountSetupPage() {
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  const setupSteps = [
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      title: "Email Registration",
      description: "Create your account with a professional email address",
      details: [
        "Use a professional email you check regularly",
        "Verify your email through the confirmation link",
        "Set a strong, unique password",
        "Enable two-factor authentication for security",
      ],
    },
    {
      icon: <Wallet className="w-6 h-6 text-green-400" />,
      title: "Wallet Connection",
      description: "Link your digital wallet to receive FeeM rewards",
      details: [
        "Install MetaMask or compatible wallet",
        "Connect to Sonic blockchain network",
        "Authorize wallet connection to Relmn",
        "Test transaction to verify setup",
      ],
    },
    {
      icon: <User className="w-6 h-6 text-purple-400" />,
      title: "Profile Completion",
      description: "Build your professional presence on the platform",
      details: [
        "Add professional headshot and bio",
        "List your areas of expertise",
        "Include relevant credentials and experience",
        "Set your content preferences and topics",
      ],
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-400" />,
      title: "Verification Process",
      description: "Complete identity verification for enhanced features",
      details: [
        "Submit identity verification documents",
        "Complete knowledge area assessment",
        "Review and accept Scribe agreement",
        "Activate your Scribe status",
      ],
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
            href="/learn/becoming-a-scribe"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Becoming a Scribe</span>
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
              Account Setup
            </Badge>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Setting Up Your{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Scribe Account
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl text-pretty mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Follow this comprehensive guide to create and configure your Relmn Scribe account. Each step is designed
              to ensure you have everything needed to start earning from your expertise.
            </motion.p>
          </div>
        </section>

        {/* Setup Steps */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12">
              {setupSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-background/50 rounded-xl flex items-center justify-center">
                            {step.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-2xl font-bold text-muted-foreground">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                          </div>
                          <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{detail}</span>
                              </div>
                            ))}
                          </div>
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
            <div className="bg-gradient-to-r from-red-500/10 to-orange-600/10 rounded-2xl p-8 border border-border/50 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Security Best Practices</h3>
                  <p className="text-muted-foreground">
                    Protect your account and earnings with these essential security measures.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Strong Passwords</h4>
                      <p className="text-sm text-muted-foreground">
                        Use unique, complex passwords for both your Relmn account and wallet
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Two-Factor Authentication</h4>
                      <p className="text-sm text-muted-foreground">
                        Enable 2FA on all accounts for an extra layer of security
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Wallet Security</h4>
                      <p className="text-sm text-muted-foreground">
                        Never share your private keys or seed phrases with anyone
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Regular Updates</h4>
                      <p className="text-sm text-muted-foreground">
                        Keep your wallet software and browser extensions updated
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready for the Next Step?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Once your account is set up, learn about our content guidelines to start creating valuable Scribbles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/learn/becoming-a-scribe/content-guidelines"
                  className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-8 py-4"
                >
                  Learn Content Guidelines
                </Link>
                <Link
                  href="/signup"
                  className="font-medium transition-colors hover:text-foreground text-muted-foreground cursor-pointer flex items-center gap-2"
                >
                  Start Account Setup
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
