function About() {
  return (
    <div className="flex flex-col justify-around h-screen w-screen">
      <h1>About Page</h1>
      <a>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
        impedit harum voluptates aspernatur inventore earum accusantium ratione
        quis hic neque id temporibus, obcaecati cumque laudantium? Iste omnis
        iure commodi rerum.
      </a>

      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 p-3 gap-5">
        <div className="text-white bg-gray-900 rounded p-2">Item1</div>
        <div className="text-white bg-green-950 rounded p-2">Item2</div>
        <div className="text-white bg-amber-950 rounded p-2">Item3</div>
        <div className="text-white bg-fuchsia-950 rounded p-2">Item3</div>
      </div>
    </div>
  );
}

export default About;
