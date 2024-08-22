import { useState } from "react";

export default function UpdateItems({
  setActiveComponent,
  products,
  setProducts,
  requestedProdId,
  setRequestedProdId,
}) {
  const [showUpdateItems, setShowUpdateItems] = useState(true);
  const [showUpdateForm, setShowUpdateForm] = useState(true);
  const [loading, setLoading] = useState(false);

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

  function UpdateItemsForm() {
    const [updateItemName, setUpdateItemName] = useState("");
    const [updateItemPrice, setUpdateItemPrice] = useState("");
    const [updateItemDescription, setUpdateItemDescription] = useState("");

    // UPDATES THE SELECTED ITEM BY MAKING A PUT REQUEST TO THE API
    async function updateItem() {
      setLoading(true);

      const updatedProductData = {
        productId: requestedProdId,
        productName: updateItemName,
        productDescription: updateItemDescription,
        productPrice: updateItemPrice,
        outletId: "1", // You can modify this to be dynamic
      };

      try {
        const response = await fetch("http://127.0.0.1:5000/updateproduct", {
          method: "PUT",
          mode:'cors',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProductData),
        });

        const result = await response.json();

        if (response.ok) {
          alert("Product updated successfully!");

          // UPDATES THE PRODUCT IN THE LOCAL STATE
          setProducts((prevProducts) => {
            return prevProducts.map((product) =>
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

          // SETS THE FORM VALUES BACK TO DEFAULT
          setUpdateItemName("");
          setUpdateItemPrice("");
          setUpdateItemDescription("");
        } else {
          alert(result.message || "Failed to update the product.");
        }
      } catch (error) {
        alert("Error occurred while updating the product.");
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
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
        <button onClick={handleUptSubmit} disabled={loading}>
          {loading ? "Updating..." : "Submit"}
        </button>
      </div>
    );
  }

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
