import React, {useContext, useState} from "react";
import {HiMenuAlt4, HiX} from "react-icons/hi";
import {motion} from "framer-motion";

import {images} from "../../constants";
import "./Navbar.scss";
import {AppContext} from "../../App";

export const Navbar = ({links}) => {
    const [toggle, setToggle] = useState(false);
    const themeContext = useContext(AppContext);
    const {theme, toggleTheme, activeSection, changeActiveSection} = themeContext;
    const handleLinkClick = (label) => {
        let scrolling = false;

        const onScroll = () => {
            scrolling = true;
        };

        const checkScrollEnd = () => {
            if (scrolling) {
                scrolling = false;
                requestAnimationFrame(checkScrollEnd);
            } else {
                changeActiveSection(label);
            }
        };

        window.addEventListener("scroll", onScroll);
        requestAnimationFrame(checkScrollEnd);
    };

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.logo} alt="logo"/>
            </div>
            <ul className="app__navbar-links">
                <li key="button">
                    <button onClick={toggleTheme}>{theme}</button>
                </li>
                {links.map((link) => (
                    <li
                        className={`link ${activeSection === link.label ? "link--active" : ""}`}
                        key={`link-${link.label}`}
                    >
                        <a
                            href={`#${link.label}`}
                            onClick={() => handleLinkClick(link.label)}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)}/>

                {toggle && (
                    <motion.div
                        whileInView={{x: [300, 0]}}
                        transition={{duration: 0.85, ease: "easeOut"}}
                    >
                        <HiX onClick={() => setToggle(false)}/>
                        <ul>
                            {["home", "about", "work", "skills", "contact"].map((item) => (

                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                                        {item}
                                    </a>
                                </li>

                            ))}
                            <li key="button">
                                <button onClick={toggleTheme}>{theme}</button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};
