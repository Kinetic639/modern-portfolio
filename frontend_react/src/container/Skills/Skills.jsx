import React from "react";
import {AppWrap} from "../../wrapper";
import {TbKeyframes} from "react-icons/tb";
import {VscTools} from "react-icons/vsc";
import {AiOutlineDatabase} from "react-icons/ai";
import {BsDisplay} from "react-icons/bs";

import styles from "./Skills.module.scss"

const Skills = () => {

    const skills = [
        {
            name: 'Frontend',
            stack: ['HTML5', 'Javascript / Typescript', 'SASS / SCSS', "React + Recoil / Redux", 'Vue', 'Material UI'],
            icon: BsDisplay
        },
        {
            name: 'Backend',
            stack: ['NodeJs', 'Express', 'MySQL', 'GraphQL', 'MongoDB', 'Mongoose'],
            icon: AiOutlineDatabase
        },
        {
            name: 'Design',
            stack: ['Figma', 'Adobe XD', 'Adobe Illustrator', 'Adobe Photoshop'],
            icon: TbKeyframes
        },
        {
            name: 'Devtools',
            stack: ['Git', 'Heroku', 'phpMyAdmin', 'Postman', 'Compass'],
            icon: VscTools
        },
    ]

    return (
        <section className={styles.container}>
            {skills.map(section => (
                <div className={styles.stackSection}>
                    <p className={styles.stackHeader}>
                        <section.icon className={styles.icon}/>
                        <span>{section.name}</span></p>
                    <ul className={styles.stackList}>
                        {section.stack.map(item => (
                            <li className={styles.stackListItem}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default AppWrap(Skills, "skills");
