import React, {useContext} from "react";
import "./VerticalNavbar.scss";
import {AppContext} from "../../App";
import {Tooltip} from 'react-tooltip';
import {useTranslation} from "react-i18next";

export const VerticalNavbar = ({links}) => {
    const {t} = useTranslation('global')
    const themeContext = useContext(AppContext);
    const {activeSection, changeActiveSection} = themeContext;

    const handleLinkClick = (label) => {
        changeActiveSection(label);
    };

    return (
        <nav className="nav">
            <ul className="links">
                {links.map((link) => (
                    <li
                        className={`link ${activeSection === link.label ? "link--active" : ""} link-${link.label}`}
                        key={`link-${link.label}`}
                    >
                        <a href={`#${link.label}`}
                           onClick={() => handleLinkClick(link.label)}>
                            {<link.icon/>}
                        </a>
                        <Tooltip className='example' anchorSelect={`.link-${link.label}`} place="right">
                            {t(`nav.sections.${link.label}`)}
                        </Tooltip>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
