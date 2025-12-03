"use client";

import { X, House, User, FolderOpenDot, MessageSquareQuote, Table } from "lucide-react";

export default function Sidebar({
    closeSidebar,
}: {
    closeSidebar: () => void;
}) {
    return (
       <div className="flex flex-col bg-[#181919] text-white py-7 w-full lg:hidden">
            <span className="px-5 cursor-pointer" onClick={closeSidebar}>
                <X size={50}/>
            </span>

            <ul className="uppercase text-[1F1F1F] mt-10 space-y-5 px-5">
                <span className="flex gap-5 cursor-pointer items-center">
                    <House size={25} color="red" />
                    <li>Home</li>
                </span>

                <span className="flex gap-5 items-center cursor-pointer">
                    <User size={25} color="red" />
                    <li>About</li>
                </span>

                <span className="flex gap-5 items-center cursor-pointer">
                    <Table size={25} color="red" />
                    <li>Services</li>
                </span>

                <span className="flex gap-5 items-center cursor-pointer">
                    <FolderOpenDot size={25} color="red"/>
                    <li>Projects</li>
                </span>

                <span className="flex gap-5 items-center cursor-pointer">
                    <MessageSquareQuote size={25} color="red" />
                    <li>Contact</li>
                </span>

            </ul>
       </div>
    )
}