import { useState } from "react";

const DestinationPage = () => {
  const [selectedDestination, setSelectedDestination] = useState("moon");

  const handleButtonClick = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-[url('/Destination.png')] bg-no-repeat bg-cover min-h-screen">
      <div className="flex items-center justify-center flex-col gap-5">
        <h2 className="font-Barlow text-2xl tracking-wider text-color3 uppercase md:hidden">
          <span className="text-color2">01 </span>
          Pick your destination
        </h2>
        <img
          className="animate-spinning"
          src={`/${selectedDestination}.svg`}
          alt={selectedDestination}
        />
      </div>
      <div>
        <div>
          <button onClick={() => handleButtonClick("moon")}>Moon</button>
          <button onClick={() => handleButtonClick("mars")}>Mars</button>
          <button onClick={() => handleButtonClick("europa")}>Europa</button>
          <button onClick={() => handleButtonClick("titan")}>Titan</button>
        </div>
        <h1>{selectedDestination}</h1>
        <p>{/* Information specific to the selected destination */}</p>
        {/* Add more paragraphs or components with information as needed */}
      </div>
    </div>
  );
};

export default DestinationPage;
