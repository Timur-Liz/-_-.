import { SectionTitle, OrnamentDivider } from "./Decorations";
import { family, timeline } from "../data";
import { HallStamp } from "./HallStamp";
import { ArchiveGallery } from "./ArchiveGallery";

export function Biography() {
  return (
    <section id="person" className="py-20 md:py-28 paper-texture">
      <HallStamp id="person" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="Зала I · Вынік: разуменне жыццёвага шляху"
          title="Чалавек за партрэтам"
          subtitle="Біяграфія, сям'я, адукацыя і асноўныя даты. Толькі праўдзівыя фота і дакументы — з крыніцамі."
        />

        <ArchiveGallery />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-16">
          {family.map((member, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-[var(--color-gold)]/30 hover:border-[var(--color-burgundy)]/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-burgundy)] to-[var(--color-burgundy-dark)] flex items-center justify-center mb-4">
                <span className="font-serif text-2xl font-bold text-[var(--color-gold-light)]">{member.name.charAt(0)}</span>
              </div>
              <div className="text-xs uppercase tracking-widest text-[var(--color-gold)] mb-2">{member.role}</div>
              <h4 className="font-serif text-xl font-semibold mb-1 text-[var(--color-ink)]">{member.name}</h4>
              {member.years && <div className="text-sm text-[var(--color-ink)]/60 mb-3">{member.years}</div>}
              <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>

        <h3 className="font-serif text-3xl md:text-4xl text-center mb-10 text-[var(--color-burgundy)]">Хроніка жыцця</h3>
        <OrnamentDivider />

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-burgundy)] via-[var(--color-gold)] to-[var(--color-burgundy)]" />
          {timeline.map((event, i) => (
            <div
              key={i}
              className={`relative mb-8 md:mb-12 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"}`}
            >
              <div
                className={`absolute top-2 w-4 h-4 rounded-full bg-[var(--color-burgundy)] border-4 border-[var(--color-cream)] shadow-md ${
                  i % 2 === 0 ? "md:right-[-8px]" : "md:left-[-8px]"
                } left-2 md:left-auto`}
              />
              <div className="bg-white/80 backdrop-blur-sm p-5 rounded-lg border-l-4 border-[var(--color-burgundy)] shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="font-serif text-2xl font-bold text-[var(--color-burgundy)]">{event.year}</span>
                  <span className="text-xs uppercase tracking-widest text-[var(--color-gold)] px-2 py-1 bg-[var(--color-gold)]/10 rounded">
                    {event.place}
                  </span>
                </div>
                <h4 className="font-serif text-lg font-semibold mb-1">{event.title}</h4>
                <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <blockquote className="mt-14 max-w-3xl mx-auto text-center font-serif italic text-xl md:text-2xl text-[var(--color-ink)]/80 leading-relaxed">
          «Паэт пражыў вельмі кароткае, але надзвычай плённае жыццё...»
        </blockquote>
      </div>
    </section>
  );
}
