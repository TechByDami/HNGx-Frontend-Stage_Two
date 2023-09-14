import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Homepage from "./components/Homepage";
import MoviePage from "./components/MoviePages";
import ErrorPage from "./components/ErrorPage";
import MovieSearch from "./components/MovieSearch";
import ComingSoon from "./components/ComingSoon";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const error = {
    code: "ERR_BAD_REQUEST",
    message: "Request failed with status code 404",
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              searchQuery={searchQuery}
              onHandleSearch={handleSearch}
              onSearchInputChange={handleSearchInputChange}
            />
          }
        />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route
          path="/search/:query"
          element={
            <MovieSearch
              searchQuery={searchQuery}
              onHandleSearch={handleSearch}
              onSearchInputChange={handleSearchInputChange}
            />
          }
        />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="*" element={<ErrorPage error={error} />} />
      </Routes>
    </div>
  );
}

export default App;
