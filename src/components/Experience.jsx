import React from "react";

export default function Experience() {
  const [editMode, setEditMode] = React.useState(false);
  const [formData, setFormData] = React.useState({
    role: "",
    company: "",
    time: "",
    contribution: "",
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
            name="role"
            placeholder="role"
            value={formData.role}
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            value={formData.company}
            placeholder="company"
            required
            onChange={handleChange}
          />
          <input
            type="range"
            placeholder="time"
            value={formData.time}
            name="time"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="contribution"
            value={formData.contribution}
            placeholder="contribution"
            required
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <div>
            <p className="heading">Experience</p>
            <ul className="edu">
              <li className="edu-item experience">
                <div className="exp">
                  <h4>{formData.role}</h4>
                  <div>
                    <p>
                      {formData.company} | {formData.time}
                    </p>
                  </div>
                </div>
                <div className="contribution">
                  <p>{formData.contribution}</p>
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
