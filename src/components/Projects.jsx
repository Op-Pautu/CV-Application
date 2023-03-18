import React from "react";

function Projects() {
  const [editMode, setEditMode] = React.useState(false);
  const [formData, setFormData] = React.useState([
    {
      title: "Tic Tae Toe",
      description:
        "Made a simple game of tic tae toe using HTML, CSS, and JavaScript",
    },
  ]);

  function handleChange(e, index) {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newData = [...prevData];
      newData[index] = {
        ...newData[index],
        [name]: value,
      };
      return newData;
    });
  }

  function formSubmit(e) {
    e.preventDefault();
    setEditMode((prev) => !prev);
    console.log(formData);
  }

  function addProject() {
    setFormData((prevData) => [
      ...prevData,
      {
        title: "",
        description: "",
      },
    ]);
    setEditMode(true);
  }

  function cancelAdd() {
    setFormData((prevData) => prevData.slice(0, -1));
    setEditMode(false);
  }
  return (
    <>
      {editMode ? (
        <form action="" onSubmit={formSubmit}>
          {formData.map((project, index) => (
            <div key={index}>
              <input
                type="text"
                name="title"
                placeholder="title"
                value={project.title}
                required
                onChange={(e) => handleChange(e, index)}
              />
              <input
                type="text"
                name="description"
                value={project.description}
                placeholder="description"
                required
                onChange={(e) => handleChange(e, index)}
              />
            </div>
          ))}
          <div className="add-btn">
            <button type="submit">Save</button>
            <button type="button" onClick={cancelAdd}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="projects">
            <p className="heading">Projects</p>
            {formData.map((project, index) => (
              <p key={index} className="project-section">
                <span className="project-title">{project.title}</span>:&nbsp;
                {project.description}
              </p>
            ))}
          </div>
          <div className="edit-btn">
            <button onClick={() => setEditMode((prev) => !prev)}>Edit</button>
          </div>
          <div>
            <button onClick={addProject} className="add-btn">
              Add Project
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Projects;
