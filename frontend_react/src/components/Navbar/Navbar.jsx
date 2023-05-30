import React, {useContext, useEffect, useState} from "react";
import {MenuToggle} from "./MenuToggle/MenuToggle";
import {BoxShadow} from "./boxShadow/BoxShadow";
import {AnimatePresence} from "framer-motion";
import {Menu} from "./Menu/Menu";
import {AppContext} from "../../App";

import styles from "./Navbar.module.scss";

export const Navbar = ({links}) => {
    const themeContext = useContext(AppContext);
    const {showAsideContact} = themeContext;
    const [expanded, setExpanded] = useState(false)
    const filteredLinks = !showAsideContact ? links : links.filter(link => link.label !== 'contact')


    const toggleNavigation = () => {
        setExpanded(!expanded)
    };

    return (
        <div className={styles.wrapper}>
            <MenuToggle expanded={expanded} toggleNavigation={toggleNavigation}/>
            <AnimatePresence>
                {expanded && (
                    <>
                        <BoxShadow expanded={expanded} toggleNavigation={toggleNavigation}/>
                        <Menu links={filteredLinks} expanded={expanded} toggleNavigation={toggleNavigation}/>
                    </>
                )
                }
            </AnimatePresence>
        </div>
    );
};
