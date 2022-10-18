// import axios from "axios";
import "./App.css";
import { Header } from "./components/header";
import { MoviePoster } from "./components/moviePoster";
import { Footer } from "./components/footer";
import { useEffect, useState } from "react";

function App() {
	const [movies, setMovies] = useState();
	useEffect(() => {
		fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=" + process.env.REACT_APP_API_KEY)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setMovies(data.results);
			});
	}, []);

	return (
		<div className="App">
			<Header />
			<main className="movie-container">
				<MoviePoster imgURL={"https://image.tmdb.org/t/p/w300/" + movies[0].poster_path} />
			</main>
			<Footer />
		</div>
	);
}

export default App;
