import React, {useEffect, useState} from "react";
import {GridLoader} from "react-spinners";
import About from "./container/About/About";
import Header from "./container/Header/Header";
import {Navbar} from "./components";

import "./App.scss";

const App = () => {

    const [loading, setLoading] = useState(true);

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
                <div>
                    <Navbar/>
                    <Header/>
                    <About/>
                </div>
            }
        </>
    )
};

export default App;
