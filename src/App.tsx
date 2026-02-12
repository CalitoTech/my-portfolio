import './App.css'
import ParticlesBackground from './components/backgrounds/ParticlesBackground'
import Hero from './components/sections/Hero'
import Experience from './components/sections/Experience'
import ContactDock from './components/ContactDock'
import About from './components/sections/About'

function App() {
  return (
    <main className="h-screen w-full bg-[#00030a] text-slate-50 overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth">
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>

      <section className="relative min-h-screen w-full flex items-center justify-center snap-start z-10 py-16">
        <Hero />
      </section>

      <section className="relative min-h-screen w-full flex items-start justify-center snap-start z-10 pt-4 pb-12">
        <Experience />
      </section>

      <section className="relative min-h-screen w-full flex items-start justify-center snap-start z-10 bg-[#00030a] pt-16 pb-12">
        <About />
      </section>

      <ContactDock />
    </main>
  )
}

export default App