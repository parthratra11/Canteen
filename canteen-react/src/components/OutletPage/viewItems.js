import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ViewItems({
  setActiveComponent,
  products,
  setProducts,
}) {
  return (
    <>
      <div className="viewItemsHeader">
        {/* VIEW ITEMS HEADER */}
        <div className="viewItems">
          <div className="viewItems">
            <div className="viewItemID">Product ID</div>
            <div className="viewItemImage">Product Image</div>
            {/* Product Image div needs to be changed*/}
            <div className="viewItemDetails">
              <div>Product Name</div>
              <div>Product Price</div>
              <div>Product Description</div>
            </div>
          </div>
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
          </div>
        ))}

      {/* ADD ITEMS BUTTON */}
      <div
        onClick={() => setActiveComponent("AddItems")}
        className="outletNavItem"
      >
        Add Items
      </div>

      {/* UPDATE ITEMS BUTTON */}
      <div
        className="outletNavItem"
        onClick={() => setActiveComponent("UpdateItems")}
      >
        Update Items
      </div>

      {/* DELETE ITEMS BUTTON */}
      <div
        className="outletNavItem"
        onClick={() => setActiveComponent("DeleteItems")}
      >
        Delete Items
      </div>
    </>
  );
}
