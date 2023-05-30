import React, {useContext} from "react";
import {useTranslation} from "react-i18next";
import {Tooltip} from "react-tooltip";

import styles from "./LanguageSelect.module.scss";
import {AppContext} from "../../../App";

export const LanguageSelect = ({type}) => {
    const themeContext = useContext(AppContext);
    const {showAsideContact} = themeContext;
    const {t, i18n} = useTranslation('global')

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'pl' ? 'en' :
            'pl').then(() => {
        })
    }
    return (<div>
            <button
                className={`${styles.buttonLang} ${showAsideContact ? styles.buttonLangDesktop : ''}  button--lang`}
                onClick={changeLanguage}>
                {i18n.language === 'pl' ? 'PL' :
                    'EN'}
            </button>
            <Tooltip style={{backgroundColor: 'var(--font-secondary)', color: 'var(--font-tooltip)'}}
                     anchorSelect=".settings-button--lang" place="right">
                {t('tooltips.settings.language')}
            </Tooltip>
        </div>
    );
};
