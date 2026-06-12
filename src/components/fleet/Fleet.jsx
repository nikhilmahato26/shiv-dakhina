import { motion } from 'framer-motion'
import { Phone, Users, Gauge } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { fleet } from '../../data/fleet'
import { links } from '../../data/site'
import SectionHeading from '../common/SectionHeading'
import { fadeUp, stagger } from '../../utils/motion'

export default function Fleet() {
  return (
    <section id="fleet" className="relative section-pad py-24 lg:py-32">
      <div className="absolute inset-0 bg-navy-radial opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Premium Fleet"
          title="Travel in Signature Comfort"
          subtitle="Hand-picked, immaculately maintained SUVs — driven by professional, courteous chauffeurs for a safe and luxurious journey."
        />

        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {fleet.map((v) => (
            <motion.article
              key={v.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-3xl glass"
            >
              {/* Image with hover zoom */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={v.image}
                  alt={v.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full glass-gold px-3 py-1 text-xs font-semibold text-gold-200">
                  {v.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-white">{v.name}</h3>
                <p className="mt-1.5 text-sm text-navy-200/70">{v.description}</p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {v.specs.map((s) => (
                    <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
                      <div className="text-[0.65rem] uppercase tracking-wider text-navy-200/50">{s.label}</div>
                      <div className="text-sm font-semibold text-gold-100">{s.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={links.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 btn-gold !px-4 !py-2.5 text-sm"
                  >
                    Book Now
                  </a>
                  <a href={links.call} className="btn-ghost !px-4 !py-2.5 text-sm" aria-label="Call now">
                    <Phone className="h-4 w-4" /> Call
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-navy-200/70">
          <span className="flex items-center gap-2"><Users className="h-4 w-4 text-gold-400" /> 7-Seater SUVs</span>
          <span className="flex items-center gap-2"><Gauge className="h-4 w-4 text-gold-400" /> Climate Controlled</span>
          <span className="flex items-center gap-2"><FaWhatsapp className="h-4 w-4 text-gold-400" /> Instant WhatsApp Booking</span>
        </div>
      </div>
    </section>
  )
}
