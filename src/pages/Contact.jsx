import ContactVid from "../assets/contactvideo.webm";
import ChaserLogo from "../assets/starchaserlogo.svg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import "./Contact.css"; // ⬅️ อย่าลืม import ไฟล์ CSS ครับ

function Contact() {
  return (
    <div className="contact-container">
      {/* วิดีโอพื้นหลัง */}
      <video
        src={ContactVid}
        autoPlay
        loop
        muted
        playsInline
        className="contact-video"
      ></video>

      {/* --- คอนเทนต์ฝั่งซ้าย --- */}
      <div className="relative z-10 w-full md:w-2/3 lg:w-1/2 flex flex-col gap-10">
        {/* หัวข้อหลัก */}
        <img
          src={ChaserLogo}
          className="w-[40%] md:w-[30%]"
          alt="Chaser Logo"
        />
        <h1 className="text-white font-black text-6xl md:text-[80px] lg:text-[100px] leading-[0.85] tracking-tighter [text-shadow:0_0_15px_rgba(255,255,255,0.6),0_0_30px_rgba(255,255,255,0.4)]">
          GET IN TOUCH
          <br />
          CREATIVE
          <br />
          AIN'T WAIT
        </h1>

        <div className="flex flex-col gap-2 mt-4">
          <p className="text-white font-bold text-sm tracking-widest [text-shadow:0_0_10px_rgba(255,255,255,0.8)]">
            ( CONTACT )
          </p>

          {/* Social Icons Section */}
          <div className="flex gap-6 mt-2 mb-4">
            <a
              href="https://github.com/jolynestarchaser"
              target="_blank"
              rel="noreferrer"
              className="text-white text-4xl transition-all duration-300 hover:scale-110 [filter:drop-shadow(0_0_8px_rgba(255,255,255,0.8))]"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/starchaser.dev"
              target="_blank"
              rel="noreferrer"
              className="text-white text-4xl transition-all duration-300 hover:scale-110 [filter:drop-shadow(0_0_8px_rgba(255,255,255,0.8))]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/in/jolynestarchaseronline"
              target="_blank"
              rel="noreferrer"
              className="text-white text-4xl transition-all duration-300 hover:scale-110 [filter:drop-shadow(0_0_8px_rgba(255,255,255,0.8))]"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Press Contact */}
          <div className="flex flex-col gap-1">
            <p className="text-white text-xs md:text-sm font-bold tracking-widest uppercase [text-shadow:0_0_10px_rgba(255,255,255,0.6)]">
              let's connect
            </p>
            <a
              href="mailto:jolynestarchaseronline@gmail.com"
              className="text-white font-medium text-3xl md:text-4xl tracking-tight transition-all duration-300 hover:scale-105 origin-left [text-shadow:0_0_5px_rgba(255,255,255,0.8),0_0_5px_rgba(255,255,255,0.5)]"
            >
              jolynestarchaseronline@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
