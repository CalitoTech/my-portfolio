import { BlurFade } from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { AnimatedList } from "@/components/ui/animated-list";
import { motion, AnimatePresence } from "motion/react";
import {
    Trophy,
    Award,
    Medal,
    Zap,
    ExternalLink,
    Plus,
    X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

/**
 * Recognitions & Hackathons Section
 * Combines dynamic certification lists with detailed hackathon storytelling.
 */

import imgClaude from "@/assets/certificates/certificate-claude-code.png";
import pdfClaude from "@/assets/documents/certificate-claude-code.pdf";
import imgAlegrIA from "@/assets/certificates/certificate-agroo-labs.png";
import pdfAlegrIA from "@/assets/documents/certificate-alegria-labs.pdf";
import imgCorpoEureka from "@/assets/certificates/certificate-corpoeureka.png";
import pdfCorpoEureka from "@/assets/documents/certificate-corpoeureka.pdf";
import imgTSU from "@/assets/certificates/certificate-technical-degree.jpg";
import pdfTSU from "@/assets/documents/certificate-technical-degree.pdf";

// AlegrIA 2025 Assets
import alegVideo from "@/assets/hackathons/alegria-2025/video1.mp4";
import alegImg1 from "@/assets/hackathons/alegria-2025/image1.jpeg";
import alegImg2 from "@/assets/hackathons/alegria-2025/image2.jpeg";
import alegImg3 from "@/assets/hackathons/alegria-2025/image3.jpeg";
import alegImg4 from "@/assets/hackathons/alegria-2025/image4.jpeg";
import alegImg5 from "@/assets/hackathons/alegria-2025/image5.jpeg";
import alegImg6 from "@/assets/hackathons/alegria-2025/image6.png";

// CorpoEureka 2025 Assets
import corpoImg1 from "@/assets/hackathons/corpoeureka-2025/image1.png";
import corpoImg2 from "@/assets/hackathons/corpoeureka-2025/image2.png";
import corpoImg3 from "@/assets/hackathons/corpoeureka-2025/image3.jpg";

interface RecognitionItem {
    name: string;
    description: string;
    image?: string;
    fileUrl?: string;
    icon: React.ReactNode;
    color: string;
}

interface HackathonItem {
    name: string;
    description: string;
    badgeValue: string;
    badgeColor: string;
    icon: React.ReactNode;
    fileUrl?: string;
    isFeatured?: boolean;
    stats?: string;
    visuals?: string[];
    image?: string;
    video?: string;
}

const certifications: RecognitionItem[] = [
    {
        name: "TSU en Informática",
        description: "Graduado en la UPTP 'Juan de Jesus Montilla'. Base sólida en ingeniería de software y sistemas.",
        image: imgTSU,
        fileUrl: pdfTSU,
        icon: <Badge className="bg-red-500/20 text-red-400 border-red-500/30 font-black">UPTP</Badge>,
        color: "from-red-500/10",
    },
    {
        name: "Claude Code in Action",
        description: "Certificación avanzada en el uso de Claude Code para ingeniería agéntica y desarrollo acelerado.",
        image: imgClaude,
        fileUrl: pdfClaude,
        icon: <Badge className="bg-white/10 text-white border-white/20">Anthropic</Badge>,
        color: "from-white/10",
    },
    {
        name: "Hackathon AlegrIA 2025",
        description: "TOP 10 en la primera competencia de Vibe Coding en Venezuela. Seleccionado entre 1500+ aspirantes.",
        image: imgAlegrIA,
        fileUrl: pdfAlegrIA,
        icon: <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30">AlegrIA Labs</Badge>,
        color: "from-blue-600/10",
    },
    {
        name: "Hackathon CorpoEureka",
        description: "2do Lugar Nacional en la disciplina de Backend. Arquitectura robusta y escalable.",
        image: imgCorpoEureka,
        fileUrl: pdfCorpoEureka,
        icon: <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">CorpoEureka</Badge>,
        color: "from-purple-500/10",
    }
];

const hackathons: HackathonItem[] = [
    {
        name: "Hackathon AlegrIA 2025",
        description: "Primer Hackathon de Vibe Coding en Venezuela. Seleccionados para el TOP 10 entre 1,500+ aspirantes en una competencia con $50,000 en premios. Un hito de networking con jurados de Ribbit Capital, Cashea, Yummy, Slash, Lovable, Startup Venezuela Summit.",
        badgeValue: "Hito Nacional",
        badgeColor: "bg-blue-500/20 text-blue-500 border-blue-500/30",
        stats: "TOP 10 / Selección 1:15",
        icon: <Zap className="w-5 h-5 text-blue-500" />,
        fileUrl: pdfAlegrIA,
        isFeatured: true,
        video: alegVideo,
        image: alegImg1,
        visuals: [alegImg2, alegImg3, alegImg4, alegImg5, alegImg6]
    },
    {
        name: "Hackathon CorpoEureka",
        description: "Competencia nacional dual (Frontend/Backend). Destacado por arquitectura de microservicios resiliente y escalable. Enfoque en optimización de procesos de negocio críticos.",
        badgeValue: "2DO LUGAR BACKEND",
        badgeColor: "border-purple-500/30 text-purple-400",
        icon: <Award className="w-8 h-8 text-purple-500" />,
        fileUrl: pdfCorpoEureka,
        image: corpoImg1,
        visuals: [corpoImg2, corpoImg3]
    }
];

const CertificationCard = ({ item, isCompact = false }: { item: RecognitionItem; isCompact?: boolean }) => {
    return (
        <div
            className={cn(
                "group/cert relative flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all cursor-default",
                isCompact ? "p-3" : "p-4"
            )}
            onClick={() => item.fileUrl && window.open(item.fileUrl, '_blank')}
        >
            <div className="flex items-center gap-4 flex-1">
                <div className={cn("p-3 rounded-xl bg-gradient-to-br border border-white/10 flex-shrink-0", item.color)}>
                    {item.image ? (
                        <img src={item.image} alt={item.name} className="w-6 h-6 object-contain" />
                    ) : (
                        <Award className="w-6 h-6 text-white/80" />
                    )}
                </div>
                <div className="flex flex-col overflow-hidden">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-black text-white uppercase tracking-tight">{item.name}</span>
                        {item.icon}
                    </div>
                    {!isCompact && (
                        <p className="text-xs text-slate-400 mt-1 font-light leading-snug">
                            {item.description}
                        </p>
                    )}
                </div>
            </div>
            {item.fileUrl && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover/cert:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-slate-500" />
                </div>
            )}
        </div>
    );
};

const HackathonSummaryCard = ({ item }: { item: HackathonItem }) => {
    return (
        <div
            className="group relative rounded-3xl border border-white/10 bg-[#0a0f18]/80 backdrop-blur-md p-8 flex flex-col gap-6 shadow-xl cursor-default"
        >
            <div className="flex items-start justify-between">
                <div className="flex gap-4 items-center">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                        {item.icon}
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-xl font-black text-white uppercase tracking-tight">{item.name}</h4>
                            <Badge variant="outline" className={cn("text-[9px] uppercase font-black px-2", item.badgeColor)}>
                                {item.badgeValue}
                            </Badge>
                        </div>
                        {item.stats && <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">{item.stats}</p>}
                    </div>
                </div>
            </div>

            <p className="text-sm text-slate-400 font-light leading-relaxed">
                {item.description}
            </p>

            <div className="flex flex-wrap gap-3">
                {item.image || (item.visuals && item.visuals.length > 0) ? (
                    <>
                        {item.image && (
                            <div className="w-32 aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
                                <img src={item.image} alt="" className="w-full h-full object-cover" />
                            </div>
                        )}
                        {item.visuals?.map((v, i) => (
                            <div key={i} className="w-32 aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
                                <img src={v} alt="" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </>
                ) : (
                    <div className="w-32 aspect-[4/3] rounded-xl border border-dashed border-white/10 flex items-center justify-center bg-white/5 flex-shrink-0">
                        <span className="text-[8px] uppercase tracking-widest text-slate-600 font-black">Sin fotos</span>
                    </div>
                )}
            </div>
        </div>
    );
};

const Recognitions = () => {
    const [isCertModalOpen, setIsCertModalOpen] = useState(false);
    const [isHackModalOpen, setIsHackModalOpen] = useState(false);
    const initialCerts = certifications.slice(0, 4);
    const featuredHackathon = hackathons.find(h => h.isFeatured);

    return (
        <div className="w-full py-2 lg:py-6 lg:pl-48 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
                    {/* Certifications (Left) */}
                    <div className="flex flex-col gap-6">
                        <BlurFade delay={0.1} inView>
                            <div className="flex items-center gap-4 mb-2">
                                <Medal className="w-6 h-6 text-blue-500" />
                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Certificaciones</h3>
                            </div>
                            <p className="text-slate-400 font-light mb-1 max-w-2xl text-xs md:text-sm">
                                Validación continua por líderes globales. Solo se muestran los más recientes.
                            </p>
                        </BlurFade>

                        <div className="flex flex-col gap-4">
                            <div className="relative min-h-[350px]">
                                <AnimatedList delay={1500}>
                                    {initialCerts.map((item, idx) => (
                                        <CertificationCard key={`cert-${idx}`} item={item} />
                                    ))}
                                </AnimatedList>
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#00030a] to-transparent z-10 pointer-events-none" />
                            </div>

                            {certifications.length > 4 && (
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setIsCertModalOpen(true)}
                                    className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-all font-black uppercase text-[10px] tracking-[0.2em]"
                                >
                                    <Plus className="w-4 h-4" />
                                    Ver todas las certificaciones
                                </motion.button>
                            )}
                        </div>
                    </div>

                    {/* Hackathons (Right) */}
                    <div className="flex flex-col gap-6">
                        <BlurFade delay={0.2} inView>
                            <div className="flex items-center gap-4 mb-2">
                                <Trophy className="w-6 h-6 text-amber-500" />
                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Hackathons</h3>
                            </div>
                            <p className="text-slate-400 font-light mb-1 max-w-2xl text-xs md:text-sm">
                                Competencias de alto nivel donde la arquitectura e innovación se ponen a prueba.
                            </p>
                        </BlurFade>

                        <BlurFade delay={0.3} inView>
                            <div className="space-y-6">
                                {featuredHackathon && (
                                    <div
                                        className="group relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 pt-8 px-8 pb-4 transition-all shadow-2xl cursor-default w-full"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-3">
                                                    <h4 className="text-2xl font-black text-white uppercase tracking-tight whitespace-nowrap">{featuredHackathon.name}</h4>
                                                    <div className="flex items-center gap-2 shrink-0">
                                                        <Badge className={cn("uppercase tracking-[0.2em] font-black text-[8px]", featuredHackathon.badgeColor)}>
                                                            {featuredHackathon.badgeValue}
                                                        </Badge>
                                                        <Zap className="w-4 h-4 text-emerald-500 animate-pulse" />
                                                    </div>
                                                </div>
                                                <p className="text-xs text-blue-400 font-black tracking-widest uppercase">{featuredHackathon.stats}</p>
                                            </div>
                                        </div>

                                        <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                                            {featuredHackathon.description}
                                        </p>

                                        {featuredHackathon.video ? (
                                            <div className="mt-6 grid grid-cols-2 gap-4">
                                                <div className="w-full">
                                                    <HeroVideoDialog
                                                        className="w-full"
                                                        animationStyle="from-center"
                                                        videoSrc={featuredHackathon.video}
                                                        thumbnailSrc={featuredHackathon.image || ""}
                                                        thumbnailAlt={featuredHackathon.name}
                                                    />
                                                </div>
                                                {featuredHackathon.visuals && featuredHackathon.visuals.length > 0 && (
                                                    <div
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setIsHackModalOpen(true);
                                                        }}
                                                        className="group/more relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 cursor-pointer hover:border-amber-500/50 transition-all shrink-0"
                                                    >
                                                        <img
                                                            src={alegImg2}
                                                            alt="Ver más fotos"
                                                            className="w-full h-full object-cover blur-[2px] opacity-30 group-hover:scale-110 transition-transform duration-700"
                                                        />
                                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                                                            <Plus className="w-6 h-6 md:w-8 md:h-8 text-white/50 group-hover:text-white transition-colors mb-1 md:mb-2" />
                                                            <span className="text-[10px] md:text-xs font-black text-white tracking-[0.2em] md:tracking-[0.3em] text-center px-2">
                                                                VER GALERÍA ({featuredHackathon.visuals.length}+)
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="flex flex-wrap gap-3 mt-4">
                                                {featuredHackathon.image || (featuredHackathon.visuals && featuredHackathon.visuals.length > 0) ? (
                                                    <>
                                                        {featuredHackathon.image && (
                                                            <div className="w-32 aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
                                                                <img src={featuredHackathon.image} alt="" className="w-full h-full object-cover" />
                                                            </div>
                                                        )}
                                                        {featuredHackathon.visuals?.map((v, i) => (
                                                            <div key={i} className="w-32 aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
                                                                <img src={v} alt="" className="w-full h-full object-cover" />
                                                            </div>
                                                        ))}
                                                    </>
                                                ) : (
                                                    <div className="w-32 aspect-[4/3] rounded-xl border border-dashed border-white/10 flex items-center justify-center bg-white/5 flex-shrink-0">
                                                        <span className="text-[8px] uppercase tracking-widest text-slate-600 font-black">Sin fotos</span>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setIsHackModalOpen(true);
                                            }}
                                            className="mt-8 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-amber-500/5 border border-amber-500/10 text-amber-500/60 hover:text-amber-500 hover:bg-amber-500/10 transition-all font-bold uppercase text-[9px] tracking-[0.2em] cursor-pointer"
                                        >
                                            <Trophy className="w-3 h-3" />
                                            Ver historial de hackathons
                                        </motion.button>
                                    </div>
                                )}
                            </div>
                        </BlurFade>
                    </div>
                </div>

                {/* Certifications Modal */}
                <AnimatePresence>
                    {isCertModalOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl p-6"
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                className="bg-[#00030a] border border-white/10 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl"
                            >
                                <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5">
                                    <div className="flex items-center gap-3">
                                        <Medal className="w-5 h-5 text-blue-500" />
                                        <h4 className="text-xl font-black text-white uppercase tracking-tight">Todas las Certificaciones</h4>
                                    </div>
                                    <button
                                        onClick={() => setIsCertModalOpen(false)}
                                        className="p-2 rounded-full hover:bg-white/10 text-slate-400 transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4 custom-scrollbar">
                                    {certifications.map((item, idx) => (
                                        <CertificationCard key={`modal-cert-${idx}`} item={item} />
                                    ))}
                                </div>

                                <div className="p-6 border-t border-white/5 bg-white/5 text-center">
                                    <p className="text-[8px] uppercase tracking-[0.3em] text-slate-500 font-bold">
                                        Desarrollo Profesional Continuo • Carlos Daniel
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Hackathons Modal */}
                <AnimatePresence>
                    {isHackModalOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-2xl p-6"
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                className="bg-[#00030a] border border-white/10 w-full max-w-4xl rounded-[40px] overflow-hidden shadow-2xl"
                            >
                                <div className="flex items-center justify-between p-8 border-b border-white/5 bg-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-2xl bg-amber-500/20 border border-amber-500/30">
                                            <Trophy className="w-6 h-6 text-amber-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-black text-white uppercase tracking-tighter">Crónicas de Hackathons</h4>
                                            <p className="text-[9px] text-slate-500 font-black uppercase tracking-[0.3em] mt-1">Hitos de Innovación & Ingeniería</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsHackModalOpen(false)}
                                        className="p-3 rounded-full hover:bg-white/10 text-slate-400 transition-colors cursor-pointer"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                <div className="p-8 max-h-[75vh] overflow-y-auto space-y-8 custom-scrollbar bg-gradient-to-b from-[#00030a] to-[#050810]">
                                    {hackathons.map((item, idx) => (
                                        <HackathonSummaryCard key={`modal-hack-${idx}`} item={item} />
                                    ))}
                                </div>

                                <div className="p-6 border-t border-white/5 bg-white/5 text-center">
                                    <p className="text-[9px] uppercase tracking-[0.4em] text-slate-500 font-bold">
                                        Compitiendo en la vanguardia del ecosistema tecnológico
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Recognitions;
