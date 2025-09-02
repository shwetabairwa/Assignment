
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Plans from "@/components/Plans";
import Payouts from "@/components/Payouts";
import Footer from "@/components/Footer";
import MovingLine from "@/components/MovingLine";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">

      <Hero />
      <Timeline />
      <Plans />
      <Payouts />
      <MovingLine/>
      <Footer />
    </main>
  );
}
