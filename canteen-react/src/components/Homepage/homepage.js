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

  // TODO: GREETS THE USER WHO IS LOGGED IN
  function Greet() {
    return <div>Greet</div>;
  }

  // TODO: SUPPORT MENU FOR THE USER
  function SupportMenu() {
    return <div>Support</div>;
  }

  // TODO: OFFER AND ANNOUNCEMENTS BANNER TO BE IMPLEMENTED
  function BruceBanner() {
    return <div>Banner</div>;
  }

  // REDIRECTS USER TO THE CART AND DISPLAYS THE NO. OF ITEMS IN CART
  function CartBtn() {
    return <div>{`Cart (${cartItems.length})`}</div>;
  }

  // TODO: LOGS OUT THE USER
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
        {/* NAVIGATION BAR CONTAINS GREET, BANNER, SUPPORT-MENU, CART, LOGOUT-BUTTON */}
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

// DISPLAYS ALL THE OUTLETS TO CHOOSE FROM
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

// DISPLAYS THE MENU OF THE OUTLET CHOSEN
function Menu({ outlets, activeMenu, cartItems, setCartItems }) {
  // TODO: IMPLEMENT SEARCH FEATURE ON MENU
  function search() {}

  // CONDITION TO FIND THE SELECTED OUTLET
  const outlet = outlets.find((outlet) => outlet.id === activeMenu);

  // ADDS THE ITEM TO THE CART
  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };
  // useEffect(() => {
  //   console.log("Cart items:", cartItems);
  // }, [cartItems]);

  return (
    <>
      {outlet.menu
        .slice() // CREATES A COPY OF THE OUTLET MENU
        .sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10)) //SORTS THE OUTLET MENU ON THE BASIS OF THE PRODUCT ID

        // DISPLAYS ALL THE MENU ITEMS
        .map((product) => (
          <div key={product.id} className="menuItems">
            <div className="menuItemID">{product.id}</div>

            {/* IMPLEMENT THE PRODUCT IMAGE OPTION */}
            <div className="menuItemImage">{/*Product Image Placeholder*/}</div>

            <div className="menuItemDetails">
              <div>Item: {product.name}</div>
              <div>Price: {product.price}</div>
              <div>Description: {product.description}</div>
            </div>

            {/* ADD TO CART BUTTON */}
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
  // TEMPORARY VALUES OF MENUS
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

  // TEMPORARY LIST OF OUTLETS
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
      {/* DISPLAYS THE NAVIGATION-BAR, OUTLETS AND MENU OF THE SELECTED OUTLET */}
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
