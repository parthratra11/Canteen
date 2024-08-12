import { useState } from "react";
import "./log.css";

function submitDetails(setShowReg) {
  setShowReg(false);
}

export default function RegistrationPage({ setShowReg }) {
  const [name, setName] = useState("");
  const [rno, setRno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tempPass, setTempPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      name.trim().length === 0 ||
      rno.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0 ||
      tempPass.trim().length === 0
    ) {
      alert("Field input(s) cannot be empty");
      return;
    }
    if (password != tempPass) {
      alert("Passwords do not match");
      return;
    }
    submitDetails(setShowReg);
  };

  return (
    <>
      <div>
        <h1 className="tempHeader">This is Registration Page !</h1>
        <form>
          <div>
            <select className="inpSelect">
              <option>Student</option>
              <option>Teacher</option>
            </select>
          </div>
          <div>
            <input
              className="inpForm"
              type="text"
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              className="inpForm"
              type="text"
              placeholder="Your College Roll No./Employee ID"
              value={rno}
              onChange={(e) => setRno(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              className="inpForm"
              type="text"
              placeholder="Your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div>
            <input
              className="inpForm"
              type="text"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              className="inpForm"
              type="text"
              placeholder="Confirm Password"
              value={tempPass}
              onChange={(e) => setTempPass(e.target.value)}
            ></input>
          </div>
        </form>
        <button className="submitBtn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}
