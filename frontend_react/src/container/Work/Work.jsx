import React from "react";
import {AppWrap} from "../../wrapper";
import styles from "./Work.module.scss"
import {FiGithub} from "react-icons/fi"
import {GoLinkExternal} from "react-icons/go"
import {AiOutlineFolderOpen} from "react-icons/ai"

import {images} from "../../constants";

const Work = () => {

    const projects = [
        {
            name: 'trenujemy.pl - panel admina',
            link: null,
            live: null,
            images: ['about01', 'about02'],
            techStack: ['React', 'Recoil', 'React Test Library', 'Sass', 'Express']
        },
        {
            name: 'trenujemy.pl - aplikacja',
            link: "https://trenujemy.pl",
            live: null,
            images: ['about01', 'about02'],
            techStack: ['Vue', 'VueX', 'Sass', 'Express']
        },
        {
            name: 'trenujemy.pl - aplikacja',
            link: "https://trenujemy.pl",
            live: null,
            images: ['about01', 'about02'],
            techStack: ['Vue', 'VueX', 'Sass', 'Express']
        },
        {
            name: 'trenujemy.pl - aplikacja',
            link: "https://trenujemy.pl",
            live: null,
            images: ['about01', 'about02'],
            techStack: ['Vue', 'VueX', 'Sass', 'Express']
        }
    ]
    const smallProjects = [{
        name: 'trenujemy.pl - panel admina',
        link: null,
        live: null,
        images: ['about01', 'about02'],
        techStack: ['React', 'Recoil', 'Sass', 'Express']
    },
        {
            name: 'trenujemy.pl ',
            link: "https://trenujemy.pl",
            live: null,
            images: ['about01', 'about02'],
            techStack: ['Vue', 'VueX', 'Sass', 'Express']
        },
        {
            name: 'trenujemy.pl - aplikacja',
            link: "https://trenujemy.pl",
            live: null,
            images: ['about01', 'about02'],
            techStack: ['Vue', 'VueX', 'Sass', 'Express']
        },
        {
            name: 'trenujemy.pl - aplikacja',
            link: "https://trenujemy.pl",
            live: null,
            images: ['about01', 'about02'],
            techStack: ['Vue', 'VueX', 'Sass', 'Express']
        },
        {
            name: 'trenujemy.pl - aplikacja',
            link: "https://trenujemy.pl",
            live: null,
            images: ['about01', 'about02'],
            techStack: ['Vue', 'VueX', 'Sass', 'Express']
        },
        {
            name: 'trenujemy.pl - aplikacja',
            link: "https://trenujemy.pl",
            live: null,
            images: ['about01', 'about02'],
            techStack: ['Vue', 'VueX', 'Sass', 'Express']
        },
        {
            name: 'trenujemy.pl - aplikacja',
            link: "https://trenujemy.pl",
            live: null,
            images: ['about01', 'about02'],
            techStack: ['Vue', 'VueX', 'Sass', 'Express']
        },
        {
            name: 'trenujemy.pl ',
            link: "https://trenujemy.pl",
            live: null,
            images: ['about01', 'about02'],
            techStack: ['Vue', 'VueX', 'Sass', 'Express']
        }]

    return (
        <section className={styles.work}>
            <div className={styles.projectCards}>
                {projects.map((project, index) => (
                    <div key={index} className={`${styles.card} ${index % 2 !== 0 ? styles.cardReversed : ''} `}>
                        <div className={styles.imageContainer}>
                            <img className={styles.image} src={images.about01} alt=""/>
                        </div>
                        <div
                            className={`${styles.descriptionContainer} ${index % 2 !== 0 ? styles.descriptionContainerAlternative : ''} `}>
                            <div className={styles.title}>{project.name}</div>
                            <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.
                                Architecto eligendi excepturi
                                magnam nisi nostrum. Cum doloribus quasi veniam voluptas. Est.
                            </div>
                            <div className={styles.techStack}>{project.techStack.map(item => <span
                                key={item}>{item}</span>)}</div>
                            <div className={styles.links}>
                                <FiGithub/>
                                <GoLinkExternal/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.projectWrapper} id='project-folder'>
                <a href='#project-folder'>Other projects worth mentioning</a>
                <div className={styles.folderContainer}>
                    {smallProjects.map((project, index) => (
                        <div key={index} className={styles.projectFolder}>
                            <div className={styles.folderHeader}>
                                <AiOutlineFolderOpen className={styles.folderIcon}/>
                                <div>
                                    <FiGithub/>
                                    <GoLinkExternal/>
                                </div>
                            </div>
                            <p className={styles.folderName}>{project.name}</p>
                            <p className={styles.folderDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Accusamus aut consequuntur corporis
                                eaque eligendi excepturi, minus qui recusandae vel velit. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Doloribus, facere!</p>
                            <ul className={styles.stackList}>
                                {project.techStack.map(item => <li key={item} className={styles.stackItem}>{item}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AppWrap(Work, "work");
