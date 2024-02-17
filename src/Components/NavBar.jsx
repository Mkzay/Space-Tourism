import NavMob from "./Navigation/NavMob";
import NavTab from "./Navigation/NavTab";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between fixed w-full p-5 md:py-0 md:pr-0 md:pl-[3.45rem] lg:p-5 lg:pr-0 lg:pl-[3.45rem]">
      <div>
        <img src="./logo.svg" alt="header-logo-icon" />
      </div>
      <div>
        <NavMob />
        <NavTab />
      </div>
    </div>
  );
};

export default NavBar;
