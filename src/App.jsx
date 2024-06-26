import React, { createContext, useEffect, useMemo, useState } from "react";
import Header from "./container/Header/Header";
import About from "./container/About/About";
import Skills from "./container/Skills/Skills";
import Work from "./container/Work/Work";
import { AppBackground, Navbar } from "./components";
import { Settings } from "./components/Settings/Settings";
import { VerticalNavbar } from "./components";
import { AiOutlineHome } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import { IoBriefcaseOutline, IoFileTrayStackedOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { Contact } from "./container/Contact/Contact";
import { LanguageSelect } from "./components/Settings/LanguageSelect/LanguageSelect";

import styles from "./App.module.scss";

export const AppContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [activeSection, setActiveSection] = useState("home");
  const [selectedColor, setSelectedColor] = useState("green");
  const [showAsideContact, setShowAsideContact] = useState(false);
  const [showDesktopMenu, setShowDesktopMenu] = useState(false);

  const links = useMemo(
    () => [
      { id: 0, label: "home", icon: AiOutlineHome },
      { id: 1, label: "about", icon: RxPerson },
      { id: 2, label: "skills", icon: IoFileTrayStackedOutline },
      { id: 3, label: "work", icon: IoBriefcaseOutline },
      { id: 4, label: "contact", icon: AiOutlineMessage },
    ],
    [],
  );

  const checkScreenWidth = () => {
    const screenWidth = window.innerWidth;
    setShowAsideContact(screenWidth > 1199);
    setShowDesktopMenu(screenWidth > 767);
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  useEffect(() => {
    document.body.classList.add("darkmode"); // select dark mode as default
    return () => {
      document.body.classList.remove("darkmode");
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        const sectionIds = links.map((link) => link.label);
        const visibleSections = sectionIds.reduce((sections, id) => {
          const sectionElement = document.getElementById(id);
          if (sectionElement) {
            const rect = sectionElement.getBoundingClientRect();
            const visibleHeight =
              Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
            if (visibleHeight > 0) {
              sections.push({ id, visibleHeight });
            }
          }
          return sections;
        }, []);

        const sortedSections = visibleSections.sort(
          (a, b) => b.visibleHeight - a.visibleHeight,
        );

        const currentSection =
          sortedSections.length > 0 ? sortedSections[0].id : null;

        changeActiveSection(currentSection);
      }, 600);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [links]);

  const toggleTheme = () => {
    document.body.classList.toggle("darkmode");
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const changeSelectedColor = (color) => {
    const colors = [
      "orange",
      "yellow",
      "blue",
      "red",
      "purple",
      "green",
      "pink",
    ];
    colors.forEach((color) => {
      document.body.classList.remove(color);
    });

    document.body.classList.add(color);
    setSelectedColor(color);
  };

  const changeActiveSection = (section) => {
    setActiveSection(section);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        activeSection,
        changeActiveSection,
        selectedColor,
        changeSelectedColor,
        showAsideContact,
        showDesktopMenu,
      }}
    >
      <AppBackground />
      <Navbar links={links} />
      {showAsideContact && (
        <>
          <VerticalNavbar links={links} />
          <Settings />
          <LanguageSelect />
          <Contact type="aside" />
        </>
      )}
      <div className={styles.appWrapper}>
        <Header />
        <About />
        <Skills />
        <Work />
        {!showAsideContact && <Contact type="desktop" />}
      </div>
    </AppContext.Provider>
  );
};

export default App;
