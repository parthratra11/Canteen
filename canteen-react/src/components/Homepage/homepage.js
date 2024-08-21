import { use, useEffect, useState } from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart/cart";
import { useCart } from "../../context/cartContext";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Nav, Container } from "react-bootstrap";

// debugger
// let user = JSON.parse(localStorage.getItem("user_info"));
// console.log("ppppppppppppppp");
function NavigationBar({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  // TODO: GREETS THE USER WHO IS LOGGED IN
  function Greet() {
    return <div>Greetings User </div>;
  }

  // TODO: SUPPORT MENU FOR THE USER
  function SupportMenu() {
    return <div>Support</div>;
  }

  // TODO: OFFER AND ANNOUNCEMENTS BANNER TO BE IMPLEMENTED
  function BruceBanner() {
    return <div>{/* Banner */}</div>;
  }

  // REDIRECTS USER TO THE CART AND DISPLAYS THE NO. OF ITEMS IN CART
  function CartBtn() {
    return <div>{`Cart (${cartItems.length})`}</div>;
  }
  function handleLog() {
    localStorage.clear();
    navigate("/");
  }
  // TODO: LOGS OUT THE USER
  function Logout() {
    return <div>Log Out</div>;
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
          <div className="logout" onClick={handleLog}>
            <Button variant="Danger">Log Out</Button>
          </div>
        </div>
      </div>
    </>
  );
}

function Outlets({ outlets, setActiveMenu }) {
  const [activeOutlet, setActiveOutlet] = useState(1);

  const handleClick = (outletId) => {
    setActiveMenu(outletId);
    setActiveOutlet(outletId);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="d-flex flex-wrap-nowrap">
          <Nav className="me-auto">
            {outlets.map((outlet) => (
              <Nav.Link
                onClick={() => handleClick(outlet.id)}
                key={outlet.id}
                className={activeOutlet === outlet.id ? "active-outlet" : ""}
              >
                {outlet.name}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
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
      <Container className="my-3 menuContainer">
        {outlet.menu
          .slice()
          .sort((a, b) => a.id - b.id)
          .map((product) => (
            <div
              key={product.id}
              className="menuItems d-flex align-items-center p-3 mb-3 bg-white rounded shadow-sm"
            >
              <div className="menuItemId">{product.id}</div>
              <div
                className="menuItemImage bg-secondary rounded d-flex align-items-center justify-content-center"
                style={{ width: "80px", height: "80px" }}
              >
                {/* Product Image Placeholder */}
              </div>
              <div className="menuItemDetails flex-grow-1 ms-3">
                <div>Item: {product.name}</div>
                <div>Price: {product.price}</div>
                <div>Description: {product.description}</div>
              </div>
              <Button variant="success" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </div>
          ))}
      </Container>
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
