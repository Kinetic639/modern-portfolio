import React from "react";
import {useTranslation} from "react-i18next";
import {Tooltip} from "react-tooltip";

import styles from "./LanguageSelect.module.scss";

export const LanguageSelect = () => {
    const {t, i18n} = useTranslation('global')

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'pl' ? 'en' :
            'pl').then(() => {
        })
    }
    return (<div style={{position: 'relative'}}>
            <button className={`${styles.buttonLang} button--lang`} onClick={changeLanguage}>
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
