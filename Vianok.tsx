import { useState } from "react";
import { SectionTitle } from "./Decorations";
import { poems, literaryImages } from "../data";
import { HallStamp } from "./HallStamp";

export function Vianok() {
  const [selectedPoem, setSelectedPoem] = useState(0);
  const [tab, setTab] = useState<"text" | "analysis">("text");
  const [openImage, setOpenImage] = useState<string | null>(null);
  const poem = poems[selectedPoem];
  const activeImage = literaryImages.find((img) => img.id === openImage);
  return (
    <section id="vianok" className="py-20 md:py-28 relative overflow-hidden bg-white">
      <HallStamp id="vianok" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="Зала II · Вынік: мастацкая адметнасць"
          title="Вянок, які не вяне"
          subtitle="Зборнік 1913 г. у друкарні Марціна Кухты (Вільня). Ніжэй — тэксты, аналіз і дакументы з праўдзівых крыніц."
        />

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <div className="bg-[var(--color-cream)] rounded-2xl p-6 border border-[var(--color-gold)]/30">
            <div className="text-xs uppercase tracking-widest text-[var(--color-gold)]">Факт</div>
            <h3 className="font-serif text-2xl font-bold mt-1">Кніжка выбраных вершоў, 120 с.</h3>
            <p className="text-sm text-[var(--color-ink)]/80 mt-2 leading-relaxed">
              Аўтар назваў рукапіс «Кніжка выбраных вершоў», назву «Вянок» даў Вацлаў Ластоўскі. Прысвячэнне: «Вянок на магілу С. А. Палуяну († 8 красавіка 1910)».
              Наклад 2000 ас. пры падтрымцы Магдалены Радзівіл. Першая рэцэнзія — Антон Луцкевіч.
            </p>
            <a href="https://be.wikisource.org/wiki/%D0%92%D1%8F%D0%BD%D0%BE%D0%BA_(%D0%91%D0%B0%D0%B3%D0%B4%D0%B0%D0%BD%D0%BE%D0%B2%D1%96%D1%87)" target="_blank" rel="noreferrer" className="inline-block mt-3 text-sm text-[var(--color-burgundy)] font-medium">
              Чытаць «Вянок» на Вікікрыніцах →
            </a>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-[var(--color-gold)]/30">
            <h4 className="font-serif text-xl font-bold">Што ўнутры</h4>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <li className="bg-[var(--color-cream)] rounded-lg px-3 py-2">92 вершы</li>
              <li className="bg-[var(--color-cream)] rounded-lg px-3 py-2">2 паэмы</li>
              <li className="bg-[var(--color-cream)] rounded-lg px-3 py-2">Санеты, трыялеты</li>
              <li className="bg-[var(--color-cream)] rounded-lg px-3 py-2">Цыкл «Места» — урбанізм</li>
            </ul>
            <p className="text-xs text-[var(--color-ink)]/60 mt-3">Крыніца: archives.gov.by, Вікіпедыя be, экафаксіміле 1981 г.</p>
          </div>
        </div>

        <h3 className="font-serif text-3xl text-center mb-3 text-[var(--color-burgundy)]">Літаратурныя вобразы — даследуйце</h3>
        <p className="text-center text-sm text-[var(--color-ink)]/70 mb-6">Націсніце на плітку, каб раскрыць сэнс вобраза.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {literaryImages.map((img) => (
            <button key={img.id} onClick={() => setOpenImage(openImage === img.id ? null : img.id)} className={`text-left p-5 rounded-xl border-2 transition-all ${openImage === img.id ? "bg-white shadow-xl border-[var(--color-burgundy)]" : "bg-[var(--color-cream)]/60 border-[var(--color-gold)]/30 hover:border-[var(--color-burgundy)]/40"}`}>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: img.color }} />
                <span className="font-serif text-xl font-bold">{img.name}</span>
              </div>
              <div className="text-xs uppercase tracking-wider text-[var(--color-gold)] mt-1">{img.poem}</div>
            </button>
          ))}
        </div>
        {activeImage && (
          <div className="bg-gradient-to-br from-[var(--color-burgundy)] to-[var(--color-burgundy-dark)] text-[var(--color-cream)] rounded-2xl p-8 mb-12">
            <div className="text-xs uppercase tracking-widest text-[var(--color-gold-light)]">{activeImage.poem}</div>
            <h4 className="font-serif text-3xl font-bold mt-1">{activeImage.name}</h4>
            <p className="mt-3 opacity-95 leading-relaxed">{activeImage.meaning}</p>
            <blockquote className="mt-4 font-serif italic text-xl border-l-4 border-[var(--color-gold-light)] pl-4">{activeImage.quote}</blockquote>
          </div>
        )}

        <div className="bg-[var(--color-paper)] rounded-2xl border border-[var(--color-gold)]/40 overflow-hidden">
          <div className="flex flex-wrap gap-2 p-4 bg-[var(--color-cream)]/60 border-b border-[var(--color-gold)]/20">
            {poems.map((p, i) => (
              <button key={p.id} onClick={() => { setSelectedPoem(i); setTab("text"); }} className={`px-4 py-2 rounded-full text-sm font-medium ${selectedPoem === i ? "bg-[var(--color-burgundy)] text-white" : "bg-white hover:bg-[var(--color-burgundy)]/10"}`}>
                {p.title}
              </button>
            ))}
          </div>
          <div className="flex justify-center gap-2 p-3 bg-white/50 border-b">
            {(["text", "analysis"] as const).map((t) => (
              <button key={t} onClick={() => setTab(t)} className={`px-5 py-2 rounded-full text-sm ${tab === t ? "bg-[var(--color-gold)]" : "text-[var(--color-ink)]/60"}`}>
                {t === "text" ? "Тэкст верша" : "Аналіз"}
              </button>
            ))}
          </div>
          {tab === "text" ? (
            <div className="p-8 md:p-10 max-w-3xl mx-auto">
              <h4 className="font-serif text-3xl font-bold text-center">{poem.title}</h4>
              <div className="text-center text-xs uppercase tracking-widest text-[var(--color-ink)]/60 mt-2">{poem.year} {poem.cycle && `· ${poem.cycle}`} {poem.epigraph && `· Эпіграф: ${poem.epigraph}`}</div>
              <div className="font-serif text-lg md:text-xl leading-relaxed text-center whitespace-pre-line italic text-[var(--color-ink)]/90 mt-6">{poem.text}</div>
              <a href="https://kamunikat.org/vershy-bagdanovich-maksim" target="_blank" rel="noreferrer" className="block text-center mt-6 text-sm text-[var(--color-burgundy)]">Слухаць чытанне на Kamunikat.org →</a>
            </div>
          ) : (
            <div className="p-8 md:p-10 max-w-4xl mx-auto space-y-5">
              <h4 className="font-serif text-3xl font-bold text-[var(--color-burgundy)]">{poem.title}</h4>
              <p className="leading-relaxed">{poem.analysis}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4"><div className="text-xs uppercase tracking-widest text-[var(--color-gold)]">Тэма</div><p>{poem.theme}</p></div>
                <div className="bg-white rounded-xl p-4"><div className="text-xs uppercase tracking-widest text-[var(--color-gold)]">Ідэя</div><p>{poem.idea}</p></div>
                <div className="bg-white rounded-xl p-4"><div className="text-xs uppercase tracking-widest text-[var(--color-gold)]">Форма</div><p>{poem.form}</p></div>
                <div className="bg-white rounded-xl p-4"><div className="text-xs uppercase tracking-widest text-[var(--color-gold)]">Сродкі</div><p>{poem.devices.join(" · ")}</p></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
