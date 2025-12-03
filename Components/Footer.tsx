import Logo from "@/public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { Mail, Facebook, Github, Twitter, Linkedin  } from "lucide-react"
 
export default function Footer () {
    return (

        <div className="lg:flex-col bg-[#242121]">

            <div className="w-full py-10 text-white flex flex-col items-center lg:flex-row lg:justify-between lg:items-center lg:px-20 gap-10">

                <span className="max-w-[100px]">
                    <Image
                    src={Logo}
                    alt="Logo"
                    className="rounded-full w-full h-full object-cover"
                    />
                </span>

                <div className="flex flex-col items-center lg:items-start">
                    <h3 className="text-2xl font-bold mb-4 text-center lg:text-left">
                    Quick Links
                    </h3>

                    <section className="flex flex-col items-center mt-5 lg:items-start">

                        <span className="flex items-center gap-4 font-bold mb-4">
                            <Mail className="w-6 h-6 lg:w-10 lg:h-10 text-red-500" />
                            <Link href="mailto:emmanuelozochi2019@gmail.com">
                            <p className="text-sm lg:text-base cursor-pointer">
                                emmanuelozochi2019@gmail.com
                            </p>
                            </Link>
                        </span>

                        <span className="flex space-x-4">
                            <Link href="https://www.facebook.com/youngozo.dopa" target="_blank">
                            <Facebook className="w-6 h-6 lg:w-10 lg:h-10 text-red-500 cursor-pointer" />
                            </Link>

                            <Link href="https://github.com/Chidelemmanuel" target="_blank">
                            <Github className="w-6 h-6 lg:w-10 lg:h-10 text-red-500 cursor-pointer" />
                            </Link>

                            <Link href="https://www.twitter.com/Ozoronebillion" target="_blank">
                            <Twitter className="w-6 h-6 lg:w-10 lg:h-10 text-red-500 cursor-pointer" />
                            </Link>

                            <Link href="https://www.linkedin.com/in/emmanuel-ozochi-45b835247/" target="_blank">
                            <Linkedin className="w-6 h-6 lg:w-10 lg:h-10 text-red-500 cursor-pointer" />
                            </Link>
                        </span>

                    </section>
                </div>

                <div className="flex justify-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold transition"> Buy me a Coffee </button>
                </div>

            </div>

            <section className="flex flex-col items-center text-white">

                <hr className="mt-5 w-full border-gray-300" />

                <p className="mt-5">© 2025 Ozochi Emmanuel. All rights reserved.</p>
            </section>

        </div>
    );
}