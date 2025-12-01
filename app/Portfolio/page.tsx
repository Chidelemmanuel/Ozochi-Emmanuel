import About from "@/Components/About";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Services from "@/Components/Services";
import Sidebar from "@/Components/Sidebar";

export default function Portfolio() {
    return (
       <div>
            <Navbar />
            <Sidebar />
            <Hero />
            <About />
            <Services />
       </div>
    )
}