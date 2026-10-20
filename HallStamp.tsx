import { useEffect, useRef } from "react";
import { useMuseum } from "../context/MuseumContext";

export function HallStamp({ id }: { id: string }) {
  const { markVisited } = useMuseum();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markVisited(id);
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [id, markVisited]);

  return <div ref={ref} className="sr-only" aria-hidden />;
}
