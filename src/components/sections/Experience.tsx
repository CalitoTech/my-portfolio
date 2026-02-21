import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShineBorder } from "@/components/ui/shine-border";
import { motion, AnimatePresence } from "motion/react";
import {
  Layers,
  Database,
  Star,
  Plus,
  X,
  ArrowRight,
  ExternalLink
} from "lucide-react";

// Import images and logos
import logoCrediagro from "../../assets/logos/logo-crediagro.png";
import imgCrediagro from "../../assets/projects/crediagro-proyecto.png";
import logoAgroo from "../../assets/logos/logo-agroo.png";
import imgAgroo from "../../assets/projects/agroo-proyecto.png";
import logoCorpoeureka from "../../assets/logos/logo-corpoeureka.png";
import imgCorpoeureka from "../../assets/projects/corpoeureka-proyecto.png";
import logoFermin from "../../assets/logos/logo-fermin.png";
import imgFermin from "../../assets/projects/fermin-proyecto.png";
import logoOleica from "../../assets/logos/logo-oleica3.png";
import imgOleica from "../../assets/projects/oleica-proyecto.jpg";

// Define the type for better DX
interface SubProject {
  title: string;
  details: string;
  image: string;
  logo: string;
  stack: string[];
  url?: string;
}

interface Project {
  id: string;
  company: string;
  roles: string[];
  period: string;
  url?: string;
  summary: string;
  details: string;
  tags: string[];
  stack: string[];
  logo: string;
  logos?: string[]; // Para el marquee de "Otros"
  image: string;
  shineColor: string[];
  icon: React.ReactNode;
  subProjects?: SubProject[];
}

