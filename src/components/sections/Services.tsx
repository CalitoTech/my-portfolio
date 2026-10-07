import { BlurFade } from "@/components/ui/blur-fade";
import SectionHeading from "@/components/SectionHeading";
import { useTranslation, Trans } from "react-i18next";
import { ArrowDown, Cpu, Layers, Smartphone, Wrench, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    { key: "scalable", Icon: Layers, className: "lg:col-span-2" },
    { key: "mobile", Icon: Smartphone },
    { key: "automation", Icon: Zap },
    { key: "ai", Icon: Cpu },
    { key: "maintenance", Icon: Wrench },
  ];

  return (
    <div className="w-full max-w-6xl">
      <SectionHeading
        index="04"
        label={t("services.badge")}
        title={<Trans i18nKey="services.title" components={{ 1: <em /> }} />}
        description={t("services.quote")}
      />

      <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ key, Icon, className }, idx) => (
          <li key={key} className={cn("flex", className)}>
            <BlurFade inView delay={0.08 + idx * 0.05} className="flex w-full">
              <article className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong md:p-7">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-line bg-raised text-brand transition-colors group-hover:bg-brand group-hover:text-brand-ink">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-ink-mute">0{idx + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-ink">{t(`services.items.${key}.name`)}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{t(`services.items.${key}.description`)}</p>
                <span
                  className="pointer-events-none absolute -right-16 -bottom-16 size-40 rounded-full bg-brand/0 blur-3xl transition-colors duration-500 group-hover:bg-brand/10"
                  aria-hidden="true"
                />
              </article>
            </BlurFade>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-mute transition-colors hover:text-ink md:flex"
      >
        {t("services.next")}
        <ArrowDown className="size-4 animate-bounce" />
      </a>
    </div>
  );
};

export default Services;
