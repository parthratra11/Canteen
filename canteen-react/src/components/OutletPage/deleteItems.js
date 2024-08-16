import { useState } from "react";

export default function DeleteItems({ setActiveComponent }) {
  const [requestedProdId, setRequestedProdId] = useState("");
  const [showDeleteItems, setShowDeleteItems] = useState(false);

  function DeleteItemsRender() {
    return <div>Found the Product</div>;
  }
  // TO BE IMPLEMENTED PROPERLY
  function DeleteItemsConfirm() {
    return <div>Confirmation div</div>;
  }

  function checkProductID() {
    if (requestedProdId < 10) {
      setShowDeleteItems(true);
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
      {!showDeleteItems && (
        <>
          <div className="handleConfirmDetailsDiv">
            <form onSubmit={handleConfirm}>
              <input
                className="handleConfirmDetails"
                value={requestedProdId}
                placeholder="Enter the ID of the Product to be Deleted"
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
      {showDeleteItems && <DeleteItemsRender />}
      {showDeleteItems && <DeleteItemsConfirm />}
      <div
        className="outletNavItem"
        onClick={() => setActiveComponent("ViewItems")}
      >
        View Menu
      </div>
    </>
  );
}
