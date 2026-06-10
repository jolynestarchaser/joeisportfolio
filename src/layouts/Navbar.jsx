import { useLocation, Link } from "react-router-dom";
import MainButton from "../components/MainButton";
import { Home, User, Briefcase, ShoppingBag, Mail } from "lucide-react";
import "./Navbar.css"; // ⬅️ อย่าลืม import ไฟล์ CSS นะครับ

function Navbar() {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  const navItems = [
    { title: "01. Starchaser's Hood", href: "/", icon: Home },
    { title: "02. CV and Profiles", href: "/about", icon: User },
    { title: "03. Portfolio & Project", href: "/portfolio", icon: Briefcase },
    // { title: "04. Merchandise", href: "/merchandise", icon: ShoppingBag },
    { title: "04. Connect Me", href: "/contact", icon: Mail },
  ];

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;

          return (
            <div key={index}>
              {/* 📱 1. โหมดมือถือ (Mobile): โชว์ Icon */}
              <Link
                to={item.href}
                title={item.title}
                className={`navbar-mobile-item ${isActive ? "active" : ""}`}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </Link>

              {/* 💻 2. โหมดจอคอม (Desktop): โชว์ MainButton */}
              <div className="navbar-desktop-item">
                <MainButton title={item.title} href={item.href} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
