import Image from "next/image"
// import WebDev from "@/public/webdev.png"
import Mobile from "@/public/Mobile app development company Toronto _ SKYHiDEV.jpeg" 
// import Desktop from "@/public/Sviluppo di nuove app su desktop _ Vettore Gratis.jpeg" 

export default function Services () {
    return (
        <div id="services"  className="flex flex-col items-center bg-[#101010] text-white py-10">
            <h2 className="text-center text-3xl font-bold my-5 relative">
                My Services
                <span className="block w-20 h-1 bg-red-500 mx-auto mt-2 rounded-full"></span>
            </h2>

            <div className="flex flex-col gap-10 mt-10 mx-auto lg:flex-row my-10">
                <div className="flex flex-col max-w-[300px] bg-[#191919] rounded-md items-center">
                    <span>
                        <Image src={Mobile} alt="Web-Dev-Img" className="w-75 rounded-t-lg object contain" />
                    </span> 

                    <h2 className="text-xl font-bold mt-7 mb-5">Web Development</h2>

                    <p className="text-center p-3">
                        Every website should be built with two primary goals. Firstly, it needs
                        work across all devices. Secondly,
                        it needs to be fast as possible.
                    </p>

                    <button className="bg-red-500 py-3 px-5 rounded-full font-bold mt-10 mb-5 hover:bg-transparent border-3 border-red-500 cursor-pointer">Read More</button>

                </div>

                <div className="flex flex-col max-w-[300px] bg-[#191919] rounded-md items-center">
                    <span>
                        <Image src={Mobile} alt="Web-Dev-Img" className="w-75 rounded-md" />
                    </span> 

                    <h2 className="text-xl font-bold mt-7 mb-5">Mobile App Development</h2>

                    <p className="text-center p-3">
                        Every website should be built with two primary goals. Firstly, it needs
                        work across all devices. Secondly,
                        it needs to be fast as possible.
                    </p>

                    <button className="bg-red-500 py-3 px-5 rounded-full font-bold mt-10 mb-5 hover:bg-transparent border-3 border-red-500 cursor-pointer">Read More</button>
                </div>

               <div className="flex flex-col max-w-[300px] bg-[#191919] rounded-md items-center">
                    <span>
                        <Image src={Mobile} alt="Web-Dev-Img" className="w-75 rounded-md" />
                    </span> 

                    <h2 className="text-xl font-bold mt-7 mb-5">Desktop App Development</h2>

                    <p className="text-center p-3">
                        Every website should be built with two primary goals. Firstly, it needs
                        work across all devices. Secondly,
                        it needs to be fast as possible.
                    </p>

                    <button className="bg-red-500 py-3 px-5 rounded-full font-bold mt-10 mb-5 hover:bg-transparent border-3 border-red-500 cursor-pointer">Read More</button>
               </div>

            </div>
        </div>
    )
}