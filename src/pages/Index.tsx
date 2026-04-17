import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Authority from "@/components/Authority";
import Procedures from "@/components/Procedures";
import Differentials from "@/components/Differentials";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Authority />
      <Procedures />
      <Differentials />
      <Results />
      <Testimonials />
      <Experience />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
