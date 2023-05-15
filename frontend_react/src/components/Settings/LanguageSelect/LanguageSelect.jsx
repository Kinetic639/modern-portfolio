import React, {useContext} from "react";
import "./LanguageSelect.scss";
import {AppContext} from "../../../App";
import {useTranslation} from "react-i18next";

export const LanguageSelect = () => {
    const {t, i18n} = useTranslation()
    const themeContext = useContext(AppContext);
    const {theme, toggleTheme} = themeContext;

    const changeLanguage = (lang) => {
        i18n.changeLanguage(i18n.language === 'pl' ? 'en' :
            'pl')
    }
    return (
        <button className="settings-button settings-button--lang" onClick={changeLanguage}>
            {i18n.language === 'pl' ? 'PL' :
                'EN'}
        </button>
    );
};
