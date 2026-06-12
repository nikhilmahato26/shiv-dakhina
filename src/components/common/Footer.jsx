import { Phone, Mail, MapPin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { site, links, navLinks, pkg } from '../../data/site'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy-950 section-pad pt-16 pb-28 lg:pb-12">
      <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-200/70">
            Premium spiritual tourism from the heart of Odisha. We craft comfortable,
            pure-vegetarian pilgrimage journeys to the sacred temples of Bhubaneswar,
            Konark & Puri.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={links.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"
               className="grid h-11 w-11 place-items-center rounded-xl glass text-[#25D366] hover:bg-white/10 transition">
              <FaWhatsapp className="h-5 w-5" />
            </a>
            <a href={links.call} aria-label="Call"
               className="grid h-11 w-11 place-items-center rounded-xl glass text-gold-300 hover:bg-white/10 transition">
              <Phone className="h-5 w-5" />
            </a>
            <a href={links.mail} aria-label="Email"
               className="grid h-11 w-11 place-items-center rounded-xl glass text-gold-300 hover:bg-white/10 transition">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-3 lg:col-start-6">
          <h4 className="font-serif text-xl text-white">Explore</h4>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-navy-200/70 hover:text-gold-300 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="font-serif text-xl text-white">Get in Touch</h4>
          <ul className="mt-5 space-y-4 text-sm text-navy-200/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" /> {site.location}
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-gold-400" />
              <a href={links.call} className="hover:text-gold-300">{site.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-gold-400" />
              <a href={links.mail} className="hover:text-gold-300 break-all">{site.email}</a>
            </li>
          </ul>
          <a href={links.whatsapp} target="_blank" rel="noreferrer" className="btn-gold mt-6 w-full sm:w-auto">
            Book {pkg.title} · {pkg.price}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-navy-300/60">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>{site.category}</p>
      </div>
    </footer>
  )
}
