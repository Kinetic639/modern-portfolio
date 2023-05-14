import React, {useContext, useEffect, useState} from "react";
import "./Navbar.scss";
import {AppContext} from "../../App";
import {MenuToggle} from "./MenuToggle/MenuToggle";
import {BoxShadow} from "./boxShadow/BoxShadow";
import {AnimatePresence} from "framer-motion";
import {Menu} from "./Menu/Menu";

export const Navbar = ({links}) => {
    const [expanded, setExpanded] = useState(false)
    const toggleNavigation = () => {
        setExpanded(!expanded)
    };

    return (
        <div className="nav-wrapper">
            <MenuToggle expanded={expanded} toggleNavigation={toggleNavigation}/>
            <AnimatePresence>
                {expanded && (
                    <>
                        <BoxShadow expanded={expanded} toggleNavigation={toggleNavigation}/>
                        <Menu links={links} expanded={expanded} toggleNavigation={toggleNavigation}/>
                    </>
                )
                }
            </AnimatePresence>
        </div>
    );
};
