import { BlurFade } from "@/components/ui/blur-fade";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import logoCrediagro from "../../assets/logos/logo-crediagro.png";
import logoAgroo from "../../assets/logos/logo-agroo.png";

const Hero = () => {
  const { t } = useTranslation();

  const metrics = [
    { value: "50K+", label: t("hero.metrics.users") },
    { value: "US$3M+", label: t("hero.metrics.credit") },
    { value: "US$1M+", label: t("hero.metrics.sales") },
    { value: "TOP 10", label: t("hero.metrics.hackathon") },
  ];

  const companies = [
    { name: "Crediagro", role: t("hero.crediagro_role"), logo: logoCrediagro, href: "https://crediagro.app/" },
    { name: "Agroo", role: t("hero.agroo_role"), logo: logoAgroo, href: "https://agroo.com.ve/" },
  ];

  return (
    <div className="w-full max-w-6xl">
      <BlurFade delay={0.1}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.16em] text-ink-mute">
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-brand" />
          </span>
          <span className="text-ink-soft">{t("hero.eyebrow")}</span>
          <span className="text-line-strong" aria-hidden="true">/</span>
          <span>{t("hero.location")}</span>
        </div>
      </BlurFade>

      <BlurFade delay={0.2}>
        <p className="mt-10 text-lg font-medium text-ink md:text-xl">
          Carlos Navas <span className="text-ink-mute">— {t("hero.badge")}</span>
        </p>
      </BlurFade>

      <BlurFade delay={0.3}>
        <h1 className="mt-4 max-w-5xl font-display text-[2.9rem] leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.75rem]">
          <Trans i18nKey="hero.headline" components={{ 1: <em className="italic text-brand" /> }} />
        </h1>
      </BlurFade>

      <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
        <BlurFade delay={0.4} className="lg:col-span-6">
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
            <Trans i18nKey="hero.description" components={{ 1: <span className="font-medium text-ink" /> }} />
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-brand-ink transition-transform hover:-translate-y-0.5"
            >
              {t("hero.cta_primary")}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-full border border-line-strong px-6 text-sm font-semibold text-ink transition-colors hover:bg-raised"
            >
              {t("hero.cta_secondary")}
            </a>
          </div>
        </BlurFade>

        <BlurFade delay={0.5} className="lg:col-span-5 lg:col-start-8">
          <ul className="flex flex-col divide-y divide-line border-y border-line">
            {companies.map((c) => (
              <li key={c.name}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-4"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-line bg-surface">
                    <img src={c.logo} alt="" className="size-7 object-contain" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-ink">{c.name}</span>
                    <span className="block text-sm text-ink-mute">{c.role}</span>
                  </span>
                  <ArrowRight className="size-4 -rotate-45 text-ink-mute transition-colors group-hover:text-brand" />
                </a>
              </li>
            ))}
          </ul>
        </BlurFade>
      </div>

      <BlurFade delay={0.6}>
        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.value} className="flex flex-col gap-1 bg-canvas/90 p-5 md:p-6">
              <dt className="order-2 text-sm leading-snug text-ink-mute">{m.label}</dt>
              <dd className="order-1 font-display text-4xl tabular-nums text-ink md:text-5xl">{m.value}</dd>
            </div>
          ))}
        </dl>
      </BlurFade>

      <a
        href="#experience"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-mute transition-colors hover:text-ink md:flex"
      >
        {t("hero.scroll")}
        <ArrowDown className="size-4 animate-bounce" />
      </a>
    </div>
  );
};

export default Hero;
