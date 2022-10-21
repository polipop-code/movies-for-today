import React from "react";
import "./categoryContainer.css";
import { CategoryElement } from "../categoryElement";
import { useEffect, useState } from "react";

const CategoryContainer = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=" + process.env.REACT_APP_API_KEY)
			.then((response) => response.json())
			.then((data) => setCategories(data.genres));
	}, []);

	return (
		<div className="CategoryContainer">
			{categories.map((categoryTag) => {
				return <CategoryElement key={categoryTag.id} name={categoryTag.name} />;
			})}
		</div>
	);
};

export { CategoryContainer };