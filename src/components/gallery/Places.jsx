import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { places } from '../../data/places'
import SectionHeading from '../common/SectionHeading'
import { scaleIn, stagger } from '../../utils/motion'

export default function Places() {
  return (
    <section id="places" className="relative section-pad py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Places You'll Cover"
          title="Sacred Wonders of Odisha"
          subtitle="From the towering Kalinga spires to the golden shores of Puri — every stop is steeped in heritage and devotion."
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[16rem]"
        >
          {places.map((p) => (
            <motion.div
              key={p.name}
              variants={scaleIn}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 ${
                p.span ? 'sm:col-span-2' : ''
              }`}
            >
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="inline-flex items-center gap-1.5 rounded-full glass-gold px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gold-200">
                  {p.note}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-white">{p.name}</h3>
                {p.location && (
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-navy-100/80">
                    <MapPin className="h-4 w-4 text-gold-400" /> {p.location}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
