import React from "react";
import "./Header.scss";
import {AppWrap} from "../../wrapper";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";

const Header = () => {
    const {t} = useTranslation('global')

    return (
        <div className="section__content section__content--header">
            <div className='home__header-container'>
                <p className='text-secondary'>{t('sections.home.header.p1')}</p>
                <h1 className='home__title'>Michał <span className='text-secondary'>Stępień</span></h1>
                <div className='home__subtitle'>
                    <p className='home__paragraph'>{t('sections.home.header.p2')}</p>
                    <p className='home__paragraph'>
                        {t('sections.home.header.p3')}
                        <a className='home__link'
                           href="#work">{t('sections.home.links.projects')}</a>
                        {t('sections.home.header.p4')}
                        <a className='home__link'
                           href="#skills">{t('sections.home.links.skills')}</a>
                        {t('sections.home.header.p5')}
                    </p>
                </div>
            </div>
            {/*<motion.div*/}
            {/*    whileInView={{x: [-100, 0], opacity: [0, 1]}}*/}
            {/*    transition={{duration: 0.5}}*/}
            {/*    className="app__header-info"*/}
            {/*>*/}
            {/*    <div className="app__header-badge">*/}
            {/*        <div className="badge-cmp app__flex">*/}
            {/*            <span>👋</span>*/}
            {/*            <div style={{marginLeft: 20}}>*/}
            {/*                <p className="p-text">{t('text')}</p>*/}
            {/*                <h1 className="head-text">Michał</h1>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div className="tag-cmp app__flex">*/}
            {/*            <p className="p-text">Web Developer</p>*/}
            {/*            <p className="p-text">Freelancer</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</motion.div>*/}

            {/*<motion.div*/}
            {/*    whileInView={{opacity: [0, 1]}}*/}
            {/*    transition={{duration: 0.5, delayChildren: 0.5}}*/}
            {/*    className="app__header-img"*/}
            {/*>*/}
            {/*    <img src={images.profile} alt="profile_bg"/>*/}
            {/*    <motion.img*/}
            {/*        whileInView={{scale: [0, 1]}}*/}
            {/*        transition={{duration: 1, ease: "easeInOut"}}*/}
            {/*        src={images.circle}*/}
            {/*        alt="profile_circle"*/}
            {/*        className="overlay_circle"*/}
            {/*    />*/}
            {/*</motion.div>*/}

            {/*<motion.div*/}
            {/*    variants={scaleVariants}*/}
            {/*    whileInView={scaleVariants.whileInView}*/}
            {/*    className="app__header-circles"*/}
            {/*>*/}
            {/*    {[images.flutter, images.redux, images.sass].map((circle, index) => (*/}
            {/*        <div className="circle-cmp app__flex" key={`circle-${index}`}>*/}
            {/*            <img src={circle} alt="profile_bg"/>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</motion.div>*/}
        </div>
    );
};

export default AppWrap(Header, "home");
