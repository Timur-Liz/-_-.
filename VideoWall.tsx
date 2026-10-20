import { realVideos } from "../data-real";

export function VideoWall() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {realVideos.map((v) => (
        <div key={v.id} className="bg-white rounded-xl overflow-hidden border border-[var(--color-gold)]/30 shadow-sm">
          <div className="aspect-video bg-black">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${v.id}`}
              title={v.title}
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="p-4">
            <h4 className="font-semibold leading-tight">{v.title}</h4>
            <p className="text-sm text-[var(--color-ink)]/70 mt-1">{v.desc}</p>
            <a
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[var(--color-burgundy)] hover:underline mt-2 inline-block"
            >
              Глядзець на YouTube →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
