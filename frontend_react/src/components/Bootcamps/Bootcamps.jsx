import React, {useContext, useState} from "react";
import styles from "./Bootcamps.module.scss";
import {VscDebugBreakpointFunction} from "react-icons/vsc";
import {useTranslation} from "react-i18next";
import {AppContext} from "../../App";
import {AnimatePresence, motion} from "framer-motion";

export const Bootcamps = () => {
    const themeContext = useContext(AppContext);
    const {showDesktopMenu} = themeContext;
    const {t} = useTranslation('global')

    const bootcampsList = [
        {
            name: 'MegaK',
            translation: "megak",
            title: 'Mega kurs javascriptu',
            link: 'https://www.megak.pl/',
            date: '2022'
        },
        {
            name: 'YouCode',
            translation: "youcode",
            title: 'Front end od podstaw',
            link: 'https://youcode.pl/',
            date: '2021-2022'
        },
        {
            name: 'CodersCamp',
            translation: "coderscamp",
            title: 'Kurs front endu',
            link: 'https://www.coderscamp.edu.pl/',
            date: '2021'
        },
        {
            name: 'CODE:ME',
            translation: "codeme",
            title: 'React + javascript od podstaw',
            link: 'https://codeme.pl/',
            date: '2020'
        }
    ]
    const [activeLink, setActiveLink] = useState(0);

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    const indicatorVertical = {

        transform: `translateY(${(activeLink) * 47}px)`,
        transition: 'transform 0.3s ease',
    };
    const indicatorHorizontal = {

        transform: `translateX(${(activeLink) * 100}px)`,
        transition: 'transform 0.3s ease',
    };

    return (
        <div className={`${styles.container} ${showDesktopMenu ? styles.containerDesktop : ''}`}>
            <div className={`${styles.menu} ${showDesktopMenu ? styles.menuDesktop : ''}`}>
                {bootcampsList.map((bootcamp, index) => (
                    <button
                        key={index}
                        className={`${styles['menuButton']} ${showDesktopMenu ? styles.menuButtonDesktop : ''} ${activeLink === index ? styles['menuButtonActive'] : ''}`}
                        onClick={() => handleLinkClick(index)}>{bootcamp.name}</button>
                ))}
                <button
                    className={`${styles['menuButton']} ${showDesktopMenu ? styles.menuButtonDesktop : ''} ${activeLink === bootcampsList.length ? styles['menuButtonActive'] : ''}`}
                    onClick={() => handleLinkClick(bootcampsList.length)}>Others
                </button>
                <div className={`${styles.indicator} ${showDesktopMenu ? styles.indicatorDesktop : ''}`}
                     style={showDesktopMenu ? indicatorVertical : indicatorHorizontal}></div>
            </div>
            {
                activeLink < bootcampsList.length ?
                    <motion.div initial={{opacity: 0}}
                                animate={{opacity: 1, transition: {duration: .2, ease: "easeIn"}}}
                                exit={{opacity: 0}} className={styles.bootcamp}>

                        <AnimatePresence mode="wait">
                            <motion.div key={activeLink}
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1, transition: {duration: .2, ease: "easeIn"}}}
                                        exit={{opacity: 0}}
                                        className={styles.header}>
                                <p>
                                    {bootcampsList[activeLink].title} <a
                                    className={styles.link}
                                    href={bootcampsList[activeLink].link} target="_blank"
                                    rel="noreferrer">@ {bootcampsList[activeLink].name}</a>
                                </p>

                                <p className={styles.subHeader}>{bootcampsList[activeLink].date}</p>
                            </motion.div>
                        </AnimatePresence>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={activeLink}
                                initial={{opacity: 0}}
                                animate={{opacity: 1, transition: {delay: .1, duration: .2, ease: "easeIn"}}}
                                exit={{opacity: 0}} className={styles.description}>
                                {t(`sections.about.bootcamps.${bootcampsList[activeLink].translation}`)}
                            </motion.p>
                        </AnimatePresence>
                    </motion.div> : (
                        <AnimatePresence mode="wait">
                            <motion.div initial={{opacity: 0}}
                                        animate={{opacity: 1, transition: {duration: .2, ease: "easeIn"}}}
                                        exit={{opacity: 0}}>
                                <p>
                                    {t('sections.about.bootcamps.others')}
                                </p>
                                <ul className={styles.techstackColumn}>
                                    <li className={styles.duty}><VscDebugBreakpointFunction
                                        className={styles.dutyPoint}/> Brad Traversy
                                    </li>
                                    <li className={styles.duty}><VscDebugBreakpointFunction
                                        className={styles.dutyPoint}/>
                                        Maximilian Schwarzmuller
                                    </li>
                                    <li className={styles.duty}><VscDebugBreakpointFunction
                                        className={styles.dutyPoint}/> Andrew Mead
                                    </li>
                                    <li className={styles.duty}><VscDebugBreakpointFunction
                                        className={styles.dutyPoint}/>
                                        Jonas Schmedtmann
                                    </li>
                                    <li className={styles.duty}><VscDebugBreakpointFunction
                                        className={styles.dutyPoint}/> Bartłomiej Borowczyk (Samuraj
                                        Programowania)
                                    </li>
                                    <li className={styles.duty}><VscDebugBreakpointFunction
                                        className={styles.dutyPoint}/>
                                        Krzysztof Dąbrowski - Youcode
                                    </li>
                                    <li className={styles.duty}><VscDebugBreakpointFunction
                                        className={styles.dutyPoint}/> Adam Romański (hello roman)
                                    </li>
                                </ul>
                            </motion.div>
                        </AnimatePresence>
                    )
            }

        </div>
    );
};
