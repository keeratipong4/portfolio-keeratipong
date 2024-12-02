"use client";
import { motion } from "framer-motion";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiGit,
  SiTailwindcss,
  SiFramer,
  SiSupabase,
  SiPostman,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiSocketdotio,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import ReactQueryLogo from "./ReacyQueryLogo";
import SectionHeading from "./SectionHeading";

const iconMap = {
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  Redux: SiRedux,
  "Redux Toolkit": SiRedux,
  "React Query": ReactQueryLogo,
  Git: SiGit,
  Tailwind: SiTailwindcss,
  "Framer Motion": SiFramer,
  Supabase: SiSupabase,
  Postman: SiPostman,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MySQL: SiMysql,
  "Socket.io": SiSocketdotio,
};

const colorMap = {
  HTML: "text-[#E34F26]",
  CSS: "text-[#1572B6]",
  JavaScript: "text-[#F7DF1E]",
  "React.js": "text-[#61DAFB]",
  "Next.js": "text-[#000000] dark:text-white",
  Redux: "text-[#764ABC]",
  "Redux Toolkit": "text-[#764ABC]",
  "React Query": "",
  // "React Query": "text-[#FF4154]",
  Git: "text-[#F05032]",
  Tailwind: "text-[#06B6D4]",
  "Framer Motion": "text-[#0055FF]",
  Supabase: "text-[#3ECF8E]",
  Postman: "text-[#FF6C37]",
  "Node.js": "text-[#339933]",
  "Express.js": "text-[#000000] dark:text-white",
  MySQL: "text-[#4479A1]",
  "Socket.io": "text-[#010101] dark:text-white",
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 30,
      damping: 30,
    },
  },
};
export default function TechStack({ skillData }) {
  return (
    <div className="py-12">
      <SectionHeading>Tools & Technologies</SectionHeading>
      <motion.div
        className="mx-auto grid max-w-4xl grid-cols-3 gap-8 px-4 md:grid-cols-4 md:gap-8 lg:grid-cols-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {skillData.map((skill, index) => {
          const Icon = iconMap[skill] || TbBrandReactNative; // Default to React icon if not found
          return (
            <motion.li
              key={index}
              className="flex flex-col items-center gap-2 transition-transform hover:scale-110"
              variants={itemVariants}
            >
              <Icon
                className={`h-10 w-10 transition-colors md:h-16 md:w-16 lg:h-12 lg:w-12 ${colorMap[skill] || "hover:text-gray-600"}`}
              />
              <span className="text-center text-sm font-medium">{skill}</span>
            </motion.li>
          );
        })}
      </motion.div>
    </div>
  );
}
