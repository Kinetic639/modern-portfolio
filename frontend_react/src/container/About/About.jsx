import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";
import {VscDebugBreakpointFunction} from 'react-icons/vsc'
import {urlFor, client} from "../../client";

import "./About.scss";
import {AppWrap} from "../../wrapper";
import {Bootcamps} from "../../components/Bootcamps/Bootcamps";

const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query).then((data) => {
            setAbouts(data);
        });
    }, []);

    return (
        <div className="about__container">
            <div className="about__introduction">
                <div className="about__description-container">
                    <p className="about__description-paragraph">
                        Przygodę z programowaniem zacząłem od pisania skryptów do arkuszy google spreadsheets w Google
                        App Script (framework javascript'u). Programowanie stało się moją pasją, której poświęcam swoje
                        czas i energię. Decyzja, aby zostać
                        programistą, była naturalnym krokiem w mojej drodze rozwoju. Dzięki temu mogę rozwijać się w tej
                        dziedzinie, pogłębiać moje
                        umiejętności i tworzyć nowe, innowacyjne projekty.
                    </p>
                    <p className="about__description-paragraph">
                        Obecnie mam już prawie roczne doświadczenie komercyjne jako programista, które utwierdziło mnie
                        w
                        przekonaniu, że programowanie to moja pasja na całe życie. Mój obecny projekt dobiegł końca,
                        więc poszukuję nowej pracy, ale widzę to jako okazję do rozwoju i zdobycia nowych umiejętności.
                        Jestem pełen determinacji, aby znaleźć nowe inspirujące środowisko pracy i kontynuować
                        rozwijanie się jako programista, wkładając w projekty całe swoje zaangażowanie i pasję.
                    </p>
                </div>
                <div className="about__description-image">
                    photo
                </div>
            </div>
            <div id="about-experience" className="about__experience">
                <div>
                    <div className="experience-route">
                        <div className="experience-route__dot"></div>
                        <div className="experience-route__route"></div>
                    </div>
                    <div>
                        <a href="#about-experience" className="about__experience-header">Where I’ve Worked</a>
                        <div className="about__experience-item">
                            <div className="about__experience-subheader">
                                <p className="about__experience-title">Junior software architect <a
                                    className="about__experience-link"
                                    href="https://www.trenujemy.pl"
                                    target="_blank"
                                    rel="noreferrer">@
                                    trenujemy.pl</a>
                                </p>
                                <p className="about__experience-subtitle">Wrzesień 2022 - Maj 2023</p>
                            </div>
                            <ul className="about__duties">
                                <li className="about__duty"><VscDebugBreakpointFunction className="duty__point"/>
                                    <p className="about__duty-description">Tworzenie warstwy front-endowej panelu
                                        administratora przy użyciu React.js oraz
                                        Recoil.js.</p>
                                </li>
                                <li className="about__duty"><VscDebugBreakpointFunction className="duty__point"/>
                                    <p className="about__duty-description">
                                        Przetwarzanie otrzymanych projektów w formacie PSD na interaktywne widoki
                                        użytkownika
                                        wykorzystując Vue.js.
                                    </p>
                                </li>
                                <li className="about__duty"><VscDebugBreakpointFunction className="duty__point"/>
                                    <p className="about__duty-description">
                                        Optymalizacja wydajności aplikacji oraz tworzenie testów jednostkowych dla React
                                        przy użyciu
                                        React Testing Library.
                                    </p>
                                </li>
                                <li className="about__duty"><VscDebugBreakpointFunction
                                    className="duty__point"/>
                                    <p className="about__duty-description">
                                        Utrzymywanie czystego
                                        i czytelnego kodu, stosowanie najlepszych praktyk programistycznych oraz
                                        przestrzeganie
                                        standardów projektowych.
                                    </p>
                                </li>
                                <li className="about__duty"><VscDebugBreakpointFunction
                                    className="duty__point"/>
                                    <p className="about__duty-description">Współpraca z
                                        zespołem
                                        i udział w spotkaniach z klientem, aby zrozumieć wymagania dotyczące interfejsu
                                        użytkownika
                                        i funkcjonalności aplikacji.
                                    </p>
                                </li>
                                <li className="about__duty"><VscDebugBreakpointFunction
                                    className="duty__point"/>
                                    <p className="about__duty-description">Dokumentowanie
                                        wprowadzonych zmian i udokumentowanie postępów w projekcie.
                                    </p>
                                </li>
                            </ul>
                            <div className="about__techstack-container">
                                Few technologies I’ve been working with:
                                <div className="about__techstack-wrapper">
                                    <ul className="about__techstack-column">
                                        <li className="about__duty about__duty--small"><VscDebugBreakpointFunction
                                            className="duty__point duty__point--small"/> JavaScript (ES6+)
                                        </li>
                                        <li className="about__duty about__duty--small"><VscDebugBreakpointFunction
                                            className="duty__point  duty__point--small"/> TypeScript
                                        </li>
                                        <li className="about__duty about__duty--small"><VscDebugBreakpointFunction
                                            className="duty__point duty__point--small"/> React
                                        </li>
                                        <li className="about__duty about__duty--small"><VscDebugBreakpointFunction
                                            className="duty__point duty__point--small"/> Recoil.js
                                        </li>
                                    </ul>
                                    <ul className="about__techstack-column">
                                        <li className="about__duty about__duty--small"><VscDebugBreakpointFunction
                                            className="duty__point duty__point--small"/>
                                            React Testing Library
                                        </li>
                                        <li className="about__duty about__duty--small"><VscDebugBreakpointFunction
                                            className="duty__point duty__point--small"/> Vue
                                        </li>
                                        <li className="about__duty about__duty--small"><VscDebugBreakpointFunction
                                            className="duty__point duty__point--small"/> Node.js
                                        </li>
                                        <li className="about__duty about__duty--small"><VscDebugBreakpointFunction
                                            className="duty__point duty__point--small"/> GraphQL
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about-courses" className="about__courses-container">
                <a href="#about-courses" className="about__experience-header">Bootcamps and courses</a>
                <div>
                    <p className="about__description-paragraph">
                        Bootcampy, które ukończyłem w celu rozwoju umiejętności programistycznych:
                    </p>
                    <Bootcamps/>
                </div>
                <div>
                    Ukończyłem również liczne kursy online takich autorów jak:
                    <div className="about__techstack-wrapper about__techstack-wrapper--indented">
                        <ul className="about__techstack-column">
                            <li className="about__duty about__duty--small"><VscDebugBreakpointFunction
                                className="duty__point"/> Brad Traversy
                            </li>
                            <li className="about__duty about__duty--small"><VscDebugBreakpointFunction
                                className="duty__point"/>
                                Maximilian Schwarzmuller
                            </li>
                            <li className="about__duty about__duty--small"><VscDebugBreakpointFunction
                                className="duty__point"/> Andrew Mead
                            </li>
                            <li className="about__duty about__duty--small"><VscDebugBreakpointFunction
                                className="duty__point"/>
                                Jonas Schmedtmann
                            </li>
                        </ul>
                        <ul className="about__techstack-column">
                            <li className="about__duty about__duty--small"><VscDebugBreakpointFunction
                                className="duty__point"/> Bartłomiej Borowczyk (Samuraj
                                Programowania)
                            </li>
                            <li className="about__duty about__duty--small"><VscDebugBreakpointFunction
                                className="duty__point"/>
                                Krzysztof Dąbrowski - Youcode
                            </li>
                            <li className="about__duty about__duty--small"><VscDebugBreakpointFunction
                                className="duty__point"/> Adam Romański (hello roman)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppWrap(About, "about");
