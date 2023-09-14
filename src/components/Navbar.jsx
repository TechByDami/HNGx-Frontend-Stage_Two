import Logo from "./Logo";
import Search from "./Search";
import menu from "../assets/Menu.svg";

const Navbar = ({ searchQuery, onSearchInputChange, onHandleSearch }) => {
  return (
    <div className=" w-full relative">
      <div className="absolute top-0 text-white z-20 flex gap-2 justify-between items-center w-full p-6 lg:px-[120px]">
        <div className="w-1/2">
          <Logo color="white" />
        </div>
        <div className="px-5 w-full md:block hidden">
          <Search
            searchQuery={searchQuery}
            onSearchInputChange={onSearchInputChange}
            onHandleSearch={onHandleSearch}
          />
        </div>
        <div className="flex gap-x-3 md:gap-x-5 items-center justify-end w-1/4">
          <p className="text-base hidden md:block font-bold font-dm w-fit">
            Sign in
          </p>
          <img src={menu} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
