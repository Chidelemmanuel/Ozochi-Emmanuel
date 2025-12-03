import Image from "next/image";
import Passport from "@/public/passport.jpg";
// import Resume from "";
import { Facebook, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link"

export default function Hero() {
    return (
        <div className="flex flex-col items-center w-full bg-[#000000]">
            <div className="flex flex-col justify-center items-center text-center h-screen w-full text-white px-4 lg:flex-row lg:justify-between 2xl:w-[60%] mx-auto">
                <div className="flex flex-col items-center mt-10"> 
                    <h4 className="text-2xl lg:text-5xl text-[#fcfc] font-bold"> Hello, my name is</h4>
                    <h1 className="text-3xl lg:text-6xl font-extrabold">Ozochi <span className="text-red-500">Emmanuel</span></h1>
                    <h3 className="text-2xl lg:text-3xl font-bold">I am a <span className="text-red-500"> Frontend</span> Engineer.</h3>

                    <a href="https://drive.google.com/uc?export=download&id=1_JRu8j6fY9NRcxaW0iIWJekFVqbIpWq2" rel="noopener noreferrer">
                        <button className="rounded-full font-bold border-2 border-red-500 p-5 mt-10 hover:bg-red-500 cursor-pointer"> Download Resume </button>
                    </a>
                </div>

                <span className="flex flex-col mt-10">
                    <Image src={Passport} alt="Passport" className="rounded-full w-[300px] lg:w-[400px]" /> 
                </span>
                
            </div>  

            <section className="flex gap-2 my-12 lg:flex lg:gap-10">
                <span className="rounded-full bg-red-500 p-3 cursor-pointer hover:bg-transparent hover:border-[3px] hover:border-red-500 transition">
                    <Link href="https://www.facebook.com/youngozo.dopa" target="_blank"> <Facebook className="w-5 h-5 lg:w-[30px] lg:h-[30px] text-white" /> </Link>
                </span>

                <span className="rounded-full bg-red-500 p-3 cursor-pointer hover:bg-transparent hover:border-[3px] hover:border-red-500 transition">
                    <Link href="https://github.com/Chidelemmanuel" target="_blank"> <Github className="w-5 h-5 lg:w-[30px] lg:h-[30px] text-white" /> </Link>
                </span>


                <span className="rounded-full bg-red-500 p-3 cursor-pointer hover:bg-transparent hover:border-[3px] hover:border-red-500 transition">
                    <Link href="https://www.twitter.com/Ozoronebillion" target="_blank"> <Twitter className="w-5 h-5 lg:w-[30px] lg:h-[30px] text-white" /> </Link>
                </span>

                <span className="rounded-full bg-red-500 p-3 cursor-pointer hover:bg-transparent hover:border-[3px] hover:border-red-500 transition">
                    <Link href="https://www.linkedin.com/in/emmanuel-ozochi-45b835247/" target="_blank"> <Linkedin className="w-5 h-5 lg:w-[30px] lg:h-[30px] text-white" /> </Link>
                </span>

            </section>
         
        </div>
    );
}