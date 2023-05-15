import React, {useContext} from "react";
import "./ThemeSelect.scss";
import {AppContext} from "../../../App";
import {CgSun} from "react-icons/cg"
import {FaMoon} from "react-icons/fa"
import {Tooltip} from "react-tooltip";
import {useTranslation} from "react-i18next";

export const ThemeSelect = () => {
    const themeContext = useContext(AppContext);
    const {theme, toggleTheme} = themeContext;
    const {t} = useTranslation('global')

    const changeTheme = () => {
        toggleTheme()
    };
    return (<>
            <button className="settings-button settings-button--theme" onClick={changeTheme}>
                {theme === 'light' ? <CgSun/> :
                    <FaMoon/>}
                <Tooltip className='example' anchorSelect=".settings-button--theme" place="top">
                    {t('tooltips.settings.theme')}
                </Tooltip>
            </button>
        </>
    );
};
