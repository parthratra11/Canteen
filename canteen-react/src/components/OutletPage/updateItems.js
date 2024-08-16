import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ViewItems from "./viewItems";
import "./outletHomepage.css";

function UpdateItemsRender() {
  return <div>Found the Product</div>;
}
// TO BE IMPLEMENTED PROPERLY
function UpdateItemsChange() {
  return (
    <>
      <div>Enter the updated details in the form</div>
      <div>
        <form>
          <div>
            <input
              className="productId"
              type="text"
              value="Product ID : ID"
              readOnly
            ></input>
          </div>
          <div>
            <input type="text" placeholder="Item Name"></input>
          </div>
          <div>
            <input type="number" placeholder="Item Price"></input>
          </div>
          <div>
            <input type="text" placeholder="Item Description"></input>
          </div>
        </form>
        <button>Submit</button>
      </div>
    </>
  );
}

export default function UpdateItems({
  setActiveComponent,
  products,
  setProducts,
}) {
  const [requestedProdId, setRequestedProdId] = useState("");
  const [showUpdateItems, setShowUpdateItems] = useState(false);

  function checkProductID() {
    if (requestedProdId < 10) {
      setShowUpdateItems(true);
    } else {
      alert("Product doesn't exists !");
    }
  }

  const handleConfirm = (event) => {
    event.preventDefault();
    checkProductID();
  };

  return (
    <>
      {!showUpdateItems && (
        <>
          <div className="handleConfirmDetailsDiv">
            <form onSubmit={handleConfirm}>
              <input
                className="handleConfirmDetails"
                value={requestedProdId}
                placeholder="Enter the ID of the Product to be updated"
                onChange={(e) => {
                  setRequestedProdId(e.target.value);
                }}
              ></input>
              <button className="handleConfirmDetailsBtn" type="submit">
                Confirm
              </button>
            </form>
          </div>
        </>
      )}
      {showUpdateItems && <UpdateItemsRender />}
      {showUpdateItems && <UpdateItemsChange />}
      <div
        className="outletNavItem"
        onClick={() => setActiveComponent("ViewItems")}
      >
        View Menu
      </div>
    </>
  );
}
