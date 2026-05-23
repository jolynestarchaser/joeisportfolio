import Cv from "../assets/cv.jpg";
import Ab from "../assets/head/about.svg";
import Id from "../assets/id.jpg";
import Bd from "../assets/buddha.png";

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
  const language = ["Thai : Native", "English : Conversation"];
  return (
    <div className="grid grid-cols-2 mb-5">
      <div className="pl-22">
        <img className="border border-black w-full " src={Cv} />
      </div>

      <div className=" pl-10 w-full">
        <div className="">
          <img src={Ab} className=" w-[50%]  inline-block " />

          <span className="absolute  scale-2500 rotate-25 right-65">★</span>
        </div>
        <div className="w-10/12 p2 mb-4 border">
          {" "}
          FYI : ENTP7W6 connect with Buddhism and spiritual , Tarot, Kabbalah,
          Mantra and SWAG
        </div>
        <div className=" border p-2 w-10/12 mb-4">
          <h1 className="font-bold text-3xl w-fit ">Tech Stack</h1>

          <ul className="grid grid-cols-4">
            {stacks.map((e) => {
              return <li className="my-2">★-{e}</li>;
            })}
          </ul>
        </div>
        <div className="border p-2 w-10/12 mb-4 ">
          <h1 className="font-bold text-3xl w-fit ">Tools</h1>

          <ul className="grid grid-cols-4">
            {toolstacks.map((e) => {
              return <li className="my-2">★-{e}</li>;
            })}
          </ul>
        </div>
        <div className="border p-2 w-10/12 mb-4 ">
          <h1 className="font-bold text-3xl w-fit ">Database</h1>

          <ul className="grid grid-cols-4">
            {database.map((e) => {
              return <li className="my-2">★-{e}</li>;
            })}
          </ul>
        </div>
        <div className="border p-2 w-10/12 mb-4 ">
          <h1 className="font-bold text-3xl w-fit ">My skills</h1>

          <ul className="grid grid-cols-4">
            {skills.map((e) => {
              return <li className="my-2">★-{e}</li>;
            })}
          </ul>
        </div>
        <div className="border p-2 w-10/12 mb-4 ">
          <h1 className="font-bold text-3xl w-fit ">AI Integration</h1>

          <ul className="grid grid-cols-4">
            {aiInte.map((e) => {
              return <li className="my-2">★-{e}</li>;
            })}
          </ul>
        </div>
        {/* <div className="border p-2 w-10/12 mb-4 ">
          <h1 className="font-bold text-3xl w-fit ">Language</h1>

          <ul className="grid grid-cols-4">
            {language.map((e) => {
              return <li className="my-2">★-{e}</li>;
            })}
          </ul>
        </div> */}
        <div className="flex flex-col relative items-end  w-10/12 ">
          <img
            src={Bd}
            className=" absolute bottom-2 scale-85 mix-blend-multiply opacity-40"
          />
        </div>
        {/* <div className="flex flex-col items-end  w-10/12 ">
          <img className="w-1/2 border border-black " src={Id} />
        </div> */}
      </div>
    </div>
  );
}

export default About;
