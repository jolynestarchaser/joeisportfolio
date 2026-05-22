import React from "react";

// เพิ่ม href และ ...props (เอาไว้รับคุณสมบัติอื่นๆ เช่น target, rel)
function MainButton({ title, className = "", href, ...props }) {
  // แยกคลาสส่วนกลางออกมาเพื่อจะได้ไม่ต้องเขียนซ้ำซ้อน
  // เพิ่ม inline-block และ text-center เพื่อให้แท็ก <a> แสดงผลเหมือนปุ่มเป๊ะๆ
  const buttonStyle = `px-6 py-4  text-black bg-white/90 border border-black hover:bg-gray-200 transition-colors inline-block text-center   ${className}`;

  // เงื่อนไข: ถ้ามี prop 'href' ส่งมา ให้รีเทิร์นเป็นแท็ก <a>
  if (href) {
    return (
      <a href={href} className={buttonStyle} {...props}>
        {title}
      </a>
    );
  }

  // ถ้าไม่มี 'href' ให้ส่งแท็ก <button> กลับไปตามปกติ
  return (
    <button className={buttonStyle} {...props}>
      {title}
    </button>
  );
}

export default MainButton;
