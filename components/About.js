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
      className="mb-20 mt-14 max-w-[55rem] scroll-mt-28 text-center leading-8 sm:mb-20"
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

        <div className="mt-0 grid lg:text-start xl:grid-cols-2">
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
                  <h3 className="font-bold">My story</h3>
                </Fade>
                <Fade
                  direction="up"
                  delay={600}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-white/70">
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
                  triggerOnce={true}
                >
                  <h3 className="mt-6 font-bold">My personality</h3>
                </Fade>
                <Fade
                  direction="up"
                  delay={1000}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-white/70">
                    Besides practicing coding skills, I commit myself to
                    practice weight training 5 days a week over the last 11
                    years. Sometimes I enjoy making videos and share my story on
                    social media, and I used to gain huge audiences on Youtube.
                    😄🎉
                  </p>
                </Fade>
                <Fade
                  direction="up"
                  delay={800}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className="mt-6 font-bold">My social media account</h3>
                  <Fade
                    direction="up"
                    delay={1000}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                  >
                    <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-white/70">
                      checkout hundred of vidoes i made on my instagram account
                    </p>
                  </Fade>
                  <SocialLinks />
                </Fade>
              </div>
            </div>
          </div>
          <div className="">
            <Fade
              direction="right"
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <iframe
                className="mx-auto mt-10 min-h-48 w-full px-8 sm:max-h-[90vw] sm:min-h-[45vw] md:min-h-[28vw] md:max-w-[60vw] lg:min-h-[25vw] lg:max-w-[50vw] xl:min-h-[15vw] xl:max-w-[50vw]"
                // width="560"
                // height="315"
                src="https://www.youtube.com/embed/d4WIYn5Llm0?si=4uqKh2p888Zv2u7d"
                title="YouTube video player"
                frameBorder="3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </Fade>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
