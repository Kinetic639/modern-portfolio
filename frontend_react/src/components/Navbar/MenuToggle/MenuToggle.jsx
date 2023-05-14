import React from "react";
import "./MenuToggle.scss";

export const MenuToggle = ({expanded, toggleNavigation}) => {

    return (
        <div className="nav-wrapper">
            <div
                className={`menuToggle ${expanded ? "show" : ""}`} onClick={toggleNavigation}>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>
    );
};
