import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Merchandise from "./pages/Merchandise";
import Portfolio from "./pages/Portfolio";
import PortfolioTag from "./components/PortfolioTag";

function App() {
  return (
    <>
      <Home />
      <PortfolioTag />
      <Portfolio />
      <About />
      <Merchandise />
      <Contact />
    </>
  );
}

export default App;
