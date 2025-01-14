import { useState } from "react";

export default function App() {
  const [fname, setFname] = useState();
  const [sname, setSname] = useState();
  const [isSubmit,SetisSubmit] = useState(false);
  const [submittedSname, setSubmitSname]=useState();
  const [submittedfname, setSubmittedfname]=useState();
  const [fullName, setFullName] = useState("");

  

  return (
    <div>
      <h1>Full Name Display</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFullName(`${fname} ${sname}`);
          setSubmitSname(sname);
          setSubmittedfname(fname);
          SetisSubmit(true)
        }}
      >
        <p style={{ display: "block" }}>
          <label htmlFor="firstname">First Name: </label>
          <input type="text" id="firstname" name="firstname" required onChange={(e) => {
            setFname(e.target.value)}}/>
        </p>
        <p style={{ display: "block" }}>
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" required onChange={(e) => {
            setSname(e.target.value)}}/>
        </p>
        <button type="submit">
          Submit
        </button>
      </form>
      
      {isSubmit && submittedSname && submittedfname && (
        <p>
          Full Name : {fullName}
        </p>
      )}
    </div>
  );
}
