import { useState } from "react";
import "./outletPage.css";
import { useNavigate } from "react-router-dom";
import { use } from "react";
import ViewItems from "./viewItems";
import UpdateItems from "./updateItems";
import AddItems from "./addItems";
import DeleteItems from "./deleteItems";
import ListOffers from "./listOffers";

// TODO: DISPLAYS PENDING DELIVERIES
function PendingDeliveries() {
  return <div>Pending Deliveries Clicked</div>;
}

// TODO: DISPLAYS COMPLETED DELIVERIES
function CompletedDeliveries() {
  return <div>Completed Deliveries Clicked</div>;
}

export default function OutletHomepage() {
  const [activeComponent, setActiveComponent] = useState("UpdateItems");

  // TEMPORARY VALUES FOR ITEMS IN THE MENU OF THE OUTLET
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10, description: "Description 1" },
    { id: 2, name: "Product 2", price: 20, description: "Description 2" },
  ]);

  // RENDERS THE PAGE OF THE SELECTED FEATURE
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

      {/* DISPLAYS ALL THE ACTIONS THAT CAN BE PERFORMED BY THE OUTLET-MANAGER */}
      <div className="outletNavBar">
        <button
          className="outletNavItem"
          onClick={() => setActiveComponent("PendingDeliveries")} // CHANGES THE COMPONENT TO BE DISPLAYED
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
