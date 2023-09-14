import { Link } from "react-router-dom";
import favourite from "../assets/Favorite.svg";
import favactive from "../assets/Favorite-active.svg";
import imdb from "../assets/imdb.svg";
import tomato from "../assets/tomatoes.svg";
import { useState } from "react";

const MovieCard = ({ id, title, releaseDate, posterUrl }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = (e) => {
    setLiked(!liked);
    e.stopPropagation();
  };
  return (
    <Link to={`/movie/${id}`} className="flex flex-col gap-y-3 font-dm">
      <div data-testid="movie-card" className="relative">
        <img
          className="w-full"
          data-testid="movie-poster"
          loading="lazy"
          src={posterUrl}
          alt={title}
        />
        <div className="flex p-4 absolute top-0 w-full justify-between items-center">
          <span id="movietype" className="py-[3px] px-2">
            <p className="text-xs text-[#111827] font-bold">TV SERIES</p>
          </span>

          <div onClick={handleLikeClick.bind(null)}>
            <img src={liked ? favactive : favourite} alt="" />
          </div>
        </div>
      </div>
      <div className="font-bold flex flex-col gap-y-3">
        <p data-testid="movie-release-date" className="text-xs text-[#9CA3AF]">
          USA, {releaseDate}
        </p>
        <p
          data-testid="movie-title"
          className="text-lg font-dm w-fit text-[#111827]"
        >
          {title}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <span className="flex gap-x-[10px] items-center">
          <img src={imdb} alt="" />
          <p className="text-xs">86.0 / 100</p>
        </span>

        <span className="flex gap-x-[10px] items-center">
          <img src={tomato} alt="" />
          <p className="text-xs">97%</p>
        </span>
      </div>

      <div>
        <p className="text-xs font-bold font-dm text-[#9CA3AF] rounded-xl shadow-lg pb-3">
          Action, Adventure, Horror
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
