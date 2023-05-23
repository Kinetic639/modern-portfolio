import React, {useContext, useState} from "react";
import {RxGear} from 'react-icons/rx'
import {Tooltip} from "react-tooltip";
import {motion} from "framer-motion";

import styles from "./Settings.module.scss";
import {useTranslation} from "react-i18next";
import {ThemeSelect} from "./ThemeSelect/ThemeSelect";
import {ColorSelect} from "./ColorSelect/ColorSelect";

const container = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,

        transition: {delay: .2},
    },
};

const spinTransition = {
    repeat: Infinity,
    ease: "linear",
    duration: 10
};

export const Settings = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {t} = useTranslation('global')

    return (
        <motion.div onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className={styles.container}
        >
            <motion.div className={`${styles.iconContainer} icon-container`}>
                <motion.div animate={{rotate: 360}}
                            transition={spinTransition} className={styles.icon}>
                    <RxGear/>
                </motion.div>
                <Tooltip
                    style={{backgroundColor: 'var(--font-secondary)', color: 'var(--font-tooltip)', fontSize: '14px'}}
                    anchorSelect=".icon-container" place="top">
                    {t('tooltips.settings.settings')}
                </Tooltip>
            </motion.div>
            {isOpen && (
                <motion.div className={styles.settingsContainer}
                            variants={container}
                            initial="hidden"
                            animate="visible"
                >
                    <ThemeSelect/>
                    <ColorSelect/>
                </motion.div>)
            }
        </motion.div>
    );
};
