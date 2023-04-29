import React from "react";
import { Navbar } from "./components/Navbar/Navbar";

import "./App.scss";
import { Header } from "./container/Header/Header";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
