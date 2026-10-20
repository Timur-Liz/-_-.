import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export interface Interpretation {
  id: string;
  poem: string;
  author: string;
  text: string;
  date: string;
}

interface MuseumState {
  visitedHalls: string[];
  markVisited: (id: string) => void;
  interpretations: Interpretation[];
  addInterpretation: (item: Omit<Interpretation, "id" | "date">) => void;
  visitorName: string;
  setVisitorName: (name: string) => void;
}

const MuseumContext = createContext<MuseumState | null>(null);

const STORAGE_KEY = "vianok-museum-state";

export function MuseumProvider({ children }: { children: ReactNode }) {
  const [visitedHalls, setVisitedHalls] = useState<string[]>([]);
  const [interpretations, setInterpretations] = useState<Interpretation[]>([]);
  const [visitorName, setVisitorName] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        setVisitedHalls(data.visitedHalls || []);
        setInterpretations(data.interpretations || []);
        setVisitorName(data.visitorName || "");
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ visitedHalls, interpretations, visitorName })
    );
  }, [visitedHalls, interpretations, visitorName]);

  const markVisited = (id: string) => {
    setVisitedHalls((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const addInterpretation = (item: Omit<Interpretation, "id" | "date">) => {
    const entry: Interpretation = {
      ...item,
      id: crypto.randomUUID(),
      date: new Date().toLocaleDateString("be-BY"),
    };
    setInterpretations((prev) => [entry, ...prev]);
  };

  return (
    <MuseumContext.Provider
      value={{
        visitedHalls,
        markVisited,
        interpretations,
        addInterpretation,
        visitorName,
        setVisitorName,
      }}
    >
      {children}
    </MuseumContext.Provider>
  );
}

export function useMuseum() {
  const ctx = useContext(MuseumContext);
  if (!ctx) throw new Error("useMuseum must be used within MuseumProvider");
  return ctx;
}
