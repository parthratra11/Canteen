import ReactDom from "react-dom/client";
import RegistrationPage from "./components/Login-Register/registrationPage";
import LoginPage from "./components/Login-Register/loginPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "./components/Homepage/homepage";
import OutletHomepage from "./components/outletPage/outletHomepage";
<<<<<<< HEAD
import "./index.css"
=======
import Cart from "./components/Cart/cart";
import { CartProvider } from "./context/cartContext";
import PaymentHomepage from "./components/PaymentPage/paymentPage";
>>>>>>> 1d86a1418d8804e88a28526d31c8d162817889ec

// CREATING ROOT ELEMENT
const container = document.getElementById("root");
const root = ReactDom.createRoot(container);

function Main() {
  // THESE VARIABLES DETERMINE WHICH PAGE TO BE DISPLAYED B/W LOGIN AND REGISTRATION
  const [reg, setShowReg] = useState(false);
  const [log, setShowLog] = useState(true);
  // const [log, setShowLog] = useState(false);

  // DISPLAYS REGISTRATION PAGE AND CLOSES LOGIN PAGE
  const handleShowReg = () => {
    setShowReg(true);
    setShowLog(false);
  };

  // DISPLAYS LOGIN PAGE AND CLOSES REGISTRATION PAGE
  const handleShowLog = () => {
    setShowReg(false);
    setShowLog(true);
  };

  return (
<<<<<<< HEAD
    <div className="
    main1">
      <div className="toggle">

=======
    <div className="toggle">
      {/* LOGIN BUTTON */}
>>>>>>> 1d86a1418d8804e88a28526d31c8d162817889ec
      <div className="logreg">
        {(reg || log) && (
          <button className="navBtn" onClick={handleShowLog}>
            Login
          </button>
        )}
      </div>
      {/* REGISTRATION BUTTON */}
      <div className="logreg">
        {(reg || log) && (
          <button className="navBtn" onClick={handleShowReg}>
            Registration
          </button>
        )}
      </div>
<<<<<<< HEAD
        </div>
        <br></br>
=======

      {/* DISPLAYS REGISTRATION / LOGIN PAGE */}
>>>>>>> 1d86a1418d8804e88a28526d31c8d162817889ec
      {reg && <RegistrationPage setShowReg={setShowReg} />}
      {log && <LoginPage setShowLog={setShowLog} />}

      {/* TEMPORARY FEATURE, UNTIL LOGIN AND REGISTRATION ARE PROPERLY IMPLEMENTED */}
      {!reg && !log && <HomePage />}
    </div>
  );
}

function App() {
  return (
    // TODO: CARTPROVIDER USES CART CONTEXT, LEARN ABOUT THAT
    <CartProvider>
      {/* CREATING ROUTES TO DIFFERENT PAGES */}
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Outlet-Management" element={<OutletHomepage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Payment" element={<PaymentHomepage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

// RENDERING THE FIRST PAGE TO BE DISPLAYED
// root.render(<App />);
root.render(<OutletHomepage />);
