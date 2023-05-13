import React, {createContext, useEffect, useState} from "react";
import {GridLoader} from "react-spinners";
import About from "./container/About/About";
import Header from "./container/Header/Header";
import {Navbar} from "./components";

import "./App.scss";
import "./scss/variables.scss";

export const ThemeContext = createContext(null)

const App = () => {
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
        document.body.classList.toggle('darkmode');
        setTheme(curr => curr === 'light' ? 'dark' : 'light')
    }
    useEffect(() => {
        const handleLoad = () => {
            setLoading(false);
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (<>
            {loading ? <GridLoader className="spinner" color="#36d7b7"/> :
                <ThemeContext.Provider value={{toggleTheme}}>
                    <div>
                        <div onClick={toggleTheme}>{theme}</div>
                        <Navbar/>
                        <Header/>
                        <About/>
                    </div>
                </ThemeContext.Provider>
            }
        </>
    )
};

export default App;
