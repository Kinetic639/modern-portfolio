import React from "react";
import {AppWrap} from "../../wrapper";
import styles from "./Work.module.scss"
import {FiGithub} from "react-icons/fi"
import {GoLinkExternal} from "react-icons/go"
import {AiOutlineFolderOpen} from "react-icons/ai"

import {images} from "../../constants";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";

const textMotion = {
    rest: {
        y: 0,
        transition: {
            duration: .2,
            ease: "easeInOut"
        }
    },
    hover: {
        y: -15,
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        }
    },

};

const Work = () => {
    const {t} = useTranslation('global')

    const projects = [
        {
            name: 'trenujemy.pl - panel admina',
            translation: "trenujemyAdmin",
            link: null,
            live: null,
            images: ['about01', 'about02'],
            techStack: ['React', 'Recoil', 'React Test Library', 'Sass', 'Express']
        },
        {
            name: 'trenujemy.pl - aplikacja',
            translation: "trenujemyUser",
            link: "https://trenujemy.pl",
            live: null,
            images: ['about01', 'about02'],
            techStack: ['Vue', 'VueX', 'Sass', 'Express']
        },
        {
            name: 'MegaK Rekrutacja',
            translation: "megaKRecruitment",
            github: "https://bit.ly/43Ing9V",
            live: null,
            images: ['about01', 'about02'],
            techStack: ['Typescript', 'React', 'Redux', 'Bootstrap', 'NodeJs', 'NestJs', 'MariaDB']
        },
        {
            name: 'Movie Watcher',
            translation: "movieWatcher",
            github: "https://bit.ly/3P9RueV",
            live: "https://bit.ly/3R7mcXX",
            images: ['about01', 'about02'],
            techStack: ['Typescript', 'React', 'Redux', 'Material UI', 'Sass', "Netlify"]
        },
    ]
    const smallProjects = [
        {
            name: 'Mega Ogłoszenia',
            translation: "megaKOgłoszenia",
            link: "https://bit.ly/3IghiDE",
            live: "https://bit.ly/3aeYEj4",
            images: ['about01', 'about02'],
            techStack: ['Typescript', 'React', 'Redux', 'Material UI', 'Sass', "NodeJs", "Express", "MySQL", "Heroku", "Netlify"]
        },
        {
            name: 'Prezenty Mikołaja',
            translation: "prezentyMikołaja",
            github: "https://bit.ly/3MoI8L4",
            live: "https://bit.ly/3sEDl0p",
            images: ['about01', 'about02'],
            techStack: ['Typescript', 'React', 'Redux', 'Material UI', 'Sass', "NodeJs", "Express", "MySQL", "Heroku", "Netlify"]

        },
        {
            name: 'Cookie Maker',
            translation: "cookieMaker",
            github: "https://bit.ly/3FTMlUJ",
            live: "https://bit.ly/3wA86or",
            images: ['about01', 'about02'],
            techStack: ['HTML5', 'Javascript', 'Sass', "NodeJs", "Express", "Handlebars", "Heroku", "Netlify"]
        },
        {
            name: 'Random Value Picker',
            translation: "randomValuePicker",
            github: "https://bit.ly/3wh4LLX",
            live: "https://bit.ly/38w4k7u",
            images: ['about01', 'about02'],
            techStack: ['HTML5', 'Javascript', 'React', 'Sass']
        },
        {
            name: 'Kantor Youcode',
            translation: "kantorYoucode",
            github: "https://bit.ly/3a6Uolm",
            live: "https://bit.ly/3MoRFC6",
            images: ['about01', 'about02'],
            techStack: ['HTML5', 'Javascript', 'Sass']
        }]

    return (
        <section className={styles.work}>
            <div className={styles.projectCards}>
                {projects.map((project, index) => (
                    <div key={index} className={`${styles.card} ${index % 2 !== 0 ? styles.cardReversed : ''} `}>
                        <div className={styles.imageContainer}>
                            <div className={styles.imageWrapper}>
                                <img className={styles.image} src={images.about01} alt=""/>
                            </div>
                        </div>
                        <div
                            className={`${styles.descriptionContainer} ${index % 2 !== 0 ? styles.descriptionContainerAlternative : ''} `}>
                            <div className={styles.title}>{project.name}</div>
                            <div className={styles.description}>
                                {t(`sections.work.projectsDescriptions.${project.translation}`)}
                            </div>
                            <div>
                                <div className={styles.techStack}>{project.techStack.map(item => <span
                                    key={item}>{item}</span>)}</div>
                                <div className={styles.links}>
                                    {project.github &&
                                        <a href={`${project.github}`} className={styles.projectLink} target="_blank"
                                           rel="noreferrer">
                                            <FiGithub/>
                                        </a>}

                                    {project.live &&
                                        <a href={`${project.live}`} className={styles.projectLink} target="_blank"
                                           rel="noreferrer">
                                            <GoLinkExternal/>
                                        </a>}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.projectWrapper} id='project-folder'>
                <a href='#project-folder' className={styles.foldersHeader}>
                    {t(`sections.work.headers.folders`)}</a>
                <div className={styles.folderContainer}>
                    {smallProjects.map((project, index) => (
                        <motion.div key={index} className={styles.projectFolder}
                                    variants={textMotion}
                                    whileHover="hover"
                                    animate="rest">
                            <div className={styles.folderHeader}>
                                <AiOutlineFolderOpen className={styles.folderIcon}/>
                                <div className={styles.links}>
                                    {project.github &&
                                        <a href={`${project.github}`} className={styles.projectLink} target="_blank"
                                           rel="noreferrer">
                                            <FiGithub/>
                                        </a>}

                                    {project.live &&
                                        <a href={`${project.live}`} className={styles.projectLink} target="_blank"
                                           rel="noreferrer">
                                            <GoLinkExternal/>
                                        </a>}
                                </div>
                            </div>
                            <p className={styles.folderName}>{project.name}</p>
                            <p className={styles.folderDescription}>
                                {t(`sections.work.projectsDescriptions.${project.translation}`)}
                            </p>
                            <ul className={styles.stackList}>
                                {project.techStack.map(item => <li key={item} className={styles.stackItem}>{item}</li>)}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AppWrap(Work, "work");
