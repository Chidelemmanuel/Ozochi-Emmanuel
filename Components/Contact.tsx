import { PhoneIncoming, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function Contact () {
    return (
        <div className="flex flex-col items-center mx-auto">
            <h1 className="text-xl font-bold mt-10 lg:text-5xl">Contact</h1>

            <div className="flex flex-col justify-between mt-10 lg:flex-row gap-20">
                <div className="border py-3 px-5 space-y-5">
                    <section className="flex flex-col">
                        <span className="flex gap-5 font-bold">
                            <PhoneIncoming color="red"/>
                            <h4>Call Me</h4>
                        </span>

                        <p>+234-903-2766-169</p>
                    </section>

                    <section className="flex flex-col">
                        <span className="flex gap-5 font-bold">
                            <Mail color="red"/>
                            <h4> Email Me</h4>
                        </span>

                        <Link href="mailto:emmanuelozochi2019@gmail.com">
                            <p className="cursor-pointer">emmanuelozochi2019@gmail.com</p>
                        </Link>
                    </section>

                    <section className="flex flex-col">
                        <span className="flex gap-5 font-bold">
                            <MapPin color="red"/>
                            <h4> Location </h4>
                        </span>

                        <p>Anambra State, Nigeria. </p>
                    </section>
                </div>

                <div className="border py-3 px-5">
                    <h1>yurbjibusu nl</h1>
                </div>

            </div>

            
        </div>
    )
}