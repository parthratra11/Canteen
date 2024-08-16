import { use, useState } from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";

// debugger
// let user = JSON.parse(localStorage.getItem("user_info"));
// console.log("ppppppppppppppp");
function NavigationBar() {
  const navigate = useNavigate();

  function Greet() {
    return <div>Greet</div>;
  }
  function SupportMenu() {
    return <div>Support</div>;
  }
  function BruceBanner() {
    return <div>Banner</div>;
  }
  function Cart() {
    return <div>Cart</div>;
  }

  function Logout() {
    function handlelog() {
      localStorage.clear();
      navigate("/");
    }

    return (
      <div>
        <button className="logout" onClick={handlelog}>
          logout
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="navBar">
        <div className="main">
          <div className="greet">
            <Greet />
          </div>

          <div className="banner">
            <BruceBanner />
          </div>
        </div>
        <div className="rightmenue">
          <div className="support">
            <SupportMenu />
          </div>
          <div className="cart">
            <Cart />
          </div>
          <div className="logout">
            <Logout />
          </div>
        </div>
      </div>
    </>
  );
}

function Outlets({ outlets, setActiveMenu }) {
  return (
    <>
      <div className="outletsNavBar">
        {outlets.map((outlet) => (
          <div
            onClick={() => setActiveMenu(outlet.id)}
            className="outletsNavItem"
            key={outlet.id}
          >
            {outlet.name}
          </div>
        ))}
      </div>
    </>
  );
}

function Menu({ outlets, activeMenu }) {
  function search() {}
  function Item() {}

  const outlet = outlets.find((outlet) => outlet.id === activeMenu);

  return <div>{outlet.menu}</div>;
}

export default function HomePage() {
  const outlets = [
    { id: 1, name: "Outlet 1", menu: "Outlet 1 Menu" },
    { id: 2, name: "Outlet 2", menu: "Outlet 2 Menu" },
    { id: 3, name: "Outlet 3", menu: "Outlet 3 Menu" },
    { id: 4, name: "Outlet 4", menu: "Outlet 4 Menu" },
  ];

  const [activeMenu, setActiveMenu] = useState(1);

  return (
    <>
      <NavigationBar />
      <Outlets outlets={outlets} setActiveMenu={setActiveMenu} />
      <Menu outlets={outlets} activeMenu={activeMenu} />
    </>
  );
}
