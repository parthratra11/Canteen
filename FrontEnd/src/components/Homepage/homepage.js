import { useEffect, useState } from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart/cart";
import { useCart } from "../../context/cartContext";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Nav, Container } from "react-bootstrap";

// NavigationBar Component
function NavigationBar({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  function Greet() {
    return <div>Greetings User </div>;
  }

  function SupportMenu() {
    return <div>Support</div>;
  }

  function BruceBanner() {
    return <div>{/* Banner */}</div>;
  }

  function CartBtn() {
    return <div>{`Cart (${cartItems.length})`}</div>;
  }

  function handleLog() {
    localStorage.clear();
    navigate("/");
  }

  function Logout() {
    return <div>Log Out</div>;
  }

  return (
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
        <div className="logout" onClick={handleLog}>
          <Button variant="Danger">Log Out</Button>
        </div>
      </div>
    </div>
  );
}

// Outlets Component
function Outlets({ outlets, setActiveMenu }) {
  const [activeOutlet, setActiveOutlet] = useState(1);

  const handleClick = (outletId) => {
    setActiveMenu(outletId);
    setActiveOutlet(outletId);
  };

  return (
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
  );
}

// Menu Component
function Menu({ outlets, activeMenu, cartItems, setCartItems }) {
  const outlet = outlets.find((outlet) => outlet.id === activeMenu);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <Container className="my-3 menuContainer">
      {outlet?.menu.map((product) => (
        <div
          key={product.productid}
          className="menuItems d-flex align-items-center p-3 mb-3 bg-white rounded shadow-sm"
        >
          <div className="menuItemId">{product.productid}</div>
          <div
            className="menuItemImage bg-secondary rounded d-flex align-items-center justify-content-center"
            style={{ width: "80px", height: "80px" }}
          >
            {/* Product Image Placeholder */}
          </div>
          <div className="menuItemDetails flex-grow-1 ms-3">
            <div>Item: {product.productname}</div>
            <div>Price: {product.productprice}</div>
            <div>Description: {product.productdescription}</div>
          </div>
          <Button variant="success" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </div>
      ))}
    </Container>
  );
}

// HomePage Component with API integration
export default function HomePage() {
  const { cartItems, setCartItems } = useCart();
  const [outlets, setOutlets] = useState([]);
  const [activeMenu, setActiveMenu] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductInfo = async (outletId) => {
      try {
        // setLoading(true);
        const response = await fetch(
          `http://localhost:5000/getproductinfo/${outletId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        if (data.status === "success") {
          setOutlets((prevOutlets) => {
            const existingOutlet = prevOutlets.find(
              (outlet) => outlet.id === outletId
            );
            if (existingOutlet) {
              return prevOutlets.map((outlet) =>
                outlet.id === outletId
                  ? { ...outlet, menu: data.product_info }
                  : outlet
              );
            }
            return [
              ...prevOutlets,
              {
                id: outletId,
                name: `Outlet ${outletId}`,
                menu: data.product_info,
              },
            ];
          });
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProductInfo(activeMenu);
  }, [activeMenu]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
