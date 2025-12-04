import Image from "next/image";
import NextJsLogo from "@/public/next-js.svg";
import ReactJsLogo from "@/public/react-1.svg";
import TsLogo from "@/public/typescript.svg";
import JsLogo from "@/public/JavaScript-logo.png";
import API from "@/public/images.png";
import TailwindLogo from "@/public/tailwindcss.svg";
import HTML from "@/public/html-1.svg";
import CSS from "@/public/css.png";
import Bootstrap from "@/public/bootstrap-5-1.svg";
import Git from "@/public/git-icon.svg";

export default function AboutMe() {

    const skills = [
        { name: "Next.Js", icon: NextJsLogo },
        { name: "React.Js", icon: ReactJsLogo },
        { name: "TypeScript", icon: TsLogo },
        { name: "JavaScript", icon: JsLogo },
        { name: "RESTful API", icon: API },
        { name: "Tailwind CSS", icon: TailwindLogo },
        { name: "HTML", icon: HTML },
        { name: "CSS", icon: CSS },
        { name: "Bootstrap", icon: Bootstrap },
        { name: "Git & GitHub", icon: Git },
    ];

  return (
    <section id="about" className="w-full bg-[#242121] scroll-mt-20 text-white py-16 px-6 lg:px-20">
      <h2 className="text-center text-3xl font-bold mb-12 relative">
        About Me
        <span className="block w-20 h-1 bg-red-500 mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-20 max-w-6xl mx-auto">

        <div className="bg-[#11121b] rounded-xl p-6 lg:p-10 shadow-lg border border-purple-800/20 max-w-xl">
          <h3 className="text-2xl font-bold mb-4 text-white"> Developer Profile  </h3>

          <p className="text-gray-300 leading-relaxed text-[15px] lg:text-base">
            I am a frontend engineer with a solid grasp of HTML, CSS, JavaScript (ES6+), 
            and React. I enjoy building clean, responsive, and user-friendly interfaces. 
            I focus on writing maintainable code, improving performance, and staying current 
            with modern frontend trends. I am excited to contribute to teams that value 
            great design and thoughtful development.
          </p>
        </div>

        <div className="flex flex-col max-w-xl">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">Passionate Frontend Engineer </h3> 

            <p className="text-gray-400 leading-relaxed mb-8 text-[15px] lg:text-base">
                I specialize in frontend technologies and modern UI development. 
                My focus is always on accessibility, performance, and delivering 
                clean, intuitive user experiences.
            </p>

            <h4 className="text-lg font-semibold mb-4">My Skills</h4>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill) => (
                    <span
                    key={skill.name}
                    className="flex items-center gap-3 bg-[#11121b] text-gray-300 px-4 py-3 rounded-lg text-sm border border-red-500 hover:border-red-500 transition"
                    >
                    <Image
                        src={skill.icon}
                        alt={skill.name}
                        className="w-6 h-6 object-contain"
                    />
                    <span className="font-medium">{skill.name}</span>
                    </span>
                ))}
            </div>

        </div>

      </div>
    </section>
  );
}