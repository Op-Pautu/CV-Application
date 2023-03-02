import { useState } from "react";

export default function Personal() {
  const [formData, setFormData] = useState({
    name: "Jane Doe",
    email: "janes@email.com",
    phone: "432124124",
    website: "janeisawesome.com",
  });

  const [editMode, setEditMode] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  function handleChange(e) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });

    // Set the active input when it is clicked
    setActiveInput(e.target.name);
  }

  function handleInputBlur() {
    // Clear the active input when it loses focus
    setActiveInput(null);
  }

  function formSubmit(e) {
    e.preventDefault();
    setEditMode(false);
    console.log(formData);
  }

  return (
    <>
      {editMode ? (
        <form action="" onSubmit={formSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="email"
            required
            onChange={handleChange}
          />
          <input
            type="tel"
            placeholder="phone"
            value={formData.phone}
            name="phone"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="website"
            value={formData.website}
            placeholder="website"
            onChange={handleChange}
          />

          <button>Save</button>
        </form>
      ) : (
        <>
          <div className="personal">
            <div className="name">
              <h2>{formData.name}</h2>
              <a href="#">{formData.website}</a>
            </div>
            <div className="contact">
              <div className="email">
                <span></span>
                <p>Email: {formData.email}</p>
              </div>
              <div className="phone">
                <span></span>
                <p>Mobile: {formData.phone}</p>
              </div>
            </div>
          </div>
          <div className="edit-btn">
            <button onClick={() => setEditMode(true)}>Edit</button>
          </div>
        </>
      )}
    </>
  );
}
