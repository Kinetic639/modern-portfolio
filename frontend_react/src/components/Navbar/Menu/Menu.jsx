import React from "react";
import styles from "./Menu.module.scss";
import {motion} from "framer-motion";
import {PageLinks} from "./PageLinks/PageLinks";
import {Header} from "./Header/Header";
import {MenuCard} from "./MenuCards/MenuCard";

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


    return (
        <motion.nav className={styles.container}
                    variants={nav}
                    initial={{width: 0}}
                    animate={{width: "fit-content"}}
                    transition={{duration: .5}}
                    exit="exit"
        >
            <Header/>
            <PageLinks links={links} toggleNavigation={toggleNavigation}/>
            <MenuCard/>
        </motion.nav>
    );
};
