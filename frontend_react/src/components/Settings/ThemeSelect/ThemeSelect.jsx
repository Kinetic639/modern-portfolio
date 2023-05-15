import React, {useContext} from "react";
import "./ThemeSelect.scss";
import {AppContext} from "../../../App";
import {CgSun} from "react-icons/cg"
import {FaMoon} from "react-icons/fa"

export const ThemeSelect = () => {
    const themeContext = useContext(AppContext);
    const {theme, toggleTheme} = themeContext;

    const changeTheme = (label) => {
        toggleTheme()
    };
    return (
        <button className="settings-button" onClick={changeTheme}>
            {theme === 'light' ? <CgSun/> :
                <FaMoon/>}
        </button>
    );
};
