import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Work.module.scss";

import React from "react";
import { AppWrap } from "../../wrapper";
import { FiGithub } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";
import { AiOutlineFolderOpen, AiOutlineInfoCircle } from "react-icons/ai";

import { images } from "../../constants";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Zoom } from "swiper";

const textMotion = {
  rest: {
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  hover: {
    y: -15,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const containerRight = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
      delay: 0.2,
    },
  },
  hidden: { opacity: 0, x: 20 },
};

const containerLeft = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
      delay: 0.2,
    },
  },
  hidden: { opacity: 0, x: -20 },
};
const containerTop = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
      delay: 0.2,
    },
  },
  hidden: { opacity: 0, y: -20 },
};

const Work = () => {
  const { t } = useTranslation("global");

  const projects = [
    {
      name: "Shiftana",
      translation: "Shiftana",
      link: "https://www.shiftana.com",
      live: "https://www.shiftana.com",
      images: ["shiftana01"],
      techStack: [
        "React",
        "Typescript",
        "Sass",
        "TailwindCSS",
        "Axios",
        "React Test Library",
        "Jest",
      ],
      type: "commercial",
    },
    {
      name: "Give Me Art",
      translation: "givemeart",
      link: "https://www.giveme.art",
      live: "https://www.giveme.art",
      images: [
        "givemeart01",
        "givemeart02",
        "givemeart03",
        "givemeart04",
        "givemeart05",
      ],
      techStack: [
        "Next.js 14",
        "Typescript",
        "TailwindCSS",
        "Figma",
        "Photoshop",
      ],
      type: "commercial",
    },
    {
      name: "trenujemy.pl - panel admina",
      translation: "trenujemyAdmin",
      link: null,
      live: null,
      images: ["admin01", "admin04", "admin02", "admin03"],
      techStack: [
        "React",
        "Typescript",
        "Recoil",
        "React Test Library",
        "Sass",
        "Express",
      ],
      type: "commercial",
    },
    {
      name: "trenujemy.pl - aplikacja",
      translation: "trenujemyUser",
      link: "https://trenujemy.pl",
      live: null,
      images: ["client01", "client02", "client03"],
      techStack: ["Vue", "VueX", "Sass", "Express"],
      type: "commercial",
    },
    {
      name: "MegaK Rekrutacja",
      translation: "megaKRecruitment",
      github: "https://bit.ly/43Ing9V",
      live: null,
      images: ["project0403", "project0401", "project0404", "project0402"],
      techStack: [
        "Typescript",
        "React",
        "Redux",
        "Bootstrap",
        "NodeJs",
        "NestJs",
        "MariaDB",
      ],
      type: "commercial",
    },
    {
      name: "Movie Watcher",
      translation: "movieWatcher",
      github: "https://bit.ly/3P9RueV",
      live: "https://bit.ly/3R7mcXX",
      images: ["project0304", "project0303", "project0302", "project0301"],
      techStack: [
        "Typescript",
        "React",
        "Redux",
        "Material UI",
        "Sass",
        "Netlify",
      ],
      type: "personal",
    },
  ];
  const smallProjects = [
    {
      name: "Mega Ogłoszenia",
      translation: "megaKOgłoszenia",
      link: "https://bit.ly/3IghiDE",
      live: "https://bit.ly/3aeYEj4",
      images: ["about01", "about02"],
      techStack: [
        "Typescript",
        "React",
        "Redux",
        "Material UI",
        "Sass",
        "NodeJs",
        "Express",
        "MySQL",
        "Heroku",
        "Netlify",
      ],
    },
    {
      name: "Prezenty Mikołaja",
      translation: "prezentyMikołaja",
      github: "https://bit.ly/3MoI8L4",
      live: "https://bit.ly/3sEDl0p",
      images: ["about01", "about02"],
      techStack: [
        "Typescript",
        "React",
        "Redux",
        "Material UI",
        "Sass",
        "NodeJs",
        "Express",
        "MySQL",
        "Heroku",
        "Netlify",
      ],
    },
    {
      name: "Cookie Maker",
      translation: "cookieMaker",
      github: "https://bit.ly/3FTMlUJ",
      live: "https://bit.ly/3wA86or",
      images: ["about01", "about02"],
      techStack: [
        "HTML5",
        "Javascript",
        "Sass",
        "NodeJs",
        "Express",
        "Handlebars",
        "Heroku",
        "Netlify",
      ],
    },
    {
      name: "Random Value Picker",
      translation: "randomValuePicker",
      github: "https://bit.ly/3wh4LLX",
      live: "https://bit.ly/38w4k7u",
      images: ["about01", "about02"],
      techStack: ["HTML5", "Javascript", "React", "Sass"],
    },
    {
      name: "Kantor Youcode",
      translation: "kantorYoucode",
      github: "https://bit.ly/3a6Uolm",
      live: "https://bit.ly/3MoRFC6",
      images: ["about01", "about02"],
      techStack: ["HTML5", "Javascript", "Sass"],
    },
  ];

  return (
    <section className={styles.work}>
      <div className={styles.cards}>
        {projects.map((project, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={index % 2 !== 0 ? containerLeft : containerRight}
            key={index}
            className={`${styles.card} ${index % 2 !== 0 ? styles.cardReversed : ""} `}
          >
            <div className={styles.swiperContainer}>
              <Swiper
                id="swiper"
                spaceBetween={20}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                zoom={{
                  maxRatio: 2,
                  minRatio: 1,
                }}
                navigation={true}
                modules={[Zoom, Navigation, Pagination]}
                className={styles.swiper}
              >
                {project.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="swiper-zoom-container">
                      <img
                        className={styles.image}
                        src={images[image]}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <p className={styles.swiperHint}>
                <AiOutlineInfoCircle /> {t(`sections.work.hint`)}
              </p>
            </div>

            <div
              className={`${styles.descriptionContainer} ${index % 2 === 0 ? styles.descriptionContainerAlternative : ""} `}
            >
              <div className={styles.title}>
                <div className={styles.projectType}>
                  {t(`sections.work.projectsDescriptions.${project.type}`)}
                </div>
                <div>
                  {t(`sections.work.projectsTitles.${project.translation}`)}
                </div>
              </div>
              <div className={styles.description}>
                {t(`sections.work.projectsDescriptions.${project.translation}`)}
              </div>
              <div>
                <div className={styles.techStack}>
                  {project.techStack.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  {project.github && (
                    <a
                      href={`${project.github}`}
                      className={styles.projectLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiGithub />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={`${project.live}`}
                      className={styles.projectLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GoLinkExternal />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className={styles.projectWrapper} id="project-folder">
        <a href={"#project-folder"} className={styles.foldersHeader}>
          {t(`sections.work.headers.folders`)}
        </a>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerTop}
          className={styles.folderContainer}
        >
          {smallProjects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectFolder}
              variants={textMotion}
              whileHover="hover"
              animate="rest"
            >
              <div className={styles.folderHeader}>
                <AiOutlineFolderOpen className={styles.folderIcon} />
                <div className={styles.links}>
                  {project.github && (
                    <a
                      href={`${project.github}`}
                      className={styles.projectLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiGithub />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={`${project.live}`}
                      className={styles.projectLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GoLinkExternal />
                    </a>
                  )}
                </div>
              </div>
              <p className={styles.folderName}>
                {t(`sections.work.projectsTitles.${project.translation}`)}
              </p>
              <p className={styles.folderDescription}>
                {t(`sections.work.projectsDescriptions.${project.translation}`)}
              </p>
              <ul className={styles.stackList}>
                {project.techStack.map((item) => (
                  <li key={item} className={styles.stackItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AppWrap(Work, "work");
