import { PhoneIncoming, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function Contact () {
    return (
        <div id="contact"  className="flex flex-col items-center mx-auto bg-[#191919] text-white scroll-mt-20">
            <h2 className="text-center text-3xl font-bold mt-12 relative">
                Contact
                <span className="block w-20 h-1 bg-red-500 mx-auto mt-2 rounded-full"></span>
            </h2>

            <p className="text-center text-[12px] px-5 my-5 lg:text-xl lg:my-10">Have a project in mind or want to collaborate? Feel free to reach out to me through the form below or directly via email.</p>

            <div className="flex flex-col justify-between lg:flex-row gap-20">
                <div className="py-13 px-5 space-y-15 lg:w-xl lg:flex flex-col items-center lg:py-10">
                    <section className="flex flex-col">
                        <span className="flex gap-5 font-bold">
                            <PhoneIncoming className="w-6 h-6 lg:w-10 lg:h-10 text-red-500" />
                            <h4 className="lg:text-3xl">Call Me</h4>
                        </span>

                        <p className="ml-10 lg:ml-15 text-xl">+234-903-2766-169</p>
                    </section>

                    <section className="flex flex-col">
                        <span className="flex gap-5 font-bold lg:ml-10">
                            <Mail className="w-6 h-6 lg:w-10 lg:h-10 text-red-500" />
                            <h4 className="lg:text-3xl"> Email Me</h4>
                        </span>

                        <Link href="mailto:emmanuelozochi2019@gmail.com">
                            <p className="ml-10 text-base cursor-pointer lg:ml-25 lg:text-base">emmanuelozochi2019@gmail.com</p>
                        </Link>
                    </section>

                    <section className="flex flex-col">
                        <span className="flex gap-5 font-bold">
                            <MapPin className="w-6 h-6 lg:w-10 lg:h-10 text-red-500" />
                            <h4 className="lg:text-3xl"> Location </h4>
                        </span>

                        <p className="ml-10 lg:ml-15 text-xl">Anambra State, Nigeria. </p>
                    </section>
                </div>

                <div className="py-3 px-5 lg:w-xl lg:px-22">

                    <form action="#" method="POST" className="mx-auto max-w-md flex flex-col gap-4">

                        <label className="font-bold"> Name </label>
                        <input type="text" className="p-4 border-2 border-red-500 rounded-lg outline-none focus:ring-2 focus:ring-red-500" id="" placeholder="Name" />
                        
                        <label className="font-bold"> Email </label>
                        <input type="email" className="p-4 border-2 border-red-500 rounded-lg outline-none focus:ring-2 focus:ring-red-500" id="" placeholder="Email" />

                        <label className="font-bold"> Subject </label>
                        <input type="text" className="p-4 border-2 border-red-500 rounded-lg outline-none focus:ring-2 focus:ring-red-500" placeholder="Subject" />

                        <label className="font-bold"> Message </label>
                        <textarea rows={5}  className="p-4 border-2 border-red-500 rounded-lg outline-none focus:ring-2 focus:ring-red-500" id="" placeholder="Enter Your Message" ></textarea>

                        <button type="submit" className="bg-red-500 text-white font-semibold mt-5 py-3 rounded-lg hover:bg-red-600 transition cursor-pointer">
                            Send Message
                        </button>

                    </form>

                </div>

            </div>

            <section className="flex flex-col items-center text-xl my-20 lg:text-2xl">
                <h2 className="capitalize">Let me get you a beautiful website</h2>

                <Link href="https://wa.me/2349032766169?text=Hi%20Emmanuel,%0A%0AI%20would%20like%20to%20hire%20you%20for%20a%20project.%0AService%20needed:%20__________%0A%0AThank%20you."
                    target="_blank"
                    >
                    <button className="bg-red-500 py-3 px-5 rounded-full font-bold mt-10 hover:bg-transparent border-2 border-red-500 cursor-pointer"> Hire Me </button>
                </Link>

            </section>
            
        </div>
    )
}