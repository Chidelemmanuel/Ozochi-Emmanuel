import Image from "next/image";
import Ascent from "@/public/ascent.png"


export default function Project () {
    return (
        <div className="flex flex-col items-center bg-[#242121] text-white mx-auto" >
            <h1 className="text-3xl mt-5 font-bold lg:text-5xl">My Projects</h1>

            <p className="italic mt-7 text-center text-[12px] lg:text-2xl">Here are some of my recent projects showcasing my skills and expertise in frontend development.</p>

            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10 p-10">

                <div className="border border-white p-2 rounded-lg hover:scale-105 ease-in duration-300">
                    <span>
                        <Image src={Ascent} alt="Project Ascent web view" className="rounded-lg " />
                    </span>

                    <h2 className="text-xl mt-5 font-semibold text-red-500 lg:text-4xl"> AI Project Ascent </h2>

                    <p className="mt-5">
                        A smart A.I assistant built by my team and I that helps students brainstorm project ideas, generate titles, define scope, and 
                        choose the right tech stack. Built to streamline planning and boost creativity using AI.
                    </p>

                    <section className="mt-10 space-x-3">
                        <span>Next.Js</span>
                        <span>Gemini AI API</span>
                        <span>Tailwindcss</span>
                        <span>Typescript</span>
                    </section>
                </div>

                <div className="">
                    <h2 className="text-xl mt-5 font-semibold lg:text-4xl"> Osmaxin Developers </h2>
                </div>

                <div className="">
                    <h2 className="text-xl mt-5 font-semibold lg:text-4xl"> HNG Audiophile </h2>
                </div>

                <div className="">
                    <h2 className="text-xl mt-5 font-semibold lg:text-4xl"> Real Time Attendance Application </h2>
                </div>

                <div className="">
                    <h2 className="text-xl mt-5 font-semibold lg:text-4xl"> Swiss Park Hotel and Suites </h2>
                </div>

            </div>
        </div>
    );
}