export interface Referenz {
  id: string;
  /** Short project title. */
  title: string;
  /** Real place name. Never invent one. */
  ort: string;
  /** Must match one of the `label` values in lib/galabau.ts services. */
  leistung: string;
  jahr?: string;
  text: string;
  /** Finished state. Required. */
  afterImage: string;
  /**
   * Before state. OPTIONAL and only ever a genuine before shot of the SAME
   * project. Without it the card renders as a single image instead of a
   * before/after slider, which is the honest fallback.
   */
  beforeImage?: string;
  alt: string;
}

export const referenzen: Referenz[] = [
  {
    id: "eingangsbereich",
    title: "Vorgarten und Eingangsweg neu gepflastert",
    ort: "Projektbeispiel",
    leistung: "Pflaster- & Natursteinarbeiten",
    text: "Aus einer schwer zugänglichen Zufahrt wurde ein sauber gepflasterter Eingangsbereich mit Rinne, Randeinfassung und passenden Vorgartenflächen. Rückbau, Unterbau und neuer Belag als eine Baustelle.",
    afterImage: "/assets/referenzen/eingangsbereich-nachher.webp",
    beforeImage: "/assets/referenzen/eingangsbereich-vorher.webp",
    alt: "Eingangsbereich vor und nach dem Pflastern"
  },
  {
    id: "terrasse",
    title: "Neue Terrasse mit sauberem Anschluss",
    ort: "Projektbeispiel",
    leistung: "Terrassen & Dachterrassen",
    text: "Die alte Fläche wurde bis auf den tragfähigen Untergrund zurückgebaut, mit passendem Aufbau, Randabschluss und großformatigen Platten neu aufgebaut. Übergänge zu Rasen und Beeten in einem Zug mitgeführt.",
    afterImage: "/assets/referenzen/terrasse-nachher.webp",
    beforeImage: "/assets/referenzen/terrasse-vorher.webp",
    alt: "Terrasse vor und nach der Neugestaltung mit großformatigen Platten"
  },
  {
    id: "aussenanlage",
    title: "Außenanlage nach der Dachsanierung",
    ort: "Projektbeispiel",
    leistung: "Dach und Garten aus einer Hand",
    text: "Nach der Neueindeckung eines Wohnhauses haben wir die Außenanlage rund ums Haus wiederhergestellt: neue Zufahrt, Randeinfassungen, Vorgarten und Rasenanschluss. Eine Baustelle, ein Ansprechpartner.",
    afterImage: "/assets/referenzen/gartenneuanlage-nachher.webp",
    beforeImage: "/assets/referenzen/gartenneuanlage-vorher.webp",
    alt: "Außenanlage vor und nach der Wiederherstellung nach der Dachsanierung"
  }
];
