import { useState } from "react";
import Left from "../assets/editor.webp";
import Mid from "../assets/code.webp";
import Right from "../assets/design.webp";
import PortfolioCard from "../components/PortfolioCard";

// 1. นำเข้าข้อมูล JSON เข้ามาเก็บไว้ในตัวแปรชื่อ portfolioData
import portfolioData from "../data/portfolio.json";

function Portfolio() {
  const [selected, setSelected] = useState(null);

  const panels = [
    { id: "editor", src: Left, title: "EDIT" },
    { id: "code", src: Mid, title: "CODE" },
    { id: "design", src: Right, title: "DESIGN" },
  ];

  // 2. ใช้ portfolioData ที่ import เข้ามา ทำการ Filter ข้อมูลได้เลย
  const displayedItems = selected
    ? portfolioData.filter((item) => item.type === selected)
    : portfolioData;

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* --- ส่วน Hero Banner --- */}
      <div className="flex flex-row w-full h-[60vh] overflow-hidden">
        {panels.map((panel) => {
          const isSelected = selected === panel.id;

          return (
            <div
              key={panel.id}
              className={`relative h-full cursor-pointer group overflow-hidden transition-all duration-500 ${
                selected ? (isSelected ? "w-1/2" : "w-1/4") : "w-1/3"
              }`}
              onClick={() => setSelected(isSelected ? null : panel.id)}
            >
              <img
                src={panel.src}
                alt={panel.id}
                className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                  isSelected
                    ? "grayscale-0 scale-105"
                    : "grayscale group-hover:grayscale-0 group-hover:scale-105"
                }`}
              />

              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out ${
                  isSelected || !selected
                    ? "opacity-100"
                    : "opacity-40 group-hover:opacity-100"
                }`}
              >
                <h2 className="text-white text-3xl md:text-5xl font-bold tracking-widest uppercase drop-shadow-lg">
                  {panel.title}
                </h2>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- ส่วน Grid แสดงผลงาน --- */}
      <div className="w-full max-w-7xl mx-auto p-10 mt-8">
        <div className="flex justify-between items-end mb-10 border-b border-black/10 pb-4">
          <h2 className="text-3xl font-bold tracking-tighter uppercase">
            {selected ? `Selected: ${selected}` : "All Works"}
          </h2>
          <p className="text-sm text-gray-500 uppercase tracking-widest">
            {displayedItems.length} Projects
          </p>
        </div>

        {/* เปลี่ยน w-[20%] เป็น w-full เพื่อให้กล่องแม่มีพื้นที่พอสำหรับ 3 คอลัมน์ */}
        <div className="w-auto h-auto grid grid-row-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* ตัวการ์ด PortfolioCard จะเรียง 3 อันต่อ 1 แถว และขึ้นแถวใหม่ให้อัตโนมัติ */}

          {displayedItems.map((item) => (
            <PortfolioCard
              key={item.id}
              type={item.type}
              date={item.date}
              title={item.title}
              description={item.description}
              image={item.image}
              video={item.video} // ส่งค่า video เข้าไป
              aspect={item.aspect}
              tags={item.tags}
              categoryLabel={item.categoryLabel}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
