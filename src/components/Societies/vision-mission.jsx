"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Target, Compass } from "lucide-react"

export default function VisionMission({ vision, mission }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="space-y-12"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-1 bg-gradient-to-b from-purple-500 to-[rgb(52,4,91)] rounded-full"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Vision & Mission</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgb(52,4,91)] to-purple-900 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-[rgb(52,4,91)]/50 shadow-[0_5px_15px_rgba(0,0,0,0.35)] hover:shadow-[0_5px_25px_rgba(52,4,91,0.5)] transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-[rgb(52,4,91)] to-purple-950 rounded-full shadow-[0_0_10px_rgba(52,4,91,0.3)]">
                <Target className="w-6 h-6 text-purple-200" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">{vision}</p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgb(52,4,91)] to-purple-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-[rgb(52,4,91)]/50 shadow-[0_5px_15px_rgba(0,0,0,0.35)] hover:shadow-[0_5px_25px_rgba(52,4,91,0.5)] transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-[rgb(52,4,91)] to-purple-950 rounded-full shadow-[0_0_10px_rgba(52,4,91,0.3)]">
                <Compass className="w-6 h-6 text-purple-200" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">{mission}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

