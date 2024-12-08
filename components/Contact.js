"use client";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useInView";
import { sendEmail } from "@/lib/actions";
import SubmitBotton from "./SubmitButton";
import toast from "react-hot-toast";

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

      <p className="mt-5 text-gray-700 dark:text-white/80">
        Feel free to contact me directly at{" "}
        <a className="underline" href="mailto:keeratipong4@gmail.com">
          keeratipong4@gmail.com
        </a>
        <br />
        or through this form
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="mb-3 h-14 rounded-lg border border-black/20 px-4 transition-all dark:bg-white dark:bg-opacity-20 dark:text-white dark:outline-none dark:focus:bg-opacity-10"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={"Your email"}
        />
        <input
          className="h-14 rounded-lg border border-black/20 px-4 transition-all dark:bg-white dark:bg-opacity-20 dark:text-white dark:outline-none dark:focus:bg-opacity-10"
          name="subject"
          required
          maxLength={500}
          placeholder={"Subject"}
        />
        <textarea
          className="my-3 h-52 resize-none rounded-lg border border-black/20 p-4 transition-all dark:bg-white dark:bg-opacity-20 dark:text-white dark:outline-none dark:focus:bg-opacity-10"
          name="message"
          placeholder={"Message"}
          required
          maxLength={5000}
        />
        <SubmitBotton text={"Submit"} />
      </form>
    </motion.section>
  );
}
