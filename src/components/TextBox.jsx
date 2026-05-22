import React from "react";

function Textbox({ className = "" }) {
  return (
    // ใส่ max-w-lg เพื่อจำกัดความกว้างของกล่องข้อความไม่ให้ยาวเกินไป
    <div className={`flex flex-col max-w-xl text-black ${className}`}>
      {/* --- ส่วน Heading --- */}
      <div className="mb-10">
        <span className="text-gray-500 text-xl md:text-xl font-sarabun font-medium tracking-tight">
          Creative Developer
        </span>
        <div className="flex items-baseline gap-4 mb-1">
          {/* คำว่า Design ใช้ฟอนต์ serif และทำตัวเอียง เพื่อเลียนแบบฟอนต์สคริปต์ในภาพ */}
          <span className="text-7xl md:text-[8rem] font-extrabold leading-none font-sarabun">
            JOLYNE
          </span>
          <span className="text-3xl md:text-5xl font-sans font-medium tracking-tight">
            Starchaser
          </span>
        </div>
      </div>

      {/* --- ส่วน Paragraphs --- */}
      <div className="flex flex-col gap-5 text-sm md:text-base font-light leading-relaxed tracking-wide text-gray-800">
        <p>
          Motivated Junior Software Developer with a MERN stack bootcamp
          certification and 4 years of professional graphic design experience.
          Adept at bridging the gap between aesthetics and functionality,
          leveraging skills in HTML, CSS, JavaScript, and UX/UI design. Known
          for a strong growth mindset and creative problem-solving, eager to
          apply my technical and collaborative skills to build innovative web
          applications
        </p>
        <p>Creativity is the key to conquer the world</p>
        <p>
          design creates culture. culture shapes values. values determine the
          future
        </p>
      </div>
    </div>
  );
}

export default Textbox;
