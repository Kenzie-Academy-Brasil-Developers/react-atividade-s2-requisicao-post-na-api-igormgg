import "./reset.css";
import "./App.css";
import Login from "./components/Login";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  // useEffect(() => {
  //   const token = window.localStorage.getItem("authToken");
  //   if (!token) {
  //     setIsAuthenticated(null);
  //   }
  // }, [isAuthenticated]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Requisição POST na API</h1>
      </header>
      <body>
        <Login setIsAuthenticated={setIsAuthenticated} />
        <Display isAuthenticated={isAuthenticated} />
      </body>
    </div>
  );
}

export default App;
