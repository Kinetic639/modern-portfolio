import React from "react";
import "./Settings.scss";
import {ColorSelect} from "./ColorSelect/ColorSelect";

export const Settings = () => {
    return (
        <div className="settings-container">
            <ColorSelect/>
        </div>
    );
};
