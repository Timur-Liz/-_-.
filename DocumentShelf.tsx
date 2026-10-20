import { realDocuments, realAudios } from "../data-real";

export function DocumentShelf() {
  return (
    <div className="space-y-6">
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
        Усе друкаваныя матэрыялы — у грамадскім набытку (аўтар памёр у 1917, +70 гадоў). Спасылкі вядуць на афіцыйныя архівы і бібліятэкі.
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {realDocuments.map((d) => (
          <a
            key={d.title}
            href={d.url}
            target="_blank"
            rel="noreferrer"
            className="block bg-white rounded-xl p-5 border border-[var(--color-gold)]/30 hover:border-[var(--color-burgundy)]/40 hover:shadow-md transition-all"
          >
            <div className="text-[10px] uppercase tracking-widest text-[var(--color-gold)]">{d.archive}</div>
            <div className="font-medium mt-1 leading-tight">{d.title}</div>
            <div className="text-xs text-[var(--color-burgundy)] mt-2">Адкрыць арыгінал →</div>
          </a>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-[var(--color-gold)]/30 p-5">
        <h4 className="font-serif text-xl font-bold mb-2">Аўдыё (рэальныя чытанні)</h4>
        <ul className="space-y-2">
          {realAudios.map((a) => (
            <li key={a.title} className="flex items-start justify-between gap-3 py-2 border-b last:border-0 border-black/10">
              <div>
                <div className="font-medium">{a.title}</div>
                <div className="text-xs text-[var(--color-ink)]/60">{a.note}</div>
              </div>
              <a
                href={a.url}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 text-xs px-3 py-2 rounded-full border border-[var(--color-burgundy)] text-[var(--color-burgundy)] hover:bg-[var(--color-burgundy)] hover:text-white transition-colors"
              >
                Слухаць
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-[var(--color-ink)]/60 mt-3">
          Крыніца: kamunikat.org — Беларуская Інтэрнэт-Бібліятэка (свабодны доступ, mp3).
        </p>
      </div>
    </div>
  );
}
