"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "../images/logo.png";
import cart from "../images/cart.svg";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 ${
          isScrolled
            ? "bg-[#080808] border rounded-b-[40px] navborder"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href=" "
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              className="logo"
              src={logo}
              alt="Logo"
              width={176}
              height={47}
            />
          </a>

          <div className="flex items-center gap-10">
            <div className="">
              <div
                className={`items-center justify-between mob-menu ${
                  isOpen ? "block" : "hidden"
                } w-full md:flex md:w-auto md:order-1`}
                id="navbar-sticky"
              >
                <ul className="flex flex-col p-4 md:p-0 font-[20px] md:space-x-8 rtl:space-x-reverse md:flex-row ">
                  <li>
                    <Link href="/" passHref>
                      <span
                        className={`block py-2 px-3 rounded-sm md:p-0 ${
                          activeItem === "myAccount"
                            ? "text-[#14F6FE]"
                            : "hover:text-[#14F6FE] text-[#14F6FE]"
                        }`}
                        aria-current="page"
                        onClick={() => handleItemClick("myAccount")}
                      >
                        Home
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href=" " passHref>
                      <span
                        className={`block py-2 px-3 rounded-sm md:p-0 ${
                          activeItem === "travelAgents"
                            ? "text-white"
                            : "hover:text-[#14F6FE] text-white"
                        }`}
                        onClick={() => handleItemClick("travelAgents")}
                      >
                        Shop
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link href=" " passHref>
                      <span
                        className={`block py-2 px-3 rounded-sm md:p-0 ${
                          activeItem === "travelAgents"
                            ? "text-white"
                            : "hover:text-[#14F6FE] text-white"
                        }`}
                        onClick={() => handleItemClick("travelAgents")}
                      >
                        About Us
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link href=" " passHref>
                      <span
                        className={`block py-2 px-3 rounded-sm md:p-0 ${
                          activeItem === "travelAgents"
                            ? "text-white"
                            : "hover:text-[#14F6FE] text-white"
                        }`}
                        onClick={() => handleItemClick("travelAgents")}
                      >
                        Contact
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="">
              <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse lg:gap-4 gap-0 items-center">
                <div className="cart relative cursor-pointer">
                  <div className="counter">5</div>
                  <Image src={cart} alt="Cart" width={30} height={30} />
                </div>
                <div className="lg:block hidden">
                  <ul className="flex flex-col md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                    <li className="relative group">
                      <button
                        className={`flex items-center py-2 px-3 rounded-sm md:p-0 ${
                          activeItem === "eng"
                            ? "text-[16px] text-white font-[400]"
                            : "text-[16px] text-white font-[400]"
                        }`}
                        onClick={() => handleItemClick("tour")}
                      >
                        English{" "}
                        <span>
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <rect
                              x={20}
                              width={20}
                              height={20}
                              transform="rotate(90 20 0)"
                              fill="url(#pattern0_20_274)"
                            />
                            <defs>
                              <pattern
                                id="pattern0_20_274"
                                patternContentUnits="objectBoundingBox"
                                width={1}
                                height={1}
                              >
                                <use
                                  xlinkHref="#image0_20_274"
                                  transform="scale(0.01)"
                                />
                              </pattern>
                              <image
                                id="image0_20_274"
                                width={100}
                                height={100}
                                preserveAspectRatio="none"
                                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABjUlEQVR4nO3csUkEQQBG4TW4wMDobMLAEoysRsTEHjQxEcEKzOxEhVstQbgrQTAQn1yoqLPRzL/M+yr44TGzsCw7DJIkSZIkSZI0N8ABcA3cAafAovWmbgFHwBvfPQDL1tu6BDzyu9Eo9WPsAB9/BNkySoMor/xv9KTUDXJC2coodaNcTIjyDOzX3NU1owQySiCjBMJnSh6Mkgej5MEoeTBKHoySB6PMOsqy9dZuMC2Kb4mN0jk8KXkwSh6Mkgej5MEoeTBKHoySB6PkwSh5MEoejJIHo+TBKHkwSh7gauIH3nutt3aDaVFuWu/sCuXra9N6Y1eAy0KQdeuN3cArKwc+1Gd1TW35xYoxOoMnIwfGyIExcmCMHBgjB8bIgTFyYIwcGCMHxsiBMXJgjBwYIwfGyIExcmCMHBgjB8bIgTFyYIwcGCMHxshhjCDGCGKMIMYIApxRtvKXffWCbAoxRmPUi7EAPo0RBHjxZAQBjoH3H1GevKbaRjkEboF74BzYbblHkiRJkiRJkoa5+gJ/jKcUbuhJ6AAAAABJRU5ErkJggg=="
                              />
                            </defs>
                          </svg>
                        </span>
                      </button>
                      <ul className="absolute hidden group-hover:block shadow-sm w-44 bg-white border border-gray-100 rounded-lg mt- z-40">
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-3 text-gray-900 font-[500] text-[16px] hover:bg-gray-100"
                          >
                            English
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-3 text-gray-900 text-[16px] font-[500] hover:bg-gray-100"
                          >
                            Spain
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <Link href="Login" passHref>
                  <button type="button" className="loginBtn">
                    Login
                  </button>
                </Link>
                <button
                  data-collapse-toggle="navbar-sticky"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  aria-controls="navbar-sticky"
                  aria-expanded={isOpen}
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    width={32}
                    height={23}
                    viewBox="0 0 32 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width={32}
                      height="3.17647"
                      rx="1.58824"
                      fill="white"
                    />
                    <rect
                      y="9.70508"
                      width="21.3333"
                      height="3.17647"
                      rx="1.58824"
                      fill="white"
                    />
                    <rect
                      y="19.8242"
                      width={32}
                      height="3.17647"
                      rx="1.58824"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
