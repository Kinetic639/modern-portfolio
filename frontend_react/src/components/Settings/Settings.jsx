import React from "react";
import "./Settings.scss";
import {LanguageSelect} from "./LanguageSelect/LanguageSelect";
import {ColorSelect} from "./ColorSelect/ColorSelect";

export const Settings = () => {
    return (
        <div className="settings-container">
            <LanguageSelect/>
            <ColorSelect/>
        </div>
    );
};
