import {
  FiHexagon,
  FiInstagram,
  FiLinkedin,
  FiMessageCircle,
} from "react-icons/fi";

export default function Button() {
  return (
    <div className="w-screen bg-blue-100 dark:bg-gray-800">
      <div className="flex justify-center gap-7 py-2 ">
        <button className="rounded-md bg-gray-500 px-4  hover:bg-gray-800 hover:text-amber-50 cursor-pointer ">
          <FiHexagon className="size-8 " />
        </button>
        <button className="rounded-md bg-gray-500 px-4 hover:bg-gray-800 hover:text-amber-50 cursor-pointer">
          <FiInstagram className="size-8" />
        </button>
        <button className="rounded-md bg-gray-500 px-4 hover:bg-gray-800 hover:text-amber-50 cursor-pointer">
          <FiLinkedin className="size-8" />
        </button>
        <button className="rounded-md bg-gray-500 px-4 hover:bg-gray-800 hover:text-amber-50 cursor-pointer">
          <FiMessageCircle className="size-8" />
        </button>
        <button className="rounded-md px-4 bg-gradient-to-r from-red-900 to-blue-700 hover:from-green-500 hover:to-blue-600 hover:text-amber-50 cursor-pointer">
          Fifth
        </button>

        <button
          className="opacity-40 rounded-md px-4 bg-gradient-to-r from-red-900 to-blue-700 hover:from-green-500 hover:to-blue-600 hover:text-amber-50 cursor-not-allowed"
          disabled
        >
          Fifth
        </button>
      </div>
    </div>
  );
}
