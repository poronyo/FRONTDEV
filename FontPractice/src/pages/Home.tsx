import { FiCodesandbox, FiTrello } from "react-icons/fi";
import ContactList from "@/components/ContactList";
function Home() {
  return (
    <div className="h-full w-screen flex flex-col justify-between items-center bg-gray-100 dark:bg-gray-500 ">
      {/* <h1>HomePages </h1> */}
      <div className=" h-full  flex gap-2 p-4 dark:text-gray-100">
        <FiTrello className="h-full rounded-3xl flex basis-1/3 bg-gray-400 dark:bg-gray-900 shadow-2xl " />
        <div className="h-full flex flex-col justify-start rounded-3xl basis-2/3 bg-gray-300 dark:bg-gray-700 shadow-2xl ">
          <h2 className="text-4xl p-5"> Lorem ipsum dolor sit amet.</h2>
          <p className="p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            fugiat sit architecto nisi expedita rem reiciendis facere quae odio
            sed! Labore quo tenetur eum voluptate ducimus nihil alias quas
            consectetur?
          </p>
          <ContactList />
        </div>
      </div>
      <div>
        <FiCodesandbox className="size-17  " />
      </div>
    </div>
  );
}

export default Home;
