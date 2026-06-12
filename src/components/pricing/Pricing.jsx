import { motion } from 'framer-motion'
import { Check, Sparkles, Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { pkg, links, site, highlights } from '../../data/site'
import { scaleIn } from '../../utils/motion'

export default function Pricing() {
  return (
    <section id="pricing" className="relative section-pad py-24 lg:py-32 bg-navy-900/40">
      <div className="absolute inset-0 bg-navy-radial opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-3xl">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-[2.5rem] glass-gold p-1.5"
        >
          {/* glow ring */}
          <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_top,rgba(230,181,58,0.18),transparent_60%)]" />

          <div className="relative rounded-[2.2rem] bg-navy-950/80 p-8 sm:p-12 text-center backdrop-blur-xl">
            <span className="eyebrow mx-auto justify-center">
              <Sparkles className="h-4 w-4" /> Package Price
            </span>

            <h3 className="mt-5 font-serif text-2xl font-medium text-navy-100">{pkg.title}</h3>

            <div className="mt-4 flex items-end justify-center gap-2">
              <span className="font-serif text-6xl sm:text-7xl font-bold gold-text leading-none">
                {pkg.price}
              </span>
              <span className="mb-2 text-lg font-medium text-navy-200/80">/ {pkg.priceUnit}</span>
            </div>

            <p className="mt-4 mx-auto max-w-md text-navy-200/80">{pkg.priceSubtitle}</p>

            <div className="mx-auto mt-8 grid max-w-md gap-3 text-left sm:grid-cols-2">
              {highlights.map((h) => (
                <div key={h} className="flex items-start gap-2.5 text-sm text-navy-100/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" strokeWidth={3} /> {h}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href={links.whatsapp} target="_blank" rel="noreferrer" className="btn-gold w-full sm:w-auto text-base">
                <FaWhatsapp className="h-5 w-5" /> Book on WhatsApp
              </a>
              <a href={links.call} className="btn-ghost w-full sm:w-auto text-base">
                <Phone className="h-5 w-5" /> {site.phone}
              </a>
            </div>

            <p className="mt-6 text-xs uppercase tracking-widest text-navy-300/60">
              {pkg.tagline} · {pkg.duration}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
