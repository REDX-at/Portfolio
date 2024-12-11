import Icon, { Colors } from "../utils/Utils";
import Man1 from "../imgs/Man1.png";
import Man2 from "../imgs/Man2.png";

export default function AboutMe() {
  return (
    <div>
      {" "}
      <div className="grid grid-cols-6">
        <div
          className="h-screen col-span-4 text-center flex flex-col items-center justify-center"
          // data-aos="fade-right"
          // data-aos-duration="1000"
          // data-aos-delay="500"
        >
          <div className="flex flex-col items-center justify-center gap-16">
            <div>
              <span className="text-[280px] font-bold ">About Me</span>
            </div>
            <div className="w-[60%] ">
              <p className="text-3xl leading-loose">
                Hi Im Aimen Taoussi AKA
                <span className="font-bold text-red-600">(Redx)</span> I am a
                professional{" "}
                <span
                  className={`text-red-600 font-bold rounded-full py-1 px-4`}
                >
                  Graphic Designer
                </span>{" "}
                ,{" "}
                <span
                  className={`text-red-600 font-bold rounded-full py-1 px-4`}
                >
                  UI/UX Designer
                </span>
                , and{" "}
                <span
                  className={`text-red-600 font-bold rounded-full py-1 px-4`}
                >
                  Front-End Developer
                </span>{" "}
                with a passion for creating visually compelling designs and
                intuitive digital experiences. I specialize in transforming
                ideas into impactful visuals and functional interfaces,
                combining creativity with technical precision to deliver
                exceptional results.
              </p>
            </div>
            <div className="bg-black py-6 px-10 rounded-full mt-11 cursor-pointer">
              <div className="flex items-center gap-6">
                <button className="text-2xl text-white font-bold">
                  <p>Go check</p>
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-16 mt-4">
            <div>
              <a href="https://www.fiverr.com/taaimen">{Icon.fiver}</a>
            </div>
            <div>
              <a href="https://github.com/REDX-at">{Icon.github}</a>
            </div>
          </div>
        </div>
        <div
          className="h-screen rounded-l-[100px] col-span-2  overflow-hidden relative"
          // data-aos="fade-left"
          // data-aos-duration="1000"
          // data-aos-delay="500"
        >
          <img
            src={Man2}
            alt="Aimen Taoussi"
            className="w-full h-full object-cover"
          />
          <h1 className="text-white  text-[180px] w-[100%] leading-[12rem] mx-12 mt-4 absolute top-0 left-0 z-1 font-righteous opacity-100">
            AIMEN TAOUSSI
          </h1>
          <div className="bg-red-600 w-auto absolute bottom-24 left-0 z-1 p-4 rounded-r-[100px]">
            <p className="font-righteous text-white text-2xl">
              Student At 1337 School - 42 Network
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
