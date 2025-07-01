interface ExperienceBlockProps {
  count: string;
  description: string;
}
export function ExperienceBlock({ count, description }: ExperienceBlockProps) {
  return (
    <div className="text-right">
      <p className="text-2xl font-black text-neutral-700 md:text-3xl lg:text-5xl">
        {count}
      </p>
      <p className="text-sm text-neutral-600">{description}</p>
    </div>
  );
}
