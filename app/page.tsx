import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Particles from "./components/Particles";
import Hero from "./components/Hero";
import LogosBar from "./components/LogosBar";
import WhyFacilIA from "./components/WhyFacilIA";
import BeforeAfter from "./components/BeforeAfter";
import Agents from "./components/Agents";
import LiveDemo from "./components/LiveDemo";
import HowItWorks from "./components/HowItWorks";
import ROICalculator from "./components/ROICalculator";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import WaitlistForm from "./components/WaitlistForm";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import SocialProofToast from "./components/SocialProofToast";
import ExitIntent from "./components/ExitIntent";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Particles />
      <Navbar />
      <Hero />
      <LogosBar />
      <WhyFacilIA />
      <BeforeAfter />
      <Agents />
      <LiveDemo />
      <HowItWorks />
      <ROICalculator />
      <Testimonials />
      <Pricing />
      <FAQ />
      <WaitlistForm />
      <Footer />
      <BackToTop />
      <SocialProofToast />
      <ExitIntent />
    </main>
  );
}
