import React from "react";
import "./socialMediaIcon.css";

const SocialMediaIcon = (props) => {
	return (
		<a href={props.profileURL} target="_blank" rel="noreferrer">
			<img className="SocialMediaIcon" src={props.imageURL} alt={props.alt} />
		</a>
	);
};

export { SocialMediaIcon };
