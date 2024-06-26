import React, { useState } from "react";
import { AppWrap } from "../../wrapper";
import { TbKeyframes } from "react-icons/tb";
import { VscTools } from "react-icons/vsc";
import { AiOutlineDatabase } from "react-icons/ai";
import { BsDisplay } from "react-icons/bs";
import { motion } from "framer-motion";

import styles from "./Skills.module.scss";
import { useTranslation } from "react-i18next";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const skillsChild = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 10,
  },
};

const Skills = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const { t } = useTranslation("global");

  const skills = [
    {
      name: "frontend",
      stack: [
        "HTML5",
        "Javascript / Typescript",
        "SASS / SCSS",
        "React + Recoil / Redux",
        "Vue",
        "Material UI",
        t(`sections.skills.skill.wordpress`),
        t(`sections.skills.skill.php`),
      ],
      icon: BsDisplay,
    },
    {
      name: "backend",
      stack: [
        "NodeJs",
        "Express",
        "NestJs",
        "MySQL",
        "GraphQL",
        "MongoDB",
        "Mongoose",
      ],
      icon: AiOutlineDatabase,
    },
    {
      name: "design",
      stack: ["Figma", "Adobe XD", "Adobe Illustrator", "Adobe Photoshop"],
      icon: TbKeyframes,
    },
    {
      name: "devtools",
      stack: ["Git", "Heroku", "phpMyAdmin", "Postman", "Compass"],
      icon: VscTools,
    },
    {
      name: "other",
      stack: [
        t(`sections.skills.language`),
        t(`sections.skills.drivingLicense`),
      ],
      icon: VscTools,
    },
  ];

  return (
    <section className={styles.container}>
      {skills.map((section, index) => (
        <motion.div
          onMouseEnter={() => setActiveSection(index)}
          onMouseLeave={() => setActiveSection(null)}
          key={section.name}
          className={styles.stackSection}
        >
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className={`${styles.stackHeader} ${activeSection !== null && activeSection !== index ? styles.stackHeaderDimmed : ""}`}
          >
            <section.icon className={styles.icon} />
            <span>{t(`sections.skills.sections.${section.name}`)}</span>
          </motion.p>
          <motion.ul
            variants={container}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
            className={`${styles.stackList} ${activeSection !== null && activeSection !== index ? styles.stackListDimmed : ""}`}
          >
            {section.stack.map((item, i) => (
              <motion.li
                variants={skillsChild}
                key={i}
                className={`${styles.stackListItem} ${activeItem !== null && activeSection === index && activeItem !== i ? styles.itemDimmed : ""}`}
                onMouseEnter={() => setActiveItem(i)}
                onMouseLeave={() => setActiveItem(null)}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ))}
    </section>
  );
};

export default AppWrap(Skills, "skills");
