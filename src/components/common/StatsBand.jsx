import { stats } from '../../data/content'
import Counter from './Counter'

export default function StatsBand() {
  return (
    <section className="section-pad py-14 border-y border-white/10 bg-navy-900/30">
      <div className="mx-auto max-w-5xl grid grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((s) => (
          <Counter key={s.label} {...s} />
        ))}
      </div>
    </section>
  )
}
