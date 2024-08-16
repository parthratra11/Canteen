import { useState } from "react";

export default function AddItems({ setActiveComponent }) {
  return (
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
      <div
        className="outletNavItem"
        onClick={() => setActiveComponent("ViewItems")}
      >
        View Menu
      </div>
    </div>
  );
}
