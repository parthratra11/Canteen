import { useState } from "react";

export default function AddItems({
  setActiveComponent,
  products,
  setProducts,
}) {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const newId =
    products.length > 0
      ? (
          Math.max(...products.map((product) => parseInt(product.id, 10))) + 1
        ).toString()
      : "1";

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct();
  };

  function addProduct() {
    setProducts([
      ...products,
      {
        id: newId,
        name: itemName,
        price: itemPrice,
        description: itemDescription,
      },
    ]);

    setItemName("");
    setItemPrice("");
    setItemDescription("");
  }

  return (
    <div>
      <form>
        <div>
          <input
            className="productId"
            type="text"
            value={`Product ID : ${newId}`}
            readOnly
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="number"
            placeholder="Item Price"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Item Description"
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
          ></input>
        </div>
      </form>
      <button onClick={handleSubmit}>Submit</button>
      <div
        className="outletNavItem"
        onClick={() => setActiveComponent("ViewItems")}
      >
        View Menu
      </div>
    </div>
  );
}
