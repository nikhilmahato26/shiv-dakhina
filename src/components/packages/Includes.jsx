import { Check } from 'lucide-react'
import { includes } from '../../data/content'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'

export default function Includes() {
  return (
    <section className="relative section-pad py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="All-Inclusive"
          title="What Your Package Includes"
          subtitle="One transparent price covers everything — travel, stay, all meals and every charge along the way."
        />

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {includes.map((item, i) => (
            <Reveal key={item} delay={(i % 3) * 0.05}>
              <div className="flex items-center gap-3 rounded-2xl glass px-5 py-4 transition-colors hover:bg-white/[0.07]">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold-gradient text-navy-950">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-sm text-navy-50">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
