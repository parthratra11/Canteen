import { useState } from "react";
import "./outletHomepage.css";
import { useNavigate } from "react-router-dom";
import { use } from "react";
import ViewItems from "./viewItems";
import UpdateItems from "./updateItems";
import AddItems from "./addItems";
import DeleteItems from "./deleteItems";
import ListOffers from "./listOffers";

function PendingDeliveries() {
  return <div>Pending Deliveries Clicked</div>;
}

function CompletedDeliveries() {
  return <div>Completed Deliveries Clicked</div>;
}

export default function OutletHomepage() {
  const [activeComponent, setActiveComponent] = useState("UpdateItems");
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10, description: "Description 1" },
    { id: 2, name: "Product 2", price: 20, description: "Description 2" },
  ]);

  const renderComponent = () => {
    switch (activeComponent) {
      case "PendingDeliveries":
        return <PendingDeliveries />;
      case "CompletedDeliveries":
        return <CompletedDeliveries />;
      case "ViewItems":
        return (
          <ViewItems
            setActiveComponent={setActiveComponent}
            products={products}
            setProducts={setProducts}
          />
        );
      case "AddItems":
        return (
          <AddItems
            setActiveComponent={setActiveComponent}
            products={products}
            setProducts={setProducts}
          />
        );
      case "UpdateItems":
        return (
          <UpdateItems
            setActiveComponent={setActiveComponent}
            products={products}
            setProducts={setProducts}
          />
        );
      case "DeleteItems":
        return (
          <DeleteItems
            setActiveComponent={setActiveComponent}
            products={products}
            setProducts={setProducts}
          />
        );
      case "ListOffers":
        return <ListOffers />;
      default:
        return null;
    }
  };

  return (
    <>
      <h1>Outlet Name</h1>

      <div className="outletNavBar">
        <button
          className="outletNavItem"
          onClick={() => setActiveComponent("PendingDeliveries")}
        >
          <span>Pending</span>
          <span>Deliveries</span>
        </button>

        <button
          className="outletNavItem"
          onClick={() => setActiveComponent("CompletedDeliveries")}
        >
          <span>Completed</span>
          <span>Deliveries</span>
        </button>

        <button
          className="outletNavItem"
          onClick={() => setActiveComponent("ViewItems")}
        >
          <span>View</span>
          <span>Menu</span>
        </button>

        <button
          className="outletNavItem"
          onClick={() => setActiveComponent("AddItems")}
        >
          <span>Add</span>
          <span>Items</span>
        </button>

        <button
          className="outletNavItem"
          onClick={() => setActiveComponent("UpdateItems")}
        >
          <span>Update</span>
          <span>Items</span>
        </button>

        <button
          className="outletNavItem"
          onClick={() => setActiveComponent("DeleteItems")}
        >
          <span>Delete</span>
          <span>Items</span>
        </button>

        <button
          className="outletNavItem"
          onClick={() => setActiveComponent("ListOffers")}
        >
          <span>List</span>
          <span>Offers</span>
        </button>
      </div>
      <div>{renderComponent()}</div>
    </>
  );
}
