"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Fade } from "react-awesome-reveal";
import { useSectionInView } from "@/hooks/useInView";

export default function About() {
  const { ref } = useSectionInView("#about");

  return (
    <motion.section
      className="max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="about">
      <div className="container mx-auto">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}>
          <SectionHeading>About Me</SectionHeading>
        </Fade>

        <div className="grid xl:grid-cols-2 lg:text-start mt-0">
          <div className="flex-1">
            {/* Content */}
            <div className="text-lg">
              <div className="flex justify-start flex-col">
                <Fade
                  direction="up"
                  delay={400}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}>
                  <h3 className="font-bold">My story</h3>
                </Fade>
                <Fade
                  direction="up"
                  delay={600}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}>
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                    Even though I graduated with a degree in computer
                    engineering in 2011, most of my work in the last 13 year
                    wasn&apos;t related to web developemnt at all. Until 2023 I
                    started interested in becoming a full time employee. That
                    was why I took a coding bootcamp and my web developemnt
                    journey began in in Mar 2023.
                  </p>
                </Fade>
                <Fade
                  direction="up"
                  delay={800}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}>
                  <h3 className="font-bold mt-6">My personality</h3>
                </Fade>
                <Fade
                  direction="up"
                  delay={1000}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}>
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                    Besides practicing coding skills, I commit myself to
                    practice weight training 5 days a week over the last 11
                    years. Sometimes I enjoy making videos and share my story on
                    social media, and I used to gain huge audiences on Youtube.
                    😄🎉
                  </p>
                </Fade>
              </div>
            </div>
          </div>
          <div>
            <Fade
              direction="right"
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}>
              <Image
                src="/about.png"
                width="600"
                height="600"
                alt="portrait"
                quality="100"
                priority={true}
                className="rounded-full mt-8 object-cover"
              />
            </Fade>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
