import { motion } from 'framer-motion'
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react'
import { pkg, highlights, ux } from '../../data/site'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import { fadeUp, stagger, fromLeft, fromRight } from '../../utils/motion'

export default function PackageOverview() {
  return (
    <section className="relative section-pad py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Signature Journey"
          title="Odisha Divine Veg Tour"
          subtitle={pkg.tagline}
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Image collage */}
          <motion.div variants={fromLeft} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
            className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-gold-400/15">
              <img src={ux('1605649487212-47bdab064df7', 1100)} alt="Konark Sun Temple"
                className="h-[26rem] w-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 overflow-hidden rounded-2xl border-4 border-navy-950 shadow-2xl animate-float">
              <img src={ux('1507525428034-b723cf961d3e', 700)} alt="Puri Beach" className="h-40 w-full object-cover" />
            </div>
            <div className="absolute -top-6 -left-4 glass-gold rounded-2xl px-5 py-3">
              <div className="font-serif text-2xl font-semibold text-white">{pkg.duration}</div>
              <div className="text-xs text-gold-200/80">{pkg.priceUnit} · {pkg.price}</div>
            </div>
          </motion.div>

          {/* Route + highlights */}
          <motion.div variants={fromRight} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <h3 className="font-serif text-2xl font-semibold text-white">The Sacred Route</h3>
            <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-3">
              {pkg.route.map((stop, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-center gap-2">
                  <span className="flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-navy-50">
                    <MapPin className="h-4 w-4 text-gold-400" /> {stop}
                  </span>
                  {i < pkg.route.length - 1 && <ArrowRight className="h-4 w-4 text-gold-400/70" />}
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 h-px w-full bg-gradient-to-r from-gold-400/40 to-transparent" />

            <h3 className="mt-8 font-serif text-2xl font-semibold text-white">Special Highlights</h3>
            <ul className="mt-5 space-y-3">
              {highlights.map((h, i) => (
                <Reveal as="li" key={i} delay={i * 0.06} className="flex items-center gap-3 text-navy-100/90">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-400" /> {h}
                </Reveal>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
