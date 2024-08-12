import ReactDom from "react-dom/client";
import RegistrationPage from "./components/registration";
import LoginPage from "./components/login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
// import Styles from "style-loader!css-loader?modules!./styles.css";

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);

function App() {
  const [reg, setShowReg] = useState(true);
  const [log, setShowLog] = useState(false);

  const handleShowReg = () => {
    setShowReg(true);
    setShowLog(false);
  };

  const handleShowLog = () => {
    setShowReg(false);
    setShowLog(true);
  };

  return (
    <div>
      <nav>
        <button onClick={handleShowReg}>Show Registration</button>
        <button onClick={handleShowLog}>Show Login</button>
      </nav>
      {reg && <RegistrationPage />}
      {log && <LoginPage />}
    </div>
  );
}

root.render(<App />);
