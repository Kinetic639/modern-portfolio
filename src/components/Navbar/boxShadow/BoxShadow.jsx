import React from "react";
import { motion } from "framer-motion";

import styles from "./BoxShadow.module.scss";

const item = {
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
      delay: 0,
    },
  },
};
export const BoxShadow = ({ toggleNavigation }) => {
  return (
    <motion.div
      variants={item}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      exit="exit"
      className={styles.boxShadow}
      onClick={toggleNavigation}
    />
  );
};
