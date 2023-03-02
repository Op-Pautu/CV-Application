import React from "react";

function Projects() {
  const [editMode, setEditMode] = React.useState(true);
  const [formData, setFormData] = React.useState([
    {
      title: "",
      description: "",
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
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <div className="projects">
            <p className="heading">Projects</p>
            {formData.map((project, index) => (
              <p key={index} className="project-section">
                <span className="project-title">{project.title}</span>:{" "}
                {project.description}
              </p>
            ))}
          </div>
          <div>
            <button onClick={() => setEditMode((prev) => !prev)}>Edit</button>
          </div>
          <div>
            <button onClick={addProject}>Add Project</button>
          </div>
        </>
      )}
    </>
  );
}

export default Projects;
