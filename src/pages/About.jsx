import Cv from "../assets/cv.jpg";
import Ab from "../assets/head/about.svg";
import Id from "../assets/id.jpg";

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
  return (
    <div className="grid grid-cols-2">
      <div className="pl-22">
        <img className="border border-black w-full " src={Cv} />
      </div>

      <div className=" pl-10 w-full">
        <div className="">
          <img src={Ab} className=" w-[50%]  inline-block " />

          <span className="absolute  scale-2500 rotate-25 right-65">★</span>
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
        <div className="flex flex-col items-end pr-48 ">
          <img className="w-1/2 border border-black " src={Id} />
        </div>
      </div>
    </div>
  );
}

export default About;
