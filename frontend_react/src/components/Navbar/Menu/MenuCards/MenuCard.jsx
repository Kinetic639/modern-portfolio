import React from "react";
import {motion} from "framer-motion";

import styles from "./MenuCard.module.scss";

export const MenuCard = () => {


    return (
        <motion.div className={styles.wrapper} initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: .8}}>
            <div>
                <h3 className={styles.title}>Location</h3>
                <p className={styles.text}>Poznań, Poland</p>
            </div>
            <div>
                <h3 className={styles.title}>Socials</h3>
                <p className={styles.text}>Lorem ipsum dolor.</p>
            </div>
            <div>
                <h3 className={styles.title}>Resume</h3>
                <div>
                    <button>PL</button>
                    <button>EN</button>
                </div>
            </div>
            <div>
                <button>hire me!</button>
            </div>

        </motion.div>
    );
};
