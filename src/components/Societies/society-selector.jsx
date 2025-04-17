"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function SocietySelector({ societies, selectedSociety, onSelect }) {
  const [isOpen, setIsOpen] = useState(false)

  const selected = societies.find((s) => s.id === selectedSociety)

  return (
    <div className="relative w-full md:w-64">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-gradient-to-r from-[rgb(52,4,91)]/80 to-black/80 border border-purple-700/30 rounded-lg px-4 py-2 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-[0_0_10px_rgba(52,4,91,0.2)] hover:shadow-[0_0_15px_rgba(52,4,91,0.3)] transition-all duration-300"
      >
        <div className="flex items-center">
          {selected?.logo && (
            <img
              src={selected.logo || "/placeholder.svg"}
              alt={`${selected.name} logo`}
              className="w-6 h-6 mr-2 object-contain"
            />
          )}
          <span className="font-medium text-white">{selected?.name || "Select a society"}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-purple-300 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 mt-1 w-full bg-gradient-to-b from-[rgb(52,4,91)]/90 to-black/90 backdrop-blur-md border border-purple-700/30 rounded-lg shadow-lg max-h-60 overflow-auto"
          >
            <ul className="py-1">
              {societies.map((society) => (
                <li key={society.id}>
                  <button
                    onClick={() => {
                      onSelect(society.id)
                      setIsOpen(false)
                    }}
                    className={`w-full text-left px-4 py-2 flex items-center hover:bg-[rgb(52,4,91)]/30 transition-colors duration-200 ${
                      society.id === selectedSociety ? "bg-[rgb(52,4,91)]/50 text-white" : "text-purple-100"
                    }`}
                  >
                    {society.logo && (
                      <img
                        src={society.logo || "/placeholder.svg"}
                        alt={`${society.name} logo`}
                        className="w-6 h-6 mr-2 object-contain"
                      />
                    )}
                    {society.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

