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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {committee.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              className="relative group perspective"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              onClick={() => setSelectedMember(member)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgb(52,4,91)] to-purple-900 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-[rgb(52,4,91)]/50 shadow-[0_5px_15px_rgba(0,0,0,0.35)] hover:shadow-[0_5px_25px_rgba(52,4,91,0.5)] transition-all duration-300 h-full">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-[rgb(52,4,91)]/30 to-black relative">
                  <img
                    src={member.image || "/placeholder.svg?height=400&width=400"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-300 ${
                      hoveredMember === member.id ? "opacity-80" : "opacity-50"
                    }`}
                  ></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-purple-300 font-medium mb-3">{member.position}</p>

                  {member.bio && <p className="text-gray-400 text-sm mb-4 line-clamp-2">{member.bio}</p>}

                  <div className="flex space-x-2 mt-4">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 text-gray-400 hover:text-purple-300 hover:bg-[rgb(52,4,91)]/30 rounded-full transition-colors"
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
                        className="p-2 text-gray-400 hover:text-purple-300 hover:bg-[rgb(52,4,91)]/30 rounded-full transition-colors"
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
                        className="p-2 text-gray-400 hover:text-purple-300 hover:bg-[rgb(52,4,91)]/30 rounded-full transition-colors"
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
                        className="p-2 text-gray-400 hover:text-purple-300 hover:bg-[rgb(52,4,91)]/30 rounded-full transition-colors"
                        aria-label={`${member.name}'s website`}
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[rgb(52,4,91)] to-purple-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </motion.div>
          ))}
        </div>
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

