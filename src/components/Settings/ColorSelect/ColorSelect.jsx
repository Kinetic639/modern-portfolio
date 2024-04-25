import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../../../App";

import styles from "./ColorSelect.module.scss";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: { delay: 0.2 },
  },
};

export const ColorSelect = () => {
  const themeContext = useContext(AppContext);
  const { selectedColor, changeSelectedColor, showAsideContact } = themeContext;
  const colors = ["orange", "yellow", "blue", "red", "purple", "green", "pink"];

  const changeColor = (color) => {
    changeSelectedColor(color);
  };
  return (
    <motion.div
      className={`${styles.colorSelect} ${showAsideContact ? styles.colorSelectDesktop : ""}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {colors.map((color) => (
        <motion.button
          key={color}
          className={`${styles.colorButton} ${color === selectedColor ? styles.colorButtonActive : styles.colorButtonPallet} ${styles[color]}`}
          onClick={() => changeColor(color)}
        />
      ))}
    </motion.div>
  );
};
