import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { itinerary } from '../../data/itinerary'
import SectionHeading from '../common/SectionHeading'
import { fadeUp, stagger } from '../../utils/motion'

export default function Itinerary() {
  return (
    <section id="itinerary" className="relative section-pad py-24 lg:py-32 bg-navy-900/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Day by Day"
          title="Your Tour Itinerary"
          subtitle="A thoughtfully paced weekend — from a relaxed Friday-night departure to a sweet Monday-morning homecoming."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {itinerary.map((day, di) => (
            <motion.div
              key={day.day}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: di * 0.05 }}
              className="relative overflow-hidden rounded-3xl glass p-7"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-serif text-3xl font-semibold gold-text">{day.day}</span>
                  <span className="ml-2 text-sm text-navy-200/70">{day.label}</span>
                </div>
                <span className="rounded-full glass-gold px-3 py-1 text-xs font-semibold text-gold-200">
                  {day.accent}
                </span>
              </div>

              <motion.ul
                variants={stagger(0.06)}
                className="mt-6 space-y-0.5"
              >
                {day.items.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    className="group relative flex gap-4 pb-4 last:pb-0"
                  >
                    {/* timeline rail */}
                    <div className="flex flex-col items-center">
                      <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gold-400 ring-4 ring-gold-400/15" />
                      {i < day.items.length - 1 && <span className="w-px flex-1 bg-white/10" />}
                    </div>
                    <div className="-mt-0.5 pb-1">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300/90">
                        <Clock className="h-3.5 w-3.5" /> {item.time}
                      </span>
                      <p className="mt-0.5 text-navy-50">{item.title}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
