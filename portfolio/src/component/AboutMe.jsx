import Icon from "../utils/Utils";

export default function AboutMe() {
  return (
    <div>
      {" "}
      <div className="grid grid-cols-6">
        <div className="h-screen col-span-4 text-center pt-[5%]">
          <div className="flex flex-col items-center justify-center gap-16">
            <div>
              <span className="text-[280px] font-bold ">About Me</span>
            </div>
            <div className="w-[60%] ">
              <p className="text-4xl leading-relaxed">
                I am a professional{" "}
                <span className="bg-red-600 text-white rounded-full py-1 px-4">
                  Graphic Designer
                </span>{" "}
                ,{" "}
                <span className="bg-red-600 text-white rounded-full py-1 px-4">
                  UI/UX Designer
                </span>
                , and{" "}
                <span className="bg-red-600 text-white rounded-full py-1 px-4">
                  Front-End Developer
                </span>{" "}
                with a passion for creating visually compelling designs and
                intuitive digital experiences. I specialize in transforming
                ideas into impactful visuals and functional interfaces,
                combining creativity with technical precision to deliver
                exceptional results.
              </p>
            </div>
            <div className="bg-black py-6 px-10 rounded-full mt-11">
              <div className="flex items-center gap-6">
                <button className="text-2xl text-white font-bold">
                  <a href="https://github.com/REDX-at">Go check</a>
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
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-10 mt-4">
            <div>
              <a href="https://www.fiverr.com/taaimen">{Icon.fiver}</a>
            </div>
            <div>
              <a href="https://github.com/REDX-at">{Icon.github}</a>
            </div>
          </div>
        </div>
        <div className="h-screen bg-black rounded-l-[100px] col-span-2 ">
          <h1 className="text-white  text-[200px] w-[100%] leading-tight font-bold pl-3">
            AIMEN TAOUSSI
          </h1>
        </div>
      </div>
    </div>
  );
}
