import React from "react";
import "./categoryContainer.css";
import { CategoryElement } from "../categoryElement";
import { MoviePoster } from "../moviePoster";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL =
	"https://api.themoviedb.org/3/genre/movie/list?api_key=" + process.env.REACT_APP_API_KEY;

const baseURL2 = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10751`;

const CategoryContainer = () => {
	const [categories, setCategories] = useState([]);
	// const [moviesByGenre, setMoviesByGenre] = useState([]);
	const [moviesWithGenre, setMoviesWithGenre] = useState([]);

	/*
	useEffect(() => {
		fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=" + process.env.REACT_APP_API_KEY)
			.then((response) => response.json())
			.then((data) => setCategories(data.genres));
	}, []);
	*/

	useEffect(() => {
		axios.get(baseURL).then((response) => {
			setCategories(response.data.genres);
		});
	}, []);

	useEffect(() => {
		axios.get(baseURL2).then((response) => {
			// setMoviesByGenre(response.data);
			setMoviesWithGenre(response.data.results);
		});
	}, []);

	// console.log(categories)

	if (moviesWithGenre !== undefined) {
		return (
			<div className="CategoryContainer">
				<div className="category-navBar">
					{categories.map((categoryTag) => {
						return <CategoryElement key={categoryTag.id} name={categoryTag.name} />;
					})}
				</div>
				<div className="category-results">
					{moviesWithGenre.map((movieItem) => {
						return (
							<MoviePoster
								key={movieItem.id}
								imgURL={"https://image.tmdb.org/t/p/w300" + movieItem.poster_path}
								alt={`${movieItem.original_title} Cinema Poster`}
								title={movieItem.title}
								rating={movieItem.vote_average}
								release_date={movieItem.release_date}
							/>
						);
					})}
				</div>
			</div>
		);
	}
};

export { CategoryContainer };
