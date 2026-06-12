import { motion } from 'framer-motion'
import { whyChooseUs } from '../../data/content'
import SectionHeading from '../common/SectionHeading'
import { fadeUp, stagger } from '../../utils/motion'

export default function WhyChooseUs() {
  return (
    <section className="relative section-pad py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Shiv Dakhina Promise"
          subtitle="We're not just a travel service — we're Odisha pilgrimage specialists devoted to a safe, soulful and seamless experience."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyChooseUs.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group rounded-3xl glass p-7 transition-colors hover:border-gold-400/30"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-400/10 text-gold-300 transition-colors group-hover:bg-gold-gradient group-hover:text-navy-950">
                <item.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-200/70">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
