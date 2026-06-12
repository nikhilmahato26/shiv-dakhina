import { motion } from 'framer-motion'
import { Leaf } from 'lucide-react'
import { food } from '../../data/content'
import SectionHeading from '../common/SectionHeading'
import { scaleIn, stagger, fromRight } from '../../utils/motion'

export default function FoodExperience() {
  return (
    <section className="relative section-pad py-24 lg:py-32 bg-navy-900/40">
      <div className="mx-auto max-w-7xl grid items-center gap-14 lg:grid-cols-2">
        {/* Image grid */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {food.images.map((src, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className={`overflow-hidden rounded-2xl border border-white/10 ${
                i % 3 === 0 ? 'row-span-2' : ''
              }`}
            >
              <img
                src={src}
                alt="Pure vegetarian meal"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Copy */}
        <motion.div variants={fromRight} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <SectionHeading
            eyebrow="Food Experience"
            title="Pure Vegetarian Meals"
            subtitle="Sattvic, freshly prepared and served with love — vegetarian meals throughout your entire tour, including the sacred Mahaprasad at Jagannath Temple."
            align="left"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {food.items.map((tag) => (
              <span key={tag} className="flex items-center gap-2 rounded-full glass-gold px-5 py-2.5 text-sm font-semibold text-gold-100">
                <Leaf className="h-4 w-4 text-gold-400" /> {tag}
              </span>
            ))}
          </div>
          <p className="mt-6 text-navy-200/70">
            Veg meals throughout the tour — breakfast, lunch and dinner — prepared with the
            highest standards of hygiene and taste.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
