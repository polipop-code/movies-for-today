import React from "react";
import "./movieContainer.css";
import { MoviePoster } from "../moviePoster";
import { useEffect, useState } from "react";

const MovieContainer = () => {
	const [movies, setmovies] = useState([]);

	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/trending/movie/day?api_key=" + process.env.REACT_APP_API_KEY
		)
			.then((response) => response.json())
			.then((data) => setmovies(data.results));
	}, []);

	return (
		<div className="MovieContainer">
			{movies.map((movie) => {
				return (
					<MoviePoster
						key={movie.id}
						imgURL={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
						alt={`${movie.original_title} Cinema Poster`}
						title={movie.title}
						rating={movie.vote_average}
						release_date={movie.release_date}
					/>
				);
			})}
		</div>
	);
};

export { MovieContainer };
