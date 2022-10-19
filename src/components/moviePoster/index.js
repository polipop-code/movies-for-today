import React from "react";
import "./moviePoster.css";

const MoviePoster = (props) => {
	return (
		<>
			<div className="MoviePoster">
				<img src={props.imgURL} alt={props.alt} />
				<h3>{props.title}</h3>
				<p>{props.rating}/10</p>
				<p>Release date: {props.release_date}</p>
			</div>
		</>
	);
};

export { MoviePoster };
