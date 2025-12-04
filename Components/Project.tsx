import Image from "next/image";
import Ascent from "@/public/ai.png"
import Osmaxin from "@/public/osmaxin.png"
import Hng from "@/public/audiophile.png"
import Attendance from "@/public/attendance.png"
import Hotel from "@/public/hotel.png"
import { Eye, Github } from "lucide-react";
import Link from "next/link"


export default function Project () {
    return (
        <div id="project"  className="flex flex-col items-center bg-[#242121] text-white mx-auto overflow-x-hidden">
            <h2 className="text-center text-3xl font-bold mt-12 relative">
                My Projects
                <span className="block w-20 h-1 bg-red-500 mx-auto mt-2 rounded-full"></span>
            </h2>

            <p className="italic mt-7 text-center text-[12px] lg:text-2xl">Here are some of my recent projects showcasing my skills and expertise in frontend development.</p>

            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10 p-10">

                <div className="border border-white rounded-lg hover:scale-105 ease-in duration-300">
                    <span>
                        <Image src={Ascent} alt="Project Ascent web view" className="rounded-t-lg object contain" />
                    </span>

                    <h2 className="text-xl mt-5 px-2 font-semibold text-red-500 lg:text-4xl"> AI Project Ascent </h2>

                    <p className="mt-5 px-2">
                        A smart A.I assistant built by my team and I that helps students brainstorm project ideas, generate titles, define scope, and 
                        choose the right tech stack. Built to streamline planning and boost creativity using AI.
                    </p>

                    <section className="flex flex-col my-10 px-2 space-y-2">
                        <div className="space-x-3">
                            <span className="bg-[#7a4747] px-3 py-2 rounded-md">Next.Js</span>
                            <span className="bg-[#7a4747] px-3 py-2 rounded-md">Gemini AI API</span>
                        </div>

                        <div className="mt-5 space-x-3">
                            <span className="bg-[#7a4747] px-3 py-2 rounded-md">Typescript</span>
                            <span className="bg-[#7a4747] px-3 py-2 rounded-md">Tailwindcss</span>
                        </div>
                        
                    </section>

                    <hr className="mx-auto"/>

                    <section className="flex justify-between p-5 ">
                        <Link href="https://ai-project-ascent.vercel.app/" target="_blank">
                            <span className="flex gap-2">
                                <Eye color="red" />
                                <h4 className="font-bold">Live</h4>
                            </span>
                        </Link>
                        
                        <Link href="https://github.com/iamdikachi/AI-Project_Ascent" target="_blank">
                            <span className="flex gap-2">
                                <Github  color="red"/>
                                <h4 className="font-bold">Code</h4>
                            </span>
                        </Link>    
                        
                    </section>

                </div>

                <div className="border border-white rounded-lg hover:scale-105 ease-in duration-300">
                    <span>
                        <Image src={Osmaxin} alt="Project Ascent web view" className="rounded-t-lg object contain" />
                    </span>

                    <h2 className="text-xl mt-5 px-2 font-semibold text-red-500 lg:text-4xl"> Osmaxin Developers </h2>

                    <p className="mt-5 px-2">
                        At Osmaxin, we craft bespoke digital experiences integrating strategy, design, and cutting-edge technology to fuel the growth 
                        of ambitious businesses and deliver tangible results. Your success is our core focus, which is why we are committed to building 
                        every solution to the highest standard of excellence.
                        At Osmaxin, we craft bespoke digital experiences integrating strategy, design, and cutting-edge technology to fuel the growth 
                        of ambitious businesses and deliver tangible results. 
                    </p>

                    <section className="flex flex-col my-10 px-2 space-y-2">
                        <div className="space-x-3">
                            <span className="bg-[#7a4747] px-3 py-2 rounded-md">Next.Js</span>
                            <span className="bg-[#7a4747] px-3 py-2 rounded-md">Animation</span>
                        </div>

                         <div className="mt-5 space-x-3">
                            <span className="bg-[#7a4747] px-3 py-2 rounded-md">Typescript</span>
                            <span className="bg-[#7a4747] px-3 py-2 rounded-md">Tailwindcss</span>
                        </div>
                        
                    </section>

                    <hr className="mx-auto"/>

                    <section className="flex justify-between p-5">
                        <Link href="https://osmaxin.com/" target="_blank">
                            <span className="flex gap-2">
                                <Eye color="red" />
                                <h4 className="font-bold">Live</h4>
                            </span>
                        </Link>
                        
                        <Link href="https://github.com/Chidelemmanuel" target="_blank">
                            <span className="flex gap-2">
                                <Github  color="red"/>
                                <h4 className="font-bold">Code</h4>
                            </span>
                        </Link>    
                        
                    </section>
                </div>

                <div className="border border-white rounded-lg hover:scale-105 ease-in duration-300">

                    <span>
                        <Image src={Hng} alt="Project Ascent web view" className="rounded-t-lg object contain" />
                    </span>

                    <h2 className="text-xl mt-5 px-2 font-semibold text-red-500 lg:text-4xl"> HNG Audiophile </h2>

                    <p className="mt-5 px-2">
                        A smart A.I assistant built by my team and I that helps students brainstorm project ideas, generate titles, define scope, and 
                        choose the right tech stack. Built to streamline planning and boost creativity using AI.
                        A smart A.I assistant builtthat helps students brainstorm project ideas,
                        choose the right tech stack. Built to streamline planning and boost creativity using AI.
                    </p>

                    <section className="flex flex-col my-10 px-2 space-y-2">
                        <div className="space-x-3">
                            <span className="bg-[#7a4747] px-3 py-2 rounded-md">Next.Js</span>
                            <span className="bg-[#7a4747] px-3 py-2 rounded-md">Typescript</span>
                            <span className="bg-[#7a4747] px-3 py-2 rounded-md">Tailwindcss</span>
                        </div>
                        
                    </section>

                    <hr className="mx-auto"/>

                    <section className="flex justify-between p-5 ">
                        <Link href="https://hng-audiophile.vercel.app/" target="_blank">
                            <span className="flex gap-2">
                                <Eye color="red" />
                                <h4 className="font-bold">Live</h4>
                            </span>
                        </Link>
                        
                        <Link href="https://github.com/Chidelemmanuel/HNG-Audiophile" target="_blank">
                            <span className="flex gap-2">
                                <Github  color="red"/>
                                <h4 className="font-bold">Code</h4>
                            </span>
                        </Link>    
                        
                    </section>

                </div>

                <div className="border border-white rounded-lg hover:scale-105 ease-in duration-300">

                    <span>
                        <Image src={Attendance} alt="Project Ascent web view" className="rounded-t-lg object contain" />
                    </span>

                    <h2 className="text-xl mt-5 px-2 font-semibold text-red-500 lg:text-4xl"> Real Time Attendance Application </h2>

                    <p className="mt-5 px-2">
                        A smart A.I assistant built by my team and I that helps students brainstorm project ideas, generate titles, define scope, and 
                        choose the right tech stack. Built to streamline planning and boost creativity using AI.
                    </p>

                    <section className="flex flex-col my-10 px-2 space-y-2">
                        <div className="space-x-3">
                            <span className="bg-[#7a4747] px-3 py-2 rounded-md">Next.Js</span>
                            <span className="bg-[#7a4747] px-3 py-2 rounded-md">Typescript</span>
                            <span className="bg-[#7a4747] px-3 py-2 rounded-md">Tailwindcss</span>
                        </div>
                    </section>

                    <hr className="mx-auto"/>

                    <section className="flex justify-between p-5 ">
                        <Link href="#" target="_blank">
                            <span className="flex gap-2">
                                <Eye color="red" />
                                <h4 className="font-bold">Live</h4>
                            </span>
                        </Link>
                        
                        <Link href="https://github.com/Chidelemmanuel/oko-Attendance-web-app" target="_blank">
                            <span className="flex gap-2">
                                <Github  color="red"/>
                                <h4 className="font-bold">Code</h4>
                            </span>
                        </Link>    
                        
                    </section>
                </div>

                <div className="border border-white rounded-lg hover:scale-105 ease-in duration-300">
                    <span>
                        <Image src={Hotel} alt="Project Ascent web view" className="rounded-t-lg object contain" />
                    </span>

                    <h2 className="text-xl mt-5 px-2 font-semibold text-red-500 lg:text-4xl"> Swiss Park Hotel and Suites </h2>

                    <p className="mt-5 px-2">
                        A smart A.I assistant built by my team and I that helps students brainstorm project ideas, generate titles, define scope, and 
                        choose the right tech stack. Built to streamline planning and boost creativity using AI.
                        A smart A.I assistant built by my team and I that helps students brainstorm project ideas,
                        choose the right tech stack. Built to streamline planning and boost creativity using AI.
                    </p>

                    <section className="flex flex-col my-10 px-2 space-y-2">
                        <div className="space-x-3">
                            <span className="bg-[#7a4747] px-3 py-2 rounded-md">HTML</span>
                            <span className="bg-[#7a4747] px-3 py-2 rounded-md">CSS</span>
                            <span className="bg-[#7a4747] px-3 py-2 rounded-md">JAVASCRIPT</span>
                        </div>
                        
                    </section>

                    <hr className="mx-auto"/>

                    <section className="flex justify-between p-5 ">
                        <Link href="https://chidelemmanuel.github.io/MY-N-D-PROJECT/" target="_blank">
                            <span className="flex gap-2">
                                <Eye color="red" />
                                <h4 className="font-bold">Live</h4>
                            </span>
                        </Link>
                        
                        <Link href="https://github.com/Chidelemmanuel/MY-N-D-PROJECT" target="_blank">
                            <span className="flex gap-2">
                                <Github  color="red"/>
                                <h4 className="font-bold">Code</h4>
                            </span>
                        </Link>    
                        
                    </section>

                </div>

            </div>
        </div>
    );
}