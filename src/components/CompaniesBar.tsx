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
    <div className="border-y-[1px] border-neutral-700 bg-neutral-800 py-[10px]">
      <div className="container">
        <div className="flex flex-wrap justify-around gap-[10px]">
          {COMPANIES.map((company, i) => (
            <div
              key={i}
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
      </div>
    </div>
  );
}
