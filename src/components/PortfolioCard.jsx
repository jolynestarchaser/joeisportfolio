import React from "react";
import { useState, useEffect } from "react";

function PortfolioCard({
  type = "design",
  title,
  description,
  image,
  video, // รับ prop video เข้ามา
  date,
  tags = [],
  aspect = "square",
  categoryLabel,
  link,
}) {
  const aspectStyles = {
    "9:16": "aspect-[9/16]",
    "16:9": "aspect-video",
    square: "aspect-square",
    video: "aspect-video",
    web: "aspect-[16/10]",
  };
  const [thumb, setThumb] = useState(image);

  useEffect(() => {
    // ถ้าไม่มีรูปและเป็น graphic ให้ดึง OG image จาก link
    if (!image && type === "design" && link) {
      fetch(`https://api.microlink.io/?url=${encodeURIComponent(link)}`)
        .then((r) => r.json())
        .then((data) => {
          if (data?.data?.image?.url) setThumb(data.data.image.url);
        })
        .catch(() => {});
    }
  }, [image, type, link]);

  const defaultAspect = {
    editor: aspect === "square" ? "aspect-[9/16]" : aspectStyles[aspect],
    code: "aspect-[16/10]",
    design: "aspect-square",
  };

  return (
    // 2. เปลี่ยน <div> นอกสุดเป็น <a> และใส่ href
    // เพิ่ม hover:shadow-lg เพื่อให้การ์ดดูลอยขึ้นมาเวลาเอาเมาส์ชี้
    <a
      href={link || "#"} // ถ้ามี link ให้ไปที่ link ถ้าไม่มีให้อยู่หน้าเดิม
      target={link ? "_blank" : "_self"} // เปิดแท็บใหม่ถ้ามีลิงก์
      rel="noopener noreferrer" // เพื่อความปลอดภัยเวลาเปิดแท็บใหม่
      className="flex flex-col border border-black bg-white font-sarabun group cursor-pointer hover: transition-shadow duration-300"
    >
      {/* --- Top Meta --- */}
      <div className="flex justify-between items-center p-4 text-[10px] uppercase tracking-widest text-gray-500">
        <span>{date}</span>
        <span className="border border-black px-2 py-0.5 text-black font-medium">
          {categoryLabel || type}
        </span>
      </div>

      {/* --- Image / Video Section --- */}
      <div
        className={`w-full overflow-hidden border-y border-black/10 bg-gray-50`}
      >
        {/* เช็คว่ามี video ไหม ถ้ามีให้เล่นวิดีโอ ถ้าไม่มีให้โชว์รูป */}
        {video ? (
          <video
            src={`${video}#t=0.1`}
            preload="metadata"
            autoPlay
            loop
            muted
            playsInline
            poster={image || undefined}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${defaultAspect[type] || aspectStyles[aspect]}`}
          />
        ) : (
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${defaultAspect[type] || aspectStyles[aspect]}`}
          />
        )}
      </div>

      {/* --- Content Section --- */}
      <div className="flex flex-col p-6 gap-3">
        <h3 className="text-xl font-bold leading-tight uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed font-light line-clamp-3">
          {description}
        </p>
      </div>

      {/* --- Bottom Section (Tags / Duration) --- */}
      <div className="mt-auto p-6 pt-0 flex flex-wrap gap-2">
        {type === "editor" ? (
          <div className="text-[11px] text-gray-400">
            <span className="text-black font-bold">Tool:</span>{" "}
            {tags.join(", ")}
          </div>
        ) : (
          tags.map((tag, index) => (
            <span
              key={index}
              className="text-[10px] bg-gray-100 px-2 py-1 uppercase tracking-tighter"
            >
              #{tag}
            </span>
          ))
        )}
      </div>
    </a>
  );
}

export default PortfolioCard;
