import React from "react";
import { Navbar } from "./components/Navbar/Navbar";

import "./App.scss";
import { Header } from "./container/Header/Header";
import { About } from "./container/About/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
    </div>
  );
};

export default App;
