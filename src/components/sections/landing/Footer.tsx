import LinkButton from "@/components/ui/LinkButton";
import Image from "next/image";

const techStack = [
  { src: "/assets/images/stacks/next.svg", alt: "Next.js" },
  { src: "/assets/images/stacks/typescript.svg", alt: "TypeScript" },
  { src: "/assets/images/stacks/tailwind.svg", alt: "Tailwind CSS" }
];

const links = [
  {
    href: "https://github.com/mkcalendario-strat",
    icon: "fab fa-github",
    label: "GitHub"
  },
  {
    href: "mailto:i_mark.calendario@stratpoint.com",
    icon: "far fa-envelope",
    label: "Email"
  },
  {
    href: "https://www.linkedin.com/in/markcalendario/",
    icon: "fab fa-linkedin",
    label: "LinkedIn"
  }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-[50px]">
      <div className="container">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="relative aspect-square h-[100px] w-[100px]">
            <Image
              src="/assets/images/logos/light.webp"
              alt="logo"
              fill
              className="object-contain"
              sizes="(min-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="text-neutral-200">
            <p>&copy; {year} Mark Kenneth Calendario</p>
            <p>Part of Stratpoint Internship Mini Project</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {links.map(({ href, icon, label }) => (
              <LinkButton
                key={label}
                href={href}
                target="_blank"
                className="bg-neutral-800 text-neutral-100">
                <i className={icon} />
                {label}
              </LinkButton>
            ))}
          </div>

          <div className="flex justify-center gap-2">
            {techStack.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                width={25}
                height={25}
                draggable={false}
                className="filter-gray"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
