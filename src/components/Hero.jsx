import { useState, useEffect } from "react";
import imdb from "../assets/imdb.svg";
import tomato from "../assets/tomatoes.svg";
import play from "../assets/Play.svg";

const Hero = ({ heroMovies }) => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const movies = heroMovies.slice(0, 5);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 10000);

    return () => clearTimeout(timer);
  }, [currentMovieIndex, movies]);

  const handleIndicatorClick = (index) => {
    setCurrentMovieIndex(index);
  };

  return (
    <div className=" h-[650px] relative">
      <div className="w-full">
        {movies.slice(0, 5).length > 0 && (
          <div className="relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-[650px] transition-opacity duration-500 bg-black bg-opacity-70"></div>
            <div className="absolute border-white h-full flex items-end sm:items-center p-7">
              <div className="w-full text-white lg:px-20 flex flex-col gap-y-4 ">
                <h1 className="w-full md:max-w-lg sm:text-[48px] text-[30px] font-bold font-dm">
                {movies[currentMovieIndex]?.title}
                </h1>
                <div className="flex gap-x-8 w-fit items-center">
                  <span className="flex gap-x-[10px] items-center font-semibold font-dm">
                    <img src={imdb} alt="" />
                    <p className="text-[12px]">86.0 / 100</p>
                  </span>

                  <span className="flex gap-x-[10px] items-center font-semibold font-dm">
                    <img src={tomato} alt="" />
                    <p className="text-[12px]">97%</p>
                  </span>
                </div>

                <div>
                  <p className="text-[14px] lg:max-w-xl sm:max-w-md font-medium font-dm">
                  {movies[currentMovieIndex]?.overview}
                  </p>
                </div>

                <div className="bg-rose-600 text-[14px] font-semibold uppercase rounded px-4 py-3 flex justify-center items-center gap-3 w-fit">
                  <img src={play} alt="" />
                  Watch trailer
                </div>
              </div>
            </div>
            <img
              data-testid="movie-poster"
              src={`https://image.tmdb.org/t/p/original${movies[currentMovieIndex].poster_path}`}
              className=" h-[650px] w-full object-cover object-bottom transition-opacity duration-500"
              alt={movies[currentMovieIndex].title}
            />
          </div>
        )}
        <div className="absolute top-0 right-10 hidden sm:flex h-full ">
          <div className="flex flex-col gap-2 justify-center items-end w-10">
            {movies.slice(0, 5).map((_, index) => (
              <div
                className="cursor-pointer text-white flex items-center gap-2 justify-start"
                key={index}
                onClick={() => handleIndicatorClick(index)}
              >
                <div
                  className={` bg-white rounded-md ${
                    index === currentMovieIndex ? "w-5 h-[3px] border" : ""
                  }`}
                />
                <p
                  className={`items-center ${
                    index === currentMovieIndex
                      ? "text-base font-bold leading-[14px]"
                      : "text-gray-400 text-xs font-bold leading-[14px]"
                  }`}
                >
                  {index + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
