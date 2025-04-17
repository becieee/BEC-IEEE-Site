"use client"

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion"
import { Users, BookOpen } from "lucide-react"

export default function Statistics({ society }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const getStats = useCallback(() => {
    if (!society) return { members: 0, publications: 0 };

    return {
      members: society.totalMembers || 0,
      publications: society.totalPublications || 0,
    };
  }, [society]);

  const [stats, setStats] = useState(getStats());
  const [countMembers, setCountMembers] = useState(0);
  const [countPublications, setCountPublications] = useState(0);

  useEffect(() => {
    setStats(getStats());
  }, [getStats]);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const frameRate = 16;
      const steps = duration / frameRate;

      const membersStep = stats.members / steps;
      const publicationsStep = stats.publications / steps;

      let startTime = null;
      let animationFrameId;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const factor = Math.min(progress / duration, 1);

        setCountMembers(Math.floor(factor * stats.members));
        setCountPublications(Math.floor(factor * stats.publications));

        if (progress < duration) {
          animationFrameId = requestAnimationFrame(step);
        }
      };

      animationFrameId = requestAnimationFrame(step);

      return () => cancelAnimationFrame(animationFrameId);
    }
  }, [isInView, stats]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
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
        <h2 className="text-3xl md:text-4xl font-bold text-white">Society Statistics</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgb(52,4,91)] to-purple-900 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-[rgb(52,4,91)]/50 shadow-[0_5px_15px_rgba(0,0,0,0.35)] hover:shadow-[0_5px_25px_rgba(52,4,91,0.5)] transition-all duration-300 flex flex-col items-center text-center">
            <div className="p-3 bg-gradient-to-br from-[rgb(52,4,91)] to-purple-950 rounded-full shadow-[0_0_10px_rgba(52,4,91,0.3)] mb-4">
              <Users className="w-6 h-6 text-purple-200" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">{countMembers.toLocaleString()}</h3>
            <p className="text-purple-300">Members</p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgb(52,4,91)] to-purple-900 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-[rgb(52,4,91)]/50 shadow-[0_5px_15px_rgba(0,0,0,0.35)] hover:shadow-[0_5px_25px_rgba(52,4,91,0.5)] transition-all duration-300 flex flex-col items-center text-center">
            <div className="p-3 bg-gradient-to-br from-[rgb(52,4,91)] to-purple-950 rounded-full shadow-[0_0_10px_rgba(52,4,91,0.3)] mb-4">
              <BookOpen className="w-6 h-6 text-purple-200" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">{countPublications}</h3>
            <p className="text-purple-300">Publications</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
