"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import { useSectionInView } from "@/hooks/useInView";

export default function Projects() {
  const { ref } = useSectionInView("#projects", 0.1);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My works</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </section>
  );
}
