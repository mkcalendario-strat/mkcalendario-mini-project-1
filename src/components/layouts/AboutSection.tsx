import Image from "next/image";

interface AboutSection {
  className?: string;
  children: React.ReactNode;
}

export function AboutSection({ className, children }: AboutSection) {
  const classes = `py-[120px] ${className ?? ""}`.trim();
  return (
    <section className={classes}>
      <div className="container-thin">
        <div className="flex flex-col gap-[30px] md:flex-row">{children}</div>
      </div>
    </section>
  );
}

interface AboutTitleProps {
  children: React.ReactNode;
}

export function AboutTitle({ children }: AboutTitleProps) {
  return <h1 className="text-2xl font-black text-neutral-100">{children}</h1>;
}

interface AboutImageProps {
  src: string;
  alt: string;
}

export function AboutImage({ src, alt }: AboutImageProps) {
  return (
    <div className="md:w-[40%]">
      <div className="md: sticky md:top-[calc(60.91px+20.91px)]">
        <div className="relative aspect-square overflow-hidden rounded-sm">
          <Image
            fill
            alt={alt}
            src={src}
            className="object-cover"
            sizes="(min-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}

interface AboutContentProps {
  children: React.ReactNode;
}

export function AboutContent({ children }: AboutContentProps) {
  return <div className="flex flex-col gap-[20px] md:w-[60%]">{children}</div>;
}

interface AboutParagraphProps {
  children: React.ReactNode;
}

export function AboutParagraph({ children }: AboutParagraphProps) {
  return <p className="text-justify text-neutral-200">{children}</p>;
}
