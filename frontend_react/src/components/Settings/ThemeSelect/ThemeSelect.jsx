import React, {useContext} from "react";
import "./ThemeSelect.scss";
import {AppContext} from "../../../App";
import {CgSun} from "react-icons/cg"
import {FaMoon} from "react-icons/fa"
import {Tooltip} from "react-tooltip";

export const ThemeSelect = () => {
    const themeContext = useContext(AppContext);
    const {theme, toggleTheme} = themeContext;

    const changeTheme = (label) => {
        toggleTheme()
    };
    return (<>
            <button className="settings-button settings-button--theme" onClick={changeTheme}>
                {theme === 'light' ? <CgSun/> :
                    <FaMoon/>}
                <Tooltip className='example' anchorSelect=".settings-button--theme" place="top">
                    zmień widok
                </Tooltip>
            </button>
        </>
    );
};
