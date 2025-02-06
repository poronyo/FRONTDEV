import { FiCodesandbox, FiTrello } from "react-icons/fi";
function Home() {
  return (
    <div className="h-full  flex flex-col justify-between items-center bg-cyan-200 dark:bg-blue-900 ">
      <h1>HomePages </h1>
      <div className=" h-full  flex gap-2 p-4 dark:text-amber-100">
        <FiTrello className="h-full rounded-3xl flex basis-1/3 bg-blue-200 dark:bg-gray-900 shadow-2xl " />
        <div className="h-full flex flex-col justify-start rounded-3xl basis-2/3 bg-cyan-200 dark:bg-gray-900 shadow-2xl ">
          <h2 className="text-4xl py-5"> Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            fugiat sit architecto nisi expedita rem reiciendis facere quae odio
            sed! Labore quo tenetur eum voluptate ducimus nihil alias quas
            consectetur?
          </p>
        </div>
      </div>
      <div>
        <FiCodesandbox className="size-17  " />
      </div>
    </div>
  );
}

export default Home;
