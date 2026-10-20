import { OrnamentDivider } from "./Decorations";
import { halls } from "../data";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[var(--color-ink)] via-[var(--color-burgundy-dark)] to-[var(--color-ink)] text-[var(--color-cream)] py-14">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold-light)]">Віртуальны музей</div>
          <h2 className="font-serif text-3xl font-bold mt-1">«Вянок, які не вяне»</h2>
          <p className="font-serif italic text-xl mt-3 text-[var(--color-gold-light)]">«Няхай жыве вечная наша краіна над зоркай Палярнай!»</p>
        </div>
        <OrnamentDivider />
        <div className="grid md:grid-cols-3 gap-8 text-sm mt-8">
          <div>
            <h4 className="font-serif text-lg font-bold text-[var(--color-gold-light)] mb-2">Пра музей</h4>
            <p className="text-[var(--color-cream)]/80">Адкрытая культурная прастора. Для вучняў сярэдняга і старэйшага ўзросту і ўсіх, хто любіць беларускую літаратуру.</p>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-[var(--color-gold-light)] mb-2">Залы</h4>
            <ul className="space-y-1 text-[var(--color-cream)]/80">
              {halls.map((h) => (
                <li key={h.id}><a href={`#${h.id}`} className="hover:text-[var(--color-gold-light)]">{h.number}. {h.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-[var(--color-gold-light)] mb-2">Толькі праўдзівыя крыніцы</h4>
            <ul className="space-y-1 text-[var(--color-cream)]/80 text-xs">
              <li>Фото: Wikimedia Commons (PD / CC BY-SA)</li>
              <li>Відэа: YouTube — Песняры, Сябры, Ляўчук</li>
              <li>Аўдыё: Kamunikat.org (MP3, public domain)</li>
              <li>Дакументы: archives.gov.by — БДАМЛМ</li>
              <li>Тэксты: be.wikisource.org</li>
              <li>Музей: bagdanovich.museum.by</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-[var(--color-gold)]/20 text-center text-xs text-[var(--color-cream)]/60">
          Вершы ў грамадскім набытку (аўтар 1891–1917). Без згенераваных медыя — толькі архіўныя матэрыялы з пазначэннем крыніц.
        </div>
      </div>
    </footer>
  );
}
