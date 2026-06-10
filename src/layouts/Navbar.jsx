import { useLocation } from "react-router-dom";
import MainButton from "../components/MainButton";

function Navbar() {
  const location = useLocation();

  // เงื่อนไข: ถ้าตอนนี้อยู่หน้า Home (path คือ "/") ให้รีเทิร์น null (ไม่แสดงอะไรเลย)
  if (location.pathname === "/") {
    return null;
  }

  // 💡 อัปเดตรายการเมนูให้มี 5 ข้อ เหมือนกับหน้า Home
  // และปรับ Link (href) ของ CV ให้ไปที่หน้า /about แทน
  const navItems = [
    { title: "01. Starchaser's Hood", href: "/" },
    { title: "02. CV and Profiles", href: "/about" },
    { title: "03. Portfolio & Project", href: "/portfolio" },
    { title: "04. Merchandise", href: "/merchandise" },
    { title: "05. Connect Me", href: "/contact" },
  ];

  return (
    // 💡 ปรับ Responsive:
    // - มือถือ: ลด padding (py-3) และ gap (gap-2)
    // - จอคอม (md:): ขยาย padding (md:py-6) และ gap (md:gap-4) ให้กลับมาปกติ
    // - เพิ่ม bg-white/70 เพื่อให้ตัวหนังสืออ่านง่ายขึ้นเมื่อเลื่อนทับรูปภาพ
    <div className="w-full sticky top-0 z-50 flex flex-row flex-wrap justify-center items-center py-3 md:py-6 gap-2 md:gap-4 backdrop-blur-md bg-white/70 shadow-sm transition-all duration-300">
      {navItems.map((item, index) => (
        // 💡 ใช้ scale ย่อส่วนปุ่มลงเล็กน้อยในหน้าจอมือถือ เพื่อให้เรียง 5 ปุ่มได้สวยงามขึ้น
        <div key={index} className="scale-90 md:scale-100 origin-center">
          <MainButton title={item.title} href={item.href} />
        </div>
      ))}
    </div>
  );
}

export default Navbar;
