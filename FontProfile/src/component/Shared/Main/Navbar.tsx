import { useState, useRef } from "react";
import { Link, useLocation } from "react-router";
import { FaTimes, FaAlignJustify } from "react-icons/fa";
import DarkSwitch from "./DarkSwitch";
function Navbar() {
  // สร้างตัวแปร state เปิดปิดเมนู
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // สร้างตัวแปร location จาก react-router
  const location = useLocation();

  // Refs for click outside detection
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // เพิ่ม ref สำหรับ mobile menu button
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Company", path: "/company" },
    { name: "Project", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  const handleMenuClick = () => {
    setIsOpen(false);
    console.log("handleMenuClick");
  };

  const handleMobileMenuClick = () => {
    setIsOpen(!isOpen);
    console.log("handleMobileMenuClick");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/ParinyaTosuwan_RESUME.pdf";
    link.download = "ParinyaTosuwan_RESUME.pdf";
    link.click();
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-none shadow-sm">
      <div className="container px-8 py-4 mx-auto xl:px-0">
        <nav className="relative flex justify-between flex-wrap items-center mx-auto lg:justify-between max-w-screen-xl">
          {/* LOGO ITEMS */}
          <div>
            <Link to="/">
              <span className="flex items-center space-x-2 text-2xl font-semibold dark:text-white">
                <span>
                  <img src="/images/P logo.png" alt="" className="w-8" />
                </span>
                <span>ParinyaT</span>
              </span>
            </Link>
          </div>

          {/*DESKTOP MENU ITEMS */}
          <div className="hidden text-center lg:flex lg:items-center ">
            <ul className=" items-center justify-end liet-none flex-1 pt-6  lg:pt-0 lg:flex ">
              {/* Other navigation items */}

              {navigation.map((item) => (
                <li className="" key={item.name}>
                  <Link
                    to={item.path}
                    onClick={handleMenuClick}
                    className=""
                  ></Link>
                </li>
              ))}

              {navigation.map((item) => (
                <li className="mr-3" key={item.name}>
                  <Link
                    to={item.path}
                    onClick={handleMenuClick}
                    className={`inline-block px-4 py-2 text-lg font-normal rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-hidden
                      ${
                        location.pathname === item.path ? "text-indigo-600" : ""
                      }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESUME DOWNLOAD  */}
          <div className="nav__item flex items-center gap-3 mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
            <DarkSwitch />

            <div className="nav__item hidden mr-3 lg:flex ">
              <Link
                to="/"
                onClick={handleDownload}
                className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                RESUME
              </Link>
            </div>
          </div>

          {/* Mobile menu button - เพิ่ม ref */}
          <button
            ref={menuButtonRef}
            onClick={handleMobileMenuClick}
            className="px-2 py-1rounded-md lg:hidden text-gray-500 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-hidden
                                                     dark:text-gray-400   dark:hover:text-indigo-400  dark:focus:bg-gray-800 "
          >
            {isOpen ? <FaTimes /> : <FaAlignJustify />}
          </button>

          {/* Mobile menu panel */}
          {isOpen && (
            <div
              ref={mobileMenuRef}
              className="flex flex-wrap w-full my-5 lg:hidden"
            >
              {/* Other navigation items mobile*/}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={handleMenuClick}
                  className={`w-full px-4 py-2 text-lg font-normal text-left hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400
                    ${
                      location.pathname === item.path
                        ? "text-indigo-600 dark:text-indigo-400"
                        : ""
                    }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* RESUME DOWNLOAD mobile */}
              <Link
                to="/"
                onClick={handleDownload}
                className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                RESUME
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

// {
//   productMenus && productMenus.map((menuDropdown) => menuDropdown.name);
// }
