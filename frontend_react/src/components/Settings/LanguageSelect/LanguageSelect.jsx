import React from "react";
import "./LanguageSelect.scss";
import {useTranslation} from "react-i18next";
import {Tooltip} from "react-tooltip";

export const LanguageSelect = () => {
    const {t, i18n} = useTranslation('global')

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'pl' ? 'en' :
            'pl').then(() => {
        })
    }
    return (<div style={{position: 'relative'}}>
            <button className="settings-button settings-button--lang" onClick={changeLanguage}>
                {i18n.language === 'pl' ? 'PL' :
                    'EN'}
            </button>
            <Tooltip className='example' anchorSelect=".settings-button--lang" place="right">
                {t('tooltips.settings.language')}
            </Tooltip>
        </div>
    );
};
