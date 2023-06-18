import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {BsEnvelope} from 'react-icons/bs'
import {RiFacebookFill, RiGithubFill, RiLinkedinFill, RiRouteLine} from 'react-icons/ri';

import {images} from "../../constants";
import styles from "./Contact.module.scss";

import {motion,} from "framer-motion";

const container = {
    visible: {
        opacity: 1, y: 0, transition: {
            staggerChildren: 0.15,
            delayChildren: .3
        }
    },
    hidden: {opacity: 0, y: -20}
}

const buttonContainer = {
    visible: {
        opacity: 1, transition: {
            staggerChildren: 0.15,
            delayChildren: .3
        }
    },
    hidden: {opacity: 0}
}

const child = {
    visible: {
        opacity: 1,
        y: 0,
    },
    hidden: {
        opacity: 0,
        y: 20,
    },
};
const buttonChild = {
    visible: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    },
};

const image = {
    visible: {
        opacity: 1,
        transition: {delay: .5}
    },
    hidden: {
        opacity: 0,
    },
};

export const Contact = ({links}) => {
    const {t} = useTranslation('global')
    const [showResumeButtons, setShowResumeButtons] = useState(false)

    return (
        <motion.div className={styles.contact}>
            <motion.div initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={container} className={styles.header}>
                <motion.h2 variants={child}>Michał Stępień</motion.h2>
                <motion.p variants={child} className={styles.subheader}>Junior web developer</motion.p>
            </motion.div>
            <motion.img initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}} variants={image} className={styles.img} src={images.avatar02}
                        alt="profile_bg"/>
            <motion.div initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={container} className={styles.infoContainer}>
                <motion.div variants={child} className={`${styles.infoSection} ${styles.locationSection}`}>
                    <div>
                        <p>Lokalizacja: Poznań</p>
                        <p className={styles.textSecondary}>z możliwością relokacji</p>
                    </div>
                    <div className={styles.locationIcon}>
                        <RiRouteLine/>
                    </div>
                </motion.div>
                <motion.div variants={child} className={styles.infoSection}>
                    <RiLinkedinFill className={styles.socialIcon}/>
                    <RiGithubFill className={styles.socialIcon}/>
                    <RiFacebookFill className={styles.socialIcon}/>
                </motion.div>
                <motion.div initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                            variants={buttonContainer} className={`${styles.infoSection} ${styles.ctaSection}`}>
                    <motion.div variants={buttonChild} className={styles.buttonResume}
                                onMouseEnter={() => setShowResumeButtons(true)}
                                onMouseLeave={() => setShowResumeButtons(false)}>
                        {!showResumeButtons && <div className={styles.buttonDownload}>Resume</div>}
                        {showResumeButtons && (
                            <>
                                <button className={styles.buttonDownload}>polish</button>
                                <button className={styles.buttonDownload}>english</button>
                            </>
                        )}
                    </motion.div>
                    <motion.button variants={buttonChild} className={styles.buttonHire}><BsEnvelope/> Ask me anything!
                    </motion.button>
                </motion.div>
            </motion.div>
            <footer className={styles.footer}>© 2023 Michał Stępień. All Rights Reserved</footer>
        </motion.div>
    );
};
