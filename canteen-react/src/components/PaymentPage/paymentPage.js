import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./paymentPage.css";
import { useCart } from "../../context/cartContext";

export default function PaymentHomepage() {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Calculate the total amount from the cart
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.productprice,
    0
  );

  async function handleSuccess() {
    setIsLoading(true);
    setError(null);

    // Prepare the data for the API call
    const orderData = {
      userId: 1, // Replace with actual user ID from your authentication system
      outletId: 1, // As per your specification, outlet ID is 1
      date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      amount: totalAmount,
      paymentId: `PAY-${Date.now()}`, // Generate a unique payment ID
      productId: cartItems.map(item => item.productid) // Array of product IDs
    };

    try {
      const response = await fetch('http://localhost:5000/placeorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (result.status === 'success') {
        // Handle successful order placement
        alert('Order placed successfully!');
       // Navigate to order confirmation page
      } else {
        // Handle failure
        setError(result.message || 'Failed to place order');
      }
    } catch (err) {
      setError('An error occurred while placing the order');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Payment Page</h1>

      <h3>Total Amount: ₹ {totalAmount}</h3>

      <div className="payment-gateway-placeholder border p-5 mb-4">
        <p className="lead">Payment Gateway will be displayed here</p>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="d-flex justify-content-around">
        <button 
          className="btn btn-success" 
          onClick={handleSuccess}
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Success Payment'}
        </button>

        <button 
          className="btn btn-danger" 
          onClick={() => navigate("/Cart")}
          disabled={isLoading}
        >
          Cancel Order
        </button>
      </div>
    </div>
  );
}