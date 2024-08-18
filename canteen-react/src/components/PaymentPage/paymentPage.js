import { useNavigate } from "react-router-dom";
import "./paymentPage.css";

export default function PaymentHomepage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>This is Payment Page</h1>
      <div className="paymentNavigation" onClick={() => navigate("/Cart")}>
        Cancel Order
      </div>
    </>
  );
}
