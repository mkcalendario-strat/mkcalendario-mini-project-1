import Image from "next/image";
import Markdown from "react-markdown";

interface ProjectSectionProps {
  children: React.ReactNode;
}

export async function ProjectSection({ children }: ProjectSectionProps) {
  return (
    <section className="boxes-background min-h-screen py-[100px]">
      <div className="container-thin">
        <div className="flex flex-col items-baseline gap-10">{children}</div>
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
    <div className="prose prose-invert">
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

      <div className="flex flex-row gap-5">
        {stack.map((tech, i) => (
          <Image
            key={i}
            alt={tech}
            width={30}
            height={30}
            title={tech}
            className="filter-gray"
            src={`/assets/images/stacks/${tech}.svg`}
          />
        ))}
      </div>
    </div>
  );
}
