import React from "react";
import {motion} from "framer-motion";

import styles from "./Header.module.scss";

const container = {
    hidden: {opacity: 0},
    visible: (i = 1) => ({
        opacity: 1,
        transition: {delay: .7, staggerChildren: 0.03, delayChildren: .8 * i},
    }),
};

const child = {
    visible: {
        opacity: 1,
        x: 0,

    },
    hidden: {
        opacity: 0,
        x: 2,
    },
};

export const Header = () => {
    const email = 'michal.stepien36@gmail.com'
    const letters = Array.from(email);


    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <motion.div initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: .4}} className={styles.title}>menu
                </motion.div>
            </div>
            <motion.div className={styles.linkContainer}>
                <motion.div initial={{flex: 0}}
                            animate={{flex: 1}}
                            transition={{delay: .4}} className={styles.linkLine}></motion.div>
                <motion.a
                    style={{overflow: "hidden", display: "flex", fontSize: "2rem"}}
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className={styles.headerLink}
                    href="mailto:example@example.com">
                    {letters.map((letter, index) => (
                        <motion.span variants={child} key={index}>
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </motion.a>
            </motion.div>
        </div>
    );
};
