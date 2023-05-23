import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {BsEnvelope} from 'react-icons/bs'
import {RiFacebookFill, RiGithubFill, RiLinkedinFill, RiRouteLine} from 'react-icons/ri';

import {images} from "../../constants";
import styles from "./Contact.module.scss";

export const Contact = ({links}) => {
    const {t} = useTranslation('global')
    const [showResumeButtons, setShowResumeButtons] = useState(false)

    return (
        <div className={styles.contact}>
            <div className={styles.header}>
                <h2>Michał Stępień</h2>
                <p className={styles.subheader}>Junior web developer</p>
            </div>
            <img className={styles.img} src={images.about01} alt="profile_bg"/>
            <div className={styles.infoContainer}>
                <div className={`${styles.infoSection} ${styles.locationSection}`}>
                    <div>
                        <p>Lokalizacja: Poznań</p>
                        <p className={styles.textSecondary}>z możliwością relokacji</p>
                    </div>
                    <div className={styles.locationIcon}>
                        <RiRouteLine/>
                    </div>
                </div>
                <div className={styles.infoSection}>
                    <RiLinkedinFill className={styles.socialIcon}/>
                    <RiGithubFill className={styles.socialIcon}/>
                    <RiFacebookFill className={styles.socialIcon}/>
                </div>
                <div className={`${styles.infoSection} ${styles.ctaSection}`}>
                    <div className={styles.buttonResume} onMouseEnter={() => setShowResumeButtons(true)}
                         onMouseLeave={() => setShowResumeButtons(false)}>
                        {!showResumeButtons && <div className={styles.buttonDownload}>Resume</div>}
                        {showResumeButtons && (
                            <>
                                <button className={styles.buttonDownload}>polish</button>
                                <button className={styles.buttonDownload}>english</button>
                            </>
                        )}
                    </div>
                    <button className={styles.buttonHire}><BsEnvelope/> Ask me anything!</button>
                </div>
            </div>
            <footer className={styles.footer}>© 2023 Michał Stępień. All Rights Reserved</footer>
        </div>
    );
};
