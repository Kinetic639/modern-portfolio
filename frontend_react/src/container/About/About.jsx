import React, {useState, useEffect} from "react";
import {VscDebugBreakpointFunction} from 'react-icons/vsc'
import {client} from "../../client";

import styles from "./About.module.scss";
import {AppWrap} from "../../wrapper";
import {Bootcamps} from "../../components/Bootcamps/Bootcamps";

import {images} from "../../constants"
import {useTranslation} from "react-i18next";

const About = () => {
    const {t} = useTranslation('global')


    return (
        <div className={styles.container}>
            <div className={styles.introduction}>
                <div className={styles.introductionDescription}>
                    <p>
                        {t('sections.about.description.p1')}
                    </p>
                    <p>
                        {t('sections.about.description.p2')}
                    </p>
                    <p>
                        {t('sections.about.description.p3')}
                    </p>
                </div>
                <img className={styles.descriptionImage} src={images.avatar} alt=""/>
            </div>
            <div id="about-experience" className={styles.aboutSection}>
                <a href="#about-experience" className={styles.header}>Where I’ve Worked</a>
                <div>
                    <div className={styles.experienceItem}>
                        <div className={styles.itemHeader}>
                            <p className={styles.itemTitle}>Junior software architect <a
                                className={styles.itemLink}
                                href="https://www.trenujemy.pl"
                                target="_blank"
                                rel="noreferrer">@
                                trenujemy.pl</a>
                            </p>
                            <p className={styles.itemSubtitle}>Wrzesień 2022 - Maj 2023</p>
                        </div>
                        <ul className={styles.duties}>
                            <li className={styles.duty}>
                                <VscDebugBreakpointFunction className={styles.dutyPoint}/>
                                <p className={styles.dutyDescription}>
                                    Tworzenie warstwy front-endowej panelu administratora przy użyciu React.js oraz
                                    Recoil.js.
                                </p>
                            </li>
                            <li className={styles.duty}>
                                <VscDebugBreakpointFunction className={styles.dutyPoint}/>
                                <p className={styles.dutyDescription}>
                                    Przetwarzanie otrzymanych projektów w formacie PSD na interaktywne widoki
                                    użytkownika wykorzystując Vue.js.
                                </p>
                            </li>
                            <li className={styles.duty}>
                                <VscDebugBreakpointFunction className={styles.dutyPoint}/>
                                <p className={styles.dutyDescription}>
                                    Optymalizacja wydajności aplikacji oraz tworzenie testów jednostkowych dla React
                                    przy użyciu React Testing Library.
                                </p>
                            </li>
                            <li className={styles.duty}>
                                <VscDebugBreakpointFunction className={styles.dutyPoint}/>
                                <p className={styles.dutyDescription}>
                                    Utrzymywanie czystego i czytelnego kodu, stosowanie najlepszych praktyk
                                    programistycznych oraz przestrzeganie standardów projektowych.
                                </p>
                            </li>
                            <li className={styles.duty}>
                                <VscDebugBreakpointFunction className={styles.dutyPoint}/>
                                <p className={styles.dutyDescription}>
                                    Współpraca z zespołem i udział w spotkaniach z klientem, aby zrozumieć wymagania
                                    dotyczące interfejsu użytkownika i funkcjonalności aplikacji.
                                </p>
                            </li>
                            <li className={styles.duty}>
                                <VscDebugBreakpointFunction className={styles.dutyPoint}/>
                                <p className={styles.dutyDescription}>
                                    Dokumentowanie wprowadzonych zmian i udokumentowanie postępów w projekcie.
                                </p>
                            </li>
                        </ul>
                        <div>
                            Few technologies I’ve been working with:
                            <div className={styles.techstackListsContainer}>
                                <ul className={styles.techstackColumn}>
                                    <li className={styles.duty}>
                                        <VscDebugBreakpointFunction
                                            className={styles.dutyPoint}/> JavaScript (ES6+)
                                    </li>
                                    <li className={styles.duty}>
                                        <VscDebugBreakpointFunction
                                            className={styles.dutyPoint}/> TypeScript
                                    </li>
                                    <li className={styles.duty}>
                                        <VscDebugBreakpointFunction
                                            className={styles.dutyPoint}/> React
                                    </li>
                                    <li className={styles.duty}>
                                        <VscDebugBreakpointFunction
                                            className={styles.dutyPoint}/> Recoil.js
                                    </li>
                                </ul>
                                <ul className={styles.techstackColumn}>
                                    <li className={styles.duty}>
                                        <VscDebugBreakpointFunction
                                            className={styles.dutyPoint}/>
                                        React Testing Library
                                    </li>
                                    <li className={styles.duty}>
                                        <VscDebugBreakpointFunction
                                            className={styles.dutyPoint}/> Vue
                                    </li>
                                    <li className={styles.duty}>
                                        <VscDebugBreakpointFunction
                                            className={styles.dutyPoint}/> Node.js
                                    </li>
                                    <li className={styles.duty}>
                                        <VscDebugBreakpointFunction
                                            className={styles.dutyPoint}/> GraphQL
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about-courses" className={styles.aboutSection}>
                <a href="#about-courses" className={styles.header}>Bootcamps and courses</a>
                <div className={styles.bootcampsContainer}>
                    <p>
                        Bootcampy, które ukończyłem w celu rozwoju umiejętności programistycznych:
                    </p>
                    <Bootcamps/>
                </div>
            </div>
        </div>
    );
};

export default AppWrap(About, "about");
