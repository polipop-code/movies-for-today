import React from "react";
import "./header.css";

const Header = ({ movie }) => {
	return (
		<header className="Header">
			<figure className="header__Image">
				<img
					src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
					alt={`${movie.original_title} Cinema Poster`}
				/>
			</figure>
			<div className="header__description">
				<h1>Best movie of today</h1>
				<h3>
					{movie.original_title}, {movie.vote_average.toFixed(2)}/10 ⭐
				</h3>
				<p>
					{" "}
					<strong>Description:</strong> {movie.overview}
				</p>
			</div>
		</header>
	);
};

export { Header };
