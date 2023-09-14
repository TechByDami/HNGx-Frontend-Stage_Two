import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import watch from "../assets/watch.svg";
import star from "../assets/Star.svg";
import tickets from "../assets/TwoTickets.svg";
import list from "../assets/List.svg";
import best from "../assets/best.svg";
import listwhite from "../assets/Listwhite.svg";

import MoviePageSidebar from "./MoviePageSidebar";
import LoadingPage from "./LoadingPage";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const apiKey = "f5b7789b44803ba38cab2d46277a47e6";
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setMovie(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching movie movie?:", error);
      });
  }, [id]);

  const releaseDate = new Date(movie?.release_date);
  const releaseDateUTC = releaseDate.toUTCString().slice(0, 16);
  const runtime = movie?.runtime;

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const formattedRuntime = `${hours} h ${minutes} min`;
  console.log(`The movie's duration is ${hours} hours and ${minutes} minutes`);

  return (
    <>
      <div className="flex">
        <MoviePageSidebar id={id} />
        {!movie ? (
          <div className="w-full">
            <LoadingPage />
          </div>
        ) : (
          <>
            <div className="text-black md:ml-[13rem] p-3.5 md:p-8 overflow-y-auto flex-1">
              <div
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.poster_path})`,
                }}
                className="rounded-3xl h-[450px] bg-gray-200 w-full bg-cover bg-center flex flex-col justify-center"
              >
                <div className="flex flex-col items-center cursor-pointer">
                  <img src={watch} alt="" />
                  <p className="text-2xl font-medium text-[#E8E8E8]">
                    Watch Trailer
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-between gap-y-4 py-8 lg:items-center">
                <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4 lg:items-center">
                  <p
                    data-testid="movie-title"
                    className="md:text-2xl text-xl font-medium text-[#404040]"
                  >
                    <span className="font-bold">{movie?.title}</span> •{" "}
                    {releaseDateUTC} • PG-13 • {formattedRuntime}
                  </p>
                  <div className="flex gap-x-3">
                    {movie?.genres &&
                      movie?.genres.map((genre) => (
                        <button
                          key={genre.id}
                          className="text-rose-600 py-2 px-3 text-xs font-bold border rounded-full"
                        >
                          {genre.name}
                        </button>
                      ))}
                  </div>
                </div>

                <div className="flex items-center gap-x-2">
                  <img src={star} alt="" />
                  <span className="flex items-center gap-x-2">
                    <p className="text-[#E8E8E8] font-medium text-2xl">
                      {movie?.vote_average}
                    </p>
                    <p className="text-[#666] font-medium">|</p>
                    <p className="text-xl text-[#666] font-medium">350k</p>
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-y-4 gap-x-2 md:flex-row">
                <div className="flex-[1.4_1_0] w-1/3 flex flex-col gap-y-3 lg:gap-y-5">
                  <p data-testid="movie-overview" className="lg:text-xl">
                    {movie?.overview}
                  </p>

                  <p>
                    Director:{" "}
                    <span className="text-rose-600">Joshua Kosinski</span>
                  </p>
                  <p>
                    Writer:{" "}
                    <span className="text-rose-600">
                      Jim Cash, Jack Epps Jr, Peter Craig
                    </span>
                  </p>
                  <p>
                    Stars:{" "}
                    <span className="text-rose-600">
                      Tom Cruise, Jennifer Connelly, Miles Teller
                    </span>
                  </p>
                  <span className="flex gap-x-6 items-center border border-[#C7C7C7] rounded-[10px]">
                    <div className="bg-rose-600 px-5 py-3 rounded-xl text-white text-sm lg:text-xl font-medium">
                      Top rated movie #65
                    </div>
                    <p className="text-sm">Awards 9 nominations</p>
                  </span>
                </div>

                <div className="flex flex-col gap-y-8">
                  <div className="flex flex-col gap-y-3">
                    <div className="bg-rose-600 px-5 py-3 rounded-xl w-full text-white gap-x-[10px] justify-center text-base md:text-sm lg:text-xl font-medium flex items-center">
                      <img src={tickets} alt="" />
                      <p>See Showtimes</p>
                    </div>
                    <div className="bg-gray-300 px-5 py-3 rounded-xl w-full text-[#333] justify-center text-base md:text-sm lg:text-xl  gap-x-[10px] font-medium flex items-center">
                      <img src={list} alt="" />
                      <p>More watch options</p>
                    </div>
                  </div>

                  <div className="relative">
                    <img className="w-full" src={best} alt="" />

                    <div
                      id="best-movies"
                      className="flex absolute w-full bottom-0 items-center gap-x-3"
                    >
                      <img src={listwhite} alt="" />
                      <p className="text-[#E8E8E8] text-sm font-medium">
                        The Best Movies and Shows in September
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MoviePage;
