import { halls } from "../data";
import { useMuseum } from "../context/MuseumContext";
import { SectionTitle } from "./Decorations";

export function MuseumLobby() {
  const { visitedHalls, visitorName, setVisitorName } = useMuseum();

  return (
    <section id="lobby" className="py-20 md:py-24 paper-texture relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-paper)] opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-cream)]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="Вестыбюль музея"
          title="Абярыце свой маршрут"
          subtitle="Музей — адкрытая культурная прастора. Вы можаце ісці па залах па парадку або пачаць з той, якая кліча вас першай."
        />

        <div className="max-w-xl mx-auto mb-12">
          <label className="block text-center mb-3 font-serif text-lg text-[var(--color-burgundy)]">
            Запішыцеся ў кнігу наведвальнікаў
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={visitorName}
              onChange={(e) => setVisitorName(e.target.value)}
              placeholder="Ваша імя..."
              className="flex-1 px-4 py-3 rounded-lg border border-[var(--color-gold)]/40 bg-white/80 font-serif text-lg focus:outline-none focus:border-[var(--color-burgundy)]"
            />
            <div className="px-4 py-3 rounded-lg bg-[var(--color-burgundy)] text-[var(--color-cream)] font-serif flex items-center whitespace-nowrap">
              {visitedHalls.length}/6 зал
            </div>
          </div>
          {visitorName && (
            <p className="text-center mt-3 text-sm text-[var(--color-ink)]/70 font-serif italic">
              Сардэчна запрашаем, {visitorName}! Ваш білет у музей адкрыты.
            </p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {halls.map((hall) => {
            const visited = visitedHalls.includes(hall.id);
            return (
              <a
                key={hall.id}
                href={`#${hall.id}`}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border-2 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                style={{
                  borderColor: visited ? "var(--color-gold)" : "rgba(184, 146, 74, 0.3)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--color-burgundy)] via-[var(--color-gold)] to-[var(--color-burgundy)]" />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-3xl font-bold text-[var(--color-gold)]">
                        {hall.number}
                      </span>
                      <span className="text-3xl">{hall.icon}</span>
                    </div>
                    {visited && (
                      <span className="text-xs uppercase tracking-wider px-2 py-1 rounded-full bg-[var(--color-gold)]/20 text-[var(--color-burgundy)] font-medium">
                        наведана
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-burgundy)] transition-colors">
                    {hall.title}
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[var(--color-gold)] mb-1">
                        Змест
                      </div>
                      <p className="text-[var(--color-ink)]/80">{hall.content}</p>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[var(--color-burgundy)] mb-1">
                        Вынік для наведвальніка
                      </div>
                      <p className="text-[var(--color-ink)]/80 italic">{hall.result}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-[var(--color-burgundy)] text-sm font-medium">
                    <span>Увайсці ў залу</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-14 max-w-3xl mx-auto text-center">
          <p className="font-serif italic text-lg text-[var(--color-ink)]/75 leading-relaxed">
            Назва «Вянок, які не вяне» — сімвал культурных сэнсаў, мастацкіх вобразаў і каштоўнасцей,
            якія перадаюцца праз творчасць паэта. Кветкі вянуць. Слова — не.
          </p>
        </div>
      </div>
    </section>
  );
}
