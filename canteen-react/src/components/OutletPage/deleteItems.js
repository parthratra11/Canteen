import { useState } from "react";

export default function DeleteItems({
  setActiveComponent,
  products,
  setProducts,
  requestedProdId,
  setRequestedProdId,
}) {
  // const [requestedProdId, setRequestedProdId] = useState("");
  const [showDeleteItems, setShowDeleteItems] = useState(true);

  function removeItem() {
    // TODO: IMPLEMENT === INSTEAD OF ==
    // REMOVES THE ITEM FROM THE MENU
    const updatedProducts = products.filter(
      (product) => product.id != requestedProdId
    );
    setProducts(updatedProducts);

    // RESTORE THE STATE VARIABLES TO DEFAULT
    setRequestedProdId("");
    setShowDeleteItems(false);
    setActiveComponent("ViewItems");
  }

  // DISPLAYS THE ITEM SELECTED BY USER FOR DELETION
  function DeleteItemsRender() {
    // FINDS THE ITEM SELECTED BY THE USER
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
              <div>{`Product Name : ${foundProduct.name}`}</div>
              <div>{`Product Price : ${foundProduct.price}`}</div>
              <div>{`Product Description : ${foundProduct.description}`}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // CONFIRMS DELETION
  function DeleteItemsConfirm() {
    const handleDltConfirm = (event) => {
      event.preventDefault();
      removeItem();
    };

    return (
      <>
        <div className="delConfirmDiv">
          <h4>Are you sure you want to delete this item ?</h4>

          {/* DELETES ITEM ON CLICKING YES */}
          <button className="delConfirmBtn" onClick={handleDltConfirm}>
            Yes
          </button>

          {/* REDIRECTS BACK TO THE DELETE-ITEM PAGE ON CLICKING NO */}
          <button
            onClick={() => {
              setShowDeleteItems(false);
              setRequestedProdId("");
              setActiveComponent("ViewItems");
            }}
            className="delConfirmBtn"
          >
            No
          </button>
        </div>
      </>
    );
  }

  // CHECKS IF THE REQUESTED ITEM ID FOR THE ITEM TO BE DELETED, EXISTS OR NOT
  // function checkProductID() {
  //   // IMPLEMENT === INSTEAD OF ==
  //   if (products.some((product) => product.id == requestedProdId)) {
  //     setShowDeleteItems(true);
  //   } else {
  //     alert("Product not found !");
  //   }
  // }

  // const handleConfirm = (event) => {
  //   event.preventDefault();
  //   checkProductID();
  // };

  function redirectView() {
    setShowDeleteItems(false);
    setActiveComponent("ViewItems");
    setRequestedProdId("");
  }

  return (
    <>
      {/* DISPLAYS THE DELETE-ITEM FORM */}
      {/* {!showDeleteItems && (
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

              {/* BUTTON TO SUBMIT DELETE FORM */}
      {/* <button
                className="handleConfirmDetailsBtn"
                type="submit"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            </form>
          </div>
        </>
      )} */}

      {/* DISPLAYS ITEM-TO-BE-DELETED AND CONFIRM-DELETETION DIV, WHEN THE ITEM IS FOUND */}
      {showDeleteItems && <DeleteItemsRender />}
      {showDeleteItems && <DeleteItemsConfirm />}

      {/* REDIRECTS BACK TO THE MENU */}
      <div className="outletNavItem" onClick={() => redirectView()}>
        View Menu
      </div>
    </>
  );
}
