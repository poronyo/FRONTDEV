import { useState } from "react";

import { FiMenu } from "react-icons/fi";
function Header() {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <nav className="w-screen  bg-gradient-to-r from-blue-700 to-blue-400  text-white">
      <div className="container mx-auto flex items-center justify-between p-3 ">
        {/* Logo & Brand */}
        <a className="text-xl  font-bold " href="">
          {"<Parinya T/>"}
        </a>

        {/* Upper Menu Desktop */}
        <ul
          className={` hidden w-full  md:flex md:justify-end lg:flex  p-4 space-x-7   `}
        >
          <li>
            <a href="#" className="  hover:text-gray-500 ">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500 ">
              Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500 ">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Menu (Mobile)  */}
        <button>
          <FiMenu
            className="w-6 h-6 md:hidden lg:hidden cursor-pointer"
            onClick={() => setIsOpened(() => !isOpened)}
          />
        </button>
      </div>

      {/* Mobile Menu (Mobile)  */}
      <ul
        className={`  md:hidden lg:hidden p-4 gap-4 flex flex-col items-center transition-all duration-400 ease-in-out transform ${
          isOpened ? " blocked" : " hidden"
        } `}
      >
        <li>
          <a href="#" className="  hover:text-gray-500 ">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-500 ">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-500 ">
            Service
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-500 ">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
