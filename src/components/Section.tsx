interface SectionProps {
  children: React.ReactNode;
}

export function Section({ children }: SectionProps) {
  return (
    <section className="py-[50px]">
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
      <p className="mb-2 inline-block rounded-full bg-blue-500/20 px-5 py-1 text-sm font-[500] text-blue-500">
        {tag}
      </p>
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
