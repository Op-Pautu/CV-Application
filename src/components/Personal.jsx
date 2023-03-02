import { useState } from "react";

export default function Personal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const [editMode, setEditMode] = useState(false);

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
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <p>Email: {formData.email}</p>
              </div>
              <div className="phone">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
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
