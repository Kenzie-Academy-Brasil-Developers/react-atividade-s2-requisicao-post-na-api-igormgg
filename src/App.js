import "./reset.css";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Requisição POST na API</h1>
      </header>
      <body>
        <Login />
      </body>
    </div>
  );
}

export default App;
