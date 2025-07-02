import Image from "next/image";

interface ExperienceCardProps extends Experience {
  className?: string;
}

export default function ExperienceCard({
  image,
  title,
  from,
  to,
  description,
  className
}: ExperienceCardProps) {
  const classes =
    `bg-neutal-800 w-full bg-neutral-800 rounded-sm p-[35px] ${className ?? ""}`.trim();

  return (
    <div className={classes}>
      <div className="relative mb-[50px] aspect-5/1 max-w-[150px]">
        <Image
          fill
          alt={title}
          className="tech-box-icon-color"
          sizes="(max-width: 768px) 100vw, 50vw"
          src={`/assets/images/companies/${image}`}
        />
      </div>

      <p className="inline-block rounded-sm bg-blue-500/10 px-3 py-1 text-xs font-[500] text-blue-400">
        {from} - {to}
      </p>
      <h2 className="text-2xl font-bold text-neutral-100">{title}</h2>
      <p className="text-justify text-neutral-300">{description}</p>
    </div>
  );
}
