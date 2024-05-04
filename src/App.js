import React from "react";
import { Navbar } from "./components";

import "./App.css";
import { Header } from "./containers";

function App() {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
    </>
  );
}

export default App;
