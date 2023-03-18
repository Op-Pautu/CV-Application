import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Personal from "./components/Personal";
import Projects from "./components/Projects";
import React from "react";
function App() {
  const [editMode, setEditMode] = React.useState(true);

  return (
    <>
      {editMode ? (
        <div className="App">
          <Personal />
          <Education />
          <Experience />
          <Projects />
        </div>
      ) : (
        <div>
          <p>Edit mode is off</p>
        </div>
      )}
    </>
  );
}

export default App;
