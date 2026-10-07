import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Dialog } from "@/components/Dialog";
import SectionHeading from "@/components/SectionHeading";
import { useTranslation, Trans } from "react-i18next";
import { ArrowUpRight, ArrowRight, Maximize2 } from "lucide-react";

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
  logos: string[];
  image: string;
  subProjects?: SubProject[];
}

// These marks are dark artwork and need a light tile to stay visible.
const LIGHT_TILE = new Set([logoFermin, logoOleica]);
const tile = (logo: string) => (LIGHT_TILE.has(logo) ? "bg-ink" : "bg-raised");

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-md border border-line bg-raised px-2.5 py-1 font-mono text-xs text-ink-soft">
    {children}
  </span>
);

const ZoomableImage = ({ src, alt, label, onOpen }: { src: string; alt: string; label: string; onOpen: (src: string) => void }) => (
  <button
    type="button"
    onClick={() => onOpen(src)}
    aria-label={label}
    className="group relative block aspect-video w-full overflow-hidden rounded-xl border border-line bg-raised cursor-zoom-in"
  >
    <img src={src} alt={alt} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
    <span className="absolute right-3 bottom-3 flex size-9 items-center justify-center rounded-full bg-canvas/80 text-ink opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
      <Maximize2 className="size-4" />
    </span>
  </button>
);

