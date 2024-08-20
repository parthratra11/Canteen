import { useNavigate } from "react-router-dom";
import "./paymentPage.css";

export default function PaymentHomepage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>This is Payment Page</h1>
      {/* PAYMENT GATEWAY TO BE DISPLAYED */}

      {/* REDIRECTS BACK TO THE CART ON CANCELLATION */}
      <div className="paymentNavigation" onClick={() => navigate("/Cart")}>
        Cancel Order
      </div>
    </>
  );
}
