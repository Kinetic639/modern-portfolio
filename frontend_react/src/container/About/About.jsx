import React, {useState} from "react";
import {VscDebugBreakpointFunction} from 'react-icons/vsc'

import styles from "./About.module.scss";
import {AppWrap} from "../../wrapper";
import {Bootcamps} from "../../components/Bootcamps/Bootcamps";

import {images} from "../../constants"
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";

const textMotion = {
    rest: {
        x: 0,
        transition: {
            duration: .2,
            ease: "easeInOut"
        }
    },
    hover: {
        x: 10,
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: "easeInOut",
            delay: 1
        }
    }

};

const descriptionContainer = {
    whileInView: (i = 1) => ({
        opacity: [0, 1],
        transition: {staggerChildren: 0.2, delayChildren: .2 * i, duration: .5}
    }),
};

const child = {
    whileInView: {
        opacity: [0, 1],
        x: [10, 0],
        transition: {duration: .3}
    },
};

const About = () => {
    const {t} = useTranslation('global')
    const [activeDuty, setActiveDuty] = useState(null)
    const experience = [{
        name: "trenujemy",
        employerName: "trenujemy.pl",
        link: 'https://www.trenujemy.pl',
        duties: 6,
        techStack: {
            column01: [
                "JavaScript (ES6+)",
                "TypeScript",
                "React",
                "Recoil.js",
                "React Testing Library",],
            column02: [
                "Vue",
                "Node.js",
                "Express",
                "GraphQL",
            ]
        }
    }]


    return (
        <div className={styles.container}>
            <div className={styles.introduction}>
                <motion.img initial={{opacity: 0, x: -10}}
                            whileInView={{opacity: 1, x: 0, transition: {delay: .2, duration: .3}}}
                            className={styles.descriptionImage}
                            src={images.avatar}
                            alt=""/>
                <motion.div
                    variants={descriptionContainer}
                    whileInView="whileInView" className={styles.introductionDescription}>
                    <motion.p variants={child}>
                        {t('sections.about.description.p1')}
                    </motion.p>
                    <motion.p variants={child}>
                        {t('sections.about.description.p2')}
                    </motion.p>
                    <motion.p variants={child}>
                        {t('sections.about.description.p3')}
                    </motion.p>
                </motion.div>

            </div>
            <div id="about-experience" className={styles.aboutSection}>
                <motion.a initial={{opacity: 0, y: -10}}
                          whileInView={{opacity: 1, y: 0, transition: {delay: .3, duration: .3}}}
                          href="#about-experience"
                          className={styles.header}>{t('sections.about.headers.experience')}</motion.a>
                <div>
                    {
                        experience.map(job => (
                            <motion.div className={styles.experienceItem}>
                                <motion.div initial={{opacity: 0, y: -10}}
                                            whileInView={{opacity: 1, y: 0, transition: {delay: .5, duration: .3}}}>
                                    <p className={styles.itemTitle}>{t(`sections.about.experience.${job.name}.position`)}
                                        <a
                                            className={styles.itemLink}
                                            href={job.link}
                                            target="_blank"
                                            rel="noreferrer"> @ {job.employerName}</a>
                                    </p>
                                    <p className={styles.itemSubtitle}>{t(`sections.about.experience.${job.name}.from`)} - {t(`sections.about.experience.${job.name}.to`)}</p>
                                </motion.div>
                                <ul className={styles.duties}>
                                    {Array.from({length: job.duties}).map((duty, index) => (
                                        <motion.li initial={{opacity: 0, y: -10}}
                                                   whileInView={{
                                                       opacity: 1,
                                                       y: 0,
                                                       transition: {delay: .6 + (index / 10), duration: .3}
                                                   }}
                                                   className={styles.duty}>
                                            <VscDebugBreakpointFunction className={styles.dutyPoint}/>
                                            <motion.p initial="initial"
                                                      whileHover="hover"
                                                      animate="rest"
                                                      variants={textMotion} className={styles.dutyDescription}>
                                                {t(`sections.about.experience.${job.name}.duties.duty${index + 1}`)}
                                            </motion.p>
                                        </motion.li>
                                    ))}
                                </ul>
                                <div>
                                    <motion.p initial={{opacity: 0, y: -10}}
                                              whileInView={{
                                                  opacity: 1,
                                                  y: 0,
                                                  transition: {delay: .6, duration: .3}
                                              }}>Few technologies I’ve been working with:
                                    </motion.p>
                                    <div className={styles.techstackListsContainer}>
                                        <ul className={styles.techstackColumn}>
                                            {job.techStack.column01.map((item, index) => (
                                                <motion.li initial={{opacity: 0, y: -10}}
                                                           whileInView={{
                                                               opacity: 1,
                                                               y: 0,
                                                               transition: {delay: .6 + (index / 10), duration: .3}
                                                           }} className={styles.duty}>
                                                    <VscDebugBreakpointFunction
                                                        className={styles.dutyPoint}/>
                                                    <motion.p initial="initial"
                                                              whileHover="hover"
                                                              animate="rest"
                                                              variants={textMotion} className={styles.dutyDescription}>
                                                        {item}
                                                    </motion.p>
                                                </motion.li>
                                            ))}

                                        </ul>
                                        <ul className={styles.techstackColumn}>
                                            {job.techStack.column02.map((item, index) => (
                                                <motion.li initial={{opacity: 0, y: -10}}
                                                           whileInView={{
                                                               opacity: 1,
                                                               y: 0,
                                                               transition: {delay: .6 + (index / 10), duration: .3}
                                                           }} className={styles.duty}>
                                                    <VscDebugBreakpointFunction
                                                        className={styles.dutyPoint}/>
                                                    <motion.p initial="initial"
                                                              whileHover="hover"
                                                              animate="rest"
                                                              variants={textMotion} className={styles.dutyDescription}>
                                                        {item}
                                                    </motion.p>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
            <div id="about-courses" className={styles.aboutSection}>
                <a href="#about-courses" className={styles.header}>{t('sections.about.headers.bootcamps')}</a>
                <div className={styles.bootcampsContainer}>
                    <p>
                        {t('sections.about.bootcamps.description')}
                    </p>
                    <Bootcamps/>
                </div>
            </div>
        </div>
    );
};

export default AppWrap(About, "about");
