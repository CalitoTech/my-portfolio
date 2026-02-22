import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { BlurFade } from "@/components/ui/blur-fade";
import { Database, Server, Smartphone, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      Icon: Database,
      name: t("projects.items.crediagro.name"),
      description: t("projects.items.crediagro.description"),
      href: "#",
      cta: t("projects.items.crediagro.cta"),
      className: "col-span-3 lg:col-span-2",
      background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />,
    },
    {
      Icon: Server,
      name: t("projects.items.agroo.name"),
      description: t("projects.items.agroo.description"),
      href: "#",
      cta: t("projects.items.agroo.cta"),
      className: "col-span-3 lg:col-span-1",
      background: <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />,
    },
    {
      Icon: Smartphone,
      name: t("projects.items.mobile.name"),
      description: t("projects.items.mobile.description"),
      href: "#",
      cta: t("projects.items.mobile.cta"),
      className: "col-span-3 lg:col-span-1",
      background: <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />,
    },
    {
      Icon: Globe,
      name: t("projects.items.dashboard.name"),
      description: t("projects.items.dashboard.description"),
      href: "#",
      cta: t("projects.items.dashboard.cta"),
      className: "col-span-3 lg:col-span-2",
      background: <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />,
    },
  ];

  return (
    <div className="w-full max-w-6xl px-6 flex flex-col items-center">
      <BlurFade inView>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            {t("projects.subtitle")}
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
