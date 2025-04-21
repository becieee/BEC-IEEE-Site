"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Calendar, MapPin, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

export default function Events({ events }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeIndex, setActiveIndex] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1))
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
        <h2 className="text-3xl md:text-4xl font-bold text-white">Upcoming Events</h2>
      </div>

      {events.length === 0 ? (
        <div className="text-center py-16 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[rgb(52,4,91)]/30 shadow-[0_5px_15px_rgba(0,0,0,0.35)]">
          <Calendar className="w-16 h-16 mx-auto text-[rgb(52,4,91)] mb-4 opacity-50" />
          <p className="text-gray-300 text-xl">No upcoming events at the moment.</p>
          <p className="text-gray-500">Check back later for new events!</p>
        </div>
      ) : (
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgb(52,4,91)] to-purple-900 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-[rgb(52,4,91)]/50 shadow-[0_5px_15px_rgba(0,0,0,0.35)] hover:shadow-[0_5px_25px_rgba(52,4,91,0.5)] transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-2/5 h-60 md:h-auto relative">
                    <img
                      src={events[activeIndex].image || "/placeholder.svg?height=400&width=600"}
                      alt={events[activeIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-[rgb(52,4,91)] to-purple-800 text-white px-4 py-2 m-3 rounded-md text-sm font-medium shadow-lg">
                      <Calendar className="w-4 h-4 inline-block mr-2" />
                      {events[activeIndex].date}
                    </div>
                  </div>

                  <div className="p-8 md:w-3/5">
                    <h3 className="text-2xl font-bold text-white mb-4">{events[activeIndex].title}</h3>

                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-purple-200">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                        {events[activeIndex].location}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6">{events[activeIndex].description}</p>

                    {events[activeIndex].registrationLink && (
                      <a
                        href={events[activeIndex].registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[rgb(52,4,91)] to-purple-900 text-white rounded-md hover:from-[rgb(72,14,111)] hover:to-purple-800 transition-colors shadow-[0_0_10px_rgba(52,4,91,0.3)] hover:shadow-[0_0_15px_rgba(52,4,91,0.5)] group"
                      >
                        Register Now
                        <ExternalLink className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {events.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-gradient-to-r from-[rgb(52,4,91)] to-purple-800 text-white p-2 rounded-full shadow-[0_0_10px_rgba(52,4,91,0.3)] hover:shadow-[0_0_15px_rgba(52,4,91,0.5)] z-10 transition-all duration-300 hover:scale-110"
                aria-label="Previous event"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-gradient-to-r from-[rgb(52,4,91)] to-purple-800 text-white p-2 rounded-full shadow-[0_0_10px_rgba(52,4,91,0.3)] hover:shadow-[0_0_15px_rgba(52,4,91,0.5)] z-10 transition-all duration-300 hover:scale-110"
                aria-label="Next event"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {events.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-[rgb(52,4,91)] shadow-[0_0_5px_rgba(52,4,91,0.7)]"
                      : "bg-purple-900/50 hover:bg-purple-800/70"
                  }`}
                  aria-label={`Go to event ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </motion.div>
  )
}

