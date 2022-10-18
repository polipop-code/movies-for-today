import React from "react";
import "./moviePoster.css";

function MoviePoster(props) {
	return (
		<figure>
			<img src={props.imgURL} alt={props.alt} />
		</figure>
	);
}

export { MoviePoster };
