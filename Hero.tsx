import { StarIcon } from "./Decorations";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden text-[var(--color-cream)]">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Maksim_Bahdanovi%C4%8D._%D0%9C%D0%B0%D0%BA%D1%81%D1%96%D0%BC_%D0%91%D0%B0%D0%B3%D0%B4%D0%B0%D0%BD%D0%BE%D0%B2%D1%96%D1%87_%281909%29.jpg"
        alt="Максім Багдановіч, 1909"
        className="absolute inset-0 w-full h-full object-cover object-top scale-105"
      />
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute bottom-3 left-0 right-0 text-center text-[10px] tracking-widest uppercase text-[var(--color-cream)]/70">
        Фота: Wikimedia Commons / Public Domain · 1909
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[
          { top: "12%", left: "8%" },
          { top: "22%", left: "88%" },
          { top: "58%", left: "12%" },
          { top: "78%", left: "90%" },
        ].map((s, i) => (
          <div key={i} className="absolute text-[var(--color-gold-light)] animate-float" style={{ top: s.top, left: s.left, opacity: 0.55 }}>
            <StarIcon className="w-5 h-5" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        <div className="inline-block mb-5 px-5 py-2 border border-[var(--color-gold-light)]/50 rounded-full text-[11px] tracking-[0.28em] uppercase text-[var(--color-gold-light)]">
          Віртуальны музей · толькі праўдзівыя матэрыялы
        </div>
        <p className="font-serif italic text-[var(--color-gold-light)] text-lg md:text-xl mb-3 tracking-wide">«Вянок, які не вяне»</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 text-balance">
          Максім
          <br />
          <span className="italic text-[var(--color-gold-light)]">Багдановіч</span>
        </h1>
        <p className="font-serif italic text-xl md:text-2xl text-[var(--color-cream)]/90 max-w-3xl mx-auto mb-8">
          «Я хацеў бы спаткацца з вамі на вуліцы і пагаварыць з вамі аб шчасці, аб красе...»
        </p>
        <p className="text-base md:text-lg text-[var(--color-cream)]/85 max-w-2xl mx-auto mb-10 leading-relaxed">
          Сайт для моладзі: біяграфія, зборнік «Вянок», відэа і аўдыё з праўдзівымі выканаўцамі, архіўныя дакументы — без выдумак.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#lobby" className="px-8 py-3 bg-[var(--color-gold-light)] text-[var(--color-ink)] font-medium rounded-full hover:bg-[var(--color-gold)] transition-colors shadow-lg">
            Увайсці ў музей
          </a>
          <a href="#audio" className="px-8 py-3 border border-[var(--color-cream)]/40 text-[var(--color-cream)] font-medium rounded-full hover:bg-[var(--color-cream)]/10 transition-colors">
            Глядзець відэа
          </a>
        </div>
      </div>
    </section>
  );
}
