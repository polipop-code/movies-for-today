import './App.css';

function App() {
  return (
    <div className="App">
      <p>Hola</p>
      {
        console.log(process.env.REACT_APP_API_KEY)
      }
    </div>
  );
}

export default App;
