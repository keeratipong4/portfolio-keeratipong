"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaDisplay } from "react-icons/fa6";

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  repo,
  liveDemo,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 last:mb-0 sm:mb-8 "
    >
      <section className="relative max-w-[48rem] rounded-lg border border-black/5 bg-white transition hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:grid sm:h-[20rem] sm:grid-cols-2 sm:gap-4 sm:pl-8 sm:pr-8">
        {/* <!-- Title --> */}
        <h3 className="col-span-2 ml-2 mt-3 text-2xl font-semibold sm:col-span-2">
          {title}
        </h3>

        {/* <!-- Left Column --> */}
        <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:col-span-1 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-4">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            width={400}
            height={100}
            className="group:-left-20 group:right-[initial] group:group-hover:translate-x-3 group:group-hover:translate-y-3 group:group-hover:rotate-2 -right-20 top-8 rounded-t-lg shadow-2xl transition group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:scale-[1.03]"
          />

          <div className="flex gap-4">
            <a
              className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full border border-slate-600 bg-white px-4 py-1 text-xs outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10 xs:px-7 xs:py-3 sm:text-sm"
              href={repo}
            >
              <SiGithub className="transition group-hover:translate-y-1" />
              View code
            </a>
            <a
              className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full border border-slate-600 bg-white px-4 py-1 text-xs outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10 xs:px-7 xs:py-3 sm:text-sm"
              href={liveDemo}
            >
              <FaDisplay className="transition group-hover:translate-y-1" />
              Live Demo
            </a>
          </div>
        </div>
        {/* <!-- Right Column --> */}
        <div className="sm:col-span-1">
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] tracking-wider text-white dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}
