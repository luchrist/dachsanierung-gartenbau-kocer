import { Navbar } from "@/components/Navbar";
import { SplitHero } from "@/components/SplitHero";
import { TradeSections } from "@/components/TradeSections";
import { Einsatzgebiet } from "@/components/Einsatzgebiet";
import { Galerie } from "@/components/Galerie";
import { RecruitingTeaser } from "@/components/RecruitingTeaser";
import { WhatsappFloat } from "@/components/WhatsappFloat";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main style={{ overflowX: "clip" }}>
      <Navbar />
      <SplitHero />
      <TradeSections />
      <Einsatzgebiet />
      <Galerie />
      <RecruitingTeaser />
      <Footer />
      <WhatsappFloat />
    </main>
  );
}
