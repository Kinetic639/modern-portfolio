import React from "react";

export const AppWrap = (Component, idName, classNames) =>
    function HOC() {
        return (
            <section id={idName} className={`app__container ${classNames}`}>
                <Component/>
            </section>
        );
    };
