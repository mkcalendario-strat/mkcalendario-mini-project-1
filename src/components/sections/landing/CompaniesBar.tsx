import AOSComponent from "@/components/ui/AOS";
import Image from "next/image";

const COMPANIES = [
  { image: "axies", alt: "Axies" },
  { image: "lexmeet", alt: "LexMeet" },
  { image: "stratpoint", alt: "Stratpoint" },
  { image: "accuratax", alt: "Accuratax" },
  { image: "mark-kenneth", alt: "Mark Kenneth" }
];

export default function CompaniesBar() {
  return (
    <div className="overflow-hidden border-y-[1px] border-neutral-700 bg-neutral-800 py-[10px]">
      <div className="container">
        <AOSComponent>
          <div className="flex flex-wrap justify-around gap-[10px]">
            {COMPANIES.map((company, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={`${i * 100}`}
                data-aos-offset="0"
                className="relative aspect-video w-[100px] md:w-[120px]">
                <Image
                  fill
                  alt={company.alt}
                  draggable={false}
                  className="company-icon-color object-contain select-none"
                  src={`/assets/images/companies/${company.image}.svg`}
                />
              </div>
            ))}
          </div>
        </AOSComponent>
      </div>
    </div>
  );
}
