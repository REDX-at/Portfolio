import OffMan from "../imgs/OffMan.png";
import CercleMe from "../imgs/CercleMe.png";
import Icon from "../utils/Utils";

export default function Home() {
  return (
    <div className="relative">
      {" "}
      <img
        src={OffMan}
        alt="Pictures of Me"
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mt-20 w-[1050px]"
      ></img>
      <div className="bg-black">
        <div className="h-screen grid grid-cols-2 pt-72 pb-52">
          {/* // first Grid */}
          <div className="text-white ml-32 flex flex-col justify-between z-20">
            <div>
              <h1 className="text-9xl font-poppins font-bold leading-none">
                Hi , I'm Aimen Taoussi
              </h1>
              <div className="mt-5">
                <span className="text-2xl font-bold bg-red-600 rounded-full px-4 py-3">
                  Designer & Devloper
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
            <div className="flex gap-10 justify-self-end absolute bottom-6">
              <a href="https://www.fiverr.com/taaimen">{Icon.fiver}</a>
              <a href="https://dribbble.com/Redx-at">{Icon.dribbble}</a>
            </div>
          </div>
          {/* // seconde Grid */}
          <div className="ml-[500px] flex flex-col gap-16">
            <div>
              <div className="text-white text-2xl font-bold flex bg-red-600 py-3 px-6 rounded-full items-center gap-5 w-44">
                <h1>SKILLS</h1>
                {Icon.skills}
              </div>
              <p className="text-white text-2xl pr-32 mt-6 font-semibold">
                A versatile designer and developer specializing in branding,
                intuitive UI/UX, and responsive web solutions.
              </p>
            </div>
            <img src={CercleMe} className="w-[400px] self-center"></img>
            <div className="flex gap-10 absolute bottom-6 right-36">
              <a href="https://www.linkedin.com/in/aimen-taoussi-251684280/">
                {Icon.linkedin}
              </a>
              <a href="https://github.com/REDX-at">{Icon.github}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
}
// cercle with html
{
  /* <div className="w-[1000px] bg-red-600 h-[1000px] rounded-full blur-lg opacity-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-20"></div> */
}
