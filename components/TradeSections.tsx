"use client";

import { otherTrade } from "@/lib/trades";
import { useTrade } from "@/components/TradeContext";

/**
 * Alle Homepage-Sektionen, die sich pro Trade neu befüllen.
 * Ein Client-Modul, damit der Zustand nicht zwischen mehreren Islands
 * hin- und hergereicht werden muss.
 */
export function TradeSections() {
  const { active, setActive } = useTrade();
  const other = otherTrade(active.key);

  return (
    <>
      {/* Leistungen — Bild-Karten wie im GaLaBau-Template */}
      <section id="leistungen" className="relative bg-bone py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="border-b border-ink/15 pb-12">
            <SectionEyebrow>{active.label}</SectionEyebrow>
            <h2 className="mt-6 font-display text-[32px] leading-[1.05] tracking-tight text-ink sm:text-[40px] md:text-[58px]">
              Leistungen im <span className="italic text-laub-500">Überblick.</span>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {active.services.map((s) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-4xl border border-ink/10 bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-creme">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-5 font-display text-[24px] tracking-tight text-bone drop-shadow-md md:text-[28px]">
                    {s.title}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-[14px] leading-relaxed text-ink/70">{s.text}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Einladender Text-Link zum anderen Gewerk — mittig, dezent, Farbe
              des anderen Gewerks. Kein Button-Look, sondern typografisch. */}
          <div className="mt-16 flex flex-col items-center gap-2 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/50">
              Uebrigens
            </p>
            <button
              type="button"
              onClick={() => setActive(other.key)}
              style={{ color: other.accent.hex }}
              className="group inline-flex items-center gap-3 border-b-2 border-current pb-1 font-display text-[22px] tracking-tight transition-opacity hover:opacity-80 md:text-[28px]"
            >
              Zeigen Sie mir die {other.label}-Leistungen
              <LinkIcon className="h-[18px] w-[18px] transition-transform group-hover:translate-x-[3px] md:h-[22px] md:w-[22px]" />
            </button>
          </div>
        </div>
      </section>

      {/* Referenzen */}
      <section id="referenzen" className="bg-ink py-28 text-bone md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="border-b border-bone/15 pb-12">
            <SectionEyebrow invert>Referenzen</SectionEyebrow>
            <h2 className="mt-6 font-display text-[32px] leading-[1.05] tracking-tight text-bone sm:text-[40px] md:text-[58px]">
              Zuletzt umgesetzt in <span className="italic text-laub-300">{active.label}.</span>
            </h2>
          </div>
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
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
                <div className="p-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55">{r.location}</div>
                  <h3 className="mt-2 font-display text-[22px] leading-tight tracking-tight">{r.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-bone/75">{r.scope}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CrossTeaser
        text={`Doch interessiert an ${other.label}?`}
        cta={`Zu ${other.label} wechseln`}
        onClick={() => setActive(other.key)}
        colorHex={other.accent.hex}
      />

      {/* Ablauf als Zeitstrahl — analog Arbeitsweise im GaLaBau-Template */}
      <section id="ablauf" className="relative bg-ink py-28 md:py-40 text-bone">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-x-10 gap-y-14">
            <div className="col-span-12 lg:col-span-5">
              <SectionEyebrow invert>So arbeiten wir</SectionEyebrow>
              <h2 className="mt-6 font-display text-[32px] leading-[1.05] tracking-tight text-bone sm:text-[40px] md:text-[54px]">
                Klare Schritte, ein <span className="italic text-laub-300">Ansprechpartner.</span>
              </h2>
              <p className="mt-6 max-w-[50ch] text-[15px] leading-relaxed text-bone/75">
                Ein Projekt läuft bei uns immer nach demselben Ablauf. Sie wissen an jedem Punkt, was
                als Nächstes passiert und woran Sie sind. Keine Überraschungen auf der Rechnung.
              </p>
              <a
                href={active.ctaHref}
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-laub-500 px-8 py-4 text-[14px] font-medium text-bone transition-colors hover:bg-laub-400"
              >
                {active.ctaLabel}
                <span>&rarr;</span>
              </a>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <ol className="relative border-l border-bone/15 pl-8 md:pl-10">
                {active.ablauf.map((step, index) => (
                  <li key={step.title} className="relative pb-10 last:pb-0">
                    <span className={`absolute -left-[calc(2rem+1px)] flex h-[1.9rem] w-[1.9rem] -translate-x-1/2 items-center justify-center rounded-full ${active.accent.bg} font-mono text-[11px] text-bone md:-left-[calc(2.5rem+1px)]`}>
                      {index + 1}
                    </span>
                    <h3 className="font-display text-[21px] tracking-tight text-bone md:text-[24px]">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[54ch] text-[14px] leading-relaxed text-bone/65">
                      {step.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

function LinkIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

function SectionEyebrow({ children, invert = false }: { children: React.ReactNode; invert?: boolean }) {
  return (
    <div className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] ${invert ? "text-bone/55" : "text-ink/55"}`}>
      <span className={`inline-block h-[0.4rem] w-[0.4rem] rounded-full ${invert ? "bg-erde-400" : "bg-laub-500"}`} />
      <span>{children}</span>
    </div>
  );
}

function CrossTeaser({
  text,
  cta,
  onClick,
  colorHex,
}: {
  text: string;
  cta: string;
  onClick: () => void;
  colorHex: string;
}) {
  // Kompaktes, farbiges Band in der Akzentfarbe des anderen Gewerks. Wirkt als
  // klarer Divider zwischen zwei ansonsten benachbarten Sektionen und geht
  // nicht in der Ink-Flaeche der Referenzen unter. Inline-Style, weil Tailwind
  // die dynamisch aus der trades-Config gezogenen bg-[#...]-Klassen nicht
  // zuverlaessig purgt.
  return (
    <section className="relative text-bone" style={{ backgroundColor: colorHex }}>
      <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-5 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10 md:py-12">
        <h2 className="font-display text-[24px] leading-tight tracking-tight md:text-[32px]">
          {text}
        </h2>
        <button
          type="button"
          onClick={onClick}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-bone/60 bg-bone/10 px-6 py-3 text-[13px] font-medium tracking-wide text-bone backdrop-blur-sm transition-all hover:bg-bone/25 active:scale-[0.98]"
        >
          {cta}
          <span>&rarr;</span>
        </button>
      </div>
    </section>
  );
}
