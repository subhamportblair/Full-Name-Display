import { useState } from "react";

export default function App() {
  const [fname, setFname] = useState();
  const [sname, setSname] = useState();

  return (
    <div>
      <h1>Full Name Display</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFname(firstname.value);
          setSname(lastname.value);
        }}
      >
        <p style={{ display: "block" }}>
          <label htmlFor="firstname">First Name: </label>
          <input type="text" id="firstname" name="firstname" required />
        </p>
        <p style={{ display: "block" }}>
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" required />
        </p>
        <button
          onClick={() => {
           
            console.log(fname, sname);
          }}
        >
          Submit
        </button>
      </form>
      <p></p>
      {fname && sname && (
        <div>
          Full Name : {fname} {sname}
        </div>
      )}
    </div>
  );
}
