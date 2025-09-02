"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 text-zinc-400 hover:text-[#e78a53] transition-colors duration-200 flex items-center space-x-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Back to Home</span>
      </Link>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <img src="https://cdn.tomeku.com/logo/Realm-Light-logo.svg" alt="Relmn Logo" className="h-8 w-auto" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-zinc-400">Last updated: {new Date().toLocaleDateString()}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 space-y-8"
        >
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#e78a53]">1. Acceptance of Terms</h2>
            <p className="text-zinc-300 leading-relaxed">
              By accessing and using Relmn, you accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#e78a53]">2. Use License</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of Relmn per device for personal, non-commercial
              transitory viewing only.
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#e78a53]">3. Blockchain Network</h2>
            <p className="text-zinc-300 leading-relaxed">
              Relmn operates on the Sonic blockchain. By using our service, you acknowledge that blockchain transactions
              are irreversible and that network fees may apply. You are responsible for understanding the risks
              associated with blockchain technology and cryptocurrency transactions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#e78a53]">4. Scribe Responsibilities</h2>
            <p className="text-zinc-300 leading-relaxed">
              As a Scribe on the Relmn network, you agree to publish accurate, original content and respect intellectual
              property rights. You are solely responsible for the content you publish and any consequences arising from
              it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#e78a53]">5. Fee Monetization</h2>
            <p className="text-zinc-300 leading-relaxed">
              Our Fee Monetization (FeeM) system rewards content creators based on engagement and network activity.
              Rewards are distributed according to our algorithmic protocols and may vary based on network conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#e78a53]">6. Disclaimer</h2>
            <p className="text-zinc-300 leading-relaxed">
              The materials on Relmn are provided on an 'as is' basis. Relmn makes no warranties, expressed or implied,
              and hereby disclaims and negates all other warranties including without limitation, implied warranties or
              conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual
              property.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#e78a53]">7. Contact Information</h2>
            <p className="text-zinc-300 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at legal@relmn.com
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  )
}
