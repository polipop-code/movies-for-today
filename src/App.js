import "./App.css";
import { Header } from "./components/header";
import { MovieContainer } from "./components/movieContainer";
import { CategoryContainer } from "./components/categoryContainer";
import { Footer } from "./components/footer";

function App() {
	return (
		<div className="App">
			<Header />
			<h2>Popular movies of today</h2>
			<MovieContainer />
			<h2>Most popular by category</h2>
			<CategoryContainer />
			<Footer />
		</div>
	);
}

export default App;
