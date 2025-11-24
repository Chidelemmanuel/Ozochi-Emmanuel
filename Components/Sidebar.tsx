import { X, House, User, FolderOpenDot, MessageSquareQuote, Table } from "lucide-react";

export default function Sidebar() {
    return (
       <div className="hidden flex flex-col bg-[#181919] text-white">
            <span className="bg-[#121212]">
                <X size={50}/>
            </span>

            <ul className="uppercase text-[1F1F1F] mt-10 space-y-5">
                <span className="flex gap-5 items-center">
                    <House size={25}/>
                    <li>Home</li>
                </span>

                <span className="flex gap-5 items-center">
                    <User size={25}/>
                    <li>About</li>
                </span>

                <span className="flex gap-5 items-center">
                    <Table size={25}/>
                    <li>Services</li>
                </span>

                <span className="flex gap-5 items-center">
                    <FolderOpenDot size={25}/>
                    <li>Projects</li>
                </span>

                <span className="flex gap-5 items-center">
                    <MessageSquareQuote size={25}/>
                    <li>Contact</li>
                </span>

            </ul>
       </div>
    )
}