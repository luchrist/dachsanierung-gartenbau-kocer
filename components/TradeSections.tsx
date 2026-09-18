"use client";

import { otherTrade } from "@/lib/trades";
import { useTrade } from "@/components/TradeContext";

/**
 * Alle Homepage-Sektionen, die sich pro Trade neu befuellen. Ein
 * Komponentenmodul, damit der Zustand nicht zwischen mehreren Client-Islands
 * hin- und her muss.
 */
export function TradeSections() {
  const { active, setActive } = useTrade();
  const other = otherTrade(active.key);

  return (
    <>
      <section id="leistungen" className="bg-bone py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionHead
            eyebrow={active.label}
            title="Leistungen im Überblick"
            text="Was Sie bei uns für dieses Gewerk erwarten können."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {active.services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-ink/10 bg-white/60 p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className={`mb-4 h-[3px] w-10 ${active.accent.bg}`} />
                <h3 className="font-display text-[24px] leading-tight tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/75">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CrossTeaser
        text={`Interessiert an ${other.label}?`}
        cta={`Mehr zu ${other.label}`}
        onClick={() => setActive(other.key)}
        color={other.accent.bg}
      />

      <section id="referenzen" className="bg-ink py-24 text-bone md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionHead
            eyebrow="Referenzen"
            title={`Zuletzt umgesetzt: ${active.label}`}
            text="Drei Projekte, an denen sich unser Anspruch ablesen lässt."
            invert
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {active.references.map((r) => (
              <article
                key={r.title}
                className="group overflow-hidden rounded-2xl border border-bone/15 bg-bone/[0.04]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-bone/10">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55">
                    {r.location}
                  </div>
                  <h3 className="mt-2 font-display text-[22px] leading-tight tracking-tight">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-bone/75">{r.scope}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ablauf" className="bg-bone py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionHead
            eyebrow="Ablauf"
            title="So arbeiten wir"
            text="Klare Schritte, ein Ansprechpartner, keine Überraschungen."
          />
          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {active.ablauf.map((step, i) => (
              <li
                key={step.title}
                className="rounded-2xl border border-ink/10 bg-white/60 p-8"
              >
                <div
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${active.accent.bg} font-mono text-[12px] text-bone`}
                >
                  {i + 1}
                </div>
                <h3 className="mt-4 font-display text-[22px] leading-tight tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/75">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="stimmen" className="bg-bone-50 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionHead
            eyebrow="Stimmen"
            title="Was Kundinnen und Kunden sagen"
            text="Auszug aus den letzten Projekten dieses Gewerks."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {active.reviews.map((r) => (
              <blockquote
                key={r.name}
                className="rounded-2xl border border-ink/10 bg-white/70 p-8"
              >
                <p className="font-display text-[20px] leading-snug tracking-tight text-ink">
                  &ldquo;{r.text}&rdquo;
                </p>
                <footer className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
                  {r.name}
                  {r.place ? ` — ${r.place}` : ""}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CrossTeaser
        text={`Vielleicht doch eher ${other.label}?`}
        cta={`Zu ${other.label} wechseln`}
        onClick={() => setActive(other.key)}
        color={other.accent.bg}
      />
    </>
  );
}

function SectionHead({
  eyebrow,
  title,
  text,
  invert = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p
        className={`font-mono text-[10px] uppercase tracking-[0.28em] ${
          invert ? "text-bone/60" : "text-ink/50"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-[36px] leading-[1] tracking-tight md:text-[52px] ${
          invert ? "text-bone" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-[15px] leading-relaxed md:text-[17px] ${
          invert ? "text-bone/75" : "text-ink/70"
        }`}
      >
        {text}
      </p>
    </div>
  );
}

function CrossTeaser({
  text,
  cta,
  onClick,
  color,
}: {
  text: string;
  cta: string;
  onClick: () => void;
  color: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-bone">
      <div
        aria-hidden
        className={`absolute inset-0 opacity-[0.15] ${color}`}
        style={{ mixBlendMode: "screen" }}
      />
      <div className="relative mx-auto flex max-w-[1400px] flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-10">
        <h2 className="font-display text-[30px] leading-tight tracking-tight md:text-[42px]">
          {text}
        </h2>
        <button
          type="button"
          onClick={onClick}
          className={`inline-flex items-center justify-center rounded-full ${color} px-7 py-4 text-[14px] font-medium tracking-wide text-bone transition-transform hover:brightness-110 active:scale-[0.98]`}
        >
          {cta}
        </button>
      </div>
    </section>
  );
}
