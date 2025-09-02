"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-zinc-400">Last updated: {new Date().toLocaleDateString()}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 space-y-8"
        >
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#e78a53]">1. Information We Collect</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you create an account, publish content, or
              contact us for support.
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2">
              <li>Account information (email, username, profile data)</li>
              <li>Content you publish as Scribbles</li>
              <li>Blockchain wallet addresses and transaction data</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#e78a53]">2. How We Use Your Information</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and distribute FeeM rewards</li>
              <li>Communicate with you about our services</li>
              <li>Ensure network security and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#e78a53]">3. Blockchain Data</h2>
            <p className="text-zinc-300 leading-relaxed">
              As a blockchain-based platform, certain data is stored permanently on the Sonic blockchain and is publicly
              accessible. This includes published Scribbles, transaction records, and wallet interactions. This data
              cannot be deleted or modified once recorded on the blockchain.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#e78a53]">4. Data Sharing</h2>
            <p className="text-zinc-300 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your
              consent, except as described in this policy. We may share information in response to legal requests or to
              protect our rights and the safety of our users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#e78a53]">5. Data Security</h2>
            <p className="text-zinc-300 leading-relaxed">
              We implement appropriate security measures to protect your personal information. However, no method of
              transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#e78a53]">6. Your Rights</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2">
              <li>Access and update your account information</li>
              <li>Delete your account (note: blockchain data remains immutable)</li>
              <li>Opt out of certain communications</li>
              <li>Request information about data we collect</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#e78a53]">7. Changes to This Policy</h2>
            <p className="text-zinc-300 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new
              policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#e78a53]">8. Contact Us</h2>
            <p className="text-zinc-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at privacy@relmn.com
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  )
}
