
import { useState } from "react";

export default function DeleteItems({
  setActiveComponent,
  products,
  setProducts,
  requestedProdId,
  setRequestedProdId,
}) {
  const [showDeleteItems, setShowDeleteItems] = useState(true);
  const [loading, setLoading] = useState(false);

  // Function to send the DELETE request to the backend
  async function removeItemFromBackend() {
    setLoading(true);
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/deleteproduct/${requestedProdId}`,
        {
          method: "DELETE",
          mode:"cors"
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("Product deleted successfully!");
        removeItemFromState();
      } else {
        alert(result.message || "Failed to delete the product.");
      }
    } catch (error) {
      console.error("Error occurred while deleting the product:", error);
      alert("Error occurred while deleting the product.");
    } finally {
      setLoading(false);
    }
  }

  // Function to remove the item from the state after successful deletion
  function removeItemFromState() {
    const updatedProducts = products.filter(
      (product) => product.id != requestedProdId
    );
    setProducts(updatedProducts);

    // Restore the state variables to default
    setRequestedProdId("");
    setShowDeleteItems(false);
    setActiveComponent("ViewItems");
  }

  // Displays the item selected by user for deletion
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
              <div>{`Product Name : ${foundProduct.name}`}</div>
              <div>{`Product Price : ${foundProduct.price}`}</div>
              <div>{`Product Description : ${foundProduct.description}`}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Confirms deletion
  function DeleteItemsConfirm() {
    const handleDltConfirm = (event) => {
      event.preventDefault();
      removeItemFromBackend(); // Calls the backend API to delete the item
    };

    return (
      <>
        <div className="delConfirmDiv">
          <h4>Are you sure you want to delete this item?</h4>

          {/* Deletes item on clicking Yes */}
          <button className="delConfirmBtn" onClick={handleDltConfirm} disabled={loading}>
            {loading ? "Deleting..." : "Yes"}
          </button>

          {/* Redirects back to the menu on clicking No */}
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

  function redirectView() {
    setShowDeleteItems(false);
    setActiveComponent("ViewItems");
    setRequestedProdId("");
  }

  return (
    <>
      {/* Displays item-to-be-deleted and confirm-deletion div, when the item is found */}
      {showDeleteItems && <DeleteItemsRender />}
      {showDeleteItems && <DeleteItemsConfirm />}

      {/* Redirects back to the menu */}
      <div className="outletNavItem" onClick={() => redirectView()}>
        View Menu
      </div>
    </>
  );
}

