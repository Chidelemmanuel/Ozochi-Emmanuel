"use client";

import Image from "next/image";
import Logo from "@/public/Logo.png";
import { Menu, SunMoon, X } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen((prev) => !prev); 
    }

    return (
        <nav className="flex w-full bg-[#000000] flex-col">
            <div className="w-full flex items-center justify-between py-2 px-4 2xl:w-[60%] mx-auto">
                <span className="max-w-[60px] lg:max-w-[100px]">
                    <Image src={Logo} alt="Logo" className="rounded-full w-full h-full object-cover"/>
                </span>

                <ul className="hidden lg:flex gap-10 font-bold uppercase text-white">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>

                <span className="flex gap-7 text-white"> 
                    <SunMoon size={30} /> 
                    <Menu size={35} onClick={toggleMenu} className="lg:hidden"/> 
                    <X size={50} className="hidden lg:hidden" />
                </span>

                <Link href="#" className="hidden lg:block">
                    <button className="bg-red-500 font-bold text-white rounded py-2 cursor-pointer px-5">Buy me a Coffee</button>
                </Link>

            </div>

           <hr className="border border-white w-full" />

           {isOpen && <Sidebar closeSidebar={() => setIsOpen(false)} />}
        </nav>

    )
}