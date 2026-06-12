import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { Phone, ArrowUp, CalendarCheck } from 'lucide-react'
import { links } from '../../data/site'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Sticky action stack */}
      <div className="fixed right-4 sm:right-5 bottom-5 z-40 flex flex-col items-center gap-3">
        <a
          href={links.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/40 transition-transform hover:scale-110"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
          <FaWhatsapp className="relative h-7 w-7" />
        </a>

        <a
          href={links.call}
          aria-label="Call now"
          className="grid h-14 w-14 place-items-center rounded-full bg-gold-gradient text-navy-950 shadow-gold transition-transform hover:scale-110"
        >
          <Phone className="h-6 w-6" />
        </a>

        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top"
              className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-full glass text-gold-300 transition-transform hover:scale-110"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Sticky Book Now bar on mobile */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40">
        <a
          href={links.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 bg-gold-gradient py-3.5 font-semibold text-navy-950 shadow-[0_-8px_30px_-8px_rgba(230,181,58,0.5)]"
        >
          <CalendarCheck className="h-5 w-5" /> Book Your Divine Journey · ₹6,999
        </a>
      </div>
    </>
  )
}
