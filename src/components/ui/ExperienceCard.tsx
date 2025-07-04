import Image from "next/image";
import AOSComponent from "./AOS";
import HighlightTab from "./HighlightTab";

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
    `bg-neutal-800 w-full overflow-hidden bg-neutral-800 rounded-sm p-[35px] ${className ?? ""}`.trim();

  return (
    <AOSComponent>
      <div
        data-aos="fade-up"
        className={classes}>
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className="relative mb-[50px] aspect-5/1 max-w-[150px]">
          <Image
            fill
            alt={title}
            className="tech-box-icon-color"
            sizes="(max-width: 768px) 100vw, 50vw"
            src={`/assets/images/companies/${image}`}
          />
        </div>

        <HighlightTab>
          {from} - {to}
        </HighlightTab>
        <h2 className="text-2xl font-bold text-neutral-100">{title}</h2>
        <p className="text-justify text-neutral-300">{description}</p>
      </div>
    </AOSComponent>
  );
}
