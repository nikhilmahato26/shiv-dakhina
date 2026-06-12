import { CheckCircle2 } from 'lucide-react'
import { highlights } from '../../data/site'

export default function HighlightsBar() {
  const loop = [...highlights, ...highlights]
  return (
    <div className="relative border-y border-gold-400/15 bg-navy-900/60 py-4 overflow-hidden">
      <div className="flex w-max animate-marquee gap-10 pr-10">
        {loop.map((h, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-2.5 text-sm font-medium text-navy-100/80"
          >
            <CheckCircle2 className="h-4 w-4 text-gold-400" /> {h}
          </span>
        ))}
      </div>
    </div>
  )
}
