import React from "react";

function Textbox({ className = "" }) {
  return (
    <div
      className={`mb-30 flex flex-col w-full max-w-xl text-black ${className}`}
    >
      {/* --- ส่วน Heading --- */}
      <div className="mb-6 md:mb-10">
        <span className="text-gray-500 text-lg md:text-xl font-sarabun font-medium tracking-tight">
          Creative Developer
        </span>

        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
          <span className="text-6xl md:text-[8rem] font-extrabold leading-none font-sarabun">
            JOLYNE
          </span>
          <span className="text-2xl md:text-5xl font-sans font-medium tracking-tight">
            Starchaser
          </span>
        </div>
      </div>

      {/* --- ส่วน Paragraphs --- */}
      {/* 👇 จุดที่แก้ไข: เปลี่ยนจาก text-sm เป็น text-xs หรือกำหนดเองเช่น text-[12px] ได้เลยครับ */}
      <div className="flex flex-col gap-4 md:gap-5 text-xs md:text-base font-light leading-relaxed tracking-wide text-gray-800 break-words ">
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
