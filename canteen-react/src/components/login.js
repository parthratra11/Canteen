export default function LoginPage() {
  return (
    <>
      <div>
        <h1>This is Login Page !</h1>
        <form>
          <div>
            <select>
              <option>Student</option>
              <option>Teacher</option>
              <option>Admin</option>
            </select>
          </div>
          <div>
            <input type="text" placeholder="Enter your e-mail"></input>
          </div>

          <div>
            <input type="text" placeholder="Enter your password"></input>
          </div>
        </form>
      </div>
    </>
  );
}
