import React from "react";
import MainButton from "../components/MainButton";
import Textbox from "../components/TextBox";
import Iwas from "../assets/iwascreate.png";
import Lotus2 from "../assets/sigil.webp";
import Joe from "../assets/me.webp";
import "./Home.css"; // << อย่าลืม import ไฟล์ CSS นะครับ

function Home() {
  const navItems = [
    {
      title: "01. Starchaser's Hood",
      href: "/",
      customClass: "nav-item-1",
    },
    {
      title: "02. CV and Profiles ",
      href: "/about",
      customClass: "nav-item-2",
    },
    {
      title: "03. Portfolio&Project ",
      href: "/portfolio",
      customClass: "nav-item-3",
    },
    // {
    //   title: "04. Merchandise",
    //   href: "/merchandise",
    //   customClass: "nav-item-4",
    // },
    {
      title: "04. Connect Me",
      href: "/contact",
      customClass: "nav-item-5",
    },
  ];

  return (
    <div className="home-container">
      {/* ลายพื้นหลัง */}
      <img src={Lotus2} className="home-bg-lotus" alt="Lotus sigilism" />

      {/* คอนเทนต์หลัก */}
      <div className="home-content">
        {/* 1. โซนซ้าย: Graphic ตัวอักษร & Textbox */}
        <div className="home-left-zone">
          <img src={Iwas} className="home-iwas-img" alt="I was created" />
          <div className="home-textbox-wrapper">
            {/* หากใน Textbox มีคลาส text-center อยู่ ลองลบออกแล้วให้ CSS จัดการแทนได้ครับ */}
            <Textbox />
          </div>
        </div>

        {/* 2. โซนกลาง: รูปคน (Joe) */}
        {/* <div className="home-center-zone">
          <img src={Joe} className="home-joe-img" alt="Jolyne Starchaser" />
        </div> */}

        {/* 3. โซนขวา: ปุ่ม Navigation */}
        <div className="home-right-zone">
          {navItems.map((item, index) => (
            <div key={index} className={`nav-item-wrapper ${item.customClass}`}>
              <MainButton title={item.title} href={item.href} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
