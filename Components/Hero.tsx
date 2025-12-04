"use client";

import Image from "next/image";
import Passport from "@/public/passport.jpg";
import { ReactTyped } from "react-typed";
import { Facebook, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full bg-black pt-[90px] scroll-mt-[90px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-20 min-h-[calc(100vh-90px)] flex flex-col justify-center 2xl:w-[60%]">

        <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:text-left gap-16">

          <div className="flex flex-col items-center lg:items-start max-w-xl text-white">
            <h4 className="text-lg lg:text-xl tracking-[0.3em] text-gray-400 font-semibold mb-4">
              HELLO, MY NAME IS
            </h4>

            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-4 2xl:text-5xl ">
              Ozochi <span className="text-red-500">Emmanuel</span>
            </h1>

            <h3 className="text-xl lg:text-3xl font-bold mb-6">
              I am a{" "}
              <span className="text-red-500">
                <ReactTyped
                  strings={[
                    "Frontend Engineer",
                    "Mobile App Developer",
                    "Problem Solver",
                  ]}
                  typeSpeed={120}
                  backSpeed={50}
                  loop
                />
              </span>
            </h3>

            <a
              href="https://drive.google.com/uc?export=download&id=1_JRu8j6fY9NRcxaW0iIWJekFVqbIpWq2"
              rel="noopener noreferrer"
            >
              <button className="mt-6 rounded-full font-bold border-2 border-red-500 px-8 py-4 hover:bg-red-500 transition">
                Download Resume
              </button>
            </a>
          </div>

          <div className="flex justify-center lg:justify-end w-full lg:w-[45%] lg:pt-30">
            <Image
              src={Passport}
              alt="Passport"
              className="rounded-full w-[260px] sm:w-[320px] lg:w-[420px]"
              priority
            />
          </div>
        </div>

        <div className="flex justify-center my-10 lg:justify-start gap-4 lg:my-16 lg:mt-6">
          <span className="rounded-full bg-red-500 p-3 cursor-pointer hover:bg-transparent hover:border-[3px] hover:border-red-500 transition">
            <Link href="https://www.facebook.com/youngozo.dopa" target="_blank">
              <Facebook className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
            </Link>
          </span>

          <span className="rounded-full bg-red-500 p-3 cursor-pointer hover:bg-transparent hover:border-[3px] hover:border-red-500 transition">
            <Link href="https://github.com/Chidelemmanuel" target="_blank">
              <Github className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
            </Link>
          </span>

          <span className="rounded-full bg-red-500 p-3 cursor-pointer hover:bg-transparent hover:border-[3px] hover:border-red-500 transition">
            <Link href="https://www.twitter.com/Ozoronebillion" target="_blank">
              <Twitter className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
            </Link>
          </span>

          <span className="rounded-full bg-red-500 p-3 cursor-pointer hover:bg-transparent hover:border-[3px] hover:border-red-500 transition">
            <Link
              href="https://www.linkedin.com/in/emmanuel-ozochi-45b835247/"
              target="_blank"
            >
              <Linkedin className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
