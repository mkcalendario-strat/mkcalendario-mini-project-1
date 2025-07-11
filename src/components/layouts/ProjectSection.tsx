import Image from "next/image";
import Markdown from "react-markdown";

interface ProjectSectionProps {
  children: React.ReactNode;
}

export function ProjectSection({ children }: ProjectSectionProps) {
  return (
    <section className="boxes-background-inverted min-h-screen py-[100px]">
      <div className="container-thin">
        <div className="flex flex-col items-baseline gap-10 rounded-lg border-1 border-neutral-700 bg-neutral-900 p-[20px] md:p-[40px]">
          {children}
        </div>
      </div>
    </section>
  );
}

interface ProjectImageProps {
  alt: string;
  src: string;
}

export function ProjectImage({ alt, src }: ProjectImageProps) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-md">
      <Image
        fill
        src={src}
        alt={alt}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

type ProjectMarkdownProps = Pick<Project, "markdown">;

export function ProjectMarkdown({ markdown }: ProjectMarkdownProps) {
  return (
    <div className="prose prose-invert w-full text-justify break-words">
      <Markdown>{markdown}</Markdown>
    </div>
  );
}

type ProjectDetailsProps = Pick<Project, "title" | "stack" | "description">;

export function ProjectDetails({
  title,
  description,
  stack
}: ProjectDetailsProps) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-5xl font-black text-neutral-100">{title}</h1>
      <p className="text-neutral-200">{description}</p>

      <div className="flex flex-row flex-wrap gap-5">
        {stack.map((tech, i) => (
          <div
            key={i}
            className="relative aspect-square w-[30px]">
            <Image
              fill
              alt={tech}
              title={tech}
              className="filter-gray"
              sizes="(min-width: 768px) 100vw, 50vw"
              src={`/assets/images/stacks/${tech}.svg`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
