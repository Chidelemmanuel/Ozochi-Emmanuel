"use client";

import Image from "next/image";
import Logo from "@/public/Logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
// import { useTheme } from "next-themes";
import Sidebar from "./Sidebar";
import Link from "next/link";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev?) => !prev);
  }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex w-full bg-white dark:bg-black flex-col">   
            <div className="w-full flex items-center justify-between py-2 px-4 lg:px-20 2xl:w-[80%] mx-auto">
                <Link href="/" className="max-w-[60px] lg:max-w-20">
                    <span>
                        <Image src={Logo} alt="Logo" className="rounded-full w-full h-full object-cover"/>
                    </span>
                </Link>

                <ul className="hidden lg:flex gap-10 font-bold uppercase text-white px-20">
                    <li>
                        <Link href="#home" className="hover:text-red-500 transition"> Home </Link>
                    </li>

                    <li>
                        <Link href="#about" className="hover:text-red-500 transition"> About </Link>
                    </li>

                    <li>
                        <Link href="#services" className="hover:text-red-500 transition" > Services </Link>
                    </li>

                    <li>
                        <Link href="#project" className="hover:text-red-500 transition" > projects </Link>
                    </li>

                    <li>
                        <Link href="#contact" className="hover:text-red-500 transition" > Contact </Link>
                    </li>
                </ul>

                <span className="flex gap-7 text-white dark:text-white items-center">

                    {!isOpen && (
                        <Menu
                        size={35}
                        onClick={toggleMenu}
                        className="lg:hidden cursor-pointer"
                        />
                    )}

                    {isOpen && (
                        <X
                        size={35}
                        onClick={toggleMenu}
                        className="lg:hidden cursor-pointer"
                        />
                    )}
                
                </span>

                <Link href="#" className="hidden lg:block">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold transition cursor-pointer"> Buy me a Coffee </button>
                </Link>
                
            </div>

           <hr className="border border-white w-full" />

           {isOpen && <Sidebar closeSidebar={() => setIsOpen(false)} />}
        </nav>

    )
}