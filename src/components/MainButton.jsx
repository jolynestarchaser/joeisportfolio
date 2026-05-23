import React from "react";
import { Link } from "react-router-dom"; // 1. นำเข้า Link จาก react-router-dom

// เพิ่ม href และ ...props (เอาไว้รับคุณสมบัติอื่นๆ เช่น target, rel)
function MainButton({ title, className = "", href, ...props }) {
  // แยกคลาสส่วนกลางออกมาเพื่อจะได้ไม่ต้องเขียนซ้ำซ้อน
  const buttonStyle = `px-6 py-4 text-black bg-white/90 border border-black hover:bg-gray-200 transition-colors inline-block text-center ${className}`;

  // เงื่อนไข: ถ้ามี prop 'href' ส่งมา
  if (href) {
    // เช็คว่าลิงก์ที่ส่งมาเป็นลิงก์ภายนอกหรือไม่ (ขึ้นต้นด้วย http หรือ mailto:)
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");

    if (isExternal) {
      // ถ้าเป็นลิงก์ภายนอก (เว็บอื่น) ให้รีเทิร์นเป็นแท็ก <a> ตามปกติ
      return (
        <a href={href} className={buttonStyle} {...props}>
          {title}
        </a>
      );
    }

    // ถ้าเป็นลิงก์ภายในโปรเจกต์เรา ให้รีเทิร์นเป็นแท็ก <Link> และเปลี่ยน href เป็น to
    return (
      <Link to={href} className={buttonStyle} {...props}>
        {title}
      </Link>
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
