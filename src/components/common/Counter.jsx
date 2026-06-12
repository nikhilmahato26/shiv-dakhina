import useCountUp from '../../hooks/useCountUp'

export default function Counter({ value, prefix = '', suffix = '', label }) {
  const { ref, value: current } = useCountUp(value)
  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-4xl sm:text-5xl font-semibold gold-text">
        {prefix}
        {current.toLocaleString('en-IN')}
        {suffix}
      </div>
      <div className="mt-2 text-xs sm:text-sm uppercase tracking-widest text-navy-200/70">
        {label}
      </div>
    </div>
  )
}
