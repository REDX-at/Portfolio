import { useState } from "react";
import Icon, { Colors } from "../utils/Utils";

export default function Header() {
  const arrHeader = ["Home", "About me", "Product", "Contact Me"];
  const [active, setActive] = useState("Home");

  const onTap = (item) => {
    setActive(item);
  };
  return (
    <div className="h-20 grid grid-cols-5 gap-2 mt-10 text-center fixed top-0 left-0 w-full z-30">
      <div
        className={`text-center bg-red-600 col-span-3 rounded-full grid grid-cols-4 items-center text-white font-bold shadow-md col-start-2 col-end-5`}
      >
        {arrHeader.map((item) => (
          <span
            key={item}
            className={`cursor-pointer ${active === item ? "" : "opacity-50"}`}
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
    </div>
  );
}
