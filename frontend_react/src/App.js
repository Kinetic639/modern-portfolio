import React, {createContext, useEffect, useState} from "react";
import {GridLoader} from "react-spinners";
import {Navbar} from "./components";

import "./App.scss";
import Header from "./container/Header/Header";

export const ThemeContext = createContext(null)

const App = () => {
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState("dark")
    const toggleTheme = () => {
        document.body.classList.toggle('darkmode');
        setTheme(curr => curr === 'light' ? 'dark' : 'light')
    }
    useEffect(() => {
        document.body.classList.add("darkmode");
        const handleLoad = () => {
            setLoading(false);
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (<>
            {loading ? <GridLoader className="spinner" color="#27e98b"/> :
                <ThemeContext.Provider value={{theme, toggleTheme}}>
                    <div className="app-wrapper">
                        <Navbar/>
                        <Header/>
                        {/*<About/>*/}
                    </div>
                </ThemeContext.Provider>
            }
        </>
    )
};

export default App;
