import { motion } from 'framer-motion'
import { fadeUp } from '../../utils/motion'

// Scroll-reveal wrapper — fades + slides children up when they enter the viewport
export default function Reveal({
  children,
  variants = fadeUp,
  className = '',
  delay = 0,
  amount = 0.2,
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  )
}
