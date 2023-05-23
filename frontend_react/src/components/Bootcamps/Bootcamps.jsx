import React, {useState} from "react";
import styles from "./Bootcamps.module.scss";
import {VscDebugBreakpointFunction} from "react-icons/vsc";

export const Bootcamps = () => {
    const bootcampsList = [
        {
            name: 'MegaK',
            title: 'Mega kurs javascriptu',
            link: 'https://www.megak.pl/',
            date: '2022'
        },
        {
            name: 'YouCode',
            title: 'Front end od podstaw',
            link: 'https://youcode.pl/',
            date: '2021-2022'
        },
        {
            name: 'CodersCamp',
            title: 'Kurs front endu',
            link: 'https://www.coderscamp.edu.pl/',
            date: '2021'
        },
        {
            name: 'CODE:ME',
            title: 'React + javascript od podstaw',
            link: 'https://codeme.pl/',
            date: '2020'
        }
    ]
    const [activeLink, setActiveLink] = useState(1);

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    const indicatorStyle = {

        transform: `translateY(${(activeLink + 1) * 49}px)`,
        transition: 'transform 0.3s ease',
    };
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                {bootcampsList.map((bootcamp, index) => (
                    <button
                        key={index}
                        className={`${styles['menuButton']} ${activeLink === index ? styles['menuButtonActive'] : ''}`}
                        onClick={() => handleLinkClick(index)}>{bootcamp.name}</button>
                ))}
                <button
                    className={`${styles['menuButton']} ${activeLink === bootcampsList.length ? styles['menuButtonActive'] : ''}`}
                    onClick={() => handleLinkClick(bootcampsList.length)}>Others
                </button>
                <div className={styles.indicator} style={indicatorStyle}></div>
            </div>
            {activeLink < bootcampsList.length ? <div className={styles.bootcamp}>
                <div className={styles.header}>
                    <p>{bootcampsList[activeLink].title} <a
                        className={styles.link}
                        href={bootcampsList[activeLink].link} target="_blank"
                        rel="noreferrer">@ {bootcampsList[activeLink].name}</a>
                    </p>
                    <p className={styles.subHeader}>{bootcampsList[activeLink].date}</p>
                </div>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    numquam possimus quidem veniam voluptas.
                    Adipisci aspernatur natus nesciunt numquam sed. Dolorem dolores dolorum et laborum maiores quia
                    rerum soluta tempora.</p>
            </div> : (

                <div>
                    <p>
                        Ukończyłem również liczne kursy online takich autorów jak:
                    </p>
                    <ul className={styles.techstackColumn}>
                        <li className={styles.duty}><VscDebugBreakpointFunction
                            className={styles.dutyPoint}/> Brad Traversy
                        </li>
                        <li className={styles.duty}><VscDebugBreakpointFunction
                            className={styles.dutyPoint}/>
                            Maximilian Schwarzmuller
                        </li>
                        <li className={styles.duty}><VscDebugBreakpointFunction
                            className={styles.dutyPoint}/> Andrew Mead
                        </li>
                        <li className={styles.duty}><VscDebugBreakpointFunction
                            className={styles.dutyPoint}/>
                            Jonas Schmedtmann
                        </li>
                        <li className={styles.duty}><VscDebugBreakpointFunction
                            className={styles.dutyPoint}/> Bartłomiej Borowczyk (Samuraj
                            Programowania)
                        </li>
                        <li className={styles.duty}><VscDebugBreakpointFunction
                            className={styles.dutyPoint}/>
                            Krzysztof Dąbrowski - Youcode
                        </li>
                        <li className={styles.duty}><VscDebugBreakpointFunction
                            className={styles.dutyPoint}/> Adam Romański (hello roman)
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};
