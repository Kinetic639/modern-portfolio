import React, {useContext, useEffect, useState} from "react";
import "./ColorSelect.scss";
import {motion} from "framer-motion";
import {AppContext} from "../../../App";

const container = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {delay: .2},
    },
};

const child = {
    visible: {
        opacity: 1,
        y: 0,

    },
    hidden: {
        opacity: 0,
        y: 2,
    },
};


export const ColorSelect = () => {
    const themeContext = useContext(AppContext);
    const {selectedColor, changeSelectedColor} = themeContext;
    const [isOpen, setIsOpen] = useState(false)
    const [otherColors, setOtherColors] = useState([])

    useEffect(() => {
        const colors = ['orange', 'yellow', 'blue', 'red', 'purple', 'green', 'pink'];
        setOtherColors(colors.filter(c => c !== selectedColor))
    }, [selectedColor])

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
                    {otherColors.map(color => (
                        <motion.button variants={child}
                                       className={`color-button color-button--pallet color-button--${color}`}
                                       onClick={() => changeColor(color)}/>
                    ))}
                </motion.div>)
            }
            <div className={`color-button color-button--active color-button--${selectedColor}`}/>
        </motion.div>
    );
};
