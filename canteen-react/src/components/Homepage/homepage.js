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

  const handleOrder = (product, event) => {
    event.preventDefault();
    alert(`${product.id} Requested`);
  };

  return (
    <>
      {outlet.menu
        .slice()
        .sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10))
        .map((product) => (
          <div key={product.id} className="menuItems">
            <div className="menuItemID">{product.id}</div>
            <div className="menuItemImage">{/*Product Image Placeholder*/}</div>
            {/* Product Image div needs to be changed*/}
            <div className="menuItemDetails">
              <div>Item: {product.name}</div>
              <div>Price: {product.price}</div>
              <div>Description: {product.description}</div>
            </div>
            <div
              className="menuItemOrder"
              onClick={(event) => {
                handleOrder(product, event);
              }}
            >
              Order
            </div>
          </div>
        ))}
    </>
  );
}

export default function HomePage() {
  const products1 = [
    { id: 1, name: "Product 1", price: 10, description: "Description 1" },
    { id: 2, name: "Product 2", price: 20, description: "Description 2" },
  ];
  const products2 = [
    { id: 1, name: "Product 1", price: 10, description: "Description 1" },
    { id: 2, name: "Product 2", price: 20, description: "Description 2" },
    { id: 3, name: "Product 3", price: 25, description: "Description 3" },
    { id: 4, name: "Product 4", price: 30, description: "Description 4" },
  ];

  const outlets = [
    { id: 1, name: "Outlet 1", menu: products1 },
    { id: 2, name: "Outlet 2", menu: products2 },
    { id: 3, name: "Outlet 3", menu: products1 },
    { id: 4, name: "Outlet 4", menu: products2 },
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
