"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiGit,
  SiTailwindcss,
  SiSupabase,
  SiPostman,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiStyledcomponents,
} from "react-icons/si";
import {
  ReactQueryLogo,
  ViteIcon,
  StyledComponentsIcon,
  HtmlLogo,
  CssLogo,
  JavaScriptLogo,
  FramerMotionLogo,
  MysqlLogo,
} from "../lib/Icons";
import { TbBrandReactNative } from "react-icons/tb";

const techLogos = {
  HTML: { svg: HtmlLogo, color: "" },
  CSS: { svg: CssLogo, color: "" },
  JavaScript: { svg: JavaScriptLogo, color: "" },
  "React.js": { svg: SiReact, color: "text-[#61DAFB]" },
  "Next.js": { svg: SiNextdotjs, color: "text-[#000000] dark:text-white" },
  Redux: { svg: SiRedux, color: "text-[#764ABC]" },
  "Redux Toolkit": { svg: SiRedux, color: "text-[#764ABC]" },
  "React Query": { svg: ReactQueryLogo, color: "" },
  Git: { svg: SiGit, color: "text-[#F05032]" },
  Tailwind: { svg: SiTailwindcss, color: "text-[#06B6D4]" },
  "Framer Motion": { svg: FramerMotionLogo, color: "" },
  Supabase: { svg: SiSupabase, color: "text-[#3ECF8E]" },
  Postman: { svg: SiPostman, color: "text-[#FF6C37]" },
  "Node.js": { svg: SiNodedotjs, color: "text-[#339933]" },
  "Express.js": { svg: SiExpress, color: "text-[#000000] dark:text-white" },
  MySQL: { svg: MysqlLogo, color: "" },
  "Socket.io": { svg: SiSocketdotio, color: "text-[#010101] dark:text-white" },
  StyledComponent: { svg: SiStyledcomponents, color: "text-[#DB7093]" },
  Vite: { svg: ViteIcon, color: "" },
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
    <div className="-mb-20 py-10">
      <SectionHeading>Tools & Technologies</SectionHeading>
      <motion.div
        className="mx-auto grid max-w-4xl grid-cols-3 gap-8 px-4 md:grid-cols-4 md:gap-8 lg:grid-cols-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {skillData.map((skill, index) => {
          const Icon = techLogos[skill].svg || TbBrandReactNative; // Default to React icon if not found
          return (
            <motion.li
              key={index}
              className="flex flex-col items-center gap-2 transition-transform hover:scale-110"
              variants={itemVariants}
            >
              <Icon
                className={`h-10 w-10 transition-colors md:h-16 md:w-16 lg:h-12 lg:w-12 ${techLogos[skill].color || "hover:text-gray-600"}`}
              />
              <span className="text-center text-sm font-medium">{skill}</span>
            </motion.li>
          );
        })}
      </motion.div>
    </div>
  );
}
