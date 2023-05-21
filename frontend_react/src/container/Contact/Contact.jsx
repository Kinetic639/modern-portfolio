import React, {useState} from "react";
import "./Contact.scss";
import {useTranslation} from "react-i18next";
import {BsEnvelope} from 'react-icons/bs'
import {RiUserLocationLine} from 'react-icons/ri'
import {RiFacebookFill, RiGithubFill, RiLinkedinFill, RiRouteLine} from 'react-icons/ri';
import {motion} from 'framer-motion';

import {images} from "../../constants";

export const Contact = ({links}) => {
    const {t} = useTranslation('global')
    const [showResumeButtons, setShowResumeButtons] = useState(false)

    return (
        <div className="contact">
            <div className="contact__header">
                <h2>Michał Stępień</h2>
                <p className="contact__subtitle">Junior web developer</p>
            </div>
            <img className="contact__img" src={images.about01} alt="profile_bg"/>
            <div className="contact__data">
                <div className="contact__data-section contact__data-section--location">
                    <div>
                        <p>Lokalizacja: Poznań</p>
                        <p className="contact__relocation">z możliwością relokacji</p>
                    </div>
                    <div className="contact__relocation-icon-container">
                        <RiRouteLine className="contact__relocation-icon"/>
                    </div>
                </div>
                <div className="contact__data-section">
                    <div className="contact__social-icons">
                        <RiLinkedinFill className="contact__social-icon"/>
                        <RiGithubFill className="contact__social-icon"/>
                        <RiFacebookFill className="contact__social-icon"/>
                    </div>
                </div>
                <div className="contact__data-section">

                    <div className="contact__btn-resume" onMouseEnter={() => setShowResumeButtons(true)}
                         onMouseLeave={() => setShowResumeButtons(false)}>
                        {!showResumeButtons && <div className="contact__btn-download">Resume</div>}
                        {showResumeButtons && (
                            <>
                                <button className="contact__btn-download">polish</button>
                                <button className="contact__btn-download">english</button>
                            </>
                        )}
                    </div>
                    <button className="contact__btn-hire"><BsEnvelope/> Ask me anything!</button>
                </div>

            </div>
            <footer className="contact__footer">© 2023 Michał Stępień. All Rights Reserved</footer>
        </div>
    );
};
