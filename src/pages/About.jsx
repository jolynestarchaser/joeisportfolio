import Cv from "../assets/cv.jpg";
import Aci from "../assets/aci.png";
import Ab from "../assets/head/about.svg";
import Id from "../assets/id.jpg";
import Bd from "../assets/buddha.png";
import "./About.css"; // ⬅️ อย่าลืม import CSS

function About() {
  const stacks = [
    "HTML",
    "CSS",
    "Tailwind",
    "Javascript",
    "Typescript",
    "React",
    "Next.js",
    "GSAP",
    "SQL",
    "MongoDB",
    "Node.JS",
    "Express.JS",
    "RestfulAPI",
    "Lenis",
  ];
  const toolstacks = [
    "Github",
    "Claude/Gemini",
    "Figma",
    "Canva",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe PremirePro",
    "FL STUDIO",
  ];
  const database = ["Firebase", "Supabase", "Figma"];
  const skills = [
    "Packaging design",
    "Poster design",
    "Ads poster",
    "Short video",
    "Long video",
    "Sticker Label",
    "Mock-up",
    "Logo design",
    "Branding design",
    "Beat sampling",
    "User Experience design",
    "User Interface design",
    "Web/App design",
    "App design",
    "MC ( Master of Ceremonies )",
  ];
  const aiInte = [
    "OpenAI API Intergration",
    "Gemini API Intergration",
    "LINE Messaging API",
  ];

  // 💡 จับกลุ่มข้อมูลเป็น Array เพื่อให้โค้ดสั้นลงและไม่ต้องเขียนกล่องซ้ำๆ
  const sections = [
    { title: "Tech Stack", data: stacks },
    { title: "Tools", data: toolstacks },
    { title: "Database", data: database },
    { title: "My skills", data: skills },
    { title: "AI Integration", data: aiInte },
  ];

  return (
    <div className="about-container">
      {/* โซนรูปภาพด้านซ้าย */}
      <div className="about-left-zone">
        <img className="about-profile-img" src={Aci} alt="Profile" />
      </div>

      {/* โซนเนื้อหาด้านขวา */}
      <div className="about-right-zone">
        {/* หัวข้อ About และดาว */}
        <div className="about-header-wrapper">
          <img src={Ab} className="about-header-img" alt="About" />

        </div>

        {/* กล่อง FYI */}
        <div className="about-fyi-box">
          FYI : ENTP7W6 connect with Buddhism and spiritual , Tarot, Kabbalah,
          Mantra and SWAG
        </div>

        {/* 💡 ลูปสร้างกล่องหมวดหมู่ต่างๆ อัตโนมัติ (ช่วยลดโค้ดลงไปได้เยอะมาก) */}
        {sections.map((section, index) => (
          <div key={index} className="about-section-box">
            <h1 className="about-section-title">{section.title}</h1>
            <ul className="about-list">
              {section.data.map((item, idx) => (
                <li key={idx} className="about-list-item">
                  <span className="about-list-icon">★</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* รูปพระพุทธรูปด้านล่าง */}
        <div className="about-footer-zone">
          <img src={Bd} className="about-buddha-img" alt="Buddha Graphic" />
        </div>
      </div>
    </div>
  );
}

export default About;
