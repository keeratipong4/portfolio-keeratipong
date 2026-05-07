"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Fade } from "react-awesome-reveal";
import { useSectionInView } from "@/hooks/useInView";
import SocialLinks from "./SocialLinks";

export default function About() {
  const { ref } = useSectionInView("#about");

  return (
    <motion.section
      className="mb-10 mt-10 max-w-[55rem] scroll-mt-28 text-center leading-8 sm:mb-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="about"
    >
      <div className="container mx-auto">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <SectionHeading>About Me</SectionHeading>
        </Fade>

        <div className="mt-0 grid gap-8 lg:text-start xl:grid-cols-2 items-center">
          <div className="flex-1">
            {/* Content */}
            <div className="text-lg">
              <div className="flex flex-col justify-start">
                <Fade
                  direction="up"
                  delay={400}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className="font-bold">Professional Summary</h3>
                </Fade>
                <Fade
                  direction="up"
                  delay={600}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-white/70">
                    I am a{" "}
                    <span className="font-semibold">Frontend Developer</span>{" "}
                    specializing in AI agentic workflows and full product ownership.
                    Backed by over 12 years of entrepreneurial leadership, I recently delivered a solo full-stack platform end-to-end at Makers Digital (Denmark - Bangkok Branch), owning the architecture, implementation, and documentation. I excel at designing structured AI agent workflows that enable faster development cycles while maintaining production-level code quality. Currently, I am seeking a frontend role in a structured engineering environment with clear collaboration and feedback loops.
                  </p>
                </Fade>
                <Fade
                  direction="up"
                  delay={800}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className="mt-6 font-bold">Beyond the code</h3>
                </Fade>
                <Fade
                  direction="up"
                  delay={1000}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-white/70">
                    Besides coding, I am dedicated to weight training 5 days a week, a commitment I've maintained for over 11 years. I also enjoy creating videos and sharing my stories on social media, having built a significant audience on YouTube in the past. 😄🎉
                  </p>
                </Fade>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-6 xl:mt-0">
            <Fade
              direction="right"
              delay={600}
              triggerOnce={true}
              style={{ width: "100%" }}
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-black/5 dark:border-white/10 bg-gray-100 dark:bg-gray-800">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/MB3KgRVxyiw?si=QW9FHaqTjvpJBYqm"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
