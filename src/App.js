import "./App.css";
import { Header } from "./components/header";
import { MovieContainer } from "./components/movieContainer";
import { CategoryContainer } from "./components/categoryContainer";
import { Footer } from "./components/footer";
import { useEffect, useState } from "react";

function App() {
	const [movies, setmovies] = useState([]);

	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/trending/movie/day?api_key=" + process.env.REACT_APP_API_KEY
		)
			.then((response) => response.json())
			.then((data) => setmovies(data.results));
	}, []);

	return (
		<div className="App">
			<Header movie={movies[0]} />
			<h2>Popular movies of today</h2>
			<MovieContainer movies={movies} />
			<h2>Most popular by category</h2>
			<CategoryContainer />
			<Footer />
		</div>
	);
}

export default App;
