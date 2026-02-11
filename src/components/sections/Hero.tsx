import { BlurFade } from "@/components/ui/blur-fade"
import { SparklesText } from "@/components/ui/sparkles-text"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative z-10 flex flex-col items-center px-6 text-center w-full max-w-4xl">
      {/* 1. Badge Superior */}
      <BlurFade delay={0.2} inView>
        <div className="mb-10 flex items-center gap-3 rounded-full border border-white/5 bg-white/5 px-5 py-2 backdrop-blur-md">
          <span className="flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">
            Cofundador & Líder de Backend
          </span>
        </div>
      </BlurFade>

      {/* 2. Nombre */}
      <BlurFade delay={0.4} inView>
        <SparklesText className="text-7xl md:text-9xl font-black tracking-tighter text-white">
          Carlos Navas
        </SparklesText>
      </BlurFade>

      {/* 3. Rol */}
      <div className="mt-6 h-12 flex items-center justify-center">
        <TypingAnimation
          className="text-xl md:text-3xl font-light text-blue-400/80 tracking-wide"
          duration={100}
          cursorStyle="block"
          loop
        >
          Desarrollador FullStack
        </TypingAnimation>
      </div>

      {/* 4. Badges de Empresas */}
      <BlurFade delay={0.6} inView>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <div className="px-4 py-1 border-l-2 border-green-500/50 bg-green-500/5 transition-colors hover:bg-green-500/10">
             <p className="text-xs font-bold tracking-widest text-slate-300 uppercase">Crediagro</p>
             <p className="text-[10px] text-green-500 font-medium">Cofundador</p>
          </div>
          <div className="px-4 py-1 border-l-2 border-blue-500/50 bg-blue-500/5 transition-colors hover:bg-blue-500/10">
             <p className="text-xs font-bold tracking-widest text-slate-300 uppercase">Agroo</p>
             <p className="text-[10px] text-blue-500 font-medium">Backend Lead</p>
          </div>
        </div>
      </BlurFade>

      {/* 5. Descripción */}
      <BlurFade delay={0.8} inView>
        <p className="mt-7 mb-14 max-w-xl text-lg md:text-xl text-slate-400 font-light leading-relaxed">
          Arquitecto de sistemas escalables y <span className="text-white">líder técnico</span>. 
          Transformando el sector agrícola con código de alto rendimiento.
        </p>
      </BlurFade>

      <BlurFade delay={1} inView>
        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">Desliza hacia abajo</p>
            <ChevronDown className="h-5 w-5 text-blue-500" />
        </div>
    </BlurFade>
    </section>
  );
};

export default Hero;