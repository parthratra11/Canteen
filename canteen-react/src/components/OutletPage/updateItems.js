import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ViewItems from "./viewItems";

export default function UpdateItems({
  setActiveComponent,
  products,
  setProducts,
  requestedProdId,
  setRequestedProdId,
}) {
  // const [requestedProdId, setRequestedProdId] = useState("");
  const [showUpdateItems, setShowUpdateItems] = useState(true);
  // const [showUpdateConfirm, setShowUpdateConfirm] = useState(false); //! NOT REQUIRED ANYMORE
  const [showUpdateForm, setShowUpdateForm] = useState(true);

  // FINDS THE ITEM TO BE UPDATED
  function UpdateItemsRender() {
    const foundProduct = products.find(
      (product) => product.id == requestedProdId
    );

    // DISPLAYS THE DETAILS OF THE ITEM TO BE UPDATED
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

  // DISPLAYS THE UPDATE-ITEM-VALUES FORM WHEN USER CLICKS YES
  // function UpdateItemsConfirm() {
  //   const handleUptConfirm = (event) => {
  //     event.preventDefault();
  //     setShowUpdateConfirm(false);
  //     setShowUpdateForm(true);
  //   };

  //   return (
  //     <>
  //       <div className="delConfirmDiv">
  //         <h4>Are you sure you want to Update this item ?</h4>

  //         {/* DISPLAYS THE UPDATE FORM */}
  //         <button className="delConfirmBtn" onClick={handleUptConfirm}>
  //           Yes
  //         </button>

  //         {/* REDIRECTS BACK TO THE INITIAL CHECK-UPDATE-ITEM FORM WHEN USER CLICKS NO*/}
  //         <button
  //           onClick={() => {
  //             setShowUpdateItems(false);
  //             setShowUpdateConfirm(false);
  //             setRequestedProdId("");
  //           }}
  //           className="delConfirmBtn"
  //         >
  //           No
  //         </button>
  //       </div>
  //     </>
  //   );
  // }

  function UpdateItemsForm() {
    const [updateItemName, setUpdateItemName] = useState("");
    const [updateItemPrice, setUpdateItemPrice] = useState("");
    const [updateItemDescription, setUpdateItemDescription] = useState("");

    // UPDATES THE SELECTED ITEM WITH THE NEW VALUES
    function updateItem() {
      setProducts((prevProducts) => {
        return prevProducts.map((product) =>
          // TODO: IMPLEMENT === INSTEAD OF ==
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

      // SETS THE STATE VALUES BACK TO DEFAULT
      setUpdateItemName("");
      setUpdateItemPrice("");
      setUpdateItemDescription("");
    }

    const handleUptSubmit = (event) => {
      event.preventDefault();

      // CHECKS IF ALL THE FIELDS IN THE FORM HAVE VALUES OR NOT
      if (
        updateItemName.trim().length === 0 ||
        updateItemPrice.trim().length === 0 ||
        updateItemDescription.trim().length === 0
      ) {
        alert("Field input(s) cannot be empty");
        return;
      }

      // PROCEEDS FURTHER IF ALL THE CONDITIONS ARE SATISFIED
      updateItem();
    };

    return (
      <div>
        {/* DISPLAYS UPDATE-ITEM-VALUES FORM */}
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

        {/* SUBMITS THE VALUE FOR FURTHER OPERATIONS */}
        <button onClick={handleUptSubmit}>Submit</button>

        {/* REDIRECTS BACK TO THE MENU */}
        {/* <div
          className="outletNavItem"
          onClick={() => setActiveComponent("ViewItems")}
        >
          View Menu
        </div> */}
      </div>
    );
  }

  // CHECKS IF THE REQUESTED ITEM TO BE UPDATED EXISTS OR NOT
  // function checkProductID() {
  //   if (products.some((product) => product.id == requestedProdId)) {
  //     setShowUpdateItems(true);
  //     setShowUpdateConfirm(true);
  //   } else {
  //     alert("Product not found !");
  //   }
  // }

  // const handleConfirm = (event) => {
  //   event.preventDefault();
  //   checkProductID();
  // };

  function redirectView() {
    setShowUpdateItems(false);
    setShowUpdateForm(false);
    setActiveComponent("ViewItems");
    setRequestedProdId("");
  }

  return (
    <>
      {/* DISPLAYS THE DIFFERENT DIVs / FORMs WITH THE FLOW OF SUBMISSIONS */}
      {showUpdateItems && <UpdateItemsRender />}
      {showUpdateForm && <UpdateItemsForm />}

      {/* REDIRECTS BACK TO THE MENU */}
      <div className="outletNavItem" onClick={() => redirectView()}>
        View Menu
      </div>
    </>
  );
}
