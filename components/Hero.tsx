"use client";

import { useEffect, useRef, useState } from "react";

import { galabau } from "@/lib/galabau";
import { buildWhatsappHref } from "@/lib/service-area";

/**
 * Split-Hero: linke Haelfte zeigt Dachsanierung (Ziegel-Muster mit dezentem
 * Licht-Sweep), rechte Haelfte Gartenbau (Loop-Video mit Poster-Fallback).
 * Damit ist auf den ersten Blick erkennbar, dass der Betrieb beide Gewerke
 * abdeckt.
 *
 * Die Video-Playback-Erkennung fuer die Garten-Seite bleibt so bestehen wie
 * zuvor: iOS/macOS Low Power Mode blockiert Autoplay, deshalb wird auf echte
 * Progression via timeupdate gewartet, statt naiv "playing" zu vertrauen.
 */
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      if (!video.paused && video.currentTime > 0) {
        setVideoReady(true);
        video.removeEventListener("timeupdate", onTimeUpdate);
      }
    };
    video.addEventListener("timeupdate", onTimeUpdate);

    const attemptPlay = () => {
      void video.play().catch(() => {});
    };

    if (video.readyState >= 2) {
      attemptPlay();
    } else {
      video.addEventListener("loadeddata", attemptPlay, { once: true });
      video.load();
    }

    const onVisibilityChange = () => {
      if (!document.hidden) attemptPlay();
    };
    const onPageShow = () => attemptPlay();
    const onInteraction = () => {
      attemptPlay();
      document.removeEventListener("touchstart", onInteraction);
      document.removeEventListener("click", onInteraction);
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("pageshow", onPageShow);
    document.addEventListener("touchstart", onInteraction);
    document.addEventListener("click", onInteraction);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadeddata", attemptPlay);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pageshow", onPageShow);
      document.removeEventListener("touchstart", onInteraction);
      document.removeEventListener("click", onInteraction);
    };
  }, []);

  const whatsappHref = buildWhatsappHref(galabau.serviceArea.centerCity);

  return (
    <section className="relative h-[100dvh] min-h-[560px] overflow-hidden bg-ink">
      {/* Zweigeteilter Hintergrund: Dach links, Garten rechts. */}
      <div className="absolute inset-0 z-0 grid grid-cols-2">
        {/* Dach - linke Haelfte: gemauerte Ziegel als kachelbares SVG plus
            langsamer Licht-Sweep, damit auch ohne Video Bewegung im Bild ist. */}
        <div className="relative overflow-hidden bg-erde-500" aria-hidden="true">
          <div
            className="hero-roof-tiles absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='44' height='26' viewBox='0 0 44 26'><path d='M0 26 Q11 4 22 26 Q33 4 44 26 Z' fill='%23B8371F'/><path d='M0 26 Q11 4 22 26 Q33 4 44 26' stroke='%234E170C' stroke-width='0.9' fill='none' opacity='0.7'/></svg>\")",
              backgroundRepeat: "repeat",
              backgroundSize: "44px 26px",
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-erde-700/20 via-erde-800/45 to-erde-900/75" />
          <div className="hero-sweep pointer-events-none absolute inset-0" />
        </div>

        {/* Garten - rechte Haelfte: bestehendes Loop-Video mit Poster-Fallback. */}
        <div className="relative overflow-hidden bg-ink" aria-hidden="true">
          <div
            className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ${
              videoReady ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            style={{ isolation: "isolate", transform: "translateZ(0)" }}
          >
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              preload="auto"
              poster="/hero-poster.webp"
              disableRemotePlayback
              tabIndex={-1}
              aria-hidden="true"
              {...({ "webkit-playsinline": "true", "x-webkit-airplay": "deny" } as Record<string, string>)}
            >
              <source src="/hero-bg.webm" type="video/webm" />
              <source src="/hero-bg.mp4" type="video/mp4" />
            </video>
          </div>
          <img
            src="/hero-poster.webp"
            alt=""
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              videoReady ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>

      {/* Klare vertikale Trennkante zwischen Dach- und Garten-Haelfte. */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 z-[5] w-px -translate-x-1/2 bg-bone/30"
        aria-hidden="true"
      />

      {/* Kompakte Kennzeichnung der Halften ganz oben, damit die Zuordnung
          Bild-zu-Gewerk auch ohne Kontext eindeutig ist. */}
      <div className="pointer-events-none absolute inset-x-0 top-20 z-[15] hidden items-center justify-around px-10 md:flex">
        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-bone/80 drop-shadow">
          Dachsanierung
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-bone/80 drop-shadow">
          Gartenbau
        </span>
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/25" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-ink/70 to-transparent" />

      <div className="relative z-20 flex h-full items-end">
        <div className="mx-auto w-full max-w-[1400px] px-6 pb-16 md:px-10 md:pb-24 lg:px-14">
          <div className="max-w-2xl">
            <div className="mb-5 flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-erde-300/60 bg-erde-500/85 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-bone shadow-sm backdrop-blur-sm sm:text-[13px]">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M3 12 12 4l9 8" />
                  <path d="M5 10v10h14V10" />
                </svg>
                Dachsanierung
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-laub-300/60 bg-laub-500/85 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-bone shadow-sm backdrop-blur-sm sm:text-[13px]">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M12 21c5-2 8-6 8-12V5h-4c-6 0-10 3-12 8" />
                  <path d="M4 21c1-6 4-9 9-11" />
                </svg>
                Gartenbau
              </span>
            </div>

            <h1 className="font-display text-[36px] leading-[0.98] tracking-tight text-bone drop-shadow-lg sm:text-[46px] md:text-[62px] lg:text-[74px]">
              {galabau.claim}
            </h1>

            <p className="mt-5 hidden max-w-[46ch] text-[15px] leading-relaxed text-bone/85 drop-shadow-md md:block md:text-[17px]">
              {galabau.heroSubline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="/projekt-anfragen"
                className="inline-flex items-center justify-center rounded-full bg-laub-500 px-7 py-4 text-[14px] font-medium tracking-wide text-bone transition-colors hover:bg-laub-600 active:scale-[0.98]"
              >
                Angebot anfragen
              </a>
              {whatsappHref ? (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-bone/45 bg-bone/5 px-7 py-4 text-[14px] font-medium tracking-wide text-bone backdrop-blur-sm transition-colors hover:bg-bone/15 active:scale-[0.98]"
                >
                  Per WhatsApp fragen
                </a>
              ) : null}
            </div>

            <p className="mt-5 hidden font-mono text-[11px] uppercase tracking-[0.18em] text-bone/60 md:block">
              {galabau.assistant.responsePromise}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
