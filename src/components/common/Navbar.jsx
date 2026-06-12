import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import useScrolled from '../../hooks/useScrolled'
import { navLinks, links, site } from '../../data/site'
import Logo from './Logo'

export default function Navbar() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <nav
        className={`section-pad mx-auto flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'glass mx-3 sm:mx-6 rounded-2xl py-3'
            : 'bg-transparent py-2'
        }`}
      >
        <a href="#home" className="shrink-0">
          <Logo />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-navy-100/80 hover:text-gold-300 transition-colors
                           after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-400
                           after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href={links.call} className="btn-ghost !px-5 !py-2.5 text-sm">
            <Phone size={16} /> {site.phone}
          </a>
          <a href={links.whatsapp} target="_blank" rel="noreferrer" className="btn-gold !px-6 !py-2.5 text-sm">
            Book Now
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-11 w-11 place-items-center rounded-xl glass text-gold-300"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-3 sm:mx-6 mt-2 glass rounded-2xl p-5"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-navy-100/90 hover:bg-gold-400/10 hover:text-gold-200 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <a href={links.call} className="btn-ghost !py-3 text-sm">
                <Phone size={16} /> Call
              </a>
              <a href={links.whatsapp} target="_blank" rel="noreferrer" className="btn-gold !py-3 text-sm">
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
