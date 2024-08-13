import { useState } from "react";
import "./outletHomepage.css";

function PendingDeliveries() {
  return <div>Pending Deliveries Clicked</div>;
}

function CompletedDeliveries() {
  return <div>Completed Deliveries Clicked</div>;
}

function AddItems() {
  return <div>Add Items Clicked</div>;
}

function UpdateItems() {
  return <div>Update Items Clicked</div>;
}

function ListOffers() {
  return <div>List Offers Clicked</div>;
}

export default function OutletHomepage() {
  const [activeComponent, setActiveComponent] = useState("AddItems");

  const renderComponent = () => {
    switch (activeComponent) {
      case "PendingDeliveries":
        return <PendingDeliveries />;
      case "CompletedDeliveries":
        return <CompletedDeliveries />;
      case "AddItems":
        return <AddItems />;
      case "UpdateItems":
        return <UpdateItems />;
      case "ListOffers":
        return <ListOffers />;
      default:
        return null;
    }
  };

  return (
    <>
      <h1>Outlet Page</h1>
      <div className="outletNavBar">
        <button
          className="outletNavItem"
          onClick={() => setActiveComponent("PendingDeliveries")}
        >
          Pending Deliveries
        </button>
        <button
          className="outletNavItem"
          onClick={() => setActiveComponent("CompletedDeliveries")}
        >
          Completed Deliveries
        </button>
        <button
          className="outletNavItem"
          onClick={() => setActiveComponent("AddItems")}
        >
          Add Items
        </button>
        <button
          className="outletNavItem"
          onClick={() => setActiveComponent("UpdateItems")}
        >
          Update Items
        </button>
        <button
          className="outletNavItem"
          onClick={() => setActiveComponent("ListOffers")}
        >
          List Offers
        </button>
      </div>
      <div>{renderComponent()}</div>
    </>
  );
}
