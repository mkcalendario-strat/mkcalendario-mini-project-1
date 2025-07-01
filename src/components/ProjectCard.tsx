import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps extends Project {
  href: string;
  className?: string;
}

export default function ProjectCard({
  id,
  href,
  image,
  title,
  description,
  stack,
  className
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      title={description}
      className={`group flex flex-col gap-3 ${className ?? ""} rounded-md bg-neutral-800 p-7 duration-200 hover:outline-2 hover:outline-neutral-700`}>
      <div className="relative aspect-video overflow-hidden rounded-sm duration-200 group-hover:outline-2 group-hover:outline-blue-500">
        <Image
          fill
          alt={id}
          src={image}
          className="object-cover duration-200 group-hover:scale-[101%]"
        />
      </div>

      <div>
        <h2 className="tacking-tight mb-1 text-2xl font-bold text-neutral-100 duration-100 group-hover:text-blue-500">
          {title}
        </h2>
        <p className="line-clamp-3 text-neutral-200">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {stack.map((tech, i) => (
          <Image
            key={i}
            alt={tech}
            title={tech}
            width="30"
            height="30"
            className="company-icon-color"
            src={`/assets/images/stacks/${tech}.svg`}
          />
        ))}
      </div>
    </Link>
  );
}
