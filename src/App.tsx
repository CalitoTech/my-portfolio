import './App.css'
import { MotionConfig } from "motion/react";
import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import About from "./components/sections/About";
import Recognitions from "./components/sections/Recognitions";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";
import Header from "./components/Header";
import Backdrop from "./components/backgrounds/Backdrop";

const section = "relative z-10 flex min-h-dvh w-full items-center-safe justify-center px-5 pt-24 pb-20 md:px-8 md:snap-start";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main className="relative w-full overflow-x-hidden md:h-dvh md:overflow-y-auto md:snap-y md:snap-mandatory md:scroll-smooth">
        <Backdrop />

        <section id="home" className={section}>
          <Hero />
        </section>

        <section id="experience" className={section}>
          <Experience />
        </section>

        <section id="about" className={section}>
          <About />
        </section>

        <section id="recognitions" className={section}>
          <Recognitions />
        </section>

        <section id="services" className={section}>
          <Services />
        </section>

        <section id="contact" className="relative z-10 flex min-h-dvh w-full px-5 md:px-8 md:snap-start">
          <Contact />
        </section>
      </main>
    </MotionConfig>
  )
}

export default App
