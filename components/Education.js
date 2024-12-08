"use client";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/hooks/useInView";
import { educationData } from "@/lib/data";
import EducationItem from "./EducationItem";

export default function Education() {
  const { ref } = useSectionInView("#education", 0.1);

  return (
    <section ref={ref} id="education" className="mb-15 scroll-mt-28">
      <SectionHeading>Education & Certifications</SectionHeading>
      <div className="flex flex-col gap-8">
        {educationData.map((education, index) => (
          <EducationItem {...education} key={index} />
        ))}
      </div>
    </section>
  );
}
