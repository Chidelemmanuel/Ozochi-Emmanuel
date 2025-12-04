"use client";

import Image from "next/image";
import Logo from "@/public/Logo.png";
import { Menu, SunMoon, X, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Sidebar from "./Sidebar";
import Link from "next/link";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
    setMounted(true);
  }, []);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  if (!mounted) return null;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex w-full bg-[#000000] flex-col">   
            <div className="w-full flex items-center justify-between py-2 px-4 2xl:w-[60%] mx-auto">
                <span className="max-w-[60px] lg:max-w-[100px]">
                    <Image src={Logo} alt="Logo" className="rounded-full w-full h-full object-cover"/>
                </span>

                <ul className="hidden lg:flex gap-10 font-bold uppercase text-white">
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
                    <button onClick={toggleTheme} className="cursor-pointer">
                        {theme === "dark" ? <Sun size={30} /> : <SunMoon size={30} />}
                    </button>

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
                    <button className="bg-red-500 font-bold text-white rounded py-2 cursor-pointer px-5">Buy me a Coffee</button>
                </Link>

            </div>

           <hr className="border border-white w-full" />

           {isOpen && <Sidebar closeSidebar={() => setIsOpen(false)} />}
        </nav>

    )
}