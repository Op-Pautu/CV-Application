import React from "react";

export default function Education() {
  const [editMode, setEditMode] = React.useState(false);
  const [formData, setFormData] = React.useState({
    school: "",
    degree: "",
    location: "",
    date: "",
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
            name="school"
            placeholder="school"
            value={formData.school}
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="degree"
            value={formData.degree}
            placeholder="degree"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="location"
            value={formData.location}
            name="location"
            required
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            placeholder="date"
            required
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <div>
            <p className="heading">Education</p>
            <ul className="edu">
              <li className="edu-item">
                <div>
                  <h3>{formData.school}</h3>
                  <p>{formData.degree}</p>
                </div>
                <div className="right-item">
                  <h5 className="loc">{formData.location}</h5>
                  <i>{formData.date}</i>
                </div>
              </li>
            </ul>
          </div>
          <div className="edit-btn">
            <i className="fas fa-graduation-cap"></i>
            <button onClick={() => setEditMode(true)}>Edit</button>
          </div>
        </>
      )}
    </>
  );
}
