import { BlurFade } from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { ShineBorder } from "@/components/ui/shine-border";
import { PixelImage } from "@/components/ui/pixel-image";
import { motion } from "motion/react";
import {
    Zap,
    Database,
    ShieldCheck,
    Cpu,
} from "lucide-react";

// Import your photo
import myPhoto from "../../assets/my_photo.jpg";

// Import Logos
import reactLogo from "../../assets/stack/react-logo.svg";
import nextjsLogo from "../../assets/stack/nextjs-logo.svg";
import tailwindLogo from "../../assets/stack/tailwind-logo.png";
import laravelLogo from "../../assets/stack/laravel-logo.svg";
import odooLogo from "../../assets/stack/odoo-logo.png";
import reactNativeLogo from "../../assets/stack/react-native-logo.svg";
import pythonLogo from "../../assets/stack/python-logo.svg";
import typescriptLogo from "../../assets/stack/typescript-logo.svg";
import javascriptLogo from "../../assets/stack/javascript-logo.svg";
import htmlLogo from "../../assets/stack/html-logo.svg";
import cssLogo from "../../assets/stack/css-logo.svg";
import postgresLogo from "../../assets/stack/postgres-logo.png";
import mysqlLogo from "../../assets/stack/mysql-logo.svg";
import phpLogo from "../../assets/stack/php-logo.png";
import n8nLogo from "../../assets/stack/n8n-logo.svg";
import dockerLogo from "../../assets/stack/docker-logo.svg";
import gitLogo from "../../assets/stack/git-logo.svg";
import githubLogo from "../../assets/stack/github-logo.svg";
import bashLogo from "../../assets/stack/bash-logo.svg";
import cpanelLogo from "../../assets/stack/cpanel-logo.svg";
import viteLogo from "../../assets/stack/vite-logo.png";
import owlLogo from "../../assets/stack/owl-logo.png";

