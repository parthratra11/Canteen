import { useState } from "react";
import "./log.css";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // CHECKS IF ALL OF THE FIELDS HAVE BEEN FILLED OR NOT
    if (email.trim().length === 0 || password.trim().length === 0) {
      alert("Field input(s) cannot be empty");
      return;
    }
    // IF ALL THE CONDITIONS ARE PASSED, THE DETAILS ARE SUBMITTED FOR FURTHER EVALUATION
    submitDetails();
  };

  async function submitDetails() {
    try {
      let item = { email, password };

      let result = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });

      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }

      let data = await result.json();
      localStorage.setItem("user_info", JSON.stringify(data));
      console.log(data.user_info.NAME);
      console.log(data.user_info.EMAIL);
      console.log(data.user_info.PHONE);

      // TODO: IF USER IS ADMIN, USER MUST BE REDIRECTED TO ADMIN PAGE

      // IF THE ROLE OF THE USER IS MANAGER, USER IS REDIRECTED TO OUTLET MANAGEMENT PAGE
      if (role === "Outlet Manager") {
        navigate("/Outlet-Management");
        // ELSE THE USER IS REDIRECTED TO THE HOMEPAGE FOR STUDENT AN TEACHERS
      } else {
        navigate("/Home");
      }
    } catch (error) {
      console.error("Error during API call:", error);
      alert("Login failed. Please check your credentials and try again.");
    }
  }

  return (
    <>
      <div className="card">
        {/* LOGIN FORM */}
        <form>
          <fieldset>
            <h2>Sign In</h2>
            <div className="Field">
              <label>
                Email<sup>*</sup>
              </label>
              <input
                type="text"
                placeholder="Enter your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="Field">
              <label>
                Password<sup>*</sup>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            {/* SELECTION OF ROLE BY USER */}
            <div className="Field">
              <label>
                Role<sup>*</sup>
              </label>
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
            </div>{" "}
            {/* SUBMISSION OF LOGIN DETAILS */}
            <button
              disabled={!email || !password}
              className="submitBtn"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
