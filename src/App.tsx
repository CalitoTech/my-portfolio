import './App.css'
import ParticlesBackground from './components/backgrounds/ParticlesBackground'
import Hero from './components/sections/Hero'
import Experience from './components/sections/Experience'
import ContactDock from './components/ContactDock'

function App() {
  return (
    <main className="h-screen w-full bg-[#00030a] text-slate-50 overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth">
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>

      <section className="relative h-screen w-full flex items-center justify-center snap-start z-10">
        <Hero />
      </section>

      <section className="relative h-screen w-full flex items-center justify-center snap-start z-10">
        <Experience />
      </section>

      <ContactDock />
    </main>
  )
}

export default App