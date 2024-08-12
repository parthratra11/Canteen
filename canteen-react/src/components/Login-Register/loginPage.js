import { useState } from "react";
import "./log.css";

function submitDetails(setShowLog) {
  setShowLog(false);
}

export default function LoginPage({ setShowLog }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) {
      alert("Field input(s) cannot be empty");
      return;
    }
    submitDetails(setShowLog);
  };

  return (
    <>
      <div>
        <h1 className="tempHeader">This is Login Page !</h1>
        <form>
          <div>
            <select className="inpSelect">
              <option>Student</option>
              <option>Teacher</option>
              <option>Admin</option>
            </select>
          </div>
          <div>
            <input
              className="inpForm"
              type="text"
              placeholder="Enter your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div>
            <input
              className="inpForm"
              type="text"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
