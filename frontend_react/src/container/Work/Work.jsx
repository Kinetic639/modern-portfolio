import React from "react";
import {AppWrap} from "../../wrapper";
import styles from "./Work.module.scss"
import {FiGithub} from "react-icons/fi"
import {GoLinkExternal} from "react-icons/go"

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

    return (
        <section>
            <div className={styles.projectCards}>
                {projects.map((project, index) => (
                    <div className={`${styles.card} ${index % 2 !== 0 ? styles.cardReversed : ''} `}>
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
                            <div className={styles.techStack}>{project.techStack.map(item => <span>{item}</span>)}</div>
                            <div className={styles.links}>
                                <FiGithub/>
                                <GoLinkExternal/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AppWrap(Work, "work");
