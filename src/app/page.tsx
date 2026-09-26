import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import CurrentFocus from "@/components/CurrentFocus";
import Skills from "@/components/Skills";
import Experiments from "@/components/Experiments";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import OwlFlight from "@/components/OwlFlight";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <OwlFlight />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <CurrentFocus />
        <Skills />
        <Experiments />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
