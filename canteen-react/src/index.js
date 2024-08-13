import ReactDom from "react-dom/client";
import RegistrationPage from "./components/Login-Register/registrationPage";
import LoginPage from "./components/Login-Register/loginPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/Homepage/homepage";
import OutletHomepage from "./components/outletPage/outletHomepage";

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);

function App() {
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

  //! DO ROUTING

  return (
    // <div>
    //   <nav>
    //     {(reg || log) && (
    //       <button className="navBtn" onClick={handleShowLog}>
    //         Login
    //       </button>
    //     )}
    //     {(reg || log) && (
    //       <button className="navBtn" onClick={handleShowReg}>
    //         Registration
    //       </button>
    //     )}
    //   </nav>
    //   {reg && <RegistrationPage setShowReg={setShowReg} />}
    //   {log && <LoginPage setShowLog={setShowLog} />}
    //   {!reg && !log && <HomePage />}
    // </div>

    // <HomePage />

    <OutletHomepage />
  );
}

root.render(<App />);
