import React from "react";

// ฟังก์ชันดึง ID วิดีโอจากลิงก์ YouTube (คำนวณแบบ Pure Function ไม่ต้องใช้ State)
const getYouTubeThumbnail = (url) => {
  if (!url) return null;
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://img.youtube.com/vi/${match[2]}/maxresdefault.jpg`
    : null;
};

function PortfolioCard({
  type = "design",
  title,
  description,
  image,
  video,
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

  const defaultAspect = {
    editor: aspect === "square" ? "aspect-[9/16]" : aspectStyles[aspect],
    code: "aspect-[16/10]",
    design: "aspect-square",
  };

  // 1. ตรวจสอบรูปภาพตามลำดับความสำคัญ: รูปตรงๆ จาก JSON -> รูปจาก YouTube -> ภาพ Placeholder สีเทา
  const youtubeThumb = getYouTubeThumbnail(link);
  const displayImage =
    image ||
    youtubeThumb ||
    "https://placehold.co/600x400/eeeeee/999999?text=No+Image";

  return (
    <a
      href={link || "#"}
      target={link ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="flex flex-col border border-black bg-white font-sarabun group cursor-pointer transition-shadow duration-300 hover:shadow-lg"
    >
      {/* --- Top Meta --- */}
      <div className="flex justify-between items-center p-4 text-[10px] uppercase tracking-widest text-gray-500">
        <span>{date}</span>
        <span className="border border-black px-2 py-0.5 text-black font-medium">
          {categoryLabel || type}
        </span>
      </div>

      {/* --- Image / Video Section --- */}
      <div className="w-full overflow-hidden border-y border-black/10 bg-gray-50 flex items-center justify-center">
        {video ? (
          <video
            src={`${video}#t=0.1`}
            preload="metadata"
            autoPlay
            loop
            muted
            playsInline
            poster={displayImage} // ใช้รูปที่เราคัดกรองแล้วเป็นหน้าปกวิดีโอ
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${defaultAspect[type] || aspectStyles[aspect]}`}
          />
        ) : (
          <img
            src={displayImage}
            alt={title}
            // ป้องกันปัญหาวิดีโอ YouTube บางตัวไม่มีรูปขนาดใหญ่ (maxres) ให้สลับไปใช้ขนาดปกติ (hq) อัตโนมัติ
            onError={(e) => {
              if (e.target.src.includes("maxresdefault.jpg")) {
                e.target.src = e.target.src.replace(
                  "maxresdefault.jpg",
                  "hqdefault.jpg",
                );
              }
            }}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${defaultAspect[type] || aspectStyles[aspect]}`}
          />
        )}
      </div>

      {/* --- Content Section --- */}
      <div className="flex flex-col p-6 gap-3">
        <h3 className="text-xl font-bold leading-tight uppercase tracking-tight line-clamp-2">
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
