import React from "react";
import {AppWrap} from "../../wrapper";
import {useTranslation} from "react-i18next";

import styles from "./Header.module.scss";

const Header = () => {
    const {t} = useTranslation('global')

    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <p className={styles.intro}>{t('sections.home.header.p1')}</p>
                <h1 className={styles.title}>Michał <span className={styles.titleSecondary}>Stępień</span></h1>
                <h1 className={styles.subtitle}>Junior Web Developer</h1>
                <div className={styles.description}>
                    <p>{t('sections.home.header.p2')}</p>
                    <p>
                        {t('sections.home.header.p3')}
                        <a className={styles.link}
                           href="#work">{t('sections.home.links.projects')}</a>
                        {t('sections.home.header.p4')}
                        <a className={styles.link}
                           href="#skills">{t('sections.home.links.skills')}</a>
                        {t('sections.home.header.p5')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AppWrap(Header, "home");
