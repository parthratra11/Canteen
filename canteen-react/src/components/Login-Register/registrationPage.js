import { useState } from "react";
import "./log.css";
import { useNavigate } from "react-router-dom";
import "./registration.css";

export default function RegistrationPage({ setShowReg }) {
  const [name, setName] = useState("");
  const [tempnum, setRno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tempPass, setTempPass] = useState("");
  const [role, setRole] = useState("student");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  let roll = "";
  let empid = "";
  function submitDetails(setShowReg) {
    if (role == "student") {
      roll = tempnum;
    } else {
      empid = tempnum;
    }
    async function signup() {
      let item = { name, role, email, phone, roll, empid, password };
      console.warn(item);

      let formData = new FormData();
      for (let key in item) {
        formData.append(key, item[key]);
      }

      let result = await fetch("http://127.0.0.1:5000/registration", {
        method: "POST",
        body: formData,
        mode: "cors",
        headers: {
          Accept: "application/json",
        },
      });

      result = await result.json();
      localStorage.setItem("user_info", JSON.stringify(result));
      console.warn("result", result);
    }

    // CLOSES THE REGISTRATION PAGE AND REDIRECTS TO THE HOMEPAGE ON SUCCESSFULL REGISTRATION
    setShowReg(false);
    signup();
    navigate("/Home");
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    // CHECKS IF ALL OF THE FIELDS HAVE BEEN FILLED OR NOT
    if (
      name.trim().length === 0 ||
      tempnum.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0 ||
      tempPass.trim().length === 0
    ) {
      alert("Field input(s) cannot be empty");
      return;
    }
    // CHECKS IF THE PASSWORD ENTERED AGAIN MATCHES OR NOT
    if (password != tempPass) {
      alert("Passwords do not match");
      return;
    }
    // IF ALL THE CONDITIONS ARE PASSED, THE DETAILS ARE SUBMITTED FOR FURTHER EVALUATION
    submitDetails(setShowReg);
  };

  return (
    <>
      <div className="card">
        {/* REGISTRATION FORM */}
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Sign Up</h2>

            <div className="Field">
              <label>
                Name <sup>*</sup>
              </label>
              <input
                className="inpForm"
                type="text"
                placeholder="Your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="Field">
              <label>
                tempnum No.<sup>*</sup>
              </label>
              <input
                className="inpForm"
                type="text"
                placeholder="Your College Roll No./Employee ID"
                value={tempnum}
                onChange={(e) => setRno(e.target.value)}
              ></input>
            </div>
            <div className="Field">
              <label>
                Email<sup>*</sup>
              </label>
              <input
                className="inpForm"
                type="text"
                placeholder="Your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="Field">
              <label>
                Phone No.<sup>*</sup>
              </label>
              <input
                className="inpForm"
                type="text"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></input>
            </div>
            <div className="Field">
              <label>
                Password<sup>*</sup>
              </label>
              <input
                className="inpForm"
                type="text"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="Field">
              <label>
                Confirm Password<sup>*</sup>
              </label>
              <input
                className="inpForm"
                type="text"
                placeholder="Re-enter Password"
                value={tempPass}
                onChange={(e) => setTempPass(e.target.value)}
              ></input>
            </div>

            {/* SELECTION OF ROLE BY USER */}
            <div className="Field">
              <label>
                Role <sup>*</sup>
              </label>
              <select
                className="inpSelect"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <option value="student">student</option>
                <option value="teacher">teacher</option>
              </select>
            </div>

            {/* SUBMIT BUTTON, IMPLEMENT THE SUBMISSION LOGIC TO IT */}
            <button className="submitBtn">Submit</button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
