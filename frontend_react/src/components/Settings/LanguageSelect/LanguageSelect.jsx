import React from "react";
import "./LanguageSelect.scss";
import {useTranslation} from "react-i18next";

export const LanguageSelect = () => {
    const {i18n} = useTranslation()

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'pl' ? 'en' :
            'pl').then(() => {
        })
    }
    return (
        <button className="settings-button settings-button--lang" onClick={changeLanguage}>
            {i18n.language === 'pl' ? 'PL' :
                'EN'}
        </button>
    );
};
