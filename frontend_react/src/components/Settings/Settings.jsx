import React from "react";
import "./Settings.scss";
import {ThemeSelect} from "./ThemeSelect/ThemeSelect";
import {LanguageSelect} from "./LanguageSelect/LanguageSelect";
import {ColorSelect} from "./ColorSelect/ColorSelect";

export const Settings = () => {
    return (
        <div className="settings-container">
            <ThemeSelect/>
            <LanguageSelect/>
            <ColorSelect/>
        </div>
    );
};
