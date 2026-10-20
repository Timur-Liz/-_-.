import { realPhotos } from "../data-real";

export function ArchiveGallery() {
  return (
    <section className="py-6">
      <h3 className="font-serif text-2xl font-bold text-[var(--color-burgundy)] mb-2">Архіўныя фота (Public Domain)</h3>
      <p className="text-sm text-[var(--color-ink)]/70 mb-6">Усе здымкі — у грамадскім набытку. Націсніце, каб адкрыць крыніцу на Wikimedia Commons.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {realPhotos.map((p) => (
          <a
            key={p.title}
            href={p.page}
            target="_blank"
            rel="noreferrer"
            className="group bg-white rounded-xl overflow-hidden border border-[var(--color-gold)]/30 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="aspect-[4/3] bg-[var(--color-cream)] overflow-hidden">
              <img
                src={p.thumb || p.url}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h4 className="font-medium leading-tight">{p.title}</h4>
              <p className="text-xs text-[var(--color-ink)]/60 mt-1">{p.source}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
