import About from "@/Components/About";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Project from "@/Components/Project";
import Services from "@/Components/Services";
import Contact from "@/Components/Contact"
import Footer from "@/Components/Footer";

export default function Portfolio() {
    return (
       <div>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Project />
            <Contact />
            <Footer />
       </div>
    )
}