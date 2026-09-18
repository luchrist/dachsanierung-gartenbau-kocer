import { Navbar } from "@/components/Navbar";
import { SplitHero } from "@/components/SplitHero";
import { TradeSections } from "@/components/TradeSections";
import { WhatsappFloat } from "@/components/WhatsappFloat";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main style={{ overflowX: "clip" }}>
      <Navbar />
      <SplitHero />
      <TradeSections />
      <Footer />
      <WhatsappFloat />
    </main>
  );
}
