import { useState } from "react";

export default function DeleteItems({
  setActiveComponent,
  products,
  setProducts,
}) {
  const [requestedProdId, setRequestedProdId] = useState("");
  const [showDeleteItems, setShowDeleteItems] = useState(false);

  function removeItem() {
    // IMPLEMENT === INSTEAD OF ==
    const updatedProducts = products.filter(
      (product) => product.id != requestedProdId
    );
    setProducts(updatedProducts);
    setRequestedProdId("");
    setShowDeleteItems(false);
  }

  function DeleteItemsRender() {
    const foundProduct = products.find(
      (product) => product.id == requestedProdId
    );

    return (
      <div className="viewItemsHeader">
        <div className="viewItems">
          <div className="viewItems">
            <div className="viewItemID">{foundProduct.id}</div>
            <div className="viewItemImage">Product Image</div>
            <div className="viewItemDetails">
              <div>{foundProduct.name}</div>
              <div>{foundProduct.price}</div>
              <div>{foundProduct.description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function DeleteItemsConfirm() {
    const handleDltConfirm = (event) => {
      event.preventDefault();
      removeItem();
    };

    return (
      <>
        <div className="delConfirmDiv">
          <h4>Are you sure you want to delete this item ?</h4>
          <button className="delConfirmBtn" onClick={handleDltConfirm}>
            Yes
          </button>
          <button
            onClick={() => {
              setShowDeleteItems(false);
              setRequestedProdId("");
            }}
            className="delConfirmBtn"
          >
            No
          </button>
        </div>
      </>
    );
  }

  function checkProductID() {
    // IMPLEMENT === INSTEAD OF ==
    if (products.some((product) => product.id == requestedProdId)) {
      setShowDeleteItems(true);
    } else {
      alert("Product not found !");
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
              <button
                className="handleConfirmDetailsBtn"
                type="submit"
                onClick={handleConfirm}
              >
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
