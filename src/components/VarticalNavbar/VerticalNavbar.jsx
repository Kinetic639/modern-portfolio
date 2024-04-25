import React, { useContext } from "react";
import { AppContext } from "../../App";
import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";

import styles from "./VerticalNavbar.module.scss";

export const VerticalNavbar = ({ links }) => {
  const { t } = useTranslation("global");
  const themeContext = useContext(AppContext);
  const { activeSection, changeActiveSection } = themeContext;
  const filteredLinks = links.filter((link) => link.label !== "contact");

  const handleLinkClick = (label) => {
    changeActiveSection(label);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        {filteredLinks.map((link) => (
          <li
            className={`${styles.link} ${activeSection === link.label ? styles.linkActive : ""} link-${link.label}`}
            key={`link-${link.label}`}
          >
            <a
              href={`#${link.label}`}
              onClick={() => handleLinkClick(link.label)}
            >
              {<link.icon />}
            </a>
            <Tooltip
              style={{
                backgroundColor: "var(--font-secondary)",
                color: "var(--font-tooltip)",
              }}
              anchorSelect={`.link-${link.label}`}
              place="right"
            >
              {t(`nav.sections.${link.label}`)}
            </Tooltip>
          </li>
        ))}
      </ul>
    </nav>
  );
};
