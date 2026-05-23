import { useLocation } from "react-router-dom";
import MainButton from "../components/MainButton";

function Navbar() {
  const location = useLocation();

  // เงื่อนไข: ถ้าตอนนี้อยู่หน้า Home (path คือ "/") ให้รีเทิร์น null (ไม่แสดงอะไรเลย)
  if (location.pathname === "/") {
    return null;
  }

  // ลบพวก margin (ml-, mt-) ออก เพราะเราจะใช้ gap ในการเว้นระยะแนวนอนแทน
  const navItems = [
    { title: "01. Starchaser's Hood", href: "/" },
    { title: "02. Portfolio & Project", href: "/portfolio" },
    { title: "03. Merchandise", href: "/merchandise" },
    { title: "04. Connect Me", href: "/contact" },
  ];

  return (
    // ใช้ sticky top-0 เพื่อให้ Navbar ลอยติดขอบบนสุดเสมอ
    // ใช้ flex flex-row และ gap-4 เพื่อเรียงปุ่มแนวนอนและเว้นช่องไฟ
    <div className="w-full sticky top-0 z-50 flex flex-row flex-wrap justify-center items-center py-6 gap-4 bg-white/90 backdrop-blur-md border-b border-black/10">
      {navItems.map((item, index) => (
        <MainButton
          key={index}
          title={item.title}
          href={item.href}
          // เราไม่ต้องส่ง positionStyle มาแล้ว เพราะเราใช้ gap จัดการให้กล่องเท่ากัน
        />
      ))}
    </div>
  );
}

export default Navbar;
