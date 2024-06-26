import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../../../../App";
import { useTranslation } from "react-i18next";

import styles from "./PageLinks.module.scss";

const textMotion = {
  rest: {
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  hover: {
    x: 30,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: 90,
    transition: {
      ease: "easeInOut",
      delay: 1,
    },
  },
};

const iconMotion = {
  rest: {
    x: 20,
    opacity: 0,
    ease: "easeInOut",
    duration: 0.2,
  },
  hover: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.1,
    },
  },
};
export const PageLinks = ({ links, toggleNavigation }) => {
  const themeContext = useContext(AppContext);
  const [activeLink, setActiveLink] = useState(null);
  const { activeSection, changeActiveSection, showAsideContact } = themeContext;
  const { t } = useTranslation("global");

  const handleLinkClick = (label) => {
    changeActiveSection(label);
    toggleNavigation();
  };

  return (
    <ul
      className={`${styles.links} ${showAsideContact ? styles.linksDesktop : ""}`}
    >
      {links.map((link, index) => (
        <motion.li
          className={`${styles.link} ${activeSection === link.label ? styles.linkActive : ""} ${activeLink !== null && activeLink !== link.label ? styles.linkDimmed : ""}`}
          key={link.label}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 + index / 10 }}
          onMouseEnter={() => setActiveLink(link.label)}
          onMouseLeave={() => setActiveLink(null)}
        >
          <motion.div
            className={styles.linkContainer}
            initial="initial"
            whileHover="hover"
            animate="rest"
          >
            {showAsideContact && (
              <motion.div className={styles.linkIcon} variants={iconMotion}>
                {<link.icon />}
              </motion.div>
            )}
            <motion.a
              href={`#${link.label}`}
              variants={textMotion}
              transition={{ delay: 0.6 + index / 6 }}
              onClick={() => handleLinkClick(link.label)}
            >
              {!showAsideContact && <link.icon className={styles.mobileIcon} />}
              {t(`nav.sections.${link.label}`)}
            </motion.a>
          </motion.div>
        </motion.li>
      ))}
    </ul>
  );
};
