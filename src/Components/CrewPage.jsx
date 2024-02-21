const CrewPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-[url('/Destination.png')] bg-no-repeat bg-cover pt-20 pb-10 min-h-screen md:flex-col-reverse md:pb-0 md:pt-44 lg:flex-row-reverse">
      <div className="flex items-center flex-col gap-8 md:flex-col-reverse">
        <h2 className="font-Barlow text-2xl tracking-wider text-color3 uppercase md:hidden">
          <span className="text-color2">02</span> Meet your crew
        </h2>
        <img className="w-full md:hidden" src="/man1.png" alt="man-image" />
        <img
          className="w-full hidden md:block lg:hidden"
          src="/man1-tab.png"
          alt="man-image"
        />
        <img
          className="w-full hidden md:hidden lg:block"
          src="/man1-desk.png"
          alt="man-image"
        />
        <div className="flex gap-3">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 px-8 md:px-44">
        <h2 className="text-lg text-color3 font-Bellefair font-normal uppercase md:text-2xl">
          Commander
        </h2>
        <h1 className="text-2xl text-color3 font-Bellefair font-normal uppercase pb-2 md:text-4xl">
          Douglas Hurley
        </h1>
        <p className="text-lg text-color2 font-Barlow font-normal text-center">
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </div>
    </div>
  );
};

export default CrewPage;
