import { NavLink } from "react-router-dom";

const NavTab = () => {
  const activeLink = "border-b-2 border-color3 pb-7";
  const hoverLink = "hover:border-b-2 hover:border-gray-400 hover:pb-7";

  return (
    <div className="hidden relative md:flex">
      <div className="md:hidden lg:block bg-color3 opacity-25 w-[26.5625rem] h-[0.0625rem] absolute z-50 -left-[24rem] top-10 xl:w-[30rem] xl:-left-[27rem]"></div>
      <ul className="flex gap-12 font-Barlow text-color4 text-sm/normal tracking-[0.14763rem] font-normal not-italic bg-[#FFFFFF0A] backdrop-blur-2xl py-7 px-10 lg:text-base/normal lg:tracking-[0.16875rem] lg:gap-20 lg:px-20">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : hoverLink)}
          >
            <span className="font-bold hidden lg:inline-block">00</span> HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="Destination"
            className={({ isActive }) => (isActive ? activeLink : hoverLink)}
          >
            <span className="font-bold hidden lg:inline-block">01</span>{" "}
            DESTINATION
          </NavLink>
        </li>
        <li>
          <NavLink
            to="Crew"
            className={({ isActive }) => (isActive ? activeLink : hoverLink)}
          >
            <span className="font-bold hidden lg:inline-block">02</span> CREW
          </NavLink>
        </li>
        <li>
          <NavLink
            to="Technology"
            className={({ isActive }) => (isActive ? activeLink : hoverLink)}
          >
            <span className="font-bold hidden lg:inline-block">03</span>{" "}
            TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavTab;
