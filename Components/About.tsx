import Image from "next/image";
import NextJsLogo from "@/public/next-js.svg";
import ReactJsLogo from "@/public/react-1.svg";
import TsLogo from "@/public/typescript.svg";
import JsLogo from "@/public/javascript.webp";
import API from "@/public/images.png";
import TailwindLogo from "@/public/tailwindcss.svg";
import HTML from "@/public/html-1.svg";
import CSS from "@/public/CSS-Logo-2011.png";
import Bootstrap from "@/public/bootstrap-5-1.svg";
import Git from "@/public/git-icon.svg";

export default function About () {
    return (
        <div className="flex items-center bg-[#242121] w-full text-white">
            <div className="flex flex-col lg:flex">
                <div className="mt-5 p-5">
                    <h1 className="text-5xl font-bold">About Me</h1>

                    <p className="mt-5">
                        I’m a frontend engineer with a solid grasp of HTML, CSS, JavaScript (ES6+), and React. I enjoy building clean,
                        responsive, and user-friendly interfaces. I focus on writing maintainable code, improving performance, and
                        staying current with modern frontend trends. I’m excited to contribute to teams that value great design and
                        thoughtful development.
                    </p>
                </div>

                <div className="mt-5 p-5">
                    <h2 className="text-4xl font-bold">My Skills</h2>

                    <div className="flex flex-col">
                        <span className="flex gap-2 mt-5">
                            <Image src={NextJsLogo} alt="Next-Logo" className="w-5"/>
                            <h4>Next.Js</h4>
                        </span>

                        <span className="flex gap-2 mt-5">
                            <Image src={ReactJsLogo} alt="Next-Logo" className="w-5"/>
                            <h4>React.Js</h4>
                        </span>

                        <span className="flex gap-2 mt-5">
                            <Image src={TsLogo} alt="Next-Logo" className="w-5"/>
                            <h4>TypeScript</h4>
                        </span>

                        <span className="flex gap-2 mt-5">
                            <Image src={JsLogo} alt="Next-Logo" className="w-5"/>
                            <h4>JavaScript</h4>
                        </span>

                        <span className="flex gap-2 mt-5">
                            <Image src={API} alt="Next-Logo" className="w-5"/>
                            <h4>RESTful API</h4>
                        </span>

                        <span className="flex gap-2 mt-5">
                            <Image src={TailwindLogo} alt="Next-Logo" className="w-5"/>
                            <h4>Tailwind CSS</h4>
                        </span>

                        <span className="flex gap-2 mt-5">
                            <Image src={HTML} alt="Next-Logo" className="w-5"/>
                            <h4>HTML</h4>
                        </span>

                        <span className="flex gap-2 mt-5">
                            <Image src={CSS} alt="Next-Logo" className="w-5"/>
                            <h4>CSS</h4>
                        </span>

                        <span className="flex gap-2 mt-5">
                            <Image src={Bootstrap} alt="Next-Logo" className="w-5"/>
                            <h4>Bootstrap</h4>
                        </span>

                        <span className="flex gap-2 mt-5">
                            <Image src={Git} alt="Next-Logo" className="w-5"/>
                            <h4>Git & Github</h4>
                        </span>
                    </div>
                </div> 

                {/* <section className="flex flex-col font-bold mt-5 text-red-500">
                    <h4>5+ Years Experience</h4>
                    <h4>10+ Projects</h4>
                    <h4>4 Recommendations</h4>
                    <h4>20+ Courses / Certifications </h4>
                </section> */}
            </div>

        </div>
    );
} 