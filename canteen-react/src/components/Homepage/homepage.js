import { use, useEffect, useState } from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart/cart";
import { useCart } from "../../context/cartContext";

// debugger
// let user = JSON.parse(localStorage.getItem("user_info"));
// console.log("ppppppppppppppp");
function NavigationBar({ cartItems, setCartItems }) {
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

  function CartBtn() {
    return <div>{`Cart (${cartItems.length})`}</div>;
  }

  function Logout() {
    function handleLog() {
      localStorage.clear();
      navigate("/");
    }

    return (
      <div>
        <button className="logout" onClick={handleLog}>
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
          <div className="cart" onClick={() => navigate("/Cart")}>
            <CartBtn />
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

function Menu({ outlets, activeMenu, cartItems, setCartItems }) {
  function search() {}
  function Item() {}

  const outlet = outlets.find((outlet) => outlet.id === activeMenu);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };
  // useEffect(() => {
  //   console.log("Cart items:", cartItems);
  // }, [cartItems]);

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
              onClick={() => {
                addToCart(product);
              }}
            >
              <span>Add to</span>
              <span>Cart</span>
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

  const { cartItems, setCartItems } = useCart();
  const [activeMenu, setActiveMenu] = useState(1);

  return (
    <>
      <NavigationBar cartItems={cartItems} setCartItems={setCartItems} />
      <Outlets outlets={outlets} setActiveMenu={setActiveMenu} />
      <Menu
        outlets={outlets}
        activeMenu={activeMenu}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </>
  );
}