const experiences: Project[] = [
  {
    id: "crediagro",
    company: "Crediagro",
    roles: ["Cofundador", "Backend Lead"],
    period: "Fintech / AgroTech",
    url: "https://crediagro.app/",
    summary: "Liderazgo en la democratización del crédito agrícola, impactando a miles de productores mediante inclusión financiera digital.",
    details: "Como arquitecto fundador, lideré la creación de la infraestructura que hoy permite a más de 250,000 productores acceder a financiamiento sin intereses. Materialicé la visión de 'Agrooberto', un asistente virtual vía WhatsApp que digitalizó el 100% del proceso crediticio, eliminando barreras de liquidez y burocracia. Este ecosistema no solo ha bancarizado a sectores desatendidos, sino que ha impulsado un incremento del 30% en las transacciones de tiendas aliadas, redefiniendo la economía del agro en Venezuela.",
    tags: ["Financial Inclusion", "Scalable Fintech", "Agrooberto AI"],
    stack: ["N8N", "React Native", "NextJS", "Odoo", "OWL", "Python", "PostgreSQL"],
    logo: logoCrediagro,
    image: imgCrediagro,
    shineColor: ["#22c55e", "#16a34a"], // Green
    icon: <Star className="w-5 h-5 text-green-400" />
  },
  {
    id: "agroo",
    company: "Agroo",
    roles: ["Backend Lead"],
    period: "AgroTech / AI",
    url: "https://agroo.com.ve/",
    summary: "Arquitecto de innovación en productos digitales y motores de IA conversacional.",
    details: "Lideré la ingeniería detrás de los productos de mayor tracción del ecosistema: desde el motor transaccional de Comercio Agroo hasta la creación de Agrooberto, el primer asistente inteligente vía WhatsApp con IA cognitiva. Mi rol se centró en el escalamiento de nuevos verticales y la arquitectura de Agroo AI, transformando la interacción con el productor mediante flujos digitales de alto rendimiento y garantizando la viabilidad técnica de cada lanzamiento disruptivo de la marca.",
    tags: ["Product Innovation", "Conversational IA", "E-Commerce Engines"],
    stack: ["N8N", "React Native", "NextJS", "Odoo", "OWL", "AI Cognitive", "Python"],
    logo: logoAgroo,
    image: imgAgroo,
    shineColor: ["#3b82f6", "#2563eb"], // Blue
    icon: <Star className="w-5 h-5 text-blue-400" />
  },
  {
    id: "corpoeureka",
    company: "Corpoeureka",
    roles: ["Junior FullStack Developer"],
    period: "ERP / AI",
    url: "https://corpoeureka.com/ve",
    summary: "Desarrollo y optimización de soluciones empresariales sobre el ecosistema Odoo.",
    details: "En Corpoeureka, mi enfoque principal es el desarrollo y mantenimiento de módulos críticos dentro de Odoo, garantizando la estabilidad y eficiencia de los procesos de negocio. Gracias a los resultados obtenidos en proyectos como Agroo y Crediagro, mis aportes técnicos suelen servir como referencia para la implementación de nuevas funcionalidades. Me dedico a la resolución de problemas complejos de lógica y a colaborar en el saneamiento estructural del código, aportando una visión proactiva que ayuda a elevar los estándares regionales de la firma.",
    tags: ["Odoo Development", "FullStack", "Logic Solving"],
    stack: ["Odoo", "Jasper Studios", "OWL", "Python", "PostgreSQL", "XML", "API Integration"],
    logo: logoCorpoeureka,
    image: imgCorpoeureka,
    shineColor: ["#a855f7", "#7c3aed"], // Purple
    icon: <Star className="w-5 h-5 text-purple-400" />
  },
  {
    id: "otros",
    company: "Otras Experiencias",
    roles: ["Arquitecto de Soluciones"],
    period: "Educativo & Industrial",
    summary: "Consolidación de hitos críticos en automatización y digitalización industrial.",
    details: "Este espacio reúne proyectos clave donde he aplicado mi conocimiento para resolver problemas específicos en los sectores educativo e industrial, desde la automatización de procesos administrativos con N8N hasta la transformación digital de la salud ocupacional.",
    tags: ["Automation", "Industry 4.0", "Data Digitization"],
    stack: ["Laravel", "NextJS", "N8N", "WhatsApp API", "Javascript", "CSS"],
    logo: logoFermin, // Fallback
    logos: [logoFermin, logoOleica],
    image: imgFermin, // Fallback
    shineColor: ["#f59e0b", "#d97706"], // Amber
    icon: <Plus className="w-5 h-5 text-amber-400" />,
    subProjects: [
      {
        title: "U.E.C. Fermín Toro",
        details: "Digitalización total de procesos de inscripción y comunicación administrativa mediante WhatsApp API y flujos automatizados con N8N, eliminando procesos manuales y optimizando la atención al representante.",
        image: imgFermin,
        logo: logoFermin,
        stack: ["N8N", "WhatsApp API", "Javascript"],
        url: "https://sistema.uefermintoroaraure.com"
      },
      {
        title: "OLEICA C.A.",
        details: "Transformación digital del departamento de Salud Ocupacional. Diseñé e implementé un sistema para la digitalización masiva de expedientes médicos y la generación automatizada de reportes de morbilidad, permitiendo análisis estadísticos en tiempo real.",
        image: imgOleica,
        logo: logoOleica,
        stack: ["Laravel", "HTML", "CSS", "Javascript"]
      }
    ]
  }
];

