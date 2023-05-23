import React from "react";
import {useTranslation} from "react-i18next";
import {AiOutlineHome, AiOutlineMessage} from "react-icons/ai";
import {RxPerson} from "react-icons/rx";
import {IoBriefcaseOutline, IoFileTrayStackedOutline} from "react-icons/io5";
import styles from "./AppWrap.module.scss"

export const AppWrap = (Component, idName) =>
    function HOC() {
        const {t} = useTranslation('global')
        const links = [
            {id: 0, label: "home", icon: AiOutlineHome},
            {id: 1, label: "about", icon: RxPerson},
            {id: 2, label: "skills", icon: IoFileTrayStackedOutline},
            {id: 3, label: "work", icon: IoBriefcaseOutline},
            {id: 4, label: "contact", icon: AiOutlineMessage},
        ];
        const link = links.find(link => link.label === idName);
        return (
            <section className={styles.section} id={idName}>
                <div className={styles.header}>
                    <link.icon className={styles.icon}/>
                    <a href={`#${idName}`} className={styles.title}>{t(`nav.sections.${idName}`)}</a>
                </div>
                <Component/>
            </section>
        );
    };
