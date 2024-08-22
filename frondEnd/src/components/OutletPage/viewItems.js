import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UpdateItems from "./updateItems";
import DeleteItems from "./deleteItems";

export default function ViewItems({
  setActiveComponent,
  products,
  setProducts,
  requestedProdId,
  setRequestedProdId,
}) {
  function handleUpdate(prodId) {
    setRequestedProdId(prodId);
    setActiveComponent("UpdateItems");
  }

  function handleDelete(prodId) {
    setRequestedProdId(prodId);
    setActiveComponent("DeleteItems");
    // <DeleteItems />;
  }

  return (
    <>
      <div className="viewItemsHeader">
        {/* VIEW ITEMS HEADER */}
        <div className="viewItems">
          <div className="viewItemID">
            <span>Product</span>
            <span>ID</span>
          </div>
          <div className="viewItemImage">
            <span>Product</span>
            <span>Image</span>
          </div>
          {/* Product Image div needs to be changed*/}
          <div className="viewItemDetails">
            <span>Product</span>
            <span>Details</span>
          </div>
          <div className="viewItemUptDltHeader"></div>
          <div className="viewItemUptDltHeader"></div>
        </div>
      </div>

      {/* DISPLAYS ALL THE ITEMS IN THE MENU */}
      {products
        .slice() // CREATES A COPY
        .sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10)) // SORTS THE MENU ON THE BASIS OF THE ID
        .map((product) => (
          <div key={product.id} className="viewItems">
            <div className="viewItemID">{product.id}</div>
            <div className="viewItemImage">{/*Product Image Placeholder*/}</div>
            {/* Product Image div needs to be changed*/}
            <div className="viewItemDetails">
              <div>Item: {product.name}</div>
              <div>Price: {product.price}</div>
              <div>Description: {product.description}</div>
            </div>
            <div
              className="viewItemUptDlt"
              onClick={() => handleUpdate(product.id)}
            >
              Update
            </div>
            <div
              className="viewItemUptDlt"
              onClick={() => handleDelete(product.id)}
            >
              Delete
            </div>
          </div>
        ))}

      {/* ADD ITEMS BUTTON */}
      <div
        onClick={() => setActiveComponent("AddItems")}
        className="outletNavItem"
      >
        Add Items
      </div>
    </>
  );
}
