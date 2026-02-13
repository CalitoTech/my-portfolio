import './App.css'
import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";
import ContactDock from "./components/ContactDock";
import ParticlesBackground from "./components/backgrounds/ParticlesBackground";

function App() {
  return (
    <main className="relative h-screen w-full bg-[#00030a] overflow-x-hidden overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <ParticlesBackground />

      <section id="home" className="relative h-screen w-full flex items-center justify-center snap-start z-10 py-16">
        <Hero />
      </section>

      <section id="experience" className="relative h-screen w-full flex items-start justify-center snap-start z-10 pt-4 pb-12">
        <Experience />
      </section>

      <section id="about" className="relative h-screen w-full flex items-start justify-center snap-start z-10 bg-[#00030a] pt-16 pb-8">
        <About />
      </section>

      <section id="services" className="relative h-screen w-full flex items-center justify-center snap-start z-10 bg-[#00030a] py-20 px-6">
        <Services />
      </section>

      <section id="contact" className="relative h-screen w-full flex items-center justify-center snap-start z-10">
        <Contact />
      </section>

      <ContactDock />
    </main>
  )
}

export default App