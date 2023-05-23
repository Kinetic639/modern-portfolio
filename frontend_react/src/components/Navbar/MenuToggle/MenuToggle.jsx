import React from "react";
import styles from "./MenuToggle.module.scss";

export const MenuToggle = ({expanded, toggleNavigation}) => {

    return (
        <div
            className={`${styles.menuToggle} ${expanded ? styles.show : ""}`} onClick={toggleNavigation}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};
