import React from "react";
import "./footer.css";
import { SocialMediaIcon } from "../socialMediaIcon";
import socialMedia from "../../api/socialMedia.json";

const Footer = () => {
	return (
		<footer className="Footer">
			<section className="section--credits">
				<p>
					Developed by @polipop-code on{" "}
					<a href="https://github.com/polipop-code" target="_blank" rel="noreferrer">
						GitHub
					</a>
				</p>
			</section>
			<section className="section--social">
				{socialMedia.map((socialElement) => {
					return (
						<SocialMediaIcon
							key={socialElement.name}
							profileURL={socialElement.profileURL}
							imageURL={socialElement.imageURL}
							alt={socialElement.alt}
						/>
					);
				})}
			</section>
		</footer>
	);
};

export { Footer };
