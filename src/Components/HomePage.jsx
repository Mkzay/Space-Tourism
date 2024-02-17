const HomePage = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-16 bg-[url('/Homepage.png')] bg-no-repeat bg-cover h-screen md:pt-20 md:bg-[url('/Homepage-tab.png')] md:gap-36 lg:bg-[url('/Homepage-desk.jpg')] lg:flex-row lg:pr-36 lg:pl-28 xl:pt-56">
      <div className="flex flex-col items-center justify-center gap-5 px-3 md:px-[7rem] lg:pl-0 lg:items-start lg:pr-[14rem]">
        <h2 className="text-xl text-color2 font-Barlow font-normal md:text-3xl">
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className="text-7xl text-color3 font-Bellefair md:text-[9rem] lg:text-[8rem]">
          SPACE
        </h1>
        <p className="text-xl text-color2 font-Barlow font-normal text-center md:text-2xl lg:text-left lg:text-[1.3rem]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="flex items-center justify-center">
        <button className="h-44 w-44 h bg-color3 rounded-full font-Bellefair text-xl font-normal hover:ring-[2.4rem] hover:ring-color3 hover:ring-opacity-10 md:h-60 md:w-60 md:text-2xl md:hover:ring-[3rem]">
          EXPLORE
        </button>
      </div>
    </div>
  );
};

export default HomePage;
//hover:bg-color3 hover:rounded-full hover:bg-opacity-10 hover:w-64 hover:h-64
