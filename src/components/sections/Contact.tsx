import { BlurFade } from "@/components/ui/blur-fade";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { RetroGrid } from "@/components/ui/retro-grid";
import { motion } from "motion/react";
import {
    Mail,
    Linkedin,
    Github
} from "lucide-react";

/**
 * Clean & High-Impact Contact Section
 * Final destination of the portfolio scroll.
 */
const Contact = () => {
    return (
        <section id="contact-content" className="relative w-full min-h-screen flex flex-col items-center justify-between overflow-hidden bg-[#00030a] px-6 py-20">
            {/* Background Grid */}
            <RetroGrid className="opacity-15" />

            {/* Main CTA */}
            <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center w-full max-w-4xl">
                <BlurFade delay={0.1} inView>
                    <h3 className="text-5xl md:text-9xl font-black tracking-tighter text-white mb-12 leading-[0.8] uppercase">
                        ¿Listo para <span className="text-blue-500 underline decoration-blue-500/20 underline-offset-8">escalar?</span>
                    </h3>
                </BlurFade>

                <BlurFade delay={0.2} inView>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <a href="https://wa.me/tu-numero" target="_blank" rel="noopener noreferrer">
                            <InteractiveHoverButton className="px-12 py-8 text-xl font-black uppercase tracking-widest bg-white border-transparent">
                                WhatsApp
                            </InteractiveHoverButton>
                        </a>

                        <div className="flex items-center gap-4">
                            <motion.a
                                whileHover={{ y: -5, scale: 1.1 }}
                                href="mailto:tu@correo.com"
                                className="p-5 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all shadow-xl backdrop-blur-md"
                            >
                                <Mail className="w-7 h-7" />
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -5, scale: 1.1 }}
                                href="https://github.com/tu-usuario"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-5 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all shadow-xl backdrop-blur-md"
                            >
                                <Github className="w-7 h-7" />
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -5, scale: 1.1 }}
                                href="https://linkedin.com/in/tu-usuario"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-5 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all shadow-xl backdrop-blur-md"
                            >
                                <Linkedin className="w-7 h-7" />
                            </motion.a>
                        </div>
                    </div>
                </BlurFade>
            </div>

            {/* Footer - Strictly at the bottom */}
            <div className="relative z-20 w-full mt-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 max-w-6xl mx-auto">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-center md:text-left">
                    © {new Date().getFullYear()} Carlos Navas · Architect & Founder
                </p>
                <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest transition-colors duration-300">
                    <a href="#home" className="hover:text-blue-400 transition-colors">Inicio</a>
                    <a href="#experience" className="hover:text-purple-400 transition-colors">Experiencia</a>
                    <a href="#about" className="hover:text-emerald-400 transition-colors">Sobre Mí</a>
                </div>
            </div>

            {/* Shine Edge Effect Top */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        </section>
    );
};

export default Contact;
