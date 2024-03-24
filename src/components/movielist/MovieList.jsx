import React, { useState, useEffect } from "react";
import _ from "lodash";

import "./MovieList.css";
import FireIcon from "../../assets/fire.png";
import MovieCard from "./MovieCard";
import FilterGroup from "./filterGroup";

const MovieList = ({ type, emoji, icon }) => {
  const [movies, setMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });
  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (sort.by === "default") {
      setFilteredMovies(movies);
    } else {
      const sortedMovies = _.orderBy(filteredMovies, [sort.by], [sort.order]);
      setFilteredMovies(sortedMovies);
    }
  }, [sort]);

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=<provide your api key>`
    );
    const data = await response.json();
    setMovies(data.results);
    setFilteredMovies(data.results);
  };

  const handleRatingClick = (rating) => {
    if (rating === minRating) {
      setMinRating(0);
      setFilteredMovies(movies);
    } else {
      setMinRating(rating);
      const filtered = movies.filter((movie) => movie.vote_average >= rating);
      setFilteredMovies(filtered);
    }
  };

  const handleSortChange = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="movie_list" id={type}>
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          {type}
          <img src={icon} alt={emoji} className="navbar_emoji" />
        </h2>
        <div className="align_center movie_list_fs">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleRatingClick}
            filters={[8, 7, 6, 5]}
          />
          <select
            name="by"
            id=""
            className="movie_sorting"
            value={sort.by}
            onChange={handleSortChange}
          >
            <option value="default">Sort By</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            id=""
            className="movie_sorting"
            value={sort.order}
            onChange={handleSortChange}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
