import { useState } from "react";

const DestinationPage = () => {
  const [selectedDestination, setSelectedDestination] = useState("moon");

  const handleButtonClick = (destination) => {
    setSelectedDestination(destination);
  };

  const destinationInfo = {
    moon: {
      title: "Moon",
      information:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 KM",
      time: "3 days",
    },
    mars: {
      title: "Mars",
      information:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. KM",
      time: "9 months",
    },
    europa: {
      title: "Europa",
      information:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. KM",
      time: "3 years",
    },
    titan: {
      title: "Titan",
      information:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. KM",
      time: "7 years",
    },
  };

  const activeStyle = "border-b pb-2 border-color3";

  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-[url('/Destination.png')] bg-no-repeat bg-cover pt-20 pb-10 min-h-screen md:pb-0 md:gap-16 lg:flex-row lg:gap-5 ">
      <div className="flex items-center justify-center flex-col gap-5 md:gap-10">
        <h2 className="font-Barlow text-2xl tracking-wider text-color3 uppercase md:relative md:right-56 md:tracking-widest lg:right-0">
          <span className="text-color2">01 </span>
          Pick your destination
        </h2>
        <img
          className="animate-spinning"
          src={`/${selectedDestination}.svg`}
          alt={selectedDestination}
        />
      </div>
      <div className="flex flex-col items-center gap-6 md:gap-16">
        <div className="flex gap-7 font-Barlow text-lg text-color2 md:text-xl md:gap-12">
          <button
            className={`uppercase tracking-widest ${
              selectedDestination === "moon" ? activeStyle : ""
            }`}
            onClick={() => handleButtonClick("moon")}
          >
            Moon
          </button>
          <button
            className={`uppercase tracking-widest ${
              selectedDestination === "mars" ? activeStyle : ""
            }`}
            onClick={() => handleButtonClick("mars")}
          >
            Mars
          </button>
          <button
            className={`uppercase tracking-widest ${
              selectedDestination === "europa" ? activeStyle : ""
            }`}
            onClick={() => handleButtonClick("europa")}
          >
            Europa
          </button>
          <button
            className={`uppercase tracking-widest ${
              selectedDestination === "titan" ? activeStyle : ""
            }`}
            onClick={() => handleButtonClick("titan")}
          >
            Titan
          </button>
        </div>
        <div className="flex items-center flex-col text-center px-9 md:px-24">
          <h1 className="text-6xl text-color3 font-Bellefair uppercase md:text-7xl">
            {destinationInfo[selectedDestination].title}
          </h1>
          <p className="text-lg text-color2 font-Barlow md:text-xl md:font-normal">
            {destinationInfo[selectedDestination].information}
          </p>
          <div className="bg-color2 h-[0.5px] w-full mt-8"></div>
        </div>
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="flex flex-col items-center gap-2 uppercase md:gap-6">
            <h2 className="text-xl text-color2 font-Barlow tracking-widest">
              Avg. distance
            </h2>
            <p className="text-4xl text-color3 font-Bellefair tracking-wider">
              {destinationInfo[selectedDestination].distance}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 uppercase md:gap-6">
            <h2 className="text-xl text-color2 font-Barlow tracking-widest">
              est. travel time
            </h2>
            <p className="text-4xl text-color3 font-Bellefair tracking-wider">
              {destinationInfo[selectedDestination].time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
