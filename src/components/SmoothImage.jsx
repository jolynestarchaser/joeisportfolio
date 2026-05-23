import React, { useState } from "react";

// สร้าง Component ใหม่สำหรับโหลดรูป
function SmoothImage({ src, alt, className, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    // กล่องแม่ต้องมี relative เพื่อครอบ Skeleton
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton - จะแสดงและกะพริบ (animate-pulse) จนกว่ารูปจะโหลดเสร็จ */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
      )}

      {/* รูปจริง - ซ่อนไว้ (opacity-0) จนกว่าโหลดเสร็จค่อยโชว์ (opacity-100) */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)} // เช็คว่ารูปโหลดเสร็จหรือยัง
        className={`w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        {...props}
      />
    </div>
  );
}

export default SmoothImage;
