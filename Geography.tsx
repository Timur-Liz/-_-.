import { useState } from "react";
import { SectionTitle } from "./Decorations";
import { places, type Place } from "../data";
import { HallStamp } from "./HallStamp";

const MAP_BOUNDS = { minLat: 42, maxLat: 58, minLng: 23, maxLng: 60 };
function latLngToXY(lat: number, lng: number) {
  const x = ((lng - MAP_BOUNDS.minLng) / (MAP_BOUNDS.maxLng - MAP_BOUNDS.minLng)) * 100;
  const y = ((MAP_BOUNDS.maxLat - lat) / (MAP_BOUNDS.maxLat - MAP_BOUNDS.minLat)) * 100;
  return { x, y };
}
const typeStyles: Record<Place["type"], { color: string; label: string }> = {
  birth: { color: "#7a1f2b", label: "Нараджэнне" },
  youth: { color: "#4a7a63", label: "Дзяцінства і юнацтва" },
  work: { color: "#b8924a", label: "Вучоба і праца" },
  death: { color: "#1a1208", label: "Апошнія дні" },
  creative: { color: "#c2410c", label: "Творчыя месцы" },
};

export function Geography() {
  const [selected, setSelected] = useState<Place | null>(null);
  return (
    <section id="geography" className="py-20 md:py-28 bg-[var(--color-paper)]">
      <HallStamp id="geography" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="Зала IV · Вынік: сувязь біяграфіі і прасторы"
          title="Геаграфія лёсу"
          subtitle="Ад Мінска да Ялты праз Гродна, Ніжні Ноўгарад і Яраслаўль. Карта пабудавана на рэальных каардынатах."
        />
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="relative bg-gradient-to-br from-[#e8dfc9] to-[#d4c9a8] rounded-2xl shadow-xl overflow-hidden border-4 border-[var(--color-gold)]/40 aspect-[4/3]">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                <defs>
                  <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
                    <path d="M 5 0 L 0 0 0 5" fill="none" stroke="rgba(122, 31, 43, 0.08)" strokeWidth="0.2" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
                <path
                  d={places
                    .map((p) => {
                      const { x, y } = latLngToXY(p.lat, p.lng);
                      return `${x} ${y}`;
                    })
                    .reduce((acc, coord, i) => (i === 0 ? `M ${coord}` : `${acc} L ${coord}`), "")}
                  fill="none"
                  stroke="var(--color-burgundy)"
                  strokeWidth="0.5"
                  strokeDasharray="1 1"
                  opacity="0.7"
                />
                {places.map((place, i) => {
                  const { x, y } = latLngToXY(place.lat, place.lng);
                  const isSelected = selected?.name === place.name;
                  const style = typeStyles[place.type];
                  return (
                    <g key={i} className="cursor-pointer" onClick={() => setSelected(place)}>
                      <circle cx={x} cy={y} r={isSelected ? "1.8" : "1.2"} fill={style.color} stroke="#faf6ec" strokeWidth="0.4" />
                      {isSelected && (
                        <circle cx={x} cy={y} r="2.5" fill="none" stroke={style.color} strokeWidth="0.2">
                          <animate attributeName="r" from="1.8" to="3.5" dur="1.5s" repeatCount="indefinite" />
                          <animate attributeName="opacity" from="1" to="0" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                      )}
                      <text x={x} y={y - 2.5} fontSize="2" textAnchor="middle" fill="var(--color-ink)" fontFamily="Cormorant Garamond, serif" fontWeight="600">
                        {place.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
              <div className="absolute top-4 left-4 bg-[var(--color-cream)]/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-[var(--color-gold)]/40">
                <div className="font-serif font-bold text-[var(--color-burgundy)]">Шлях паэта</div>
                <div className="text-xs text-[var(--color-ink)]/60">1891 — 1917 · 7 кропак</div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 justify-center">
              {Object.entries(typeStyles).map(([key, { color, label }]) => (
                <div key={key} className="flex items-center gap-2 text-xs">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-[var(--color-ink)]/75">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="sticky top-24 bg-white/80 backdrop-blur-sm rounded-2xl border border-[var(--color-gold)]/30 shadow-lg p-6 min-h-[360px]">
              {selected ? (
                <>
                  <div className="text-xs uppercase tracking-widest text-[var(--color-gold)] mb-2">{typeStyles[selected.type].label}</div>
                  <h3 className="font-serif text-3xl font-bold text-[var(--color-burgundy)] mb-2">{selected.name}</h3>
                  <div className="text-sm text-[var(--color-ink)]/70 mb-4">{selected.years}</div>
                  <div className="h-px bg-gradient-to-r from-[var(--color-gold)] to-transparent mb-4" />
                  <p className="text-[var(--color-ink)]/85 leading-relaxed">{selected.description}</p>
                </>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h3 className="font-serif text-2xl font-bold mb-2">Абярыце горад</h3>
                  <p className="text-[var(--color-ink)]/70">Націсніце на кропку на карце.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
          <a href="https://bagdanovich.museum.by/be" target="_blank" rel="noreferrer" className="bg-white rounded-xl p-4 border border-[var(--color-gold)]/30">
            Музей у Мінску, вул. М. Багдановіча 7а
          </a>
          <a href="https://archives.gov.by/home/tematicheskie-razrabotki-arhivnyh-dokumentov-i-bazy-dannyh/vydayushhiesya-lichnosti/da-120-goddzya-z-dnya-naradzhennya/arhi%D1%9Enyya-fondy-pra-maksima-bagdanovicha" target="_blank" rel="noreferrer" className="bg-white rounded-xl p-4 border border-[var(--color-gold)]/30">
            Архіўныя фонды (Нац. архіў РБ)
          </a>
          <a href="https://be.wikisource.org/wiki/%D0%90%D1%9E%D1%82%D0%B0%D1%80:%D0%9C%D0%B0%D0%BA%D1%81%D1%96%D0%BC_%D0%91%D0%B0%D0%B3%D0%B4%D0%B0%D0%BD%D0%BE%D0%B2%D1%96%D1%87" target="_blank" rel="noreferrer" className="bg-white rounded-xl p-4 border border-[var(--color-gold)]/30">
            Вікікрыніцы — тэксты
          </a>
        </div>
      </div>
    </section>
  );
}
