import "./App.css";
import { Header } from "./components/header";
import { MovieContainer } from "./components/movieContainer";
import { Footer } from "./components/footer";

function App() {
	return (
		<div className="App">
			<Header />
			<MovieContainer />
			<Footer />
		</div>
	);
}

export default App;
