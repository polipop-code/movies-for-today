import React from "react";
import "./categoryElement.css";

const CategoryElement = (props) => {
	return (
		<button type="button" className="CategoryElement">
			{props.name}
		</button>
	);
};

export { CategoryElement };
