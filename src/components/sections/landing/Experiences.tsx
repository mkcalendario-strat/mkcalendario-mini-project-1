import {
  Section,
  SectionTitle,
  SectionWrapper
} from "@/components/layouts/Section";
import ExperienceCard from "@/components/ui/ExperienceCard";

const EXPERIENCES: Experience[] = [
  {
    image: "axies.svg",
    title: "Axies Education, Inc.",
    from: "2021",
    to: "2025",
    description:
      "Developed the company's website from scratch to deployment and maintenance. Handled front-end, back-end, and database development, performed weekly system monitoring, and ensured database reliability through regular backups and performance checks."
  },
  {
    image: "stratpoint.svg",
    title: "Stratpoint Global Outsourcing, Inc.",
    from: "June 2025",
    to: "Present",
    description:
      "Currently gaining hands-on experience as a Software Engineer in a web development role. Actively building technical skills, learning the company’s workflows, and contributing to individual and team tasks as I get ramped up."
  },
  {
    image: "lexmeet.svg",
    title: "LexMeet, Inc.",
    from: "July 2024",
    to: "September 2024",
    description:
      "Completed a school-required internship focused on front-end development. Helped structure and manage the codebase, built UI pages, collaborated with fellow interns, and used GitLab for version control and coordination."
  }
];

export default async function Experiences() {
  const title = "Roles That Built My Expertise";
  const description =
    "A collection of internships and freelance work, that helped sharpen my technical skills, strengthen collaboration, and grow my impact as a developer in real-world environments.";

  return (
    <Section id="experience">
      <SectionTitle
        title={title}
        tag="Experience"
        description={description}
      />
      <SectionWrapper className="flex flex-col gap-[20px] lg:flex-row lg:flex-wrap">
        {EXPERIENCES.map((experience, i) => (
          <ExperienceCard
            key={i}
            to={experience.to}
            from={experience.from}
            title={experience.title}
            image={experience.image}
            description={experience.description}
            className="lg:w-[calc((100%-20px*2)/3)]"
          />
        ))}
      </SectionWrapper>
    </Section>
  );
}
