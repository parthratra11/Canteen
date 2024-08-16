import ReactDom from "react-dom/client";
import RegistrationPage from "./components/Login-Register/registrationPage";
import LoginPage from "./components/Login-Register/loginPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "./components/Homepage/homepage";
import OutletHomepage from "./components/outletPage/outletHomepage";

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);

function Main() {
  const [reg, setShowReg] = useState(false);
  const [log, setShowLog] = useState(true);

  const handleShowReg = () => {
    setShowReg(true);
    setShowLog(false);
  };

  const handleShowLog = () => {
    setShowReg(false);
    setShowLog(true);
  };

  return (
    <div className="toggle">
      <div className="logreg">
        {(reg || log) && (
          <button className="navBtn" onClick={handleShowLog}>
            Login
          </button>
        )}
      </div>
      <div className="logreg">
        {(reg || log) && (
          <button className="navBtn" onClick={handleShowReg}>
            Registration
          </button>
        )}
      </div>

      {reg && <RegistrationPage setShowReg={setShowReg} />}
      {log && <LoginPage setShowLog={setShowLog} />}
      {!reg && !log && <HomePage />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Outlet-Management" element={<OutletHomepage />} />
      </Routes>
    </Router>
  );
}

// root.render(<App />);
root.render(<OutletHomepage />);
