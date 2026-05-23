import MainButton from "../components/MainButton";
import Textbox from "../components/TextBox";
import Iwas from "../assets/iwascreated.svg";
import Lotus1 from "../assets/lotus.png";
import Lotus2 from "../assets/sigil.webp";
import Joe from "../assets/me.webp";
import SmoothImage from "../components/SmoothImage";

function Home() {
  const navItems = [
    {
      title: "01. Starchaser's Hood",
      href: "/",
      positionStyle: "ml-0 mt-0 max-lg:ml-0 max-lg:mt-0",
    },
    {
      title: "02. Portfolio&Project ",
      href: "/portfolio",
      positionStyle: "ml-32 mt-16 max-lg:ml-4 max-lg:mt-4",
    },
    {
      title: "03. Merchandise",
      href: "/merchandise",
      positionStyle: "ml-2 mt-16 max-lg:ml-8 max-lg:mt-4",
    },
    {
      title: "04. Connect Me",
      href: "/contact",
      positionStyle: "ml-12 mt-16 max-lg:ml-12 max-lg:mt-4",
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* --- Navbar ด้านขวา --- */}

      <div className="absolute right-4/34 top-32 flex flex-col items-start z-50 max-lg:right-2 max-lg:top-20 max-lg:scale-75 max-lg:origin-top-right">
        {navItems.map((item, index) => (
          <MainButton
            key={index}
            title={item.title}
            href={item.href}
            className={item.positionStyle}
          />
        ))}
      </div>

      <Textbox className="absolute bottom-20 left-30 z-30 max-lg:bottom-10 max-lg:left-4 max-lg:scale-75 max-lg:origin-bottom-left" />

      {/* --- ส่วนรูปภาพ --- */}
      <div className="relative left-2/8 mt-5 scale-150 max-lg:absolute max-lg:-left-10 max-lg:top-10 max-lg:scale-50 max-lg:origin-top-left">
        {/* Lotus1: เป็นพื้นหลัง ให้รอโหลดทีหลังได้ (Lazy Load) */}
        <img
          src={Lotus1}
          className="absolute left-25 right-100 bottom-20 top-0 w-auto h-[350px] z-0 mix-blend-multiply"
          alt="Lotus ascii"
        />

        {/* Iwas (ข้อความ): สำคัญมาก สั่งลัดคิวโหลด (High Priority) */}
        <img
          src={Iwas}
          className="absolute left-20 top-10 w-auto h-[200px] z-10 max-lg:h-[150px]"
          alt="I was created"
        />
      </div>

      {/* Lotus2: เป็นลายเส้นพื้นหลัง ให้รอโหลดทีหลัง (Lazy Load) */}
      <img
        src={Lotus2}
        className="absolute left-4/7 w-auto h-[1200px] z-0 mix-blend-multiply max-lg:left-auto max-lg:-right-32 max-lg:h-[600px] max-lg:opacity-30"
        alt="Lotus sigilism"
      />

      {/* Joe (รูปคน): เป็นจุดโฟกัสหลักของหน้า สั่งลัดคิวโหลด (High Priority) */}
      <img
        src={Joe}
        className="absolute left-2/5 translate-2.5 top-[65px] w-auto h-[900px] z-20 pointer-events-none max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:top-auto max-lg:bottom-0 max-lg:h-[65vh] max-lg:object-contain"
        alt="Jolyne Starchaser"
      />
    </div>
  );
}

export default Home;
