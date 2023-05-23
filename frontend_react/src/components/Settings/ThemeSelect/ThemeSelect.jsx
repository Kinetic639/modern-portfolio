import React, {useContext} from "react";
import {AppContext} from "../../../App";
import {CgSun} from "react-icons/cg"
import {FaMoon} from "react-icons/fa"
import {Tooltip} from "react-tooltip";
import {useTranslation} from "react-i18next";

import styles from "./ThemeSelect.module.scss";

export const ThemeSelect = () => {
    const themeContext = useContext(AppContext);
    const {theme, toggleTheme} = themeContext;
    const {t} = useTranslation('global')

    const changeTheme = () => {
        toggleTheme()
    };
    return (<>
            <button className={`${styles.buttonTheme} button--theme`} onClick={changeTheme}>
                {theme === 'light' ? <CgSun/> :
                    <FaMoon/>}
                <Tooltip
                    style={{backgroundColor: 'var(--font-secondary)', fontSize: '14px', color: 'var(--font-tooltip)'}}
                    anchorSelect=".button--theme" place="top">
                    {t('tooltips.settings.theme')}
                </Tooltip>
            </button>
        </>
    );
};
