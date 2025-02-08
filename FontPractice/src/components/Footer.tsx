import { FiTwitter, FiPhoneCall } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold">
          Poronyo
        </a>
        {/* Footer Links */}
        <ul className="flex space-x-6 text-sm">
          <li>
            <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Support
            </a>
          </li>
        </ul>
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#">
            <FiTwitter
              className="w-6 h-6 text-white hover:text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            ></FiTwitter>
          </a>
          <a href="#">
            <FiPhoneCall
              className="w-6 h-6 text-white hover:text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            ></FiPhoneCall>
          </a>
        </div>
      </div>
      {/* Copyright */}
      <div className="underline text-center text-sm py-2 bg-gray-800">
        © 2025 MyBrand. All rights reserved.
      </div>
    </footer>
  );
}
