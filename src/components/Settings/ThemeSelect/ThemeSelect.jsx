import React, { useContext } from "react";
import { AppContext } from "../../../App";
import { CgSun } from "react-icons/cg";
import { FaMoon } from "react-icons/fa";

import styles from "./ThemeSelect.module.scss";

export const ThemeSelect = () => {
  const themeContext = useContext(AppContext);
  const { theme, toggleTheme } = themeContext;

  const changeTheme = () => {
    toggleTheme();
  };
  return (
    <>
      <button
        className={`${styles.buttonTheme} button--theme`}
        onClick={changeTheme}
      >
        {theme === "light" ? <CgSun /> : <FaMoon />}
      </button>
    </>
  );
};
