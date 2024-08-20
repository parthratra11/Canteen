import { useState } from "react";
import "./outletPage.css";
import { useNavigate } from "react-router-dom";
import { use } from "react";
import ViewItems from "./viewItems";
import UpdateItems from "./updateItems";
import AddItems from "./addItems";
import DeleteItems from "./deleteItems";
import ListOffers from "./listOffers";

function Orders() {
  // TODO: DISPLAYS PENDING DELIVERIES
  function PendingDeliveries() {
    return <div className="outletNavItemOrder">Pending Deliveries</div>;
  }

  // TODO: DISPLAYS COMPLETED DELIVERIES
  function CompletedDeliveries() {
    return <div className="outletNavItemOrder">Completed Deliveries</div>;
  }

  return (
    <>
      <div className="outletNavBar">
        <PendingDeliveries />
        <CompletedDeliveries />
      </div>
    </>
  );
}

export default function OutletHomepage() {
  const [activeComponent, setActiveComponent] = useState("ViewItems");

  const [requestedProdId, setRequestedProdId] = useState("");

  // TEMPORARY VALUES FOR ITEMS IN THE MENU OF THE OUTLET
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10, description: "Description 1" },
    { id: 2, name: "Product 2", price: 20, description: "Description 2" },
  ]);

  // RENDERS THE PAGE OF THE SELECTED FEATURE
  const renderComponent = () => {
    switch (activeComponent) {
      case "Orders":
        return <Orders />;

      case "ViewItems":
        return (
          <ViewItems
            setActiveComponent={setActiveComponent}
            products={products}
            setProducts={setProducts}
            requestedProdId={requestedProdId}
            setRequestedProdId={setRequestedProdId}
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
            requestedProdId={requestedProdId}
            setRequestedProdId={setRequestedProdId}
          />
        );

      case "DeleteItems":
        return (
          <DeleteItems
            setActiveComponent={setActiveComponent}
            products={products}
            setProducts={setProducts}
            requestedProdId={requestedProdId}
            setRequestedProdId={setRequestedProdId}
          />
        );

      // case "ListOffers":
      //   return <ListOffers />;

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
          onClick={() => setActiveComponent("Orders")} // CHANGES THE COMPONENT TO BE DISPLAYED
        >
          <span>Orders</span>
        </button>

        <button
          className="outletNavItem"
          onClick={() => setActiveComponent("ViewItems")}
        >
          View Menu
        </button>

        <button
          className="outletNavItem"
          onClick={() => setActiveComponent("AddItems")}
        >
          Add Items
        </button>

        {/* <button
          className="outletNavItem"
          onClick={() => setActiveComponent("UpdateItems")}
        >
          Update Items
        </button>

        <button
          className="outletNavItem"
          onClick={() => setActiveComponent("DeleteItems")}
        >
          Delete Items
        </button> */}

        {/* <button
          className="outletNavItem"
          onClick={() => setActiveComponent("ListOffers")}
        >
          <span>List</span>
          <span>Offers</span>
        </button> */}
      </div>

      <div>{renderComponent()}</div>
    </>
  );
}
