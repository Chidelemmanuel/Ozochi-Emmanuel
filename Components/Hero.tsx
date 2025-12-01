import Image from "next/image";
import Passport from "@/public/passport.jpg";

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center text-center h-130 bg-[#000000] text-white px-4  lg:flex-row lg:justify-around 2xl:w-[60%] mx-auto">
            <div className="flex flex-col items-center my-15"> 
                <h4 className="text-2xl lg:text-5xl text-[#fcfc] font-bold"> Hello, my name is</h4>
                <h1 className="text-3xl lg:text-6xl font-extrabold">Ozochi <span className="text-red-500">Emmanuel</span></h1>
                <h3 className="text-2xl lg:text-3xl font-bold">I am a <span className="text-red-500"> Frontend</span> Engineer.</h3>
            </div>

            <span className="flex flex-col">
                <Image src={Passport} alt="Passport" className="rounded-full w-[300px] lg:w-[400px]" /> 
            </span>

            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Explore More
            </button> */}
        </div>
    );
}