const Experience = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<Project | null>(null);
  const [zoomed, setZoomed] = useState<string | null>(null);

  const list = (key: string) => t(key, { returnObjects: true }) as string[];

  const experiences: Project[] = [
    {
      id: "crediagro",
      company: "Crediagro",
      roles: list("experience.projects.crediagro.roles"),
      period: t("experience.projects.crediagro.period"),
      url: "https://crediagro.app/",
      summary: t("experience.projects.crediagro.summary"),
      details: t("experience.projects.crediagro.details"),
      tags: list("experience.projects.crediagro.tags"),
      stack: ["N8N", "React Native", "NextJS", "Odoo", "OWL", "Python", "PostgreSQL"],
      logos: [logoCrediagro],
      image: imgCrediagro,
    },
    {
      id: "agroo",
      company: "Agroo",
      roles: list("experience.projects.agroo.roles"),
      period: t("experience.projects.agroo.period"),
      url: "https://agroo.com.ve/",
      summary: t("experience.projects.agroo.summary"),
      details: t("experience.projects.agroo.details"),
      tags: list("experience.projects.agroo.tags"),
      stack: ["N8N", "React Native", "NextJS", "Odoo", "OWL", "AI Cognitive", "Python"],
      logos: [logoAgroo],
      image: imgAgroo,
    },
    {
      id: "corpoeureka",
      company: "Corpoeureka",
      roles: list("experience.projects.corpoeureka.roles"),
      period: t("experience.projects.corpoeureka.period"),
      url: "https://corpoeureka.com/ve",
      summary: t("experience.projects.corpoeureka.summary"),
      details: t("experience.projects.corpoeureka.details"),
      tags: list("experience.projects.corpoeureka.tags"),
      stack: ["Odoo", "Jasper Studios", "OWL", "Python", "PostgreSQL", "XML", "API Integration"],
      logos: [logoCorpoeureka],
      image: imgCorpoeureka,
    },
    {
      id: "otros",
      company: t("experience.projects.otros.company"),
      roles: list("experience.projects.otros.roles"),
      period: t("experience.projects.otros.period"),
      summary: t("experience.projects.otros.summary"),
      details: t("experience.projects.otros.details"),
      tags: list("experience.projects.otros.tags"),
      stack: ["Laravel", "NextJS", "N8N", "WhatsApp API", "Javascript", "CSS"],
      logos: [logoFermin, logoOleica],
      image: imgFermin,
      subProjects: [
        {
          title: t("experience.projects.otros.subProjects.fermin.title"),
          details: t("experience.projects.otros.subProjects.fermin.details"),
          image: imgFermin,
          logo: logoFermin,
          stack: ["N8N", "WhatsApp API", "Javascript"],
          url: "https://sistema.uefermintoroaraure.com",
        },
        {
          title: t("experience.projects.otros.subProjects.oleica.title"),
          details: t("experience.projects.otros.subProjects.oleica.details"),
          image: imgOleica,
          logo: logoOleica,
          stack: ["Laravel", "HTML", "CSS", "Javascript"],
        },
      ],
    },
  ];

  return (
    <div className="w-full max-w-6xl">
      <SectionHeading
        index="01"
        label={t("experience.badge")}
        title={<Trans i18nKey="experience.title" components={{ 1: <em /> }} />}
        description={<Trans i18nKey="experience.description" components={{ 1: <span className="text-ink" /> }} />}
      />

      <ol className="mt-12 border-t border-line">
        {experiences.map((exp, idx) => (
          <li key={exp.id} className="border-b border-line">
          <BlurFade inView delay={0.1 + idx * 0.06}>
            <button
              type="button"
              onClick={() => setSelected(exp)}
              className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-2 py-6 text-left transition-colors md:grid-cols-[3rem_3.25rem_minmax(0,14rem)_1fr_auto] md:gap-x-6 cursor-pointer"
            >
              <span className="hidden font-mono text-xs text-ink-mute md:block">0{idx + 1}</span>

              <span className="flex -space-x-2">
                {exp.logos.map((logo, i) => (
                  <span key={i} className={`flex size-12 items-center justify-center rounded-xl border border-line p-2 ring-4 ring-canvas ${tile(logo)}`}>
                    <img src={logo} alt="" className="size-full object-contain" />
                  </span>
                ))}
              </span>

              <span className="min-w-0">
                <span className="block text-xl font-semibold text-ink transition-colors group-hover:text-brand">
                  {exp.company}
                </span>
                <span className="mt-0.5 block text-sm text-ink-mute">
                  {exp.roles.join(" · ")}
                </span>
              </span>

              <span className="col-span-3 hidden text-[15px] leading-relaxed text-ink-soft md:col-span-1 md:block">
                <span className="mb-1 block font-mono text-xs uppercase tracking-wider text-ink-mute">{exp.period}</span>
                <span className="line-clamp-2">{exp.summary}</span>
              </span>

              <span className="flex size-11 items-center justify-center rounded-full border border-line text-ink-soft transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-brand-ink">
                <ArrowRight className="size-4" />
                <span className="sr-only">{t("experience.open_case")}</span>
              </span>
            </button>
          </BlurFade>
          </li>
        ))}
      </ol>

      <Dialog
        open={selected !== null}
        onClose={() => setSelected(null)}
        label={selected?.company ?? ""}
        className="max-w-5xl"
      >
        {selected && (
          <div className="overflow-y-auto p-6 md:p-10">
            <header className="flex flex-col gap-5 pr-12 md:flex-row md:items-center">
              <span className="flex -space-x-2">
                {selected.logos.map((logo, i) => (
                  <span key={i} className={`flex size-16 items-center justify-center rounded-2xl border border-line p-3 ring-4 ring-surface ${tile(logo)}`}>
                    <img src={logo} alt="" className="size-full object-contain" />
                  </span>
                ))}
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-ink-mute">{selected.period}</p>
                <h3 className="mt-1 font-display text-4xl leading-tight text-ink md:text-5xl">{selected.company}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.roles.map((role) => (
                    <span key={role} className="rounded-full bg-brand/10 px-3 py-1 text-sm font-medium text-brand ring-1 ring-brand/25">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </header>

            <div className="mt-10 grid gap-10 lg:grid-cols-5">
              <div className="space-y-8 lg:col-span-3">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-ink-mute">{t("experience.project_anatomy")}</h4>
                  <p className="mt-3 text-[17px] leading-relaxed text-ink-soft">{selected.details}</p>
                </div>

                {selected.subProjects?.map((sub) => (
                  <article key={sub.title} className="border-t border-line pt-8">
                    <div className="flex items-center gap-3">
                      <span className={`flex size-10 items-center justify-center rounded-lg border border-line p-1.5 ${tile(sub.logo)}`}>
                        <img src={sub.logo} alt="" className="size-full object-contain" />
                      </span>
                      <h5 className="text-xl font-semibold text-ink">{sub.title}</h5>
                    </div>
                    <p className="mt-4 leading-relaxed text-ink-soft">{sub.details}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {sub.stack.map((tech) => <Chip key={tech}>{tech}</Chip>)}
                    </div>
                    {sub.url && (
                      <a
                        href={sub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                      >
                        {t("experience.view_system")} <ArrowUpRight className="size-4" />
                      </a>
                    )}
                    <div className="mt-5">
                      <ZoomableImage src={sub.image} alt={sub.title} label={t("common.enlarge")} onOpen={setZoomed} />
                    </div>
                  </article>
                ))}

                {!selected.subProjects && (
                  <div className="flex flex-wrap gap-2">
                    {selected.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-line px-3 py-1.5 text-sm text-ink-soft">{tag}</span>
                    ))}
                  </div>
                )}
              </div>

              <aside className="space-y-6 lg:col-span-2">
                {!selected.subProjects ? (
                  <ZoomableImage src={selected.image} alt={selected.company} label={t("common.enlarge")} onOpen={setZoomed} />
                ) : (
                  <div className="rounded-xl border border-line bg-raised p-5">
                    <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-ink-mute">{t("experience.career_milestones")}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t("experience.career_desc")}</p>
                    <ul className="mt-4 space-y-2">
                      {selected.tags.map((tag) => (
                        <li key={tag} className="flex items-center gap-2.5 text-sm text-ink">
                          <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selected.url && (
                  <a
                    href={selected.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 items-center justify-center gap-2 rounded-full bg-brand text-sm font-semibold text-brand-ink transition-transform hover:-translate-y-0.5"
                  >
                    {t("experience.view_case_study")} <ArrowUpRight className="size-4" />
                  </a>
                )}

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-ink-mute">{t("experience.tech_stack")}</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selected.stack.map((tech) => <Chip key={tech}>{tech}</Chip>)}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        )}
      </Dialog>

      <Dialog open={zoomed !== null} onClose={() => setZoomed(null)} label={t("common.enlarge")} bare className="max-w-6xl">
        {zoomed && <img src={zoomed} alt="" className="max-h-[85vh] w-full rounded-xl object-contain" />}
      </Dialog>
    </div>
  );
};

export default Experience;
