import "./cart.css";
import { useCart } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";

function CheckOut() {}

export default function Cart() {
  const { cartItems, setCartItems } = useCart();
  const navigate = useNavigate();

  const removeFromCart = (indexToRemove) => {
    // UNDERSTAND HOW THIS STATEMENT IS WORKING
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
  };

  return (
    <>
      <h1>This is Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((product, index) => (
            // UNDERSTAND THE KEY LOGIC
            <div key={`${product.id}-${index}`} className="menuItems">
              <div className="menuItemID">{product.id}</div>
              <div className="menuItemImage">
                {/*Product Image Placeholder*/}
              </div>
              {/* Product Image div needs to be changed*/}
              <div className="menuItemDetails">
                <div>Item: {product.name}</div>
                <div>Price: {product.price}</div>
                <div>Description: {product.description}</div>
              </div>
              <div
                className="menuItemOrder"
                onClick={() => {
                  removeFromCart(index);
                }}
              >
                <span>Remove</span>
                <span>from</span>
                <span>Cart</span>
              </div>
            </div>
          ))}
          <div className="cartNavigation" onClick={() => navigate("/Payment")}>
            Proceed To Payment
          </div>
          <div className="cartNavigation" onClick={() => navigate("/Home")}>
            Return to Homepage
          </div>
        </div>
      ) : (
        <>
          <div>No Items in Cart</div>
          <div className="cartNavigation" onClick={() => navigate("/Home")}>
            Return to Homepage
          </div>
        </>
      )}
    </>
  );
}
