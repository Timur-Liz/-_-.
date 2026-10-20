import { useState } from "react";
import { SectionTitle } from "./Decorations";
import { modernWorks, studentWorks, poems } from "../data";
import { HallStamp } from "./HallStamp";
import { useMuseum } from "../context/MuseumContext";
import { YouthLab } from "./YouthLab";

const typeMeta: Record<string, { icon: string; color: string; label: string }> = {
  music: { icon: "🎵", color: "from-purple-700 to-pink-700", label: "Музыка" },
  museum: { icon: "🏛️", color: "from-amber-700 to-orange-700", label: "Музеі" },
  monument: { icon: "🗿", color: "from-slate-700 to-slate-900", label: "Памяць" },
  verse: { icon: "✒️", color: "from-[var(--color-burgundy)] to-[var(--color-burgundy-dark)]", label: "Верш" },
  essay: { icon: "📝", color: "from-[var(--color-forest)] to-[var(--color-forest-light)]", label: "Роздум" },
};

export function Today() {
  const { interpretations, addInterpretation, visitorName } = useMuseum();
  const [author, setAuthor] = useState(visitorName);
  const [poem, setPoem] = useState(poems[0].title);
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;
    addInterpretation({ author: author.trim(), poem, text: text.trim() });
    setText("");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };
  return (
    <section id="today" className="py-20 md:py-28 paper-texture">
      <HallStamp id="today" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="Зала V · Вынік: творчы ўдзел"
          title="Багдановіч сёння"
          subtitle="Для моладзі: челенджы, творчыя работы вучняў і ваша ўласная інтэрпрэтацыя."
        />

        <h3 className="font-serif text-2xl font-bold text-center mb-6 text-[var(--color-burgundy)]">Чэленджы для моладзі</h3>
        <YouthLab />

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-[var(--color-gold)]/30 overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Belarus-Minsk-Maksim_Bahdanovich_Museum-2.jpg"
              alt="Музей Багдановіча ў Мінску"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h4 className="font-serif text-xl font-bold">Куды пайсці ўжывую</h4>
              <p className="text-sm text-[var(--color-ink)]/75 mt-1">
                Літаратурны музей, Мінск, вул. М. Багдановіча 7а, Траецкае прадмесце. Экспазіцыя 1991 г., 16 946 адзінак захоўвання.
              </p>
              <a href="https://bagdanovich.museum.by/be" target="_blank" rel="noreferrer" className="text-sm text-[var(--color-burgundy)] mt-2 inline-block">
                Афіцыйны сайт музея →
              </a>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-[var(--color-gold)]/30 p-6">
            <h4 className="font-serif text-xl font-bold mb-3">Галасы вучняў (прыклады)</h4>
            <div className="space-y-4 max-h-[320px] overflow-y-auto pr-2">
              {studentWorks.slice(0, 4).map((w, i) => (
                <div key={i} className="bg-[var(--color-cream)]/60 rounded-lg p-4">
                  <div className="text-xs uppercase tracking-widest text-[var(--color-gold)]">{w.grade} · {w.author}</div>
                  <div className="font-serif font-bold">{w.title}</div>
                  <p className="text-sm mt-1 whitespace-pre-line">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          <form onSubmit={submit} className="bg-white rounded-2xl border border-[var(--color-gold)]/30 p-8 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-[var(--color-burgundy)] mb-2">Дадайце сваю інтэрпрэтацыю</h3>
            <p className="text-sm text-[var(--color-ink)]/70 mb-6">Захоўваецца лакальна ў браўзеры (кніга наведвальнікаў).</p>
            <div className="space-y-4">
              <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Ваша імя" className="w-full px-4 py-3 rounded-lg border border-[var(--color-gold)]/40 bg-white font-serif focus:outline-none focus:border-[var(--color-burgundy)]" />
              <select value={poem} onChange={(e) => setPoem(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-[var(--color-gold)]/40 bg-white focus:outline-none focus:border-[var(--color-burgundy)]">
                {poems.map((p) => (
                  <option key={p.id}>{p.title}</option>
                ))}
              </select>
              <textarea value={text} onChange={(e) => setText(e.target.value)} rows={5} placeholder="Што для вас значыць гэты верш?" className="w-full px-4 py-3 rounded-lg border border-[var(--color-gold)]/40 bg-white font-serif focus:outline-none focus:border-[var(--color-burgundy)] resize-none" />
              <button type="submit" className="w-full py-3 bg-[var(--color-burgundy)] text-[var(--color-cream)] font-medium rounded-full hover:bg-[var(--color-burgundy-dark)]">
                Дадаць у кнігу
              </button>
              {sent && <p className="text-center text-sm text-green-700">Дзякуй! Захавана.</p>}
            </div>
          </form>
          <div className="bg-[var(--color-paper)] rounded-2xl border border-[var(--color-gold)]/30 p-8 max-h-[520px] overflow-y-auto">
            <h3 className="font-serif text-2xl font-bold text-[var(--color-burgundy)] mb-4">Кніга наведвальнікаў</h3>
            {interpretations.length === 0 ? (
              <p className="text-[var(--color-ink)]/60 italic">Пакуль пуста. Будзьце першымі.</p>
            ) : (
              <div className="space-y-3">
                {interpretations.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg p-4 border-l-4 border-[var(--color-gold)]">
                    <div className="flex justify-between text-xs text-[var(--color-ink)]/60">
                      <span className="font-medium text-[var(--color-burgundy)]">{item.author}</span>
                      <span>{item.date}</span>
                    </div>
                    <div className="text-xs uppercase tracking-wider text-[var(--color-gold)]">{item.poem}</div>
                    <p className="text-sm mt-1 whitespace-pre-line">{item.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {modernWorks.map((w, i) => {
            const m = typeMeta[w.type] || typeMeta.music;
            return (
              <div key={i} className="bg-white rounded-xl overflow-hidden border border-[var(--color-gold)]/20 shadow-sm">
                <div className={`h-14 bg-gradient-to-br ${m.color} text-white flex items-center justify-center`}>{m.icon}</div>
                <div className="p-4">
                  <div className="font-semibold">{w.title}</div>
                  <div className="text-xs text-[var(--color-burgundy)]">{w.author}</div>
                  <p className="text-sm text-[var(--color-ink)]/70 mt-2">{w.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
