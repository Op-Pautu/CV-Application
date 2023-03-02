import React from "react";

export default function Experience() {
  const [editMode, setEditMode] = React.useState(false);
  const [experience, setExperience] = React.useState([
    {
      role: "Software Developer",
      company: "Netflix",
      startDate: "2022-02-01",
      endDate: "2023-03-01",
      contribution: `
          I helped create a new top-secret feature.
          Also worked on X, Y, and Z.
          Mainly used MERN stack.
          I also worked on the front-end using React and Redux.
          And of course, I used Git for version control.
          I used a bit of Tailwind CSS for styling.
          Not to mention TypeScript for type safety.
          And who can forget good ol' Python for data science.
`,
    },
  ]);

  function handleChange(e, index) {
    const { name, value } = e.target;
    setExperience((prevExperience) => {
      const newExperience = [...prevExperience];
      newExperience[index] = {
        ...newExperience[index],
        [name]: value,
      };
      return newExperience;
    });
  }
  function formSubmit(e) {
    e.preventDefault();
    setEditMode(false);
    console.log(experience);
  }
  function addExperience() {
    setExperience((prevExperience) => [
      ...prevExperience,
      { role: "", company: "", startDate: "", endDate: "", contribution: "" },
    ]);
    setEditMode(true);
  }

  return (
    <>
      {editMode ? (
        <form action="" onSubmit={formSubmit}>
          {experience.map((experience, index) => (
            <div key={index}>
              <input
                type="text"
                name="role"
                placeholder="role"
                value={experience.role}
                required
                onChange={(e) => handleChange(e, index)}
              />
              <input
                type="text"
                name="company"
                value={experience.company}
                placeholder="company"
                required
                onChange={(e) => handleChange(e, index)}
              />
              <input
                type="date"
                placeholder="startDate"
                value={experience.startDate}
                name="startDate"
                required
                onChange={(e) => handleChange(e, index)}
              />
              <input
                type="date"
                placeholder="endDate"
                value={experience.endDate}
                name="endDate"
                required
                onChange={(e) => handleChange(e, index)}
              />
              <input
                type="text"
                name="contribution"
                value={experience.contribution}
                placeholder="contribution"
                required
                onChange={(e) => handleChange(e, index)}
              />
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <p className="heading">Experience</p>
          {experience.map((experience, index) => (
            <div key={index}>
              <div>
                <div className="exp">
                  <h4>{experience.role}</h4>
                  <div>
                    <p>
                      {experience.company} | {experience.startDate} to{" "}
                      {experience.endDate}
                    </p>
                  </div>
                </div>
                <div className="contribution">
                  <p>{experience.contribution}</p>
                </div>
              </div>
              <div className="edit-btn">
                <button onClick={() => setEditMode(true)}>Edit</button>
              </div>
            </div>
          ))}
          <div className="add-btn">
            <button onClick={addExperience}>Add</button>
          </div>
        </>
      )}
    </>
  );
}
