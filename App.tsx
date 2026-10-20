import { MuseumProvider } from "./context/MuseumContext";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { MuseumLobby } from "./components/MuseumLobby";
import { Biography } from "./components/Biography";
import { Vianok } from "./components/Vianok";
import { AudioSection } from "./components/AudioSection";
import { Geography } from "./components/Geography";
import { Today } from "./components/Today";
import { Quiz } from "./components/Quiz";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <MuseumProvider>
      <div className="min-h-screen bg-[var(--color-cream)] text-[var(--color-ink)]">
        <Navigation />
        <main>
          <Hero />
          <MuseumLobby />
          <Biography />
          <Vianok />
          <AudioSection />
          <Geography />
          <Today />
          <Quiz />
        </main>
        <Footer />
      </div>
    </MuseumProvider>
  );
}
