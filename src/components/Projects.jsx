import React from "react";

function Projects() {
  const [editMode, setEditMode] = React.useState(true);
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
  });

  function handleChange(e) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  }

  function formSubmit(e) {
    e.preventDefault();
    setEditMode((prev) => !prev);
    console.log(formData);
  }

  return (
    <>
      {editMode ? (
        <form action="" onSubmit={formSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={formData.title}
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            placeholder="description"
            required
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>
            {formData.title}: {formData.description}
          </p>
        </div>
      )}
    </>
  );
}

export default Projects;
