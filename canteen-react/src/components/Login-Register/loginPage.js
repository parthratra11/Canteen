import { useState } from "react";
import "./log.css";
import { useNavigate } from "react-router-dom";

function submitDetails() {}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) {
      alert("Field input(s) cannot be empty");
      return;
    }
    submitDetails();

    if (role === "Outlet Manager") {
      navigate("/Outlet-Management");
    } else {
      navigate("/Home");
    }
  };

  return (
    <>
      <div>
        <h1 className="tempHeader">This is Login Page !</h1>
        <form>
          <div>
            <select
              className="inpSelect"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Admin">Admin</option>
              <option value="Outlet Manager">Outlet Manager</option>
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
