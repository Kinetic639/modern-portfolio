import React from "react";
import "./MenuCard.scss";
import {motion} from "framer-motion";

export const MenuCard = () => {


    return (
        <motion.div className="card-wrapper" initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: .8}}>
            <div className="card-section">
                <h3 className="section-title">Loaction</h3>
                <p className="section-text">Poznań, Poland</p>
            </div>
            <div className="card-section">
                <h3 className="section-title">Socials</h3>
                <p className="section-text">Lorem ipsum dolor.</p>
            </div>
            <div className="card-section">
                <h3 className="section-title">Resume</h3>
                <div>
                    <button>PL</button>
                    <button>EN</button>
                </div>
            </div>
            <div className="card-section">
                <button>hire me!</button>
            </div>

        </motion.div>
    );
};
