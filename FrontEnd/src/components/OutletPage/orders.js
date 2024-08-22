import { useState } from "react";

export default function Orders() {
  // HARDCODING THE PENDING AND COMPLETED ORDERS
  const [pendingOrdersList, setPendingOrdersList] = useState([
    { id: 1, name: "Product 1", price: 10, description: "Description 1" },
    { id: 2, name: "Product 2", price: 20, description: "Description 2" },
    { id: 3, name: "Product 3", price: 25, description: "Description 3" },
    { id: 4, name: "Product 4", price: 30, description: "Description 4" },
  ]);

  const [completedOrdersList, setCompletedOrdersList] = useState([
    { id: 5, name: "Product 5", price: 10, description: "Description 5" },
    { id: 2, name: "Product 2", price: 20, description: "Description 2" },
  ]);

  const [orderView, setOrderView] = useState("Pending");

  const handleComplete = (reqIndex) => {
    const completedOrder = pendingOrdersList[reqIndex];
    setPendingOrdersList((prevList) =>
      prevList.filter((_, index) => index !== reqIndex)
    );
    setCompletedOrdersList((prevList) => [...prevList, completedOrder]);
  };

  const handleCancel = (reqIndex) => {
    setPendingOrdersList((prevList) => {
      return prevList ? prevList.filter((_, index) => index !== reqIndex) : [];
    });
  };

  function PendingOrders() {
    if (pendingOrdersList?.length < 1) return <div>No Pending Orders</div>;

    return (
      <>
        <div>Pending Orders</div>
        {pendingOrdersList.slice().map((product, index) => (
          <div key={product.id} className="viewItems">
            <div className="viewItemID">{product.id}</div>
            <div className="viewItemImage">{/*Product Image Placeholder*/}</div>
            {/* Product Image div needs to be changed*/}
            <div className="viewItemDetails">
              <div>Item: {product.name}</div>
              <div>Price: {product.price}</div>
              <div>Description: {product.description}</div>
            </div>
            <div
              className="viewItemUptDlt"
              onClick={() => {
                handleComplete(index);
              }}
            >
              Completed
            </div>
            <div
              className="viewItemUptDlt"
              onClick={() => {
                handleCancel(index);
              }}
            >
              Cancelled
            </div>
          </div>
        ))}
      </>
    );
  }

  function CompletedOrders() {
    if (completedOrdersList?.length < 1) return <div>No Orders Completed</div>;
    return (
      <>
        <div>Completed Orders</div>
        {completedOrdersList.slice().map((product, index) => (
          <div key={product.id} className="viewItems">
            <div className="viewItemID">{index + 1}</div>
            <div className="viewItemImage">{/*Product Image Placeholder*/}</div>
            {/* Product Image div needs to be changed*/}
            <div className="viewItemDetails">
              <div>Product ID: {product.id}</div>
              <div>Item: {product.name}</div>
              <div>Price: {product.price}</div>
              <div>Description: {product.description}</div>
            </div>
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      <div className="outletNavBar">
        <div
          className="outletNavItemOrder"
          onClick={() => {
            setOrderView("Pending");
          }}
        >
          Pending Orders
        </div>
        <div
          className="outletNavItemOrder"
          onClick={() => {
            setOrderView("Completed");
          }}
        >
          Completed Orders
        </div>
      </div>
      <div>
        {orderView === "Pending" && <PendingOrders />}
        {orderView === "Completed" && <CompletedOrders />}
      </div>
    </>
  );
}
