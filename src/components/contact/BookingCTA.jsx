import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Phone, Send, CheckCircle2, User, MessageSquare } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { site, links, pkg, ux } from '../../data/site'
import { fromLeft, fromRight } from '../../utils/motion'

export default function BookingCTA() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [sent, setSent] = useState(false)

  const onSubmit = (data) => {
    // Compose a pre-filled WhatsApp message and open it
    const msg = `Hello ${site.name}!%0AName: ${data.name}%0APhone: ${data.phone}%0AGuests: ${
      data.guests || '—'
    }%0AMessage: ${data.message || 'I would like to book the Odisha Divine Veg Tour.'}`
    window.open(`https://wa.me/${site.phoneRaw}?text=${msg}`, '_blank')
    setSent(true)
    reset()
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="relative section-pad py-24 lg:py-32 overflow-hidden">
      {/* background image */}
      <div className="absolute inset-0 -z-10">
        <img src={ux('1599661046289-e31897846e41', 1600)} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy-950/90" />
      </div>

      <div className="mx-auto max-w-7xl grid items-center gap-14 lg:grid-cols-2">
        {/* Headline + actions */}
        <motion.div variants={fromLeft} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <span className="eyebrow"><span className="h-px w-8 bg-gold-400/60" /> Begin Your Pilgrimage</span>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
            Book Your Divine <span className="gold-text">Journey</span> Today
          </h2>
          <p className="mt-5 max-w-lg text-lg text-navy-200/80">
            Seats fill fast for our every-Friday departures. Reserve your premium veg
            pilgrimage to Bhubaneswar, Konark & Puri now.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={links.whatsapp} target="_blank" rel="noreferrer" className="btn-gold text-base">
              <FaWhatsapp className="h-5 w-5" /> WhatsApp
            </a>
            <a href={links.call} className="btn-ghost text-base">
              <Phone className="h-5 w-5" /> Call Now
            </a>
          </div>

          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl glass px-6 py-4">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-navy-950">
              <Phone className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-navy-200/60">Call / WhatsApp</p>
              <a href={links.call} className="text-xl font-semibold text-white hover:text-gold-300">{site.phone}</a>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div variants={fromRight} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl glass p-7 sm:p-9">
          <h3 className="font-serif text-2xl font-semibold text-white">Request a Booking</h3>
          <p className="mt-1 text-sm text-navy-200/70">{pkg.title} · {pkg.price} {pkg.priceUnit}</p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            <Field icon={User} error={errors.name?.message}>
              <input
                {...register('name', { required: 'Please enter your name' })}
                placeholder="Your Name"
                className="w-full bg-transparent text-white placeholder:text-navy-200/40 outline-none"
              />
            </Field>

            <Field icon={Phone} error={errors.phone?.message}>
              <input
                {...register('phone', {
                  required: 'Please enter your phone number',
                  pattern: { value: /^[0-9+\s-]{8,15}$/, message: 'Enter a valid phone number' },
                })}
                placeholder="Phone Number"
                inputMode="tel"
                className="w-full bg-transparent text-white placeholder:text-navy-200/40 outline-none"
              />
            </Field>

            <Field icon={User} error={errors.guests?.message}>
              <input
                {...register('guests')}
                placeholder="Number of Guests (optional)"
                inputMode="numeric"
                className="w-full bg-transparent text-white placeholder:text-navy-200/40 outline-none"
              />
            </Field>

            <Field icon={MessageSquare} align="top">
              <textarea
                {...register('message')}
                rows={3}
                placeholder="Message (optional)"
                className="w-full resize-none bg-transparent text-white placeholder:text-navy-200/40 outline-none"
              />
            </Field>

            <button type="submit" className="btn-gold w-full text-base">
              <Send className="h-4 w-4" /> Send Booking Request
            </button>

            {sent && (
              <p className="flex items-center justify-center gap-2 text-sm text-green-400">
                <CheckCircle2 className="h-4 w-4" /> Opening WhatsApp with your details…
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

function Field({ icon: Icon, children, error, align = 'center' }) {
  return (
    <div>
      <div className={`flex gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 focus-within:border-gold-400/50 transition-colors ${align === 'top' ? 'items-start' : 'items-center'}`}>
        <Icon className={`h-5 w-5 shrink-0 text-gold-400/70 ${align === 'top' ? 'mt-0.5' : ''}`} />
        {children}
      </div>
      {error && <p className="mt-1.5 pl-1 text-xs text-red-400">{error}</p>}
    </div>
  )
}
