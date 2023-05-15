import React, {createContext, useEffect, useState} from "react";
import {GridLoader} from "react-spinners";

import "./App.scss";
import Header from "./container/Header/Header";
import About from "./container/About/About";
import Skills from "./container/Skills/Skills";
import Work from "./container/Work/Work";
import {Navbar} from "./components";
import {Settings} from "./components/Settings/Settings";
import {VerticalNavbar} from "./components";
import {AiOutlineHome} from "react-icons/ai";
import {RxPerson} from "react-icons/rx";
import {IoBriefcaseOutline, IoFileTrayStackedOutline} from "react-icons/io5";
import {AiOutlineMessage} from "react-icons/ai";

export const AppContext = createContext(null);

const App = () => {
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState("light");
    const [activeSection, setActiveSection] = useState("home");
    const [selectedColor, setSelectedColor] = useState("green");
    const links = [
        {id: 0, label: "home", icon: AiOutlineHome},
        {id: 1, label: "about", icon: RxPerson},
        {id: 2, label: "skills", icon: IoFileTrayStackedOutline},
        {id: 3, label: "work", icon: IoBriefcaseOutline},
        {id: 4, label: "contact", icon: AiOutlineMessage},
    ];

    useEffect(() => {
        const handleScroll = () => {
            setTimeout(() => {
                const sectionIds = links.map((link) => link.label);
                const visibleSections = sectionIds.reduce((sections, id) => {
                    const sectionElement = document.getElementById(id);
                    if (sectionElement) {
                        const rect = sectionElement.getBoundingClientRect();
                        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
                        if (visibleHeight > 0) {
                            sections.push({id, visibleHeight});
                        }
                    }
                    return sections;
                }, []);

                const sortedSections = visibleSections.sort((a, b) => b.visibleHeight - a.visibleHeight);

                const currentSection = sortedSections.length > 0 ? sortedSections[0].id : null;

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
        const colors = ['orange', 'yellow', 'blue', 'red', 'purple', 'green', 'pink'];
        colors.forEach((color) => {
            document.body.classList.remove(color);
        });

        document.body.classList.add(color);
        setSelectedColor(color)
    };


    const changeActiveSection = (section) => {
        setActiveSection(section);
    };

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false);
        };

        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    return (
        <>
            {loading ? (
                <GridLoader className="spinner" color="#27e98b"/>
            ) : (
                <AppContext.Provider
                    value={{theme, toggleTheme, activeSection, changeActiveSection, selectedColor, changeSelectedColor}}
                >
                    <>
                        <VerticalNavbar links={links}/>
                        <Navbar links={links}/>
                        <Settings/>
                        <div className="app-wrapper">
                            <Header/>
                            <About/>
                            <Skills/>
                            <Work/>
                        </div>
                    </>
                </AppContext.Provider>
            )}
        </>
    );
};

export default App;
