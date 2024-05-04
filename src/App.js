import React from "react";
import { Brand, Navbar } from "./components";

import "./App.css";
import { Header, WhatGPT3 } from "./containers";

function App() {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
    </>
  );
}

export default App;
