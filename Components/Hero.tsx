import Image from "next/image";
import Passport from "@/public/passport.jpg";

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center text-center h-screen bg-[#000000] text-white px-4  2xl:w-[60%] mx-auto">
            <div className=""> 
                <h4 className="lg:text-5xl text-[#fcfc] font-bold"> Hello, my name is</h4>
                <h1 className="lg:text-6xl font-extrabold">Ozochi <span className="text-red-500">Emmanuel</span></h1>
                <h3 className="lg:text-3xl font-bold">I am a <span className="text-red-500"> Frontend</span> Engineer.</h3>
                
            </div>

            <span className="hidden lg: 2xl:">
                <Image src={Passport} alt="Passport" /> 
            </span>

            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Explore More
            </button> */}
        </div>
    );
}