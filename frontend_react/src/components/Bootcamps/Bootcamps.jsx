import React, {useState} from "react";
import "./Bootcamps.scss";
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
        },
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
        <div className="bootcamps-container">
            <div className="bootcamps-menu">
                {bootcampsList.map((bootcamp, index) => (
                    <button
                        key={index}
                        className={`bootcamps-menu-button ${activeLink === index ? "bootcamps-menu-button--active" : ''}`}
                        onClick={() => handleLinkClick(index)}>{bootcamp.name}</button>
                ))}
                <div className="indicator" style={indicatorStyle}></div>
            </div>
            <div className="about__experience-item">
                <div className="about__experience-subheader">
                    <p className="about__experience-title">{bootcampsList[activeLink].title} <a
                        className="about__experience-link"
                        href={bootcampsList[activeLink].link} target="_blank"
                        rel="noreferrer">@ {bootcampsList[activeLink].name}</a>
                    </p>
                    <p className="about__experience-subtitle">{bootcampsList[activeLink].date}</p>
                </div>
                <p className="about__bootcamp-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    numquam possimus quidem veniam voluptas.
                    Adipisci aspernatur natus nesciunt numquam sed. Dolorem dolores dolorum et laborum maiores quia
                    rerum soluta tempora.</p>
            </div>
        </div>
    );
};
