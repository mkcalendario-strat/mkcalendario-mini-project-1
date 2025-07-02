import HighlightTab from "../ui/HighlightTab";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  const classes = `py-[50px] ${className ?? ""}`.trim();

  return (
    <section
      id={id}
      className={classes}>
      <div className="container">{children}</div>
    </section>
  );
}

interface SectionTitleProps {
  tag: string;
  title: string;
  description: string;
}

export function SectionTitle({ tag, title, description }: SectionTitleProps) {
  return (
    <div className="m-auto mb-[50px] max-w-[650px] pt-[25px] text-center text-neutral-100">
      <HighlightTab className="mb-2">{tag}</HighlightTab>
      <h1 className="text-3xl font-black tracking-tight">{title}</h1>
      <p>{description}</p>
    </div>
  );
}

interface SectionWrapperProps {
  className?: string;
  children: React.ReactNode;
}

export function SectionWrapper({ className, children }: SectionWrapperProps) {
  return <div className={className ?? ""}>{children}</div>;
}
