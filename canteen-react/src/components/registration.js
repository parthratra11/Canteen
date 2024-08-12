export default function RegistrationPage() {
  return (
    <>
      <div>
        <h1>This is Registration Page !</h1>
        <form>
          <div>
            <select>
              <option>Student</option>
              <option>Teacher</option>
              {/* <option>Admin</option> */}
            </select>
          </div>
          <div className="inpDiv">
            <input
              className="inpForm"
              type="text"
              placeholder="Your Full Name"
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Your College Roll No./Employee ID"
            ></input>
          </div>
          <div>
            <input type="text" placeholder="Your e-mail"></input>
          </div>

          <div>
            <input type="text" placeholder="Your password"></input>
          </div>
        </form>
      </div>
    </>
  );
}
