import "./homepage.css";
import { useNavigate } from "react-router-dom";
let user = JSON.parse(localStorage.getItem("user-info"));

function NavigationBar() {
  const navigate = useNavigate();

  function Greet() {
    return (
      <div className="navItem" id="greet">
        Greet {user && user.username}
      </div>
    );
  }
  function SupportMenu() {
    return (
      <div className="navItem" id="supportMenu">
        Support
      </div>
    );
  }
  function BruceBanner() {
    return <div id="banner">Banner</div>;
  }
  function Cart() {
    return (
      <div className="navItem" id="cart">
        Cart
      </div>
    );
  }

  function Logout() {
    function handlelog() {
      localStorage.clear();
      navigate("/");
    }

    return (
      <div className="navItem" id="logout">
        <button className="logout" onClick={handlelog}>
          logout
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="navBar">
        <Greet />
        <SupportMenu />
        <BruceBanner />
        <Cart />
        <Logout />
      </div>
    </>
  );

  // function globalSearch() {}
}

function Outlets() {}

function Menu() {
  function search() {}
  function Item() {}
}

export default function HomePage() {
  return (
    <>
      <h1 className="homeHeader">This is Homepage !</h1>
      <NavigationBar />
    </>
  );
}
