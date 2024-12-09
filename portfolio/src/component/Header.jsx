import { useState } from "react";
import Icon, { Colors } from "../utils/Utils";

export default function Header() {
  const arrHeader = ["Home", "About me", "Product", "Contact Me"];
  const [active, setActive] = useState("Home");
  const [opacity, setOpacity] = useState(0);

  const onTap = (item) => {
    setActive(item);
  };
  return (
    <div className="h-20 grid grid-cols-5 gap-2 mt-10 text-center fixed top-0 left-0 w-full z-10">
      <span
        className={`self-center justify-self-center font-bold text-xl text-white bg-black py-6 rounded-full w-80 opacity-${opacity}`}
      >
        Designed By{" "}
        <span
          className={`bg-${Colors.accent600} text-white px-4 rounded-full py-1`}
        >
          Redx
        </span>
      </span>
      <div
        className={`text-center bg-${Colors.accent600} col-span-3 rounded-full grid grid-cols-4 items-center text-white font-bold`}
      >
        {arrHeader.map((item) => (
          <span
            key={item}
            className={`cursor-pointer ${
              active === item ? "underline " : "blur-[1px]"
            }`}
            onClick={() => {
              onTap(item);
              document
                .getElementById(item.toLowerCase().replace(" ", "-"))
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {item}
          </span>
        ))}
      </div>
      <button
        className={`bg-black w-52 mx-auto rounded-full text-white opacity-${opacity} `}
      >
        <div className="flex justify-center gap-6 font-bold items-center">
          <span>Hire me</span>
          {Icon.download}
        </div>
      </button>
    </div>
  );
}
