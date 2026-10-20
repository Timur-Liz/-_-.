import { SectionTitle } from "./Decorations";
import { HallStamp } from "./HallStamp";
import { VideoWall } from "./VideoWall";
import { DocumentShelf } from "./DocumentShelf";

export function AudioSection() {
  return (
    <section id="audio" className="py-20 md:py-28 bg-gradient-to-b from-[var(--color-cream)] to-[#f0e6d4] relative">
      <HallStamp id="audio" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="Зала III · Вынік: эмацыянальнае ўспрыманне"
          title="Паэзія, якую можна пачуць"
          subtitle="Рэальныя відэа і аўдыё: выкананні Песняроў, Сяброў, сучасных артыстаў. Усе спасылкі — праўдзівыя."
        />

        <div className="bg-gradient-to-r from-[var(--color-burgundy)] to-[var(--color-burgundy-dark)] rounded-2xl p-6 md:p-8 text-[var(--color-cream)] shadow-xl mb-10">
          <h3 className="font-serif text-2xl font-bold mb-2">Як слухаць правільна</h3>
          <p className="text-[var(--color-cream)]/90 leading-relaxed">
            Націсніце Play на відэа або перайдзіце па спасылцы на аўдыё. Усе відэа — з YouTube з праўдзівымі выканаўцамі. Аўдыё — з Kamunikat.org.
            Для друкаваных дакументаў адкрыйце арыгіналы ў архіве.
          </p>
        </div>

        <h3 className="font-serif text-2xl font-bold mb-4">Відэа</h3>
        <VideoWall />

        <div className="mt-12">
          <h3 className="font-serif text-2xl font-bold mb-4">Друкаваныя дакументы і аўдыё</h3>
          <DocumentShelf />
        </div>
      </div>
    </section>
  );
}
