import AOSComponent from "./AOS";

interface ExperienceBlockProps {
  count: string;
  description: string;
}
export function ExperienceBlock({ count, description }: ExperienceBlockProps) {
  return (
    <AOSComponent>
      <div
        data-aos-offset="0"
        data-aos="fade-left"
        className="text-right">
        <p className="text-2xl font-black text-neutral-200 md:text-3xl lg:text-5xl">
          {count}
        </p>
        <p className="text-sm text-neutral-300">{description}</p>
      </div>
    </AOSComponent>
  );
}
