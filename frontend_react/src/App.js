import React, {createContext, useEffect, useState} from "react";
import {GridLoader} from "react-spinners";

import "./App.scss";
import Header from "./container/Header/Header";
import {Navbar} from "./components";
import About from "./container/About/About";
import {VerticalNavbar} from "./components/VarticalNavbar/VerticalNavbar";
import Skills from "./container/Skills/Skills";
import {AiOutlineHome} from "react-icons/ai";
import {RxPerson} from "react-icons/rx";
import {IoBriefcaseOutline, IoFileTrayStackedOutline} from "react-icons/io5";
import {HiOutlineEnvelope} from "react-icons/hi2";
import Work from "./container/Work/Work";

export const AppContext = createContext(null);

const App = () => {
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState("light");
    const [activeSection, setActiveSection] = useState("home");
    const links = [
        {id: 0, label: "home", icon: AiOutlineHome},
        {id: 1, label: "about", icon: RxPerson},
        {id: 2, label: "skills", icon: IoFileTrayStackedOutline},
        {id: 3, label: "work", icon: IoBriefcaseOutline},
        {id: 4, label: "contact", icon: HiOutlineEnvelope},
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
            }, 800);
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
                    value={{theme, toggleTheme, activeSection, changeActiveSection}}
                >
                    <>
                        <VerticalNavbar links={links}/>
                        <div className="app-wrapper">
                            <Navbar links={links}/>
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
