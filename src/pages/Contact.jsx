import ContactVid from "../assets/contactvideo.webm";
import ChaserLogo from "../assets/starchaserlogo.svg";

function Contact() {
  return (
    // 1. ล็อกหน้าจอ: เปลี่ยน min-h-screen เป็น h-[100dvh] และ overflow-hidden เพื่อห้ามเลื่อนเด็ดขาด
    <div className="relative w-full h-[100dvh] overflow-hidden  flex flex-col justify-center px-6 md:px-16 lg:px-24">
      {/* 2. ครอปวิดีโอ: เติม object-bottom เพื่อยึดภาพจากขอบล่าง ส่วนที่เกินด้านบนจะถูกตัดทิ้ง */}
      <video
        src={ContactVid}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-bottom -z-10 opacity-100 -scale-x-100"
      ></video>

      {/* --- คอนเทนต์ฝั่งซ้าย --- */}
      {/* 3. เอฟเฟกต์ Glow: ใช้ [text-shadow:_0_0_15px_rgba(255,255,255,0.8)] เพื่อสร้างแสงฟุ้งสีขาว */}
      <div className="relative z-10 w-full md:w-2/3 lg:w-1/2 flex flex-col gap-10">
        {/* หัวข้อหลัก */}
        <img src={ChaserLogo} className="w-5/15 " />
        <h1 className="text-white font-black text-6xl md:text-[80px] lg:text-[100px] leading-[0.85] tracking-tighter [text-shadow:0_0_15px_rgba(255,255,255,0.6),0_0_30px_rgba(255,255,255,0.4)]">
          GET IN TOUCH
          <br />
          CREATIVE
          <br />
          AIN'T WAIT
        </h1>

        <div className="flex flex-col gap-8 mt-4">
          <p className="text-white font-bold text-sm tracking-widest [text-shadow:0_0_10px_rgba(255,255,255,0.8)]">
            ( CONTACT )
          </p>

          {/* Press Contact */}
          <div className="flex flex-col gap-1">
            <p className="text-white text-xs md:text-sm font-bold tracking-widest uppercase [text-shadow:0_0_10px_rgba(255,255,255,0.6)]">
              let's connect
            </p>
            {/* ลิงก์อีเมล ใช้สีขาวและเรืองแสง เมื่อเอาเมาส์ชี้แสงจะฟุ้งขึ้น */}
            <a
              href="mailto:mrkaokungkub@gmail.com"
              className="text-white font-medium text-3xl md:text-4xl tracking-tight transition-all duration-300 hover:scale-105 origin-left [text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_5px_rgba(255,255,255,0.5)]"
            >
              mrkaokungkub@gmail.com
            </a>
          </div>

          {/* Order Support */}
          {/* <div className="flex flex-col gap-1">
            <p className="text-white text-xs md:text-sm font-bold tracking-widest uppercase [text-shadow:0_0_10px_rgba(255,255,255,0.6)]">
              For order support (Please include order #):
            </p>
            <a
              href="mailto:support@karocrafts.com"
              className="text-white font-medium text-3xl md:text-4xl tracking-tight transition-all duration-300 hover:scale-105 origin-left [text-shadow:0_0_10px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.5)]"
            >
              support@karocrafts.com
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
