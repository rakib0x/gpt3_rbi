import React from "react";
import { Brand, Navbar, CTA, GTTBtn } from "./components";
import { Header, WhatGPT3, Features, Possibility, Blog, Footer } from "./containers";
import "./App.css";

function App() {
  return (
    <>
      <GTTBtn />
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
