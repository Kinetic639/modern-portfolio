import React, {useContext, useState} from "react";
import "./ColorSelect.scss";
import {motion} from "framer-motion";
import {AppContext} from "../../../App";
import {ThemeSelect} from "../ThemeSelect/ThemeSelect";
import {RxGear} from 'react-icons/rx'
import {Tooltip} from "react-tooltip";
import {useTranslation} from "react-i18next";

const container = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {delay: .2},
    },
};

const spinTransition = {
    repeat: Infinity,
    ease: "linear",
    duration: 10
};

export const ColorSelect = () => {
    const themeContext = useContext(AppContext);
    const {selectedColor, changeSelectedColor} = themeContext;
    const [isOpen, setIsOpen] = useState(false)
    const colors = ['orange', 'yellow', 'blue', 'red', 'purple', 'green', 'pink'];
    const {t} = useTranslation('global')

    const changeColor = (color) => {
        changeSelectedColor(color)
    };
    return (
        <motion.div onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className="color-select">
            <motion.div className="settings-icon__container">
                <motion.span className="settings-icon" animate={{rotate: 360}}
                             transition={spinTransition}><RxGear/></motion.span>
                <Tooltip className='example' anchorSelect=".settings-icon__container" place="top">
                    {t('tooltips.settings.settings')}
                </Tooltip>
            </motion.div>
            {isOpen && (
                <motion.div className='other-colors'
                            variants={container}
                            initial="hidden"
                            animate="visible"
                >
                    <ThemeSelect/>
                    {colors.map(color => (
                        <motion.button
                            key={color}
                            className={`color-button ${color === selectedColor ? 'color-button--active' : 'color-button--pallet'}  color-button--${color}`}
                            onClick={() => changeColor(color)}/>
                    ))}


                </motion.div>)
            }

        </motion.div>
    );
};
