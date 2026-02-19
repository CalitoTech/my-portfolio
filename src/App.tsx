import './App.css'
import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import About from "./components/sections/About";
import Recognitions from "./components/sections/Recognitions";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";
import ContactDock from "./components/ContactDock";
import ParticlesBackground from "./components/backgrounds/ParticlesBackground";

function App() {
  return (
    <main className="relative w-full bg-[#00030a] overflow-x-hidden md:h-screen md:overflow-y-auto md:snap-y md:snap-mandatory md:scroll-smooth">
      <ParticlesBackground />

      <section id="home" className="relative min-h-screen md:h-screen w-full flex items-center justify-center md:snap-start z-10 py-16">
        <Hero />
      </section>

      <section id="experience" className="relative min-h-screen md:h-screen w-full flex items-start justify-center md:snap-start z-10 pt-4 pb-12">
        <Experience />
      </section>

      <section id="about" className="relative min-h-screen md:h-screen w-full flex items-start justify-center md:snap-start z-10 pt-20 pb-8">
        <About />
      </section>

      <section id="recognitions" className="relative min-h-screen md:h-screen w-full flex items-start justify-center md:snap-start z-10 pt-2 pb-4 px-6">
        <Recognitions />
      </section>

      <section id="services" className="relative min-h-screen md:h-screen w-full flex items-start justify-center md:snap-start z-10 py-4 px-6">
        <Services />
      </section>

      <section id="contact" className="relative min-h-screen md:h-screen w-full flex items-center justify-center md:snap-start z-10">
        <Contact />
      </section>

      <ContactDock />
    </main>
  )
}

export default App