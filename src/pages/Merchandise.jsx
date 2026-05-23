import React, { useState } from "react";
// นำเข้าข้อมูล JSON ที่อัปเดตแล้ว
import MerchData from "../data/merch.json";
import { Link } from "react-router-dom";
import MerchLogo from "../assets/head/merch.svg";
function Merchandise() {
  // สร้าง State สำหรับเก็บค่า Filter เริ่มต้นให้แสดง "all"
  const [activeFilter, setActiveFilter] = useState("all");

  // รายการเมนูสำหรับ Filter
  const categories = [
    { label: "/ALL", value: "all" },
    { label: "/TSHIRT", value: "tshirt" },
    { label: "/STICKER", value: "sticker" },
    { label: "/POSTER", value: "poster" },
  ];

  // กรองข้อมูล: ถ้าเลือก "all" ให้ดึงมาทั้งหมด ถ้าเลือกอย่างอื่นให้กรองตาม type
  const displayedMerch =
    activeFilter === "all"
      ? MerchData
      : MerchData.filter((item) => item.type === activeFilter);

  return (
    <div className="w-full min-h-screen bg-white pb-20 pt-10 font-sans">
      <img src={MerchLogo} className="" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* --- ส่วน Navbar หมวดหมู่ (Filter) --- */}
        <div className="flex flex-wrap justify-between items-center mb-16 text-xl lg:text-2xl font-black uppercase tracking-tighter border-b border-black/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`transition-colors hover:text-black ${
                activeFilter === cat.value ? "text-black" : "text-gray-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* --- ส่วน Grid แสดงสินค้า 4 คอลัมน์ --- */}
        {/* lg:grid-cols-4 คือตัวบังคับให้แบ่งเป็น 4 ช่องในหน้าจอคอมพิวเตอร์ */}
        <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedMerch.map((item) => (
            <Link
              key={item.id}
              to={`/merchandise/${item.id}`} // เปลี่ยนจาก href เป็น to
              className="flex flex-col group border border-black/10 bg-white"
            >
              {/* ข้อมูลชื่อและราคา (อยู่ด้านบนกรอบเหมือนในเรฟ) */}
              <div className="p-4 pb-0 z-10 bg-white">
                <h3 className="text-sm font-medium tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm font-bold mt-1">${item.price}</p>
              </div>

              {/* รูปภาพสินค้า */}
              <div className="w-full aspect-[4/4] p-4 flex items-center justify-center overflow-hidden bg-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* หากไม่มีสินค้าในหมวดหมู่นั้นให้แสดงข้อความ */}
        {displayedMerch.length === 0 && (
          <div className="w-full text-center py-20 text-gray-400 uppercase tracking-widest text-sm">
            No items found in this category.
          </div>
        )}
      </div>
    </div>
  );
}

export default Merchandise;
