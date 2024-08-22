import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./paymentPage.css";
import { useCart } from "../../context/cartContext";

export default function PaymentHomepage() {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  // Calculate the total amount from the cart
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.productprice,
    0
  );

  function handleSuccess() {
    // Handle successful payment logic here
  }

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Payment Page</h1>

      {/* Display total amount */}
      <h3>Total Amount: ₹ {totalAmount}</h3>

      {/* PAYMENT GATEWAY PLACEHOLDER */}
      <div className="payment-gateway-placeholder border p-5 mb-4">
        <p className="lead">Payment Gateway will be displayed here</p>
      </div>

      <div className="d-flex justify-content-around">
        {/* SUCCESS PAYMENT BUTTON */}
        <button className="btn btn-success" onClick={handleSuccess}>
          Success Payment
        </button>

        {/* CANCEL ORDER BUTTON */}
        <button className="btn btn-danger" onClick={() => navigate("/Cart")}>
          Cancel Order
        </button>
      </div>
    </div>
  );
}
