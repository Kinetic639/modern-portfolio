import React, {useContext, useEffect, useState} from "react";
import "./ColorSelect.scss";
import {motion} from "framer-motion";
import {AppContext} from "../../../App";
import {ThemeSelect} from "../ThemeSelect/ThemeSelect";
import {RxGear} from 'react-icons/rx'

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


    const changeColor = (color) => {
        changeSelectedColor(color)
    };
    return (
        <motion.div onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}

                    className="color-select">
            {isOpen && (
                <motion.div className='other-colors'
                            variants={container}
                            initial="hidden"
                            animate="visible"
                >
                    {colors.map(color => (
                        <motion.button
                            className={`color-button ${color === selectedColor ? 'color-button--active' : 'color-button--pallet'}  color-button--${color}`}
                            onClick={() => changeColor(color)}/>
                    ))}

                    <ThemeSelect/>
                </motion.div>)
            }
            <motion.div className="settings-icon__container">
                <motion.span className="settings-icon" animate={{rotate: 360}}
                             transition={spinTransition}><RxGear/></motion.span>
            </motion.div>
        </motion.div>
    );
};
