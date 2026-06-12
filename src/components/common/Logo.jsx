// Temple-spire mark + wordmark
export default function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient shadow-gold">
        <svg viewBox="0 0 32 32" className="h-6 w-6 text-navy-950" fill="currentColor">
          <path d="M16 3l4.5 7H11.5L16 3z" />
          <rect x="12.5" y="10" width="7" height="13" rx="1" />
          <circle cx="16" cy="27" r="3" />
        </svg>
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block font-serif text-lg font-semibold text-white">
            Shiv Dakhina
          </span>
          <span className="block text-[0.6rem] uppercase tracking-[0.25em] text-gold-300/90">
            Ventures
          </span>
        </span>
      )}
    </div>
  )
}
