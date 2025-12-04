"use client";

import Link from "next/link"
import { X, House, User, FolderOpenDot, MessageSquareQuote, Table } from "lucide-react";

export default function Sidebar({
    closeSidebar,
}: {
    closeSidebar: () => void;
}) {
    return (
       <div className="flex flex-col bg-[#181919] text-white py-7 w-full lg:hidden">

            <ul className="uppercase text-[1F1F1F] space-y-5 px-5">
                <span className="flex gap-5 cursor-pointer items-center">
                    <House size={25} color="red" />
                    <li>
                        <Link href="#home" onClick={closeSidebar}  className="hover:text-red-500 transition"> Home </Link>
                    </li>
                </span>

                <span className="flex gap-5 items-center cursor-pointer">
                    <User size={25} color="red" />
                    <li>
                        <Link href="#about" onClick={closeSidebar}  className="hover:text-red-500 transition"> About </Link>
                    </li>
                </span>

                <span className="flex gap-5 items-center cursor-pointer">
                    <Table size={25} color="red" />
                    <li>
                        <Link href="#services" onClick={closeSidebar}  className="hover:text-red-500 transition" > Services </Link>
                    </li>
                </span>

                <span className="flex gap-5 items-center cursor-pointer">
                    <FolderOpenDot size={25} color="red"/>
                    <li>
                        <Link href="#project" onClick={closeSidebar} className="hover:text-red-500 transition"> Projects </Link>
                    </li>
                </span>

                <span className="flex gap-5 items-center cursor-pointer">
                    <MessageSquareQuote size={25} color="red" />
                    <li>
                        <Link href="#contact" onClick={closeSidebar}  className="hover:text-red-500 transition"> Contact </Link>
                    </li>
                </span>
            </ul>
       </div>
    )
}