const Experience = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  // Reset loading state when project changes
  const handleOpenProject = (project: Project) => {
    setImageLoaded(false);
    setSelectedProject(project);
  };

  // Scroll Lock effect
  useEffect(() => {
    const isModalOpen = selectedProject !== null || zoomedImage !== null;
    const mainElement = document.querySelector('main');
    const sectionElement = document.getElementById('experience');

    if (isModalOpen) {
      document.body.classList.add('no-scroll');
      if (mainElement) mainElement.classList.add('no-scroll');
      if (sectionElement) sectionElement.style.zIndex = '100';
    } else {
      document.body.classList.remove('no-scroll');
      if (mainElement) mainElement.classList.remove('no-scroll');
      if (sectionElement) sectionElement.style.zIndex = '10';
    }

    return () => {
      document.body.classList.remove('no-scroll');
      if (mainElement) mainElement.classList.remove('no-scroll');
      if (sectionElement) sectionElement.style.zIndex = '10';
    };
  }, [selectedProject, zoomedImage]);

  return (
    <div className="w-full max-w-6xl px-6 flex flex-col items-center">
      <BlurFade delay={0.2} inView>
        <div className="mb-8 flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4 border-white/10 bg-white/5 text-slate-400 uppercase tracking-[0.3em] font-bold px-4 py-1">
            Trayectoria Profesional
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
            Ecosistemas <span className="text-blue-500">&</span> Liderazgo
          </h2>
          <p className="max-w-3xl text-xl text-slate-400 font-light leading-relaxed">
            Explora los pilares de mi experiencia técnica. Haz clic en cada uno para profundizar en el <span className="text-white font-medium italic">impacto y arquitectura</span>.
          </p>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {experiences.map((exp, idx) => (
          <BlurFade key={exp.id} delay={0.4 + idx * 0.1} inView>
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="relative h-[380px] cursor-pointer group"
              onClick={() => handleOpenProject(exp)}
            >
              <div className="h-full rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-950 relative">
                <ShineBorder
                  borderWidth={1.5}
                  duration={10}
                  shineColor={exp.shineColor}
                  className="opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="p-6 md:p-8 h-full flex flex-col relative z-20 antialiased">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex -space-x-3 transition-transform group-hover:scale-110 duration-500">
                      {exp.logos ? (
                        exp.logos.map((logo, lIdx) => (
                          <div key={lIdx} className="p-2 rounded-xl bg-white border border-white/10 shadow-xl">
                            <img src={logo} alt="" className="w-8 h-8 object-contain" />
                          </div>
                        ))
                      ) : (
                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shadow-lg">
                          <img src={exp.logo} alt={exp.company} className="w-10 h-10 object-contain" />
                        </div>
                      )}
                    </div>
                    {exp.icon}
                  </div>

                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                      {exp.company}
                    </h3>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 leading-none">
                      {exp.period}
                    </p>
                    <p className="pt-4 text-xs text-slate-400 leading-relaxed font-light line-clamp-4">
                      {exp.summary}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex gap-1.5 overflow-hidden">
                      {exp.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[8px] font-black uppercase tracking-tighter px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="w-4 h-4 text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          </BlurFade>
        ))}
      </div>

      {/* Modal / Overlay View */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              layoutId={selectedProject.id}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-6xl h-[90vh] md:h-auto md:max-h-[85vh] bg-zinc-950 border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden z-[110]"
            >
              {/* Close Button - Fixed in corner */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl border border-white/10 transition-all z-[110] cursor-pointer shadow-xl"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <div className="flex-1 overflow-y-auto p-6 md:p-12 scrollbar-thin">
                {/* Header Section */}
                <div className="mb-8 pr-12">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                    <div className="p-3 md:p-4 rounded-3xl bg-white/5 border border-white/10 shrink-0">
                      <img src={selectedProject.logo} alt={selectedProject.company} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-2 break-words">
                        {selectedProject.company}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        {selectedProject.roles.map(role => (
                          <Badge key={role} className="bg-blue-600/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 md:px-3 md:py-1 font-bold text-[8px] md:text-[10px] uppercase tracking-wider shrink-0">
                            {role}
                          </Badge>
                        ))}
                        <Badge variant="outline" className="border-white/10 bg-white/5 text-slate-500 px-2 py-0.5 md:px-3 md:py-1 font-bold text-[8px] md:text-[10px] uppercase tracking-wider shrink-0">
                          {selectedProject.period}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                  {/* Details Column - Order 2 on Mobile */}
                  <div className="lg:col-span-3 space-y-8 order-2 lg:order-1">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-white">
                        <Layers className="w-5 h-5 text-blue-500" />
                        <h4 className="text-xl font-bold uppercase tracking-tight">Anatomía del Proyecto</h4>
                      </div>
                      <p className="text-lg text-slate-300 leading-relaxed font-light">
                        {selectedProject.details}
                      </p>
                    </div>

                    {/* Render sub-projects if they exist */}
                    {selectedProject.subProjects && (
                      <div className="space-y-12">
                        {selectedProject.subProjects.map((sub, sIdx) => (
                          <div key={sIdx} className="space-y-6 border-t border-white/5 pt-10">
                            <div className="flex items-center gap-4">
                              <div className="p-2 rounded-xl bg-white border border-white/10 shadow-lg">
                                <img src={sub.logo} alt={sub.title} className="w-6 h-6 object-contain" />
                              </div>
                              <h5 className="text-2xl font-black text-white uppercase tracking-tight">{sub.title}</h5>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              <div className="space-y-4">
                                <p className="text-slate-400 font-light leading-relaxed">{sub.details}</p>
                                <div className="flex flex-wrap items-center gap-4 pt-2">
                                  <div className="flex flex-wrap gap-2">
                                    {sub.stack.map(tech => (
                                      <span key={tech} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400">
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                  {sub.url && (
                                    <a
                                      href={sub.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-blue-400 transition-colors group/link"
                                    >
                                      Ver Sistema <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                                    </a>
                                  )}
                                </div>
                              </div>
                              <div
                                className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video bg-zinc-900 shadow-2xl rotate-1 cursor-zoom-in"
                                onClick={() => setZoomedImage(sub.image)}
                              >
                                <img src={sub.image} alt={sub.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {!selectedProject.subProjects && (
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.tags.map(tag => (
                          <span key={tag} className="text-xs font-black uppercase tracking-widest px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-2 order-1 lg:order-2">
                    <div className="lg:sticky lg:top-0 space-y-6">
                      {!selectedProject.subProjects ? (
                        <>
                          <div
                            className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 aspect-video bg-zinc-900 flex items-center justify-center shadow-2xl cursor-zoom-in"
                            onClick={() => setZoomedImage(selectedProject.image)}
                          >
                            {!imageLoaded && (
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"
                                style={{ backgroundSize: '200% 100%' }} />
                            )}
                            <img
                              src={selectedProject.image}
                              alt=""
                              loading="lazy"
                              onLoad={() => setImageLoaded(true)}
                              className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
                          </div>

                          <div className="flex flex-col gap-3">
                            {selectedProject.url && (
                              <a
                                href={selectedProject.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white text-black font-black uppercase text-xs hover:bg-blue-500 hover:text-white transition-all shadow-xl shadow-white/5 active:scale-95"
                              >
                                <ExternalLink className="w-4 h-4" /> Ver Caso de Estudio
                              </a>
                            )}
                            <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-slate-400 font-black uppercase text-[10px] tracking-widest cursor-default">
                              <Database className="w-4 h-4" /> Ecosistema Validado
                            </div>
                          </div>

                          <div className="pt-4 space-y-4">
                            <div className="flex items-center gap-3 text-white border-t border-white/5 pt-4">
                              <Database className="w-4 h-4 text-blue-500" />
                              <h4 className="text-xs font-bold uppercase tracking-widest">Stack Tecnológico</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.stack.map(tech => (
                                <span key={tech} className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-400">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 space-y-6 shadow-2xl">
                          <div className="flex items-center gap-3 text-white">
                            <Star className="w-5 h-5 text-amber-500" />
                            <h4 className="text-xl font-black uppercase tracking-tight text-amber-500">Hitos de Carrera</h4>
                          </div>
                          <p className="text-sm text-slate-400 leading-relaxed font-light">
                            Esta sección destaca proyectos que, aunque independientes, forman parte del núcleo de mi formación técnica y capacidad para resolver problemas complejos a medida.
                          </p>
                          <div className="grid grid-cols-1 gap-3 pt-4">
                            {selectedProject.tags.map(tag => (
                              <div key={tag} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 p-3 rounded-xl bg-white/5 border border-white/5">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                                {tag}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Image Zoom Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/98 backdrop-blur-3xl cursor-zoom-out"
              onClick={() => setZoomedImage(null)}
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-screen z-[210] pointer-events-none"
            >
              <img
                src={zoomedImage}
                className="w-full h-full object-contain rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 pointer-events-auto cursor-zoom-out"
                onClick={() => setZoomedImage(null)}
              />
              <button
                onClick={() => setZoomedImage(null)}
                className="absolute -top-12 right-0 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all cursor-pointer pointer-events-auto"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div >
  );
};

export default Experience;
