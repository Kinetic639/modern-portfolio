import React from "react";
import {AppWrap} from "../../wrapper";
import {useTranslation} from "react-i18next";
import {FaRegHandPointRight} from 'react-icons/fa'
import {motion} from "framer-motion";

import styles from "./Header.module.scss";

const container = {
    whileInView: (i = 1) => ({
        opacity: [0, 1],
        transition: {staggerChildren: 0.2, delayChildren: .2 * i}
    }),
};

const child = {
    whileInView: {
        opacity: [0, 1],
        y: [20, 0],
        transition: {duration: .3}
    },
};

const Header = () => {
    const {t} = useTranslation('global')

    return (
        <motion.div
            variants={container}
            whileInView="whileInView"
            className={styles.container}>
            <motion.p variants={child} className={styles.intro}>{t('sections.home.header.p1')}</motion.p>
            <motion.h1 variants={child} className={styles.title}>Michał <span
                className={styles.titleSecondary}>Stępień</span></motion.h1>
            <motion.h1 variants={child} className={styles.subtitle}>Junior Web Developer</motion.h1>
            <motion.div variants={child} className={styles.description}>
                <p>{t('sections.home.header.p2')}</p>
                <p>
                    {t('sections.home.header.p3')}
                    <a className={styles.link}
                       href="#work">
                        <FaRegHandPointRight/> {t('sections.home.links.projects')}</a>
                    {t('sections.home.header.p4')}
                    <a className={styles.link}
                       href="#skills"> <FaRegHandPointRight/> {t('sections.home.links.skills')}</a>
                    .
                </p>
            </motion.div>
        </motion.div>
    );
};

export default AppWrap(Header, "home");
