import { useEffect, useState } from "react";
import { useMuseum } from "../context/MuseumContext";

const navItems = [
  { id: "lobby", label: "Вестыбюль" },
  { id: "person", label: "Чалавек" },
  { id: "vianok", label: "Вянок" },
  { id: "audio", label: "Паэзія" },
  { id: "geography", label: "Геаграфія" },
  { id: "today", label: "Сёння" },
  { id: "quiz", label: "Правер сябе" },
];

export function Navigation() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { visitedHalls } = useMuseum();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = ["hero", ...navItems.map((i) => i.id)];
      for (const id of ids) {
        const section = document.getElementById(id);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[var(--color-cream)]/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
              light ? "border-[var(--color-gold-light)]" : "border-[var(--color-burgundy)]"
            }`}
          >
            <span className={`font-serif font-bold text-lg ${light ? "text-[var(--color-gold-light)]" : "text-[var(--color-burgundy)]"}`}>
              МБ
            </span>
          </div>
          <div className={`hidden sm:block ${light ? "text-[var(--color-cream)]" : "text-[var(--color-ink)]"}`}>
            <div className="font-serif text-lg font-semibold leading-none">Вянок, які не вяне</div>
            <div className="text-[10px] tracking-widest uppercase opacity-70">Віртуальны музей · {visitedHalls.length}/6</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`px-3 py-2 text-sm font-medium transition-all rounded-md ${
                  active === item.id
                    ? light
                      ? "text-[var(--color-gold-light)] bg-white/10"
                      : "text-[var(--color-burgundy)] bg-[var(--color-burgundy)]/10"
                    : light
                      ? "text-[var(--color-cream)]/80 hover:text-[var(--color-gold-light)]"
                      : "text-[var(--color-ink)]/70 hover:text-[var(--color-burgundy)]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 ${light ? "text-[var(--color-cream)]" : "text-[var(--color-ink)]"}`}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M6 6 L18 18 M6 18 L18 6" /> : <path d="M4 6 H20 M4 12 H20 M4 18 H20" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[var(--color-cream)]/98 backdrop-blur-md border-t border-[var(--color-burgundy)]/20 mt-3">
          <ul className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md text-[var(--color-ink)] hover:bg-[var(--color-burgundy)]/10 ${
                    active === item.id ? "font-semibold text-[var(--color-burgundy)]" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
