import { headerIcons } from "@/utils/mockData";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleDarkVersion = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log("theme = ", theme);

  return (
    <header
      className={`${styles.header} header py-5 px-8 flex flex-col lg:flex-row justify-between items-center border-b-2`}
    >
      <div className="flex items-center space-x-2">
        {theme === "light" ? (
          <Image
            src="/svg/headerLOGO.svg"
            alt="Logo"
            width={106}
            height={42}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        ) : (
          <Image
            src="/svg/headerLOGODarkMode.svg"
            alt="Logo"
            width={106}
            height={42}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        )}

        <div className="flex align-middle">
          <input
            type="text"
            placeholder="Search..."
            //   onChange={handleChange}
            //   value={searchInput}
            className="ml-2 lg:ml-[35%] bg-inputBackground py-2 px-3 rounded-tl-xl rounded-bl-xl"
          />
          <Image
            src="/svg/searchIcon.svg"
            alt="search"
            className="bg-inputBackground py-2 px-3 rounded-tr-xl rounded-br-xl "
            width={24}
            height={24}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>

      <div className="flex align-middle gap-4 lg:gap-5 mt-4 lg:mt-0">
        {headerIcons.map((icon) => (
          <div
            key={icon.id}
            className="flex align-middle cursor-pointer"
            onClick={() => (icon.onclick ? handleDarkVersion() : null)}
          >
            <Image
              src={icon.icon}
              alt={icon.alt}
              className="w-6 lg:w-8 h-6 lg:h-8 rounded-full"
              width={40}
              height={40}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        ))}
        <div className="flex" style={{ alignItems: "center" }}>
          <div>
            <Image
              src="/svg/profileIcon.svg"
              alt="profileIcon"
              className="w-8 h-8 rounded-full"
              width={39}
              height={39}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          <p className="text-customParaColor my-auto mx-2 lg:mx-3">
            Devon Lane
          </p>
          <div>
            <Image
              src="/svg/dropdownIcon.svg"
              alt="dropdown"
              className="w-4 h-4 lg:w-6 lg:h-6"
              width={24}
              height={24}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
