import MainButton from "../components/MainButton";
import Textbox from "../components/TextBox";
import Iwas from "../assets/iwascreated.svg";
import Lotus1 from "../assets/lotus.png";
import Lotus2 from "../assets/sigil.webp";
import Joe from "../assets/me.webp";

function Home() {
  // เพิ่ม href เข้าไปในแต่ละปุ่ม
  const navItems = [
    {
      title: "01. Starchaser's Hood",
      href: "#",
      positionStyle: "ml-0 mt-0",
    },
    {
      title: "02. Portfolio&Project ",
      href: "#",
      positionStyle: "ml-32 mt-16",
    },
    {
      title: "03. About Starchaser",
      href: "#",
      positionStyle: "-ml-8 mt-16",
    },
    {
      title: "04. Merchandise",
      href: "#",
      positionStyle: "ml-38 mt-16",
    },
    { title: "05. Connect Me", href: "#", positionStyle: "ml-12 mt-16" },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* --- Navbar ด้านขวา --- */}
      <div className="absolute right-4/34 top-32 flex flex-col items-start z-50">
        {navItems.map((item, index) => (
          <MainButton
            key={index}
            title={item.title}
            href={item.href} // ส่ง prop href เข้าไปเพื่อให้ MainButton กลายเป็นแท็ก <a>
            className={item.positionStyle}
          />
        ))}
      </div>

      <Textbox className="absolute bottom-20 left-30 z-30" />

      {/* --- ส่วนรูปภาพ --- */}
      {/* Lotus1 */}
      <div className="relative left-2/8 mt-5 scale-150">
        <img
          src={Lotus1}
          className="absolute left-25 right-100 bottom-20 top-0 w-auto h-[350px] z-0 mix-blend-multiply"
          alt="Lotus ascii"
        />

        {/* Iwas */}
        <img
          src={Iwas}
          className="absolute left-20 top-10 w-auto h-[200px] z-10"
          alt="I was created"
        />
      </div>

      {/* Lotus2 */}
      <img
        src={Lotus2}
        className="absolute left-4/7 w-auto h-[1200px] z-0 mix-blend-multiply"
        alt="Lotus sigilism"
      />

      {/* Joe */}
      <img
        src={Joe}
        className="absolute left-2/5 translate-2.5 top-[80px] w-auto h-[900px] z-20 pointer-events-none"
        alt="Jolyne Starchaser"
      />
    </div>
  );
}

export default Home;
