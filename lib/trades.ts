// Multi-Handwerk-Template: zwei (oder mehr) Gewerke in einer Website.
// Jedes Gewerk liefert alle Content-Slots, die die Homepage-Sektionen
// pro Auswahl anzeigen. Der TradeContext hält, welches gerade aktiv ist.

export type TradeKey = string;

export type TradeService = {
  title: string;
  text: string;
  image: string;
};

export type TradeReference = {
  title: string;
  location: string;
  image: string;
  scope: string;
};

export type TradeReview = {
  name: string;
  text: string;
  place?: string;
};

export type Trade = {
  key: TradeKey;
  label: string;
  accent: {
    bg: string;
    text: string;
    border: string;
    hex: string;
  };
  heroImage: string;
  splitClaim: string;
  expandedClaim: string;
  expandedSubline: string;
  splitBullets: string[];
  services: TradeService[];
  references: TradeReference[];
  reviews: TradeReview[];
  ablauf: { title: string; text: string }[];
  careerRoles: string[];
  ctaLabel: string;
  ctaHref: string;
};

export const trades: Trade[] = [
  {
    key: "dach",
    label: "Dachsanierung",
    accent: {
      bg: "bg-[#8a3b2a]",
      text: "text-[#8a3b2a]",
      border: "border-[#8a3b2a]",
      hex: "#8a3b2a",
    },
    heroImage: "/assets/kocer/walmdach1.webp",
    splitClaim: "Dachsanierung.",
    expandedClaim: "Ein Dach, das eine Generation hält.",
    expandedSubline:
      "Das Dach gehört zu den am stärksten beanspruchten Bauteilen. Ob Neubau oder Sanierung, Steildach oder Flachdach — wir planen und arbeiten so, dass Sie viele Jahre trocken darunter wohnen.",
    splitBullets: ["Bedachungen", "Dämmung", "Klempnerarbeiten"],
    services: [
      {
        title: "Bedachungen",
        text:
          "Flachdach- und Steildachsanierung, Erstellung und Sanierung von Metalldächern — mit sauberem Unterbau und dauerhafter Regensicherheit.",
        image: "/assets/kocer/tonziegel1.webp",
      },
      {
        title: "Dachfenster",
        text:
          "Dachfenster in allen Größen, sauber eingebaut und dicht angeschlossen. Ein Leben voller Lichtblicke — funktional wie stimmungsvoll.",
        image: "/assets/kocer/fenster.webp",
      },
      {
        title: "Dachdämmung",
        text:
          "Aufsparren-, Zwischensparren- oder Untersparrendämmung, je nach Konstruktion und Nutzung. Auch als Dämmung der obersten Geschossdecke.",
        image: "/assets/kocer/mineralwolle.webp",
      },
      {
        title: "Schornsteinverkleidung",
        text:
          "Ob Zink, Kupfer oder Schiefer — Verkleidung eines maroden Schornsteins, bevor teure Neuaufbauten nötig werden.",
        image: "/assets/kocer/schornstein.webp",
      },
      {
        title: "Klempner- & Spenglerarbeiten",
        text:
          "First, Traufe, Ortgang, Dachrinnen und Fallrohre. Wir kümmern uns um alle Details für ein witterungsbeständiges Dach.",
        image: "/assets/kocer/dachrinne1.webp",
      },
      {
        title: "Dachreparaturen",
        text:
          "Reparaturen aller Art, Reinigung von Dachrinnen, Fallrohren und Vordächern — damit Sie sicher unter Ihrem Dach wohnen.",
        image: "/assets/kocer/vordach.webp",
      },
    ],
    references: [
      {
        title: "Neueindeckung mit Tonziegel",
        location: "Lampertheim",
        image: "/assets/kocer/tonziegel1.webp",
        scope: "Steildach komplett neu eingedeckt mit Tonziegel und neuer Unterspannbahn.",
      },
      {
        title: "Walmdach saniert",
        location: "Bürstadt",
        image: "/assets/kocer/walmdach1.webp",
        scope: "Sanierung eines Walmdachs inklusive First- und Ortgangdetails.",
      },
      {
        title: "Schornsteinverkleidung Schiefer",
        location: "Bensheim",
        image: "/assets/kocer/schornstein.webp",
        scope: "Verkleidung eines maroden Schornsteins in Naturschiefer.",
      },
    ],
    reviews: [
      {
        name: "Familie K.",
        place: "Lampertheim",
        text:
          "Zwei Wochen, alles trocken, sauber, wie besprochen. Von der ersten Beratung bis zur Übergabe hat alles gepasst.",
      },
      {
        name: "Hausverwaltung M.",
        place: "Worms",
        text:
          "Dachsanierung im laufenden Betrieb ohne Zwischenfälle. Die Kommunikation war klar, die Baustelle jeden Abend besenrein.",
      },
    ],
    ablauf: [
      { title: "Anfrage", text: "Sie schildern Ihr Vorhaben, grob reicht. Fotos vom Ist-Zustand sparen die erste Runde Rückfragen." },
      { title: "Ortstermin & Aufmaß", text: "Wir sehen uns das Dach an, klären Zugang, Statik und Anschlüsse. Erst danach reden wir über Preise." },
      { title: "Angebot", text: "Position für Position nachvollziehbar, mit Materialien und Mengen. Rückfragen sind ausdrücklich erwünscht." },
      { title: "Ausführung", text: "Feste Bauzeit, ein Ansprechpartner, saubere Baustelle am Feierabend. Änderungen halten wir schriftlich fest." },
      { title: "Übergabe", text: "Gemeinsame Abnahme mit allen Details wie Dachrinnen, Anschlüssen und Sicherheitsausstattung." },
    ],
    careerRoles: [
      "Dachdecker/in (m/w/d)",
      "Klempner/in / Spengler/in (m/w/d)",
      "Auszubildende/r Dachdecker",
    ],
    ctaLabel: "Dachprojekt anfragen",
    ctaHref: "/projekt-anfragen?trade=dach",
  },
  {
    key: "garten",
    label: "Gartenbau",
    accent: {
      bg: "bg-[#3f6b2a]",
      text: "text-[#3f6b2a]",
      border: "border-[#3f6b2a]",
      hex: "#3f6b2a",
    },
    heroImage: "/assets/kocer/garten-hero.webp",
    splitClaim: "Gartenbau.",
    expandedClaim: "Ein Garten, den Sie jeden Tag genießen.",
    expandedSubline:
      "Pflaster, Terrasse, Vorgarten, Bepflanzung und Pflege aus einer Hand. Wir gestalten Gärten so, dass Details noch nach zehn Jahren sitzen — und begleiten sie mit fachgerechter Pflege.",
    splitBullets: ["Gartenpflege", "Pflaster & Terrasse", "Naturstein"],
    services: [
      {
        title: "Gartenpflege",
        text:
          "Rasenpflege, Baum- und Gehölzschnitt, Teichreinigung, Jahrespflege — fachgerecht und der Jahreszeit entsprechend.",
        image: "/assets/kocer/hecke.webp",
      },
      {
        title: "Pflasterungen",
        text:
          "Wege, Auffahrten und Hofflächen mit dem passenden Material und fachgerechtem Unterbau.",
        image: "/assets/kocer/pflaster1.webp",
      },
      {
        title: "Vorgärten",
        text:
          "Das Aushängeschild jedes Hauses — schön gestaltet und bepflanzt für einen einladenden Empfang.",
        image: "/assets/kocer/vorgarten1.webp",
      },
      {
        title: "Natursteinarbeiten",
        text:
          "Natürliche Ästhetik im Garten: Trockenmauern, Findlinge, Treppenstufen, L-Steine.",
        image: "/assets/kocer/naturstein.webp",
      },
      {
        title: "Terrassen",
        text:
          "Terrassen aus Hartholz oder hochwertigen Terrassenplatten — der ideale Platz für entspannte Stunden im Grünen.",
        image: "/assets/kocer/terrassenbau.webp",
      },
      {
        title: "Baumfällungen & -pflege",
        text:
          "Fällungen schnell und sicher mit zertifizierter Seilklettertechnik. Baum- und Gehölzschnitt, Verpflanzungen.",
        image: "/assets/kocer/baum1.webp",
      },
    ],
    references: [
      {
        title: "Neu angelegte Gartenanlage",
        location: "Lampertheim",
        image: "/assets/kocer/gartenanlage1.webp",
        scope: "Erdarbeiten, Pflaster, Rasen und Bepflanzung — komplette Neuanlage.",
      },
      {
        title: "Terrasse mit Pergola",
        location: "Viernheim",
        image: "/assets/kocer/pergola.webp",
        scope: "Terrassenbelag, holzverkleidete Pergola und Sitzplatzgestaltung.",
      },
      {
        title: "Vorgarten mit Natursteinweg",
        location: "Bensheim",
        image: "/assets/kocer/vorgarten1.webp",
        scope: "Naturstein-Wegefläche, Rasen und Staudenbeete am Hauseingang.",
      },
    ],
    reviews: [
      {
        name: "Familie B.",
        place: "Lampertheim",
        text:
          "Aus unserer alten Rasenfläche ist ein Garten geworden, den wir jeden Abend nutzen. Sauber gearbeitet, faire Beratung.",
      },
      {
        name: "S. G.",
        place: "Heppenheim",
        text:
          "Pflasterung der Einfahrt in einer Woche. Termine wurden gehalten, das Ergebnis sitzt millimetergenau.",
      },
    ],
    ablauf: [
      { title: "Anfrage", text: "Sie schildern Ihr Vorhaben, grob reicht. Fotos vom Ist-Zustand sparen die erste Runde Rückfragen." },
      { title: "Ortstermin & Aufmaß", text: "Wir sehen uns die Fläche an, klären Zufahrt, Untergrund und Höhen. Erst danach reden wir über Preise." },
      { title: "Angebot", text: "Position für Position nachvollziehbar, mit Materialien und Mengen. Rückfragen sind ausdrücklich erwünscht." },
      { title: "Ausführung", text: "Feste Bauzeit, ein Ansprechpartner, sauberer Platz am Feierabend. Änderungen halten wir schriftlich fest." },
      { title: "Übergabe & Pflege", text: "Gemeinsame Abnahme mit Einweisung in Bewässerung und Pflege. Auf Wunsch übernehmen wir sie dauerhaft." },
    ],
    careerRoles: [
      "Landschaftsgärtner/in (m/w/d)",
      "Vorarbeiter/in GaLaBau",
      "Auszubildende/r Garten- & Landschaftsbau",
    ],
    ctaLabel: "Gartenprojekt anfragen",
    ctaHref: "/projekt-anfragen?trade=garten",
  },
];

export function findTrade(key: TradeKey | null | undefined): Trade {
  return trades.find((t) => t.key === key) ?? trades[0];
}

export function otherTrade(key: TradeKey): Trade {
  const idx = trades.findIndex((t) => t.key === key);
  return trades[(idx + 1) % trades.length];
}
