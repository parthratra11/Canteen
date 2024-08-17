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
  const [role, setRole] = useState("Student");
  const [phone,setPhone]=useState("");
  const navigate = useNavigate();
  let roll=null;
  let empid =null;
function submitDetails(setShowReg) {
  if(role == "Student"){
    roll=tempnum;

  }else{
    empid=tempnum;
  }
  async function signup() {
    let item = {name,role,email,phone,roll,empid,password};
    console.warn(name,role,email,phone,roll,empid,password);
    let result = await fetch("http://127.0.0.1:5000/registration",{
      method:"POST",
      body:JSON.stringify(item),
      mode:'cors',
      headers:{
        "Content-Type": "application/json" ,
        "Accept": "application/json",
      } 
    })

      result = await result.json();
      localStorage.setItem("user_info", JSON.stringify(result));
      console.warn("result",result);
    
  }
  setShowReg(false);
  signup();
   navigate("/Home");
}
  const handleSubmit = (event) => {
    event.preventDefault();
    


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
    if (password != tempPass) {
      alert("Passwords do not match");
      return;
    }
    submitDetails(setShowReg);
   
  };

  return (
    <>
      <div className="card">
       
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
            <label>tempnum No.<sup>*</sup></label>
            <input
              className="inpForm"
              type="text"
              placeholder="Your College Roll No./Employee ID"
              value={tempnum}
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
              value={phone}
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
