import React, {useContext, useEffect, useState} from "react";
import styles from "./Menu.module.scss";
import {motion} from "framer-motion";
import {PageLinks} from "./PageLinks/PageLinks";
import {Header} from "./Header/Header";
import {MenuCard} from "./MenuCards/MenuCard";
import {AppContext} from "../../../App";
import {RiFacebookFill, RiGithubFill, RiLinkedinFill} from "react-icons/ri";
import {Settings} from "../../Settings/Settings";
import {LanguageSelect} from "../../Settings/LanguageSelect/LanguageSelect";

const nav = {
    exit: {
        width: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.3,
            delay: 0
        }
    }
}
export const Menu = ({links, toggleNavigation}) => {
    const themeContext = useContext(AppContext);
    const {showAsideContact} = themeContext;


    return (
        <motion.nav className={styles.container}
                    variants={nav}
                    initial={{width: 0}}
                    animate={{width: "fit-content"}}
                    transition={{duration: .5}}
                    exit="exit"
        >
            <Header/>
            <div className={styles.menuColumn}>
                <PageLinks links={links} toggleNavigation={toggleNavigation}/>
                {!showAsideContact && (
                    <>
                        <motion.div
                            initial={{y: 30, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{
                                ease: "easeInOut",
                                duration: 0.3,
                                delay: 1.2
                            }}
                            className={styles.infoSection}>
                            <RiLinkedinFill className={styles.socialIcon}/>
                            <RiGithubFill className={styles.socialIcon}/>
                            <RiFacebookFill className={styles.socialIcon}/>
                        </motion.div>
                        <motion.div
                            initial={{y: 30, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{
                                ease: "easeInOut",
                                duration: 0.3,
                                delay: 1.4
                            }}
                            className={styles.settingsContainer}>
                            <LanguageSelect/>
                            <Settings/>
                        </motion.div>
                    </>
                )
                }
            </div>
        </motion.nav>
    );
};
