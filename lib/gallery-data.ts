export interface GalleryItem {
  src: string;
  alt: string;
}

// Curated for the gallery layout: a finished showcase first, followed by a
// varied mix of work in progress, detail work and specialist services.
export const galleryItems: GalleryItem[] = [
  {
    src: "/assets/leistungen/gewerbliche-aussenanlagen.webp",
    alt: "Wohngebäude mit saniertem Dach und neu angelegter Außenanlage"
  },
  {
    src: "/assets/leistungen/pflasterarbeiten-terrasse.webp",
    alt: "Pflasterarbeiten mit großformatigen Platten auf tragfähigem Unterbau"
  },
  {
    src: "/assets/leistungen/terrassenbau-grossformatplatten-01.webp",
    alt: "Neu gebaute Terrasse mit sauberem Randabschluss und Übergang zum Rasen"
  },
  {
    src: "/assets/leistungen/gartenpflege-heckenschnitt.webp",
    alt: "Fachgerechter Heckenschnitt im Rahmen des Pflegevertrags"
  },
  {
    src: "/assets/leistungen/terrassenbau-grossformatplatten-02.webp",
    alt: "Detailaufnahme einer verlegten Platte mit sauberer Fuge"
  }
];
