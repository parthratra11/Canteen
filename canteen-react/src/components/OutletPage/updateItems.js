import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ViewItems from "./viewItems";

export default function UpdateItems({
  setActiveComponent,
  products,
  setProducts,
}) {
  const [requestedProdId, setRequestedProdId] = useState("");
  const [showUpdateItems, setShowUpdateItems] = useState(false);
  const [showUpdateConfirm, setShowUpdateConfirm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  function UpdateItemsRender() {
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

  function UpdateItemsConfirm() {
    const handleUptConfirm = (event) => {
      event.preventDefault();
      setShowUpdateConfirm(false);
      setShowUpdateForm(true);
    };

    return (
      <>
        <div className="delConfirmDiv">
          <h4>Are you sure you want to Update this item ?</h4>
          <button className="delConfirmBtn" onClick={handleUptConfirm}>
            Yes
          </button>
          <button
            onClick={() => {
              setShowUpdateItems(false);
              setShowUpdateConfirm(false);
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

  function UpdateItemsForm() {
    const [updateItemName, setUpdateItemName] = useState("");
    const [updateItemPrice, setUpdateItemPrice] = useState("");
    const [updateItemDescription, setUpdateItemDescription] = useState("");

    function updateItem() {
      setProducts((prevProducts) => {
        return prevProducts.map((product) =>
          // IMPLEMENT === INSTEAD OF ==
          product.id == requestedProdId
            ? {
                ...product,
                name: updateItemName,
                price: updateItemPrice,
                description: updateItemDescription,
              }
            : product
        );
      });

      setUpdateItemName("");
      setUpdateItemPrice("");
      setUpdateItemDescription("");

      setRequestedProdId("");
      setShowUpdateForm(false);
      setShowUpdateItems(false);
    }

    const handleUptSubmit = (event) => {
      event.preventDefault();
      if (
        updateItemName.trim().length === 0 ||
        updateItemPrice.trim().length === 0 ||
        updateItemDescription.trim().length === 0
      ) {
        alert("Field input(s) cannot be empty");
        return;
      }
      updateItem();
    };

    return (
      <div>
        <form>
          <div>
            <input
              className="productId"
              type="text"
              value={`Product ID : ${requestedProdId}`}
              readOnly
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Updated Item Name"
              value={updateItemName}
              onChange={(e) => setUpdateItemName(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="number"
              placeholder="Updated Item Price"
              value={updateItemPrice}
              onChange={(e) => setUpdateItemPrice(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Updated Item Description"
              value={updateItemDescription}
              onChange={(e) => setUpdateItemDescription(e.target.value)}
            ></input>
          </div>
        </form>
        <button onClick={handleUptSubmit}>Submit</button>
        <div
          className="outletNavItem"
          onClick={() => setActiveComponent("ViewItems")}
        >
          View Menu
        </div>
      </div>
    );
  }

  function checkProductID() {
    if (products.some((product) => product.id == requestedProdId)) {
      setShowUpdateItems(true);
      setShowUpdateConfirm(true);
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
      {showUpdateConfirm && <UpdateItemsConfirm />}
      {showUpdateForm && <UpdateItemsForm />}

      <div
        className="outletNavItem"
        onClick={() => setActiveComponent("ViewItems")}
      >
        View Menu
      </div>
    </>
  );
}
