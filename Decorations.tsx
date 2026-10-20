export function OrnamentDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-8 ${className}`}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--color-gold)]" />
      <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="text-[var(--color-gold)]">
        <path d="M20 10 L25 5 L30 10 L25 15 Z" fill="currentColor" opacity="0.7" />
        <path d="M20 10 L15 5 L10 10 L15 15 Z" fill="currentColor" opacity="0.7" />
        <circle cx="20" cy="10" r="2" fill="currentColor" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--color-gold)]" />
    </div>
  );
}

export function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <div className="inline-block mb-4">
        <span className="font-serif italic text-[var(--color-burgundy)] text-lg tracking-wide">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-ink)] leading-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-[var(--color-ink)]/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <OrnamentDivider />
    </div>
  );
}

export function WreathIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="50" cy="50" r="35" strokeDasharray="3 3" opacity="0.4" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x = 50 + 35 * Math.cos(rad);
        const y = 50 + 35 * Math.sin(rad);
        const x2 = 50 + 28 * Math.cos(rad);
        const y2 = 50 + 28 * Math.sin(rad);
        return (
          <g key={angle}>
            <line x1={x} y1={y} x2={x2} y2={y2} strokeWidth="1.5" />
            <circle cx={x} cy={y} r="2" fill="currentColor" />
          </g>
        );
      })}
    </svg>
  );
}

export function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2 L13 10 L21 11 L13 12 L12 20 L11 12 L3 11 L11 10 Z" />
    </svg>
  );
}
