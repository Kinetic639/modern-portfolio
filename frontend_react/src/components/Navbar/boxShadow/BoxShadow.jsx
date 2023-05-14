import React from "react";
import "./BoxShadow.scss";
import {motion} from "framer-motion";

const item = {
    exit: {
        opacity: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.3,
            delay: 0
        }
    }
}
export const BoxShadow = ({expanded, toggleNavigation}) => {

    return (
        <motion.div variants={item}
                    initial={{opacity: 0}}
                    animate={{opacity: .8}}
                    transition={{duration: .4, delay: .2}}
                    exit="exit" className="box-shadow" onClick={toggleNavigation}/>
    );
};
