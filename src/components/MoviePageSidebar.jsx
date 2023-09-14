import Logo from "./Logo";
import home from "../assets/Home.svg";
import movies from "../assets/Movie.svg";
import tvShow from "../assets/TVShow.svg";
import upcoming from "../assets/Calendar.svg";
import logout from "../assets/Logout.svg";
import { NavLink } from "react-router-dom";

const MoviePageSidebar = ({ id }) => {
  return (
    <div className="fixed">
      <div className="overflow-hidden min-w-[226px] bg-white rounded-r-[45px] h-full border border-black border-opacity-30 md:flex flex-col gap-9 hidden ">
        <div className="p-5">
          <Logo color='black' />
        </div>
        <div className="flex flex-col select-none">
          <NavLink
            to="/"
            className="hover:bg-rose-700 hover:bg-opacity-10 active:bg-rose-700 active:bg-opacity-10 p-6 cursor-pointer"
          >
            <img src={home} alt="home" className="inline-block w-6 h-6 mr-2" />
            Home
          </NavLink>
          <NavLink className="bg-rose-700 bg-opacity-10 p-6 cursor-pointer">
            <img
              src={movies}
              alt="movies"
              className="inline-block w-6 h-6 mr-2"
            />
            Movies
          </NavLink>
          <NavLink
            to="/comingsoon"
            className="hover:bg-rose-700 hover:bg-opacity-10 active:bg-rose-700 active:bg-opacity-10 p-6 cursor-pointer"
          >
            <img
              src={tvShow}
              alt="tvShow"
              className="inline-block w-6 h-6 mr-2"
            />
            Tv Series
          </NavLink>
          <NavLink
            to="/comingsoon"
            className="hover:bg-rose-700 hover:bg-opacity-10 active:bg-rose-700 active:bg-opacity-10 p-6 cursor-pointer"
          >
            <img
              src={upcoming}
              alt="upcoming"
              className="inline-block w-6 h-6 mr-2"
            />
            Upcoming
          </NavLink>
        </div>
        <div className="w-[170px] p-4 pt-9 flex flex-col gap-2 bg-pink-50 transition-all hover:bg-pink-100 bg-opacity-40 rounded-[20px] border border-rose-700 border-opacity-70 mx-6">
          <div className="text-zinc-800 text-opacity-80 text-[15px] font-semibold">
            Play movie quizes
            <br />
            and earn
            <br />
            free tickets
          </div>
          <div className="text-stone-500 text-xs font-medium">
            50k people are playing
            <br />
            now
          </div>
          <NavLink
            to="/comingsoon"
            className="text-xs font-medium bg-rose-700 text-center bg-opacity-20 rounded-[30px] px-4 py-1"
          >
            Start playing
          </NavLink>
        </div>
        <NavLink
          to="/comingsoon"
          className="flex hover:bg-rose-700 hover:bg-opacity-10 active:bg-rose-700 active:bg-opacity-10 p-6 cursor-pointer"
        >
          <img className="shadow" src={logout} />
          Log out
        </NavLink>
      </div>
    </div>
  );
};

export default MoviePageSidebar;
