import { useState } from "react";

export default function App() {
  const [fullName, setFullName] = useState({ fname: "", lname: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div>
      <h1>Full Name Display</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (fullName.fname && fullName.lname) {
            setIsSubmitted(true);
          }
        }}
      >
        <p style={{ display: "block" }}>
          <label htmlFor="firstname">First Name: </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            required
            onChange={(e) =>
              setFullName((prev) => ({ ...prev, fname: e.target.value }))
            }
          />
        </p>
        <p style={{ display: "block" }}>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            required
            onChange={(e) =>
              setFullName((prev) => ({ ...prev, lname: e.target.value }))
            }
          />
        </p>
        <button type="submit">Submit</button>
      </form>

      {isSubmitted && (
        <p>
          Full Name: {fullName.fname} {fullName.lname}
        </p>
      )}
    </div>
  );
}
