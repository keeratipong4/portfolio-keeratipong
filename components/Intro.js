"use client";
import Image from "next/image";
// import portraitImage from "@/public/Keeratipong-portrait.png";
import portraitImage from "@/public/keeratipong-portrait-ori.jpg";
// import portraitImage from "@/public/boy.png";
import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { Mail } from "lucide-react";
import { useSectionInView } from "@/hooks/useInView";
import { useActiveSectionContext } from "../contexts/active-section";

function Intro() {
  const { ref } = useSectionInView("#home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[75rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative ">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}>
            <Image
              src={portraitImage}
              width="480"
              height="480"
              alt="portrait-Keeratipong"
              quality={80}
              priority={true}
              placeholder="blur"
              className="h-48 w-48 rounded-full object-cover border-[0.1rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <Fade
        direction="up"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}>
        <h1 className="mb-10 mt-4 px-4 text-2xl sm:text-4xl">
          <span className="font-medium !leading-[1.5]">
            <span className="text-xl sm:text-2xl">👋 Hi, my name is </span>
            Keeratipong
            <br />
            <span className="text-xl sm:text-2xl">
              I&apos;m a web developer base{" "}
            </span>
            in Bangkok 😄
          </span>
          <p className="text-[20px]">
            I am fluent in Thai 🇹🇭, English 🇺🇸 and Chinese 🇨🇳
          </p>
        </h1>
      </Fade>

      <motion.div
        className="flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}>
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("#contact");
            setTimeOfLastClick(Date.now());
          }}>
          Contact me
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          <Mail
            color={"#9ca3af"}
            className="opacity-70 group-hover:-translate-x-1 transition"
          />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download>
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/keeratipong-boonnapongkasem-99259527b/"
          target="_blank">
          <BsLinkedin />
        </a>

        <a
          className="bg-gray-900 p-4 text-white flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/keeratipong4"
          target="_blank">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
