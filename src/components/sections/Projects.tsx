import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { BlurFade } from "@/components/ui/blur-fade";
import { Database, Server, Smartphone, Globe } from "lucide-react";

// Datos de tus proyectos (Ejemplos)
const projects = [
  {
    Icon: Database,
    name: "Crediagro Core",
    description: "Arquitectura de microservicios para gestión de créditos agrícolas.",
    href: "#",
    cta: "Ver arquitectura",
    className: "col-span-3 lg:col-span-2", // Ocupa más espacio
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />,
  },
  {
    Icon: Server,
    name: "Agroo API",
    description: "API escalable con Node.js y PostgreSQL.",
    href: "#",
    cta: "Docs",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />,
  },
  {
    Icon: Smartphone,
    name: "Mobile Sync",
    description: "Sistema de sincronización offline para zonas sin internet.",
    href: "#",
    cta: "Demo",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />,
  },
  {
    Icon: Globe,
    name: "Dashboard Administrativo",
    description: "Panel de control en tiempo real para analítica de cultivos.",
    href: "#",
    cta: "Explorar",
    className: "col-span-3 lg:col-span-2",
    background: <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />,
  },
];

const Projects = () => {
  return (
    <div className="w-full max-w-6xl px-6 flex flex-col items-center">
      <BlurFade inView>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
            Sistemas Destacados
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            Soluciones robustas diseñadas para escalar y optimizar procesos en el sector agrícola.
          </p>
        </div>
      </BlurFade>

      <BentoGrid className="lg:grid-rows-2">
        {projects.map((project) => (
          <BentoCard key={project.name} {...project} />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Projects;