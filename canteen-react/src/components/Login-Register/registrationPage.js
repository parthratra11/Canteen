import { useState } from "react";
import "./log.css";
import { useNavigate } from "react-router-dom";
import "./registration.css";

function submitDetails(setShowReg) {
  setShowReg(false);
}

export default function RegistrationPage({ setShowReg }) {
  const [name, setName] = useState("");
  const [rno, setRno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tempPass, setTempPass] = useState("");
  const [role, setRole] = useState("Student");
  const [phonenumber,setPhone]=useState("");
  const navigate = useNavigate();

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
    navigate("/Home");
  };

  return (
    <>
      <div className="card">
       
        <form onSubmit={handleSubmit}> 
          <fieldset>

       
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
            <label>Roll No.<sup>*</sup></label>
            <input
              className="inpForm"
              type="number"
              placeholder="Your College Roll No./Employee ID"
              value={rno}
              onChange={(e) => setRno(e.target.value)}
            ></input>
          </div>
          <div className="Field">
            <label>Email<sup>*</sup></label>
            <input
              className="inpForm"
              type="text"
              placeholder="Your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="Field">
            <label>Phone No.<sup>*</sup></label>
            <input
              className="inpForm"
              type="text"
              placeholder="Your Phone Number"
              value={phonenumber}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </div>
          <div className="Field">
            <label>Password<sup>*</sup></label>
            <input
              className="inpForm"
              type="text"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="Field">
            <label>Confirm Password<sup>*</sup></label>
            <input
              className="inpForm"
              type="text"
              placeholder="Re-enter Password"
              value={tempPass}
              onChange={(e) => setTempPass(e.target.value)}
            ></input>
          </div>
          
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
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>
          <button className="submitBtn" >
          Submit
          </button>
          </fieldset>
        </form>


      </div>
    </>
  );
}
