import { useState } from "react";

export default function App() {
  const [fname, setFname] = useState();
  const [sname, setSname] = useState();
  const [isSubmit,SetisSubmit] = useState(false);

  return (
    <div>
      <h1>Full Name Display</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          SetisSubmit(true)
        }}
      >
        <p style={{ display: "block" }}>
          <label htmlFor="firstname">First Name: </label>
          <input type="text" pattern="[A-Za-z]*" title="Letters only" id="firstname" name="firstname" required onChange={(e) => {
            setFname(e.target.value)}}/>
        </p>
        <p style={{ display: "block" }}>
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" pattern="[A-Za-z]*" title="Letters only" id="lastname" name="lastname" required onChange={(e) => {
            setSname(e.target.value)}}/>
        </p>
        <button type="submit">
          Submit
        </button>
      </form>
      
      {isSubmit && fname && sname && (
        <p>
          Full Name : {fname} {sname}
        </p>
      )}
    </div>
  );
}
