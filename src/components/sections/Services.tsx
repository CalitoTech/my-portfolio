import { BlurFade } from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { motion } from "motion/react";
import {
    Layers,
    Zap,
    Cpu,
    Smartphone,
    Wrench,
    AlertTriangle
} from "lucide-react";

const Services = () => {
    const services = [
        {
            Icon: Layers,
            name: "Arquitectura Escalable",
            description: "Sistemas distribuidos de alto rendimiento diseñados para el crecimiento masivo.",
            href: "#contact",
            cta: "Explorar solución",
            background: (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent opacity-70 transition-all duration-500 group-hover:scale-110" />
                    <svg className="absolute right-0 top-0 h-full w-full opacity-15 transition-transform duration-1000 group-hover:scale-150 rotate-12" viewBox="0 0 100 100" fill="none">
                        <path d="M10 10 L90 10 L90 90 L10 90 Z" stroke="currentColor" strokeWidth="1" className="text-blue-500" />
                        <circle cx="10" cy="10" r="3" fill="currentColor" className="text-blue-400" />
                        <circle cx="90" cy="10" r="3" fill="currentColor" className="text-blue-400" />
                        <circle cx="90" cy="90" r="3" fill="currentColor" className="text-blue-400" />
                        <circle cx="10" cy="90" r="3" fill="currentColor" className="text-blue-400" />
                        <path d="M10 10 L90 90 M90 10 L10 90" stroke="currentColor" strokeWidth="0.5" className="text-blue-500/50" />
                    </svg>
                </div>
            ),
            className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2",
        },
        {
            Icon: Smartphone,
            name: "Desarrollo Móvil",
            description: "Experiencias nativas y multiplataforma pensadas para la escalabilidad.",
            href: "#contact",
            cta: "Ver mobile",
            background: (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-500/20 to-transparent opacity-70" />
                    <div className="absolute -right-4 -top-4 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-700 group-hover:bg-cyan-500/30" />
                    <svg className="absolute bottom-2 left-2 w-full opacity-20" viewBox="0 0 100 40">
                        <rect x="35" y="0" width="30" height="60" rx="4" stroke="currentColor" strokeWidth="1" className="text-cyan-400" fill="none" />
                        <circle cx="50" cy="10" r="1.5" fill="currentColor" className="text-cyan-400" />
                    </svg>
                </div>
            ),
            className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
        },
        {
            Icon: Zap,
            name: "Automatización Crítica",
            description: "Flujos autónomos de alta disponibilidad que eliminan cuellos de botella.",
            href: "#contact",
            cta: "Optimizar",
            background: (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(245,158,11,0.2),transparent)] transition-opacity duration-500" />
                    <div className="absolute inset-0 opacity-10"
                        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #f59e0b 2px, transparent 0)', backgroundSize: '24px 24px' }}
                    />
                    <motion.div
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute top-0 right-0 h-40 w-1.5 bg-gradient-to-b from-amber-500/40 to-transparent"
                    />
                </div>
            ),
            className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
        },
        {
            Icon: Cpu,
            name: "Inteligencia Agéntica",
            description: "IA aplicada que ejecuta y decide bajo estándares estratégicos.",
            href: "#contact",
            cta: "Integrar IA",
            background: (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/10 via-transparent to-transparent" />
                    <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 100 100">
                        <defs>
                            <pattern id="grid-ai" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.4" className="text-emerald-500" />
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#grid-ai)" />
                        <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-emerald-400 animate-pulse" />
                    </svg>
                </div>
            ),
            className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
        },
        {
            Icon: Wrench,
            name: "Mantenimiento Proactivo",
            description: "Soporte dinámico y actualizaciones constantes para un funcionamiento impecable.",
            href: "#contact",
            cta: "Saber más",
            background: (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl opacity-80" />
                    <svg className="absolute inset-0 h-full w-full opacity-15" viewBox="0 0 100 100">
                        <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="currentColor" strokeWidth="1" fill="none" className="text-purple-400" />
                        <path d="M0 40 Q 25 15, 50 40 T 100 40" stroke="currentColor" strokeWidth="0.8" fill="none" className="text-purple-500" />
                    </svg>
                </div>
            ),
            className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
        },
    ];

    return (
        <div className="relative z-20 max-w-6xl w-full flex flex-col items-center pt-16">
            <BlurFade delay={0.1} inView>
                <div className="text-center mb-10">
                    <Badge variant="outline" className="mb-8 border-white/10 bg-white/5 text-blue-400 uppercase tracking-[0.4em] font-bold px-4 py-1 text-[10px]">
                        Estrategia & Soluciones
                    </Badge>
                    <p className="max-w-2xl text-xl md:text-2xl text-slate-300 font-light leading-relaxed mx-auto italic">
                        "Como arquitecto, mi enfoque trasciende el código: construyo sistemas que se convierten en el motor de tu negocio."
                    </p>
                </div>
            </BlurFade>

            <BlurFade delay={0.2} inView className="w-full mb-4">
                <BentoGrid className="lg:grid-rows-2 text-white dark">
                    {services.map((service) => (
                        <BentoCard key={service.name} {...service} />
                    ))}
                </BentoGrid>
            </BlurFade>

            <BlurFade delay={0.3} inView>
                <motion.div
                    animate={{
                        x: [0, -2, 2, -2, 2, 0],
                        rotate: [0, -1, 1, -1, 1, 0]
                    }}
                    transition={{
                        duration: 0.4,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    onClick={() => {
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="cursor-pointer flex flex-col items-center group"
                >
                    <AlertTriangle className="w-8 h-8 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.7)]" />
                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-red-500/60 mt-10 group-hover:text-red-500 transition-colors">
                        Siguiente
                    </span>
                </motion.div>
            </BlurFade>
        </div>
    );
};

export default Services;
