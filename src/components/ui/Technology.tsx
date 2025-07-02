import Image from "next/image";

interface TechnologyProps extends Technology {
  className?: string;
}

export default function Techonology({
  name,
  category,
  image,
  className
}: TechnologyProps) {
  const classes = `text-center ${className ?? ""}`.trim();

  return (
    <div className={classes}>
      <div className="group mb-[10px] w-full rounded-md bg-blue-400/10 p-[20%] duration-500 hover:translate-y-[-10px]">
        <div className="relative aspect-square delay-300 duration-500 group-hover:scale-110 group-hover:rotate-6">
          <Image
            fill
            alt={`${name}-${category}`}
            draggable={false}
            sizes="(min-width: 768px) 100vw, 50vw"
            src={`/assets/images/stacks/${image}`}
            className="tech-box-icon-color object-contain select-none"
          />
        </div>
      </div>

      <p className="font-[500] text-white">{name}</p>
    </div>
  );
}
