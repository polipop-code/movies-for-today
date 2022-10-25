import React from "react";
import "./categoryContainer.css";
import { CategoryElement } from "../categoryElement";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL =
	"https://api.themoviedb.org/3/genre/movie/list?api_key=" + process.env.REACT_APP_API_KEY;

const baseURL2 = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10751`;

const CategoryContainer = () => {
	const [categories, setCategories] = useState([]);
	const [moviesByGenre, setMoviesByGenre] = useState();

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
			setMoviesByGenre(response.data);
		});
	}, []);

	return (
		<div className="CategoryContainer">
			<div className="category-navBar">
				{categories.map((categoryTag) => {
					return <CategoryElement key={categoryTag.id} name={categoryTag.name} />;
				})}
			</div>
		</div>
	);
};

export { CategoryContainer };
