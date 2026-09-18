"use client";

import { useEffect, useRef } from "react";

import { galabau } from "@/lib/galabau";
import { trades, type Trade } from "@/lib/trades";
import { useTrade } from "@/components/TradeContext";

/**
 * Split-Hero fuer Multi-Gewerk-Handwerker.
 *
 * Vor der Auswahl: zwei halbe Bildpanels als Hintergrund, darueber der
 * klassische Hero-Text der Marke und ein Prompt "Was interessiert Sie?" mit
 * zwei Buttons.
 *
 * Nach der Auswahl: das gewaehlte Panel expandiert auf volle Breite. Bilder
 * sind absolut mit 100vw Breite an der Aussenkante verankert — der sichtbare
 * Ausschnitt bleibt konstant, nur der overflow-hidden-Rand wandert.
 *
 * Ohne Klick: sobald der Nutzer bis unter die Haelfte des Heros scrollt, wird
 * das erste Gewerk als Default gelockt.
 */
export function SplitHero() {
  const { active, setActive, locked, lock } = useTrade();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (locked) return;
    const el = heroRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < window.innerHeight * 0.5) lock();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [locked, lock]);

  const left = trades[0];
  const right = trades[1];

  return (
    <section
      ref={heroRef}
      className="relative isolate h-[100dvh] min-h-[620px] w-full overflow-hidden bg-ink"
    >
      <TradePanel
        side="left"
        trade={left}
        active={active.key === left.key}
        locked={locked}
        onSelect={() => setActive(left.key)}
      />
      <TradePanel
        side="right"
        trade={right}
        active={active.key === right.key}
        locked={locked}
        onSelect={() => setActive(right.key)}
      />

      {/* Trenner in der Mitte, verschwindet nach der Auswahl. */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 left-1/2 z-20 w-px -translate-x-1/2 bg-bone/35 transition-opacity duration-700 ${
          locked ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Hero-Text + Auswahl vor der Entscheidung. */}
      <div
        className={`pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-6 transition-opacity duration-500 ${
          locked ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="pointer-events-auto w-full max-w-[900px] text-center">
          <h1 className="font-display text-[40px] leading-[0.98] tracking-tight text-bone drop-shadow-xl sm:text-[56px] md:text-[76px] lg:text-[92px]">
            {galabau.claim}
          </h1>
          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.28em] text-bone/70">
            Was interessiert Sie?
          </p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <button
              type="button"
              onClick={() => setActive(left.key)}
              className="inline-flex items-center justify-center rounded-full border border-bone/70 bg-bone/10 px-8 py-4 text-[14px] font-medium tracking-wide text-bone backdrop-blur-sm transition-all hover:bg-bone/25 active:scale-[0.98]"
            >
              {left.label}
            </button>
            <button
              type="button"
              onClick={() => setActive(right.key)}
              className="inline-flex items-center justify-center rounded-full border border-bone/70 bg-bone/10 px-8 py-4 text-[14px] font-medium tracking-wide text-bone backdrop-blur-sm transition-all hover:bg-bone/25 active:scale-[0.98]"
            >
              {right.label}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TradePanel({
  side,
  trade,
  active,
  locked,
  onSelect,
}: {
  side: "left" | "right";
  trade: Trade;
  active: boolean;
  locked: boolean;
  onSelect: () => void;
}) {
  const width = !locked ? "50%" : active ? "100%" : "0%";
  const zIndex = active ? 10 : 5;

  return (
    <button
      type="button"
      aria-label={`${trade.label} auswählen`}
      onClick={onSelect}
      className="absolute inset-y-0 overflow-hidden text-left transition-[width] duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
      style={{
        left: side === "left" ? 0 : undefined,
        right: side === "right" ? 0 : undefined,
        width,
        zIndex,
        cursor: locked ? "default" : "pointer",
      }}
      disabled={locked && !active}
    >
      {/* Bild fest 100vw, an der Aussenkante verankert. */}
      <div
        className="absolute inset-y-0"
        style={{
          width: "100vw",
          left: side === "left" ? 0 : "auto",
          right: side === "right" ? 0 : "auto",
        }}
      >
        <img
          src={trade.heroImage}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div
          aria-hidden
          className={`absolute inset-0 bg-gradient-to-b from-ink/25 via-ink/45 to-ink/80 transition-opacity duration-700 ${
            active && locked ? "opacity-90" : "opacity-100"
          }`}
        />
      </div>

      {/* Content nach Auswahl. */}
      <div
        className={`pointer-events-none absolute inset-0 z-10 flex items-end transition-opacity delay-300 duration-700 ${
          active && locked ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mx-auto w-full max-w-[1400px] px-6 pb-16 md:px-10 md:pb-24 lg:px-14">
          <div className="max-w-2xl">
            <h1 className="font-display text-[36px] leading-[0.98] tracking-tight text-bone drop-shadow-lg sm:text-[46px] md:text-[62px] lg:text-[74px]">
              {trade.expandedClaim}
            </h1>
            <p className="mt-5 hidden max-w-[46ch] text-[15px] leading-relaxed text-bone/85 drop-shadow-md md:block md:text-[17px]">
              {trade.expandedSubline}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {trade.splitBullets.map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-bone/40 bg-bone/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-bone/85 backdrop-blur-sm"
                >
                  {b}
                </li>
              ))}
            </ul>
            <div className="pointer-events-auto mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={trade.ctaHref}
                className={`inline-flex items-center justify-center rounded-full ${trade.accent.bg} px-7 py-4 text-[14px] font-medium tracking-wide text-bone transition-transform hover:brightness-110 active:scale-[0.98]`}
              >
                {trade.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
