import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./layouts/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Merchandise from "./pages/Merchandise";
import Portfolio from "./pages/Portfolio";
import PortfolioTag from "./components/PortfolioTag";
// 1. อย่าลืม Import ProductDetail เข้ามาด้วย (เช็ค Path ให้ตรงกับโฟลเดอร์ของคุณนะครับ)
import ProductDetail from "./components/ProductDetail";
import { ReactLenis, useLenis } from "lenis/react";
import { Routes, Route } from "react-router-dom";

function App() {
  const lenis = useLenis((lenis) => {});

  return (
    <>
      <ReactLenis root />

      <Navbar />

      {/* 2. เอา <Routes> มาครอบ <Route> ทั้งหมดเอาไว้ */}
      <Routes>
        {/* หน้าแรก (/) ให้แสดง Home ต่อด้วย About */}
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />

        {/* หน้า Portfolio ให้โชว์ Tag คู่กับตัว Portfolio */}
        <Route
          path="/portfolio"
          element={
            <>
              <PortfolioTag />
              <Portfolio />
            </>
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/merchandise" element={<Merchandise />} />
        {/* หน้า Detail สินค้า */}
        <Route path="/merchandise/:id" element={<ProductDetail />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
