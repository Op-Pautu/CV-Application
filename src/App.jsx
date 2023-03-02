import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Personal from "./components/Personal";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Personal />
      <Education />
      <Experience />
      {<Projects />}
    </div>
  );
}

export default App;
