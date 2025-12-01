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

export default function About () {
    return (
        <div className="flex items-center bg-[#242121] w-full text-white">
            <div className="flex flex-col justify-between lg:flex-row w-full px-10">
                <div className="flex flex-col w-[250px] text-center mt-5 lg:flex lg:w-xl lg:mt-10">
                    <h1 className="text-3xl text-center font-bold">About Me</h1>

                    <p className="mt-5">
                        I am a frontend engineer with a solid grasp of HTML, CSS, JavaScript (ES6+), and React. I enjoy building clean,
                        responsive, and user-friendly interfaces. I focus on writing maintainable code, improving performance, and
                        staying current with modern frontend trends. I am excited to contribute to teams that value great design and
                        thoughtful development.
                    </p>
                </div>

                <div className="flex flex-col mt-5 lg:flex lg:w-xl lg:my-5">
                    <h2 className="text-4xl text-center  lg:text-left font-bold mt-5">My Skills</h2>

                    <section className="flex flex-col items-center lg:flex-row gap-3 mt-5">
                        <span className="flex items-center gap-2 bg-neutral-700 rounded-md p-2 lg:w-auto">
                            <Image src={NextJsLogo} alt="Next-Logo" className="w-7 h-7 object-contain"/>
                            <h4 className="text-xl">Next.Js</h4>
                        </span>

                        <span className="flex items-center gap-2 bg-neutral-700 rounded-md p-2">
                            <Image src={ReactJsLogo} alt="React-Logo" className="w-7 h-7 object-contain" />
                            <h4 className="text-xl">React.Js</h4>
                        </span>

                        <span className="flex items-center gap-2 bg-neutral-700 rounded-md p-2">
                            <Image src={TsLogo} alt="TypeScript-Logo" className="w-7 h-7 object-contain"/>
                            <h4 className="text-xl">TypeScript</h4>
                        </span>

                        <span className="flex items-center gap-2 bg-neutral-700 rounded-md p-2">
                            <Image src={JsLogo} alt="JavaScript-Logo" className="w-7 h-7 object-contain"/>
                            <h4 className="text-xl">JavaScript</h4>
                        </span>
                    </section>

                    <section className="flex flex-col lg:flex-row gap-3 mt-5">
                        <span className="flex items-center gap-2 bg-neutral-700 rounded-md p-2">
                            <Image src={API} alt="Next-Logo" className="w-7 h-7 object-contain"/>
                            <h4 className="text-xl">RESTful API</h4>
                        </span>

                        <span className="flex items-center gap-2 bg-neutral-700 rounded-md p-2">
                            <Image src={TailwindLogo} alt="Next-Logo" className="w-7 h-7 object-contain"/>
                            <h4 className="text-xl">Tailwind CSS</h4>
                        </span>

                        <span className="flex items-center gap-2 bg-neutral-700 rounded-md p-2">
                            <Image src={HTML} alt="Next-Logo" className="w-7 h-7 object-contain"/>
                            <h4 className="text-xl">HTML</h4>
                        </span>

                        <span className="flex items-center gap-2 bg-neutral-700 rounded-md p-2">
                            <Image src={CSS} alt="Next-Logo" className="w-7 h-7 object-contain"/>
                            <h4 className="text-xl">CSS</h4>
                        </span>

                    </section>

                    <section className="flex flex-col lg:flex-row gap-3 mt-5">
                        <span className="flex items-center gap-2 bg-neutral-700 rounded-md p-2">
                            <Image src={Bootstrap} alt="Next-Logo" className="w-7 h-7 object-contain"/>
                            <h4 className="text-xl">Bootstrap</h4>
                        </span>

                        <span className="flex items-center gap-2 bg-neutral-700 rounded-md p-2">
                            <Image src={Git} alt="Next-Logo" className="w-7 h-7 object-contain"/>
                            <h4 className="text-xl">Git & Github</h4>
                        </span>
                    </section>
                </div>
            </div> 
        </div>                  
    );
} 