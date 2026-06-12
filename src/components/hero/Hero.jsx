import { motion } from 'framer-motion'
import { Calendar, Clock, Utensils, Star, ChevronDown, Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { pkg, links, site, ux } from '../../data/site'
import { stagger, fadeUp, fromRight } from '../../utils/motion'

const infoCards = [
  { icon: Clock, label: 'Duration', value: '3D / 2N' },
  { icon: Utensils, label: 'Cuisine', value: 'Pure Veg' },
  { icon: Calendar, label: 'Departs', value: 'Every Friday' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background temple at sunrise */}
      <div className="absolute inset-0">
        <img
          src="https://s7ap1.scene7.com/is/image/incredibleindia/puri-beach-puri-odisha-1-attr-hero?qlt=82&ts=1726663799757"
          alt="Jagannath Temple at sunrise"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
      </div>

      <div className="relative section-pad mx-auto max-w-7xl min-h-screen grid lg:grid-cols-2 items-center gap-12 pt-32 pb-24 lg:py-0">
        {/* Left — typography */}
        <motion.div variants={stagger(0.14)} initial="hidden" animate="show">
          {/* <motion.span variants={fadeUp} className="eyebrow">
            <span className="h-px w-8 bg-gold-400/60" /> {site.tagline}
          </motion.span> */}

          <motion.h1
            variants={fadeUp}
            className="mt-12 font-serif font-semibold text-white text-shadow-lg leading-[0.95]
                       text-5xl sm:text-6xl lg:text-7xl xl:text-[5.2rem]"
          >
            Odisha <span className="gold-text">Divine</span>
            <br /> Veg Tour
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-navy-100/90">
            <span className="text-lg sm:text-xl font-medium">{pkg.duration}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            <span className="text-lg sm:text-xl font-medium">Mahaprasad Included</span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            <span className="text-lg sm:text-xl font-medium">Every Friday Departure</span>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-navy-200/80">
            A premium, pure-vegetarian pilgrimage through the sacred heart of Odisha —
            Bhubaneswar, Konark & Puri — in the comfort of luxury SUVs.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#pricing" className="btn-gold text-base">
              Book Now · {pkg.price}
            </a>
            <a href={links.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost text-base">
              <FaWhatsapp className="h-5 w-5" /> WhatsApp
            </a>
            <a href={links.call} className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-navy-100/80 hover:text-gold-300 transition">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
          </motion.div>

          {/* Glass info cards */}
          <motion.div variants={fadeUp} className="mt-10 grid grid-cols-3 gap-3 max-w-lg">
            {infoCards.map((c) => (
              <div key={c.label} className="glass rounded-2xl p-4 text-center">
                <c.icon className="mx-auto h-6 w-6 text-gold-300" />
                <div className="mt-2 font-semibold text-white">{c.value}</div>
                <div className="text-[0.65rem] uppercase tracking-widest text-navy-200/60">{c.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — large floating temple image + rating card */}
        <motion.div
          variants={fromRight}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative animate-float-slow">
            <div className="overflow-hidden rounded-[2.5rem] border border-gold-400/20 shadow-2xl">
              <img
                src="https://thegreenfortune.com/wp-content/uploads/2025/09/download.jpeg"
                alt="Sacred temple of Odisha"
                className="h-[34rem] w-full object-cover"
              />
            </div>

            <div className="absolute -left-8 top-10 glass-gold rounded-2xl p-4 backdrop-blur-xl animate-float">
              <div className="flex items-center gap-1 text-gold-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="mt-1 text-sm font-semibold text-white">Trusted by Pilgrims</p>
              <p className="text-xs text-navy-100/70">Small Premium Groups</p>
            </div>

            <div className="absolute -right-6 bottom-12 glass rounded-2xl px-5 py-4 animate-float-slow">
              <div className="font-serif text-3xl font-semibold gold-text">{pkg.price}</div>
              <p className="text-xs text-navy-100/70">{pkg.priceUnit}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#fleet"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 text-navy-200/60"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </motion.a>
    </section>
  )
}
