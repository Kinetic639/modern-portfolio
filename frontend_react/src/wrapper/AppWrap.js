import React from "react";
import {useTranslation} from "react-i18next";
import {AiOutlineHome, AiOutlineMessage} from "react-icons/ai";
import {RxPerson} from "react-icons/rx";
import {IoBriefcaseOutline, IoFileTrayStackedOutline} from "react-icons/io5";

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
            <section className="section section--header" id={idName}>
                <div className="section-header">
                    <link.icon className="section-header__icon"/>
                    <a href={`#${idName}`} className="section-header__title">{t(`nav.sections.${idName}`)}</a>
                </div>
                <Component/>
            </section>
        );
    };
