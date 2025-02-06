import { FiMenu } from "react-icons/fi";
function Header() {
  return (
    <nav className="w-screen bg-blue-400  text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Brand */}
        <a className="text-xl" href="">
          {"<Parinya T/>"}
        </a>
        {/* Menu Desktop */}
        <ul className=" hidden md:flex flex-col lg:flex justify-around ">
          <li>
            {" "}
            <a href="#">Home</a>
          </li>
          <li>
            {" "}
            <a href="#">About</a>
          </li>
          <li>
            {" "}
            <a href="#">Service</a>
          </li>
          <li>
            {" "}
            <a href="#">Contact</a>
          </li>
        </ul>
        {/* Hamburger Menu (Mobile)  */}
        <button>
          <FiMenu className="w-6 h-6" />
        </button>
      </div>
      {/* Mobile Menu (Mobile)  */}
      <ul>
        <li>
          {" "}
          <a href="#">Home</a>
        </li>
        <li>
          {" "}
          <a href="#">About</a>
        </li>
        <li>
          {" "}
          <a href="#">Service</a>
        </li>
        <li>
          {" "}
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
