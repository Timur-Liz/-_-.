import { youthChallenges } from "../data-real";

export function YouthLab() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {youthChallenges.map((c) => (
        <div key={c.title} className="bg-white rounded-xl border border-[var(--color-gold)]/30 p-6 shadow-sm">
          <h4 className="font-serif text-xl font-bold text-[var(--color-burgundy)]">{c.title}</h4>
          <p className="text-sm text-[var(--color-ink)]/80 mt-2">{c.brief}</p>
          <div className="text-xs uppercase tracking-widest text-[var(--color-gold)] mt-4">Вынік: {c.result}</div>
        </div>
      ))}
    </div>
  );
}
