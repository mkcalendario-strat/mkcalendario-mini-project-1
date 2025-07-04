import { ExperienceBlock } from "@/components/ui/ExperienceBlock";
import LinkButton from "@/components/ui/LinkButton";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="boxes-background overflow-hidden pt-[80px] lg:pt-[100px]">
      <div className="container">
        <div className="relative">
          <Experience />
          <Heading />
          <ActionButtons />
          <Avatar />
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="mb-[20px] flex flex-wrap justify-end gap-5 lg:absolute lg:right-0 lg:bottom-[40px] lg:mb-auto">
      <ExperienceBlock
        count="3+"
        description="Years of Experience"
      />
      <ExperienceBlock
        count="25+"
        description="Personal Projects"
      />
    </div>
  );
}

function Heading() {
  return (
    <div className="relative">
      <h1 className="text-3xl leading-none font-[500] tracking-tighter text-neutral-100 lg:text-center lg:text-6xl">
        Hello, I am <br />
        <span className="text-4xl font-black lg:text-7xl">Mark Kenneth</span>
      </h1>

      <p className="mb-[10px] inline-block rounded-md bg-blue-700/30 px-[20px] py-[5px] text-sm font-bold text-blue-500 lg:absolute lg:top-[20px] lg:left-[51%] lg:mb-auto lg:ml-[120px]">
        a Stratpoint Intern
      </p>
    </div>
  );
}

function ActionButtons() {
  const cvURL = process.env.NEXT_PUBLIC_RESUME_URL as string;

  return (
    <div className="mb-[20px] flex flex-wrap gap-[7px] lg:absolute lg:bottom-[40px] lg:mb-auto lg:max-w-[350px]">
      <p className="mb-[20px] text-neutral-200">
        I architect web applications using full-stack technology from concept to
        deployment.
      </p>

      <LinkButton
        href={cvURL}
        target="_blank"
        className="bg-blue-500 text-white">
        <i className="far fa-arrow-down" />
        Download CV
      </LinkButton>

      <LinkButton
        href="/#projects"
        className="bg-neutral-100 text-neutral-900">
        <i className="far fa-cube" />
        View Projects
      </LinkButton>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative m-auto aspect-square w-full max-w-[500px] lg:mt-[-30px]">
      <Image
        fill
        priority
        alt="avatar"
        draggable={false}
        src="/assets/images/misc/avatar.webp"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-contain select-none"
      />
    </div>
  );
}
