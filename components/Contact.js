"use client";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useInView";
import SubmitBotton from "./SubmitButton";

export default function Contact() {
  const { ref } = useSectionInView("#contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] scroll-mt-28 text-center sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{"Contact Me"}</SectionHeading>

      <p className="mt-6 text-gray-700 dark:text-white/80">
        {"Feel free to contact me directly through this form"}
      </p>

      <form className="mt-10 flex flex-col dark:text-black">
        <input
          className="borderBlack h-14 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-20 dark:outline-none dark:focus:bg-opacity-10"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={"Your email"}
        />
        <textarea
          className="borderBlack my-3 h-52 resize-none rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-20 dark:outline-none dark:focus:bg-opacity-10"
          name="message"
          placeholder={"message"}
          required
          maxLength={5000}
        />
        <SubmitBotton text={"Submit"} />
      </form>
    </motion.section>
  );
}
