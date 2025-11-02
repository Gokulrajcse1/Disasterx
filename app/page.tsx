"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-10" />

      <div className="flex flex-col items-center justify-center min-h-screen text-center relative z-10 px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          DisasterX
        </motion.h1>

        <motion.p
          className="text-gray-700 text-lg md:text-xl max-w-2xl mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          AI-powered, drone-enabled, and offline-ready disaster management
          platform for real-time alerting and recovery.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link
            href="/login"
            className="bg-blue-700 text-white px-10 py-4 rounded-xl shadow-lg hover:scale-105 hover:bg-blue-800 transition transform duration-300 text-lg font-semibold"
          >
            Get Started
          </Link>
        </motion.div>

        <motion.p
          className="text-gray-600 mt-10 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Empowering communities to respond faster and safer 🌍
        </motion.p>
      </div>
    </div>
  );
}
