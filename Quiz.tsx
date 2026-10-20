import { useState } from "react";
import { SectionTitle } from "./Decorations";
import { quizQuestions, questTasks } from "../data";
import { HallStamp } from "./HallStamp";

type Mode = "choose" | "quiz" | "quest";

export function Quiz() {
  const [mode, setMode] = useState<Mode>("choose");

  return (
    <section id="quiz" className="py-20 md:py-28 bg-gradient-to-b from-[var(--color-cream)] via-[var(--color-paper)] to-[var(--color-cream)]">
      <HallStamp id="quiz" />
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="Зала VI · Вынік: самастойная праца"
          title="Правер сябе"
          subtitle="Віктарына і літаратурны квэст. Абярыце выпрабаванне — і праверце, наколькі добра вы пачулі паэта."
        />

        {mode === "choose" && (
          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => setMode("quiz")}
              className="group bg-white/80 rounded-2xl border-2 border-[var(--color-gold)]/30 p-8 text-left hover:border-[var(--color-burgundy)] hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-4">📝</div>
              <h3 className="font-serif text-2xl font-bold text-[var(--color-burgundy)] mb-2">Віктарына</h3>
              <p className="text-[var(--color-ink)]/75 mb-4">
                8 пытанняў пра жыццё, сям'ю і творчасць. З тлумачэннямі пасля кожнага адказу.
              </p>
              <span className="text-[var(--color-burgundy)] font-medium group-hover:translate-x-1 inline-block transition-transform">
                Пачаць →
              </span>
            </button>
            <button
              onClick={() => setMode("quest")}
              className="group bg-white/80 rounded-2xl border-2 border-[var(--color-gold)]/30 p-8 text-left hover:border-[var(--color-burgundy)] hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-4">🗝️</div>
              <h3 className="font-serif text-2xl font-bold text-[var(--color-burgundy)] mb-2">Літаратурны квэст</h3>
              <p className="text-[var(--color-ink)]/75 mb-4">
                Устаўце прапушчаныя словы ў радкі вершаў. Квэст па вобразах «Вянка».
              </p>
              <span className="text-[var(--color-burgundy)] font-medium group-hover:translate-x-1 inline-block transition-transform">
                Увайсці ў квэст →
              </span>
            </button>
          </div>
        )}

        {mode === "quiz" && <QuizGame onBack={() => setMode("choose")} />}
        {mode === "quest" && <QuestGame onBack={() => setMode("choose")} />}
      </div>
    </section>
  );
}

