import React, {useContext} from "react";
import "./VerticalNavbar.scss";
import {AppContext} from "../../App";

export const VerticalNavbar = ({links}) => {
    const themeContext = useContext(AppContext);
    const {theme, toggleTheme, activeSection, changeActiveSection} = themeContext;

    const handleLinkClick = (label) => {
        changeActiveSection(label);
    };
    return (
        <nav className="nav">
            <ul className="links">
                {links.map((link) => (
                    <li
                        className={`link ${activeSection === link.label ? "link--active" : ""}`}
                        key={`link-${link.label}`}
                    >
                        <a href={`#${link.label}`} onClick={() => handleLinkClick(link.label)}>
                            {<link.icon/>}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
