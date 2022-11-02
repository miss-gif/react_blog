import logo from "./logo.svg";
import "./App.css";

function App() {
  let test = "text";

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ color: "blue", fontSize: "30px" }}>개발 blog</div>
        <div> {test} </div>
      </div>
    </div>
  );
}

export default App;
