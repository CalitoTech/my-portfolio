import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

/** Shared section header: mono index + label, serif title, optional lead. */
const SectionHeading = ({ index, label, title, description, className }: SectionHeadingProps) => (
  <BlurFade inView delay={0.05} className={cn("w-full", className)}>
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
      <span className="text-brand">{index}</span>
      <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
      <span>{label}</span>
    </div>
    <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl [&_em]:italic [&_em]:text-brand">
      {title}
    </h2>
    {description && (
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
        {description}
      </p>
    )}
  </BlurFade>
);

export default SectionHeading;
