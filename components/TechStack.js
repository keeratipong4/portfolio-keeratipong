"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { iconMap, colorMap, TbBrandReactNative } from "../lib/logoMaping";

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
