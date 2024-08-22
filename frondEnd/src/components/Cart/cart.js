import "./cart.css";
import { useCart } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, setCartItems } = useCart();
  const navigate = useNavigate();

  const removeFromCart = (indexToRemove) => {
    // TODO: UNDERSTAND HOW THIS STATEMENT IS WORKING
    // REMOVES THE SELECTED ITEM AND UPDATES THE CART
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
  };

  return (
    <>
      <h1>CART</h1>
      {/* DIPLAYS THE CART ITEMS IF THERE IS SOMETHING IN THE CART */}
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((product, index) => (
            // TODO: UNDERSTAND THE KEY LOGIC
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

              {/* BUTTON TO REMOVE THE SELECTED ITEM FROM THE CART */}
              <div
                className="menuItemOrder"
                onClick={() => {
                  removeFromCart(index);
                }}
              >
                <span>Remove </span>
                <span>from </span>
                <span>Cart </span>
              </div>
            </div>
          ))}
          {/* REDIRECTS TO THE PAYMENT PAGE */}
          <div className="cartNavigation" onClick={() => navigate("/Payment")}>
            Proceed To Payment
          </div>
          {/* REDIRECTS BACK TO THE HOMEPAGE */}
          <div className="cartNavigation" onClick={() => navigate("/Home")}>
            Return to Homepage
          </div>
        </div>
      ) : (
        // IF THE CART IS EMPTY, A MESSAGE IS DISPLAYED
        <>
          <div className="noItemsMessage">No Items in Cart</div>
          {/* REDIRECTS BACK TO THE HOMEPAGE */}
          <div className="cartNavigation" onClick={() => navigate("/Home")}>
            Return to Homepage
          </div>
        </>
      )}
    </>
  );
}
