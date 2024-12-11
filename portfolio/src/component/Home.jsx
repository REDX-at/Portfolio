import OffMan from "../imgs/OffMan.png";
import CercleMe from "../imgs/CercleMe.png";
import Icon from "../utils/Utils";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

AOS.init();

export default function Home() {
  return (
    <div className="relative">
      <img
        src={OffMan}
        alt="Pictures of Me"
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mt-20 w-[1050px]"
      ></img>
      <div className="bg-black">
        <div className="h-20 grid grid-cols-5 gap-2 pt-10 text-center absolute w-full">
          <span
            className={`self-center justify-self-center font-bold text-xl text-white bg-black py-6 rounded-full w-80 opacity-100 shadow-md`}
          >
            Designed By{" "}
            <span className={`bg-red-600 text-white px-4 rounded-full py-1`}>
              Redx
            </span>
          </span>
          <button
            className={`bg-white w-52 mx-auto rounded-full text-black opacity-100 shadow-md col-start-5 col-end-6 cursor-pointer`}
          >
            <div className="flex justify-center gap-6 font-bold items-center">
              <span>Hire me</span>
              {Icon.download}
            </div>
          </button>
        </div>
        <div className="h-screen grid grid-cols-2 pt-72 pb-52">
          {/* // first Grid */}
          <div
            className="text-white ml-32 flex flex-col justify-between z-20"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div>
              <h1 className="text-9xl font-poppins font-bold leading-none">
                Hi, I'm Aimen Taoussi
              </h1>
              <div className="mt-5">
                <span className="text-2xl font-bold bg-red-600 rounded-full px-4 py-3">
                  Designer & Developer
                </span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold w-1/2">
                “ Where creativity meets functionality – crafting designs and
                code that inspire "
              </h1>
            </div>
            <div>
              <span className="text-2xl bg-red-600 w-auto rounded-full px-6 py-2 font-bold">
                Project
              </span>
              <ul className="mt-6 font-semibold">
                <li>+6 Brand Grahphic Design</li>
                <li>+5 UI / UX Design</li>
                <li>2 Front End Porject</li>
              </ul>
            </div>
          </div>
          {/* // seconde Grid */}
          <div
            className="ml-[500px] flex flex-col gap-16"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="flex flex-col">
              <div className="text-white text-2xl font-bold flex bg-red-600 py-3 px-6 rounded-l-full items-center gap-5 justify-between">
                <h1>SKILLS</h1>
                {Icon.skills}
              </div>
              <p className="text-white text-xl mt-6 font-semibold self-center">
                A versatile designer and developer specializing in branding,
                intuitive UI/UX, and responsive web solutions.
              </p>
            </div>
            <img src={CercleMe} className="w-[400px] self-center"></img>
          </div>
        </div>
        <div className="flex gap-10 justify-self-end absolute bottom-6 left-28">
          <a href="https://www.fiverr.com/taaimen" target="_blank">
            {Icon.fiver}
          </a>
          <a href="https://dribbble.com/Redx-at" target="_blank">
            {Icon.dribbble}
          </a>
        </div>
        <div className="flex gap-10 absolute bottom-6 right-36">
          <a
            href="https://www.linkedin.com/in/aimen-taoussi-251684280/"
            target="_blank"
          >
            {Icon.linkedin}
          </a>
          <a href="https://github.com/REDX-at" target="_blank">
            {Icon.github}
          </a>
        </div>
      </div>
    </div>
  );
}
