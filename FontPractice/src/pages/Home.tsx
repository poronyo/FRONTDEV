import { FiBattery } from "react-icons/fi";
function Home() {
  return (
    <div className="flex flex-col justify-around items-center h-screen">
      <h1>HomePages</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        fugiat sit architecto nisi expedita rem reiciendis facere quae odio sed!
        Labore quo tenetur eum voluptate ducimus nihil alias quas consectetur?
      </p>
      <FiBattery className="text-amber-400 size-12" />
    </div>
  );
}

export default Home;
