import React from "react";

export default function Education() {
  const [editMode, setEditMode] = React.useState(false);
  const [education, setEducation] = React.useState([
    {
      school: "Harvard University",
      degree: "Master of Science in Computer Science",
      location: "Cambridge, MA",
      startDate: "2020-02-01",
      endDate: "2022-03-01",
    },
  ]);

  function handleChange(e, index) {
    const { name, value } = e.target;
    setEducation((prevEducation) => {
      const newEducation = [...prevEducation];
      newEducation[index] = {
        ...newEducation[index],
        [name]: value,
      };
      return newEducation;
    });
  }

  function formSubmit(e) {
    e.preventDefault();
    setEditMode(false);
    console.log(education);
  }

  function addEducation() {
    setEducation((prevEducation) => [
      ...prevEducation,
      {
        school: "",
        degree: "",
        location: "",
        startDate: "",
        endDate: "",
      },
    ]);
    setEditMode(true);
  }
  function cancelAdd() {
    setEducation((prevEducation) => prevEducation.slice(0, -1));
    setEditMode(false);
  }
  return (
    <>
      {editMode ? (
        <form action="" onSubmit={formSubmit}>
          {education.map((edu, index) => (
            <div key={index}>
              <input
                type="text"
                name="school"
                placeholder="school"
                value={edu.school}
                required
                onChange={(e) => handleChange(e, index)}
              />
              <input
                type="text"
                name="degree"
                value={edu.degree}
                placeholder="degree"
                required
                onChange={(e) => handleChange(e, index)}
              />
              <input
                type="text"
                placeholder="location"
                value={edu.location}
                name="location"
                required
                onChange={(e) => handleChange(e, index)}
              />
              <input
                type="date"
                name="startDate"
                value={edu.startDate}
                placeholder="startDate"
                required
                onChange={(e) => handleChange(e, index)}
              />
              <input
                type="date"
                name="endDate"
                value={edu.endDate}
                placeholder="endDate"
                required
                onChange={(e) => handleChange(e, index)}
              />
            </div>
          ))}
          <div>
            <button type="submit">Save</button>
            <button type="button" onClick={cancelAdd}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <p className="heading">Education</p>
          {education.map((edu, index) => (
            <div key={index}>
              <div>
                <div className="edu">
                  <div>
                    <h3>{edu.school}</h3>
                    <p>{edu.degree}</p>
                  </div>
                  <div className="right-item">
                    <h5 className="loc">{edu.location}</h5>
                    <i>{edu.startDate}</i> to <i>{edu.endDate}</i>
                  </div>
                </div>
              </div>
              <div className="edit-btn">
                <button
                  onClick={() => {
                    setEditMode(true);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
          <div className="add-btn">
            <button onClick={addEducation}>Add</button>
          </div>
        </>
      )}
    </>
  );
}