function QuizGame({ onBack }: { onBack: () => void }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);
    if (index === quizQuestions[currentQ].correctIndex) setScore((s) => s + 1);
  };

  const next = () => {
    if (currentQ + 1 >= quizQuestions.length) setFinished(true);
    else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setShowResult(false);
    }
  };

  const percentage = Math.round((score / quizQuestions.length) * 100);
  const grade =
    percentage >= 90
      ? { title: "Выдатны знаўца!", emoji: "🏆", msg: "Вы ведаеце творчасць Багдановіча амаль як літаратуразнавец." }
      : percentage >= 70
        ? { title: "Добры вынік!", emoji: "📚", msg: "Вы добра знаёмыя з біяграфіяй і творамі. Яшчэ крыху — і станеце знаўцам." }
        : percentage >= 50
          ? { title: "Ёсць над чым працаваць", emoji: "📖", msg: "Перачытайце залы музея і паспрабуйце зноў." }
          : { title: "Пачатак шляху", emoji: "🌱", msg: "Вярніцеся ў вестыбюль і абярыце маршрут нанова." };

  if (finished) {
    return (
      <div className="bg-white/80 rounded-2xl shadow-xl border border-[var(--color-gold)]/30 p-8 md:p-12 text-center">
        <div className="text-7xl mb-4">{grade.emoji}</div>
        <h3 className="font-serif text-3xl font-bold mb-3 text-[var(--color-burgundy)]">{grade.title}</h3>
        <div className="font-serif text-6xl font-bold text-[var(--color-burgundy)] mb-2">
          {score} / {quizQuestions.length}
        </div>
        <p className="mb-6 text-[var(--color-ink)]/80">{grade.msg}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <button onClick={onBack} className="px-6 py-3 bg-[var(--color-burgundy)] text-[var(--color-cream)] rounded-full">
            Іншае выпрабаванне
          </button>
          <a href="#lobby" className="px-6 py-3 border-2 border-[var(--color-burgundy)] text-[var(--color-burgundy)] rounded-full">
            У вестыбюль
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/80 rounded-2xl shadow-xl border border-[var(--color-gold)]/30 overflow-hidden">
      <div className="bg-gradient-to-r from-[var(--color-burgundy)] to-[var(--color-burgundy-dark)] text-[var(--color-cream)] p-6">
        <div className="flex justify-between text-sm mb-3">
          <span>Пытанне {currentQ + 1} / {quizQuestions.length}</span>
          <span>Балы: {score}</span>
        </div>
        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--color-gold-light)] transition-all"
            style={{ width: `${((currentQ + (showResult ? 1 : 0)) / quizQuestions.length) * 100}%` }}
          />
        </div>
      </div>
      <div className="p-6 md:p-10">
        <h3 className="font-serif text-2xl md:text-3xl font-bold mb-8">{quizQuestions[currentQ].question}</h3>
        <div className="space-y-3 mb-6">
          {quizQuestions[currentQ].options.map((option, i) => {
            const isCorrect = i === quizQuestions[currentQ].correctIndex;
            const isSelected = selected === i;
            let cls = "w-full text-left p-4 rounded-lg border-2 transition-all font-medium ";
            if (!showResult) cls += "border-[var(--color-gold)]/30 hover:border-[var(--color-burgundy)]";
            else if (isCorrect) cls += "border-green-600 bg-green-50";
            else if (isSelected) cls += "border-red-500 bg-red-50";
            else cls += "border-[var(--color-gold)]/20 opacity-60";
            return (
              <button key={i} onClick={() => handleAnswer(i)} disabled={showResult} className={cls}>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span>{option}</span>
                  {showResult && isCorrect && <span className="ml-auto">✓</span>}
                  {showResult && isSelected && !isCorrect && <span className="ml-auto">✗</span>}
                </div>
              </button>
            );
          })}
        </div>
        {showResult && (
          <>
            <div className={`p-4 rounded-lg mb-6 ${selected === quizQuestions[currentQ].correctIndex ? "bg-green-50 border border-green-300" : "bg-amber-50 border border-amber-300"}`}>
              <div className="font-semibold mb-1">
                {selected === quizQuestions[currentQ].correctIndex ? "✓ Правільна!" : "💡 Тлумачэнне:"}
              </div>
              <p className="text-sm">{quizQuestions[currentQ].explanation}</p>
            </div>
            <div className="text-right">
              <button onClick={next} className="px-6 py-3 bg-[var(--color-burgundy)] text-[var(--color-cream)] rounded-full">
                {currentQ + 1 >= quizQuestions.length ? "Вынік →" : "Далей →"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function QuestGame({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [show, setShow] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const task = questTasks[step];

  const answer = (i: number) => {
    if (show) return;
    setSelected(i);
    setShow(true);
    if (i === task.correctIndex) setScore((s) => s + 1);
  };

  const next = () => {
    if (step + 1 >= questTasks.length) setDone(true);
    else {
      setStep((s) => s + 1);
      setSelected(null);
      setShow(false);
    }
  };

  if (done) {
    return (
      <div className="bg-white/80 rounded-2xl shadow-xl border border-[var(--color-gold)]/30 p-8 md:p-12 text-center">
        <div className="text-7xl mb-4">🗝️</div>
        <h3 className="font-serif text-3xl font-bold mb-3 text-[var(--color-burgundy)]">Квэст завершаны</h3>
        <div className="font-serif text-6xl font-bold text-[var(--color-burgundy)] mb-4">
          {score} / {questTasks.length}
        </div>
        <p className="mb-6 text-[var(--color-ink)]/80">
          Вы прайшлі сцежкамі вобразаў «Вянка». Кожны правільны радок — кветка ў вашым вянку.
        </p>
        <button onClick={onBack} className="px-6 py-3 bg-[var(--color-burgundy)] text-[var(--color-cream)] rounded-full">
          Вярнуцца да выбару
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/80 rounded-2xl shadow-xl border border-[var(--color-gold)]/30 overflow-hidden">
      <div className="bg-gradient-to-r from-[var(--color-forest)] to-[var(--color-forest-light)] text-[var(--color-cream)] p-6">
        <div className="flex justify-between text-sm mb-3">
          <span>Крок {step + 1} / {questTasks.length}</span>
          <span>Знойдзена: {score}</span>
        </div>
        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-[var(--color-gold-light)]" style={{ width: `${((step + (show ? 1 : 0)) / questTasks.length) * 100}%` }} />
        </div>
      </div>
      <div className="p-6 md:p-10">
        <p className="font-serif text-xl md:text-2xl font-semibold mb-8 leading-relaxed">{task.question}</p>
        <div className="space-y-3 mb-6">
          {task.options?.map((opt, i) => {
            const ok = i === task.correctIndex;
            const sel = selected === i;
            let cls = "w-full text-left p-4 rounded-lg border-2 font-medium ";
            if (!show) cls += "border-[var(--color-gold)]/30 hover:border-[var(--color-forest)]";
            else if (ok) cls += "border-green-600 bg-green-50";
            else if (sel) cls += "border-red-500 bg-red-50";
            else cls += "opacity-60 border-[var(--color-gold)]/20";
            return (
              <button key={i} onClick={() => answer(i)} disabled={show} className={cls}>
                {opt}
              </button>
            );
          })}
        </div>
        {show && (
          <>
            <div className="p-4 rounded-lg mb-6 bg-amber-50 border border-amber-200 text-sm">{task.explanation}</div>
            <div className="text-right">
              <button onClick={next} className="px-6 py-3 bg-[var(--color-forest)] text-white rounded-full">
                {step + 1 >= questTasks.length ? "Завяршыць квэст" : "Наступны крок →"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
