import { useState } from "react";

export default function Header() {
  const arrHeader = ["Home", "About me", "Product", "Contact Me"];
  const [active, setActive] = useState("Home");

  const onTap = (item) => {
    setActive(item);
  };
  return (
    <div className="h-20 grid grid-cols-5 gap-2 mt-10 text-center fixed top-0 left-0 w-full z-10">
      <span className="self-center justify-self-center font-bold text-xl text-white bg-black py-6 rounded-full w-80">
        Designed By{" "}
        <span className="bg-red-600 text-white px-4 rounded-full py-1">
          Redx
        </span>
      </span>
      <div className="text-center bg-red-600 col-span-3 rounded-full grid grid-cols-4 items-center text-white font-bold">
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
      <button className="bg-black w-52 mx-auto rounded-full text-white">
        <div className="flex justify-center gap-6 font-bold ">
          <span>Hire me</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}
