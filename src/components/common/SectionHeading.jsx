import { motion } from 'framer-motion'
import { stagger, fadeUp } from '../../utils/motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', light }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'
  return (
    <motion.div
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={`flex flex-col ${alignment} max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}
    >
      {eyebrow && (
        <motion.span variants={fadeUp} className="eyebrow mb-4">
          <span className="h-px w-8 bg-gold-400/60" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={`font-serif text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] font-semibold ${
          light ? 'text-navy-900' : 'text-white'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`mt-5 text-base sm:text-lg leading-relaxed ${
            light ? 'text-navy-600' : 'text-navy-200/80'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
