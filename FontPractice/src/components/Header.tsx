import { useState } from "react";
import { Link } from "react-router";
import { FiMenu } from "react-icons/fi";
function Header() {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <nav className="w-screen  bg-gradient-to-r from-blue-700 to-blue-400  text-white">
      <div className="container mx-auto flex items-center justify-between p-3 ">
        {/* Logo & Brand */}
        <Link className="text-xl  font-bold " to="/">
          {"<Parinya T/>"}
        </Link>

        {/* Upper Menu Desktop */}
        <ul
          className={` hidden w-full  md:flex md:justify-end   p-4 space-x-7   `}
        >
          <li>
            <Link to="/" className="  hover:text-gray-500 ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-500 ">
              About
            </Link>
          </li>
          <li>
            <Link to="/button" className="hover:text-gray-500 ">
              Service
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-500 ">
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu (Mobile)  */}
        <button>
          <FiMenu
            className="w-6 h-6 md:hidden cursor-pointer"
            onClick={() => setIsOpened(() => !isOpened)}
          />
        </button>
      </div>

      {/* Mobile Menu (Mobile)  */}
      <ul
        className={`  md:hidden  p-4 gap-4 flex flex-col items-center transition-all duration-400 ease-in-out transform ${
          isOpened ? " blocked" : " hidden"
        } `}
      >
        <li>
          <Link to="/" className="  hover:text-gray-500 ">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-500 ">
            About
          </Link>
        </li>
        <li>
          <Link to="/button" className="hover:text-gray-500 ">
            Service
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-500 ">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
