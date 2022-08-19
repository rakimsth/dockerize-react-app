import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log("ENV Vars", window._env_.REACT_APP_CMS_API_SERVER);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{window._env_.REACT_APP_COMPANYNM}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
