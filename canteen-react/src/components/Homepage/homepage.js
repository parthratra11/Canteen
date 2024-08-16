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
      <NavigationBar />
    </>
  );
}