const About = () => {
    const stack = [
        {
            title: "Frontend",
            shineColor: ["#3b82f6", "#2563eb"],
            skills: [
                { name: "React", img: reactLogo },
                { name: "React Native", img: reactNativeLogo },
                { name: "Tailwind", img: tailwindLogo },
                { name: "OWL", img: owlLogo },
                { name: "JavaScript", img: javascriptLogo },
                { name: "HTML5", img: htmlLogo },
                // { name: "CSS3", img: cssLogo },
            ]
        },
        {
            title: "Backend & DB",
            shineColor: ["#64748b", "#94a3b8"],
            skills: [
                { name: "Python", img: pythonLogo },
                { name: "PostgreSQL", img: postgresLogo },
                { name: "MySQL", img: mysqlLogo },
                { name: "Odoo", img: odooLogo },
                { name: "PHP", img: phpLogo },
                { name: "Laravel", img: laravelLogo },
            ]
        },
        {
            title: "Aprendiendo",
            shineColor: ["#a855f7", "#7c3aed"],
            skills: [
                { name: "Docker", img: dockerLogo },
                { name: "TypeScript", img: typescriptLogo },
                { name: "Next.js", img: nextjsLogo },
            ]
        },
        {
            title: "Herramientas",
            shineColor: ["#06b6d4", "#22d3ee"],
            skills: [
                { name: "n8n", img: n8nLogo },
                { name: "Vite", img: viteLogo },
                { name: "Git", img: gitLogo },
                { name: "GitHub", img: githubLogo },
                { name: "Bash", img: bashLogo },
                { name: "cPanel", img: cpanelLogo },
            ]
        }
    ];

    const stats = [
        { label: "Aumento en Eficiencia", value: "10x", icon: <Zap className="w-5 h-5 text-blue-500" />, color: "text-blue-500" },
        { label: "Usuarios Activos", value: "+250k", icon: <Database className="w-5 h-5 text-green-500" />, color: "text-green-500" },
        { label: "Uptime en Sistemas", value: "99.9%", icon: <ShieldCheck className="w-5 h-5 text-purple-500" />, color: "text-purple-500" },
        { label: "Procesos Digitalizados", value: "100%", icon: <Cpu className="w-5 h-5 text-amber-500" />, color: "text-amber-500" },
    ];

    return (
        <div id="about" className="w-full max-w-6xl px-6 flex flex-col items-center">
            {/* 1. Header (Badge + Title) */}
            <BlurFade delay={0.2} inView>
                <div className="mb-6 flex flex-col items-center text-center">
                    <Badge variant="outline" className="mb-3 border-white/10 bg-white/5 text-blue-400 uppercase tracking-[0.3em] font-bold px-4 py-1 text-[10px]">
                        Sobre Mí
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-2 uppercase">
                        Automatización <span className="text-blue-500">&</span> Escalabilidad
                    </h2>
                </div>
            </BlurFade>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-start">
                {/* Left: Bio & Image (Col 3) */}
                <div className="lg:col-span-3 space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <BlurFade delay={0.3} inView>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#03060b] flex justify-center items-center h-48 w-48 md:h-64 md:w-64 shadow-2xl">
                                <PixelImage
                                    src={myPhoto}
                                    grid="8x8"
                                    grayscaleAnimation={true}
                                    pixelFadeInDuration={1500}
                                    className="rounded-[inherit]"
                                />
                            </div>
                        </div>
                    </BlurFade>

                    <BlurFade delay={0.4} inView>
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-white tracking-tight leading-none text-center lg:text-left">Arquitecto de Soluciones</h3>
                            <p className="text-slate-400 leading-relaxed font-light text-[11px] md:text-xs">
                                Mi enfoque es simple: si un proceso puede ser automatizado, debe serlo. Me especializo en transformar operaciones complejas en flujos digitales autónomos y capaces de escalar sin límites.
                            </p>
                        </div>
                    </BlurFade>
                </div>

                {/* Center: Tech Stack Cards (Col 7) */}
                <div className="lg:col-span-7">
                    <BlurFade delay={0.5} inView>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {stack.map((group, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    className="relative group"
                                >
                                    <div className="h-full rounded-[1.5rem] overflow-hidden border border-white/5 bg-[#03060b] relative shadow-2xl">
                                        <ShineBorder
                                            borderWidth={2}
                                            duration={8}
                                            shineColor={group.shineColor}
                                            className="opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                                        />

                                        <div className="p-4 h-full flex flex-col relative z-20 antialiased">
                                            <h4 className="text-[10px] font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-widest mb-3">
                                                {group.title}
                                            </h4>

                                            <div className="grid grid-cols-3 gap-2">
                                                {group.skills.map((skill, sIdx) => (
                                                    <div key={sIdx} className="flex flex-col items-center relative group/skill">
                                                        <div className="p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm group-hover/skill:bg-white/10 group-hover/skill:border-white/20 group-hover/skill:scale-110 transition-all duration-300 shadow-lg">
                                                            <img src={skill.img} alt={skill.name} className="w-7 h-7 object-contain" />
                                                        </div>
                                                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded-lg bg-[#0a0f1a]/90 border border-white/10 backdrop-blur-xl text-[8px] font-black text-blue-400 uppercase tracking-widest opacity-0 group-hover/skill:opacity-100 group-hover/skill:-top-12 transition-all duration-300 pointer-events-none shadow-2xl z-30 whitespace-nowrap">
                                                            {skill.name}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </BlurFade>
                </div>

                {/* Right: Metrics Section (Vertical on Desktop) (Col 2) */}
                <div className="lg:col-span-2 flex flex-col justify-between h-full space-y-4 lg:space-y-0 lg:h-[450px]">
                    <BlurFade delay={0.6} inView>
                        <div className="flex flex-col gap-4 w-full">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="flex flex-col items-center lg:items-start space-y-1 group bg-white/5 p-3 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                                    <div className="flex items-center gap-2">
                                        <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors shadow-lg text-xs">
                                            {stat.icon}
                                        </div>
                                        <span className="text-xl md:text-2xl font-black text-white tracking-tighter">
                                            {stat.value}
                                        </span>
                                    </div>
                                    <p className="text-[8px] font-bold uppercase tracking-[0.1em] text-slate-500 text-center lg:text-left">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </BlurFade>
                </div>
            </div>
        </div>
    );
};

export default About;
