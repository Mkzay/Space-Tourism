import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavMob = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOpen = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="md:hidden">
      <button onClick={menuOpen}>
        <img src="./menu-bar.svg" alt="menu-bar-icon" />
      </button>
      <div
        className={`${
          openMenu
            ? "translate-x-0  duration-300 ease-in"
            : "translate-x-[100%] duration-500 ease-out"
        } flex flex-col gap-14 absolute top-0 right-0 bg-red-400 w-8/12 h-full py-10 px-8 bg-[#FFFFFF0A] backdrop-blur-2xl`}
      >
        <button onClick={menuOpen} className="flex justify-end">
          <img src="./close-menu.svg" alt="close-menu-icon" />
        </button>
        <ul className="flex flex-col gap-8 font-Barlow text-color4 text-base/normal tracking-[0.16875rem] font-normal not-italic">
          <li>
            <NavLink to="Home">
              <span className="font-bold">00</span> HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="Destination">
              <span className="font-bold">01</span> DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink to="./Crew">
              <span className="font-bold">02</span> CREW
            </NavLink>
          </li>
          <li>
            <NavLink to="/Technology">
              <span className="font-bold">03</span> TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMob;
