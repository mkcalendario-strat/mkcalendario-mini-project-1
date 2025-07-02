import Image from "next/image";
import Button from "./Button";
import { Section, SectionTitle, SectionWrapper } from "./Section";

export default function About() {
  const title = "Hi, Nice to Meet You!";
  const description =
    "I'm a curious and driven developer who loves turning ideas into real, working products. Whether I'm building apps, solving problems, or learning something new, I'm all in.";

  return (
    <Section
      id="projects"
      className="boxes-background-inverted bg-neutral-800">
      <SectionTitle
        title={title}
        tag="About Me"
        description={description}
      />
      <SectionWrapper className="relative flex flex-col gap-5 md:flex-row md:gap-20">
        <div className="md:w-[50%]">
          <div className="sticky top-[100px]">
            <div className="relative aspect-4/3 overflow-hidden rounded-md">
              <Image
                fill
                alt="me"
                className="object-cover"
                src="/assets/images/misc/me.webp"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:w-[50%]">
          <h2 className="text-2xl font-bold text-neutral-100">Hello!</h2>
          <p className="text-justify text-neutral-200">
            I&apos;m Mark Kenneth Calendario, 22 years old, from Caloocan City.
            I&apos;m currently taking up BS Computer Science at the Main Campus
            of the Polytechnic University of the Philippines, graduating this
            coming September. I&apos;m currently looking for a professional job
            where I can apply and grow my skills I as a developer.
          </p>
          <p className="text-justify text-neutral-200">
            I&apos;m a full-stack developer. I can build web app user
            interfaces, servers, and databases using modern technologies.
            Recently, I have started learning artificial intelligence
            engineering. I can now build computer vision and natural language
            processing tools. I&apos;m excited to apply these concepts in
            real-world projects.
          </p>
          <p className="text-justify text-neutral-200">
            I&apos;m always eager to explore new technologies, dive into
            challenges, and stay updated with the latest trends in tech. If
            you&apos;re looking for a full-stack web developer or a AI engineer
            noobie, feel free to reach me out.
          </p>

          <h2 className="text-2xl font-bold text-neutral-100">My goal</h2>
          <p className="text-justify text-neutral-200">
            In the future, I see myself working as a full-stack web developer in
            a team that builds responsive, progressive web applications and
            AI-powered techs that can truly make a difference, especially in
            tech communities or within an organization.
          </p>

          <div className="flex flex-wrap gap-2">
            <Button className="bg-blue-500 text-neutral-100">
              Know Me More
              <i className="far fa-arrow-right" />
            </Button>
            <Button className="bg-neutral-100 text-neutral-900">
              View CV
              <i className="far fa-file" />
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
}
