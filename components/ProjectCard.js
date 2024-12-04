"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaDisplay } from "react-icons/fa6";
import { colorMap, iconMap } from "@/lib/logoMaping";

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  repo,
  liveDemo,
  content,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: "auto", opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <section className="relative max-w-[48rem] rounded-lg border border-black/5 bg-white transition hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:grid sm:h-full sm:grid-cols-2 sm:gap-4 sm:pl-8 sm:pr-8">
        <h3 className="col-span-2 ml-2 mt-3 font-semibold">{title}</h3>

        {/* Left Column */}
        <div className="flex h-full flex-col px-2 pb-5 pt-4 sm:col-span-1">
          {/* <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:col-span-1 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-4"> */}
          <Image
            className="top-8 mx-auto mb-5 rounded-t-md shadow-2xl transition duration-1000 group-hover:scale-[1.05]"
            src={imageUrl}
            alt={title}
            quality={95}
            width={400}
            height={100}
          />
          <div className="flex justify-center gap-5">
            <a
              className="flex items-center gap-1 text-nowrap rounded-full border border-gray-300 bg-gray-100 px-2 py-1 text-xs outline-none transition hover:scale-110 hover:bg-gray-800 hover:text-white focus:scale-110 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-100 dark:hover:text-gray-800 sm:px-3"
              href={repo}
            >
              <SiGithub />
              View code
            </a>
            <a
              className="flex items-center gap-1 text-nowrap rounded-full border border-gray-300 bg-gray-100 px-2 py-1 text-xs outline-none transition hover:scale-110 hover:bg-gray-800 hover:text-white focus:scale-110 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-100 dark:hover:text-gray-800 sm:px-3"
              href={liveDemo}
            >
              <FaDisplay />
              Live Demo
            </a>
          </div>
        </div>
        {/* Right column */}
        <div className="mx-2 mb-5 sm:col-span-1">
          <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          {/* {content} */}
          <ul className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag, index) => {
              const Icon = iconMap[tag];
              const color = colorMap[tag];

              return (
                <li
                  key={index}
                  className="flex items-center rounded-full bg-black/[0.7] px-2 py-1 text-[0.7rem] tracking-wider text-white dark:text-white/70"
                >
                  {Icon ? (
                    <Icon className={`h-4 w-4 ${color}`} />
                  ) : (
                    <span className="flex h-4 w-4 items-center justify-center text-[0.6rem] font-bold">
                      {tag.charAt(0)}
                    </span>
                  )}
                  {isHovered && (
                    <motion.span
                      className="ml-2 hidden sm:inline-block"
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                      }}
                    >
                      {tag}
                    </motion.span>
                  )}
                  <span className="ml-2 sm:hidden">{tag}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}
