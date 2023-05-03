import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import "./App.scss";
import About from "./container/About/About";
import Header from "./container/Header/Header";

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
