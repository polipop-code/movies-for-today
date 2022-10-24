import React from "react";
import "./movieContainer.css";
import { MoviePoster } from "../moviePoster";
// import { useEffect, useState } from "react";

const MovieContainer = ({ movies }) => {
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
