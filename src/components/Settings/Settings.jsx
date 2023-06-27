import React, {useContext, useState} from "react";
import {RxGear} from 'react-icons/rx'
import {motion} from "framer-motion";

import styles from "./Settings.module.scss";
import {ThemeSelect} from "./ThemeSelect/ThemeSelect";
import {ColorSelect} from "./ColorSelect/ColorSelect";
import {AppContext} from "../../App";

const container = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
    }
};

const spinTransition = {
    repeat: Infinity,
    ease: "linear",
    duration: 10
};

export const Settings = () => {
    const themeContext = useContext(AppContext);
    const {showAsideContact} = themeContext;
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            onMouseLeave={() => setIsOpen(false)}
            className={`${styles.container} ${showAsideContact ? styles.containerDesktop : ''}`}
        >
            <motion.div
                className={`${styles.iconContainer} ${showAsideContact ? styles.iconContainerDesktop : ''} icon-container`}>
                <motion.div animate={{rotate: 360}}
                            onClick={() => setIsOpen(!isOpen)}
                            transition={spinTransition} className={styles.icon}>
                    <RxGear/>
                </motion.div>
            </motion.div>
            {isOpen && (
                <motion.div
                    className={`${styles.settingsContainer} ${showAsideContact ? styles.settingsContainerDesktop : ''}`}
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
