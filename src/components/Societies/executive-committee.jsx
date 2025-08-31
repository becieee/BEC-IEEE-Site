"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Mail, Linkedin, Twitter, Globe, X } from "lucide-react"

export default function ExecutiveCommittee({ committee }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [hoveredMember, setHoveredMember] = useState(null)
  const [selectedMember, setSelectedMember] = useState(null)

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
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
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 text-center z-10">
              <div className="relative" style={{ opacity: 1, transform: 'none' }}>
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[rgb(52,4,91)] via-[rgb(52,4,91)] to-black opacity-75 blur-xl"></div>
                <h2 className="relative text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-100">Executive Committee</h2>
              </div>
            </div>
      </div>

      {committee.length === 0 ? (
        <div className="text-center py-16 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[rgb(52,4,91)]/30 shadow-[0_5px_15px_rgba(0,0,0,0.35)]">
          <p className="text-gray-300 text-xl">No committee members listed.</p>
        </div>
      ) : (
        <motion.div 
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {committee.map((member) => (
    <motion.div
      key={member.id}
      variants={itemVariants}
      whileHover={{
        scale: 1.02,
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="relative group cursor-pointer"
      onMouseEnter={() => setHoveredMember(member.id)}
      onMouseLeave={() => setHoveredMember(null)}
      onClick={() => setSelectedMember(member)}
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition-all duration-500 group-hover:blur-md"></div>
      
      {/* Main card */}
      <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
        
        {/* Image container */}
        <div className="flex justify-center pt-6">
          <div className="relative w-40 h-40 overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/30">
            <img
              src={member.image || "/placeholder.svg?height=400&width=400"}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 ${
                hoveredMember === member.id ? "opacity-60" : "opacity-40"
              }`}
            ></div>
          </div>
          
          {/* Position badge */}
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-purple-300 text-xs font-medium">{member.position}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
            {member.name}
          </h3>
          
          {member.bio && (
            <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
              {member.bio}
            </p>
          )}

          {/* Social links */}
          <div className="flex space-x-3">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="p-2.5 text-gray-400 hover:text-white hover:bg-purple-600/20 rounded-xl transition-all duration-300 hover:scale-110"
                aria-label={`Email ${member.name}`}
              >
                <Mail className="w-5 h-5" />
              </a>
            )}

            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-gray-400 hover:text-white hover:bg-blue-600/20 rounded-xl transition-all duration-300 hover:scale-110"
                aria-label={`${member.name}'s LinkedIn profile`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}

            {member.twitter && (
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-gray-400 hover:text-white hover:bg-sky-600/20 rounded-xl transition-all duration-300 hover:scale-110"
                aria-label={`${member.name}'s Twitter profile`}
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}

            {member.website && (
              <a
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-gray-400 hover:text-white hover:bg-green-600/20 rounded-xl transition-all duration-300 hover:scale-110"
                aria-label={`${member.name}'s website`}
              >
                <Globe className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </motion.div>
  ))}
</motion.div>
      )}

      {/* Member Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-[rgb(52,4,91)]/50 shadow-[0_5px_25px_rgba(52,4,91,0.5)] max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-2 right-2">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="p-2 text-gray-400 hover:text-white bg-black/50 rounded-full"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="md:flex">
                <div className="md:w-2/5">
                  <div className="aspect-square bg-gradient-to-br from-[rgb(52,4,91)]/30 to-black">
                    <img
                      src={selectedMember.image || "/placeholder.svg?height=400&width=400"}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="p-6 md:w-3/5">
                  <h3 className="text-2xl font-bold text-white">{selectedMember.name}</h3>
                  <p className="text-purple-300 font-medium mb-4">{selectedMember.position}</p>

                  {selectedMember.bio && <p className="text-gray-300 mb-6">{selectedMember.bio}</p>}

                  <div className="flex space-x-3 mt-4">
                    {selectedMember.email && (
                      <a
                        href={`mailto:${selectedMember.email}`}
                        className="p-2 text-gray-400 hover:text-purple-300 hover:bg-[rgb(52,4,91)]/30 rounded-full transition-colors"
                        aria-label={`Email ${selectedMember.name}`}
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}

                    {selectedMember.linkedin && (
                      <a
                        href={selectedMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-purple-300 hover:bg-[rgb(52,4,91)]/30 rounded-full transition-colors"
                        aria-label={`${selectedMember.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}

                    {selectedMember.twitter && (
                      <a
                        href={selectedMember.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-purple-300 hover:bg-[rgb(52,4,91)]/30 rounded-full transition-colors"
                        aria-label={`${selectedMember.name}'s Twitter profile`}
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}

                    {selectedMember.website && (
                      <a
                        href={selectedMember.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-purple-300 hover:bg-[rgb(52,4,91)]/30 rounded-full transition-colors"
                        aria-label={`${selectedMember.name}'s website`}
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

