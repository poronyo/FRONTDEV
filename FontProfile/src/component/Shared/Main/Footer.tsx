import { Link } from "react-router";
import Container from "./Container";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  // const navigation = [
  //   { name: "Product", href: "#" },
  //   { name: "Features", href: "#" },
  //   { name: "Company", href: "/company" },
  //   { name: "Blog", href: "/blog" },
  // ];

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Company", path: "/company" },
    // { name: "Pricing", path: "/pricing" },
    { name: "Project", path: "/project" },
  ];
  const legal = [
    { name: "Lorem", href: "/" },
    { name: "Lorem", href: "/" },
    { name: "Lorem", href: "/" },
  ];

  return (
    <div className="relative bg-gray-200 dark:bg-gray-800">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <Link
                to="/"
                className="flex items-center space-x-2 text-2xl font-medium text-gray-800 dark:text-gray-200"
              >
                <img src="/images/P logo.png" alt="" className="w-8" />
                <span>ParinyaT</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
              delectus. Doloremque beatae dicta minima a harum veritatis
              repellendus ex. Nostrum.
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="w-full px-4 py-2 text-gray-600 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none
                                        dark:text-gray-400 rounded-md  dark:hover:text-indigo-400   dark:focus:bg-gray-800 "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="w-full px-4 py-2 text-gray-600 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none
                                        dark:text-gray-400 rounded-md  dark:hover:text-indigo-400   dark:focus:bg-gray-800 "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* // FaTwitter, FaFacebook, FaInstagram,FaLinkedin */}
          <div className="">
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-500 dark:text-gray-400">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className="size-7" />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook className="size-7" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className="size-7" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Linkedin</span>
                <FaLinkedin className="size-7" />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
          <a
            href="https://itgenius.co.th"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            ParinyaT.
          </a>{" "}
          Illustrations from{" "}
          <a
            href="https://unsplash.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Unsplash
          </a>
        </div>
      </Container>
    </div>
  );
}
