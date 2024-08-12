import { useState } from "react";
import "./log.css";

function submitDetails() {}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    submitDetails();
  };

  return (
    <>
      <div>
        <h1>This is Login Page !</h1>
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
