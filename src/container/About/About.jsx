import React from "react";
import {VscDebugBreakpointFunction} from 'react-icons/vsc'

import styles from "./About.module.scss";
import {AppWrap} from "../../wrapper";
import {Bootcamps} from "../../components/Bootcamps/Bootcamps";

import {images} from "../../constants"
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Zoom} from "swiper";

import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const elementLeft = {
    visible: {opacity: 1, x: 0, transition: {duration: .5, delay: .4}},
    hidden: {opacity: 0, x: -20}
}

const containerRight = {
    visible: {
        opacity: 1, x: 0, transition: {
            staggerChildren: 0.15,
            delayChildren: .4
        }
    },
    hidden: {opacity: 0, x: 20}
}

const containerLeft = {
    visible: {
        opacity: 1, x: 0, transition: {
            staggerChildren: 0.15,
            delayChildren: .3,
            delay: .3
        }
    },
    hidden: {opacity: 0, x: -20}
}

const child = {
    visible: {
        opacity: 1,
        x: 0,

    },
    hidden: {
        opacity: 0,
        x: 20,
    },
};

const About = () => {
    const {t} = useTranslation('global')
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
        },

    }]
    const avatars = ['about01','about02',  'about03', 'about04',]

    const prevPositions =  [
            'supervisorsAssistant',
            'Salesman',
            'Cashier',
            'Buffer',
            'ShiftCoordinator',
            ]

    return (
        <div className={styles.container}>
            <div className={styles.introduction}>
<motion.div initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={containerLeft}>
    <Swiper
        id="swiper"
        spaceBetween={20}
        pagination={{
            clickable: true,
        }}
        loop={true}
        zoom={{
            maxRatio: 2,
            minRatio: 1
        }}
        navigation={true}
        modules={[Zoom, Navigation, Pagination]}
        className={styles.swiper}
    >
        {
            avatars.map((avatar, index) => (
                <SwiperSlide key={index}>

                    <div className="swiper-zoom-container"><img
                        src={images[avatar]}
                        alt=""/>
                    </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
</motion.div>
                <motion.div initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                            variants={containerRight}
                            className={styles.introductionDescription}>
                    <motion.p variants={child}

                    >
                        {t('sections.about.description.p1')}
                    </motion.p>
                    <motion.p variants={child}
                    >
                        {t('sections.about.description.p2')}
                    </motion.p>
                    <motion.p variants={child}
                    >
                        {t('sections.about.description.p3')}
                    </motion.p>
                </motion.div>
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                variants={elementLeft} id="about-experience" className={styles.aboutSection}
            >
                <motion.a
                    href="#about-experience"
                    className={styles.header}
                >
                    {t('sections.about.headers.experience')}
                </motion.a>
                {
                    experience.map(job => (
                        <motion.div
                            key={job.name}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                            variants={containerLeft}
                            className={styles.experienceItem}
                        >
                            <motion.div variants={child}>
                                <p className={styles.itemTitle}>{t(`sections.about.experience.${job.name}.position`)}
                                    <a
                                        className={styles.itemLink}
                                        href={job.link}
                                        target="_blank"
                                        rel="noreferrer"> @ {job.employerName}</a>
                                </p>
                                <p className={styles.itemSubtitle}>{t(`sections.about.experience.${job.name}.from`)} - {t(`sections.about.experience.${job.name}.to`)}</p>
                            </motion.div>
                            <motion.ul
                                variants={containerLeft} className={styles.duties}>
                                {Array.from({length: job.duties}).map((duty, index) => (
                                    <motion.li key={index} variants={child}
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
                            </motion.ul>
                            <div>
                                <motion.p variants={child}> {t(`sections.about.headers.usedTech`)}
                                </motion.p>
                                <div className={styles.techstackListsContainer}>
                                    <ul className={styles.techstackColumn}>
                                        {job.techStack.column01.map((item) => (
                                            <motion.li key={item} variants={child} className={styles.duty}>
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
                                        {job.techStack.column02.map((item) => (
                                            <motion.li key={item} variants={child} className={styles.duty}>
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
            </motion.div>

            <motion.div initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={containerLeft} id="about-courses"
                        className={styles.aboutSection}
            >
                <motion.a variants={child} href="#about-courses"
                          className={styles.header}>{t('sections.about.headers.bootcamps')}</motion.a>
                <motion.div className={styles.bootcampsContainer}>
                    <motion.p variants={child}>
                        {t('sections.about.bootcamps.description')}
                    </motion.p>
                    <Bootcamps/>
                </motion.div>
            </motion.div>

            <motion.div initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={containerLeft} id="about-postions"
                        className={styles.aboutSection}
            >
                <motion.a variants={child} href="#about-postions"
                          className={styles.header}>{t('sections.about.headers.positions')}</motion.a>

                <motion.p variants={child}>
                    {t('sections.about.experience.previousPositionsDescription')}
                </motion.p>
                <div className={styles.techstackListsContainer}>
                    <ul className={styles.techstackColumn}>
                        {prevPositions.map((item) => (
                            <motion.li key={item} variants={child} className={styles.duty}>
                                <VscDebugBreakpointFunction
                                    className={styles.dutyPoint}/>
                                <motion.p initial="initial"
                                          whileHover="hover"
                                          animate="rest"
                                          variants={textMotion} className={styles.dutyDescription}>
                                    {t(`sections.about.experience.prevPositions.${item}`)}
                                </motion.p>
                            </motion.li>
                        ))}

                    </ul>
                </div>
            </motion.div>
        </div>
    );
};

export default AppWrap(About, "about");
