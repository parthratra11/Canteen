import "./cart.css";
import { useCart } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";

export default function Cart() {
  const { cartItems, setCartItems } = useCart();
  const navigate = useNavigate();

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
  };

  return (
    <>
      {/* DISPLAY THE CART ITEMS IF THERE ARE ANY */}
      {cartItems.length > 0 ? (
        <Container className="my-3 menuContainer">
          <div className="cartHeaderContainer">
            <h2 className="cartHeader">Your Cart</h2>
          </div>
          {cartItems.map((product, index) => (
            <div
              key={product.productid} // Ensure you're using the correct ID key here
              className="menuItems d-flex align-items-center p-3 mb-3 bg-white rounded shadow-sm"
            >
              <div className="menuItemId">Product ID: {product.productid}</div>
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
              <Button variant="danger" onClick={() => removeFromCart(index)}>
                Remove from Cart
              </Button>
            </div>
          ))}
          <div className="cartNavigation d-flex flex-column mt-3" style={{ width: "100%" }}>
            <Button
              variant="primary"
              className="mb-2 w-100"
              onClick={() => navigate("/Payment")}
            >
              Proceed To Payment
            </Button>
            <Button
              variant="outline-secondary"
              className="w-100 mb-2 bg-white text-dark"
              onClick={() => navigate("/Home")}
            >
              Return to Homepage
            </Button>
          </div>
        </Container>
      ) : (
        <Container>
          <div className="cartNavigation d-flex flex-column mt-3" style={{ width: "100%" }}>
            <div className="cartHeaderContainerEmpty">
              <h2 className="cartHeader">Your Cart is Empty</h2>
            </div>
            <Button
              variant="outline-secondary"
              className="w-100 mb-2 bg-white text-dark"
              onClick={() => navigate("/Home")}
            >
              Return to Homepage
            </Button>
          </div>
        </Container>
      )}
    </>
  );
}
