import React from "react";
import "./moviePoster.css";

const MoviePoster = (props) => {
	return (
		<div className="MoviePoster">
			<img src={props.imgURL} alt={props.alt} />
			<div className="moviePoster__description">
				<h3>{props.title}</h3>
				<p>
					Rating: <span>{props.rating.toFixed(2)}</span>/10
				</p>
				<p>Release date: {props.release_date}</p>
			</div>
		</div>
	);
};

export { MoviePoster };
