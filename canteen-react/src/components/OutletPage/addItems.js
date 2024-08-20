import { useState } from "react";

export default function AddItems({
  setActiveComponent,
  products,
  setProducts,
}) {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  // SETS THE PRODUCT ID BY DEFAULT FOR THE ITEM TO BE ADDED
  const newId =
    products.length > 0
      ? (
          Math.max(...products.map((product) => parseInt(product.id, 10))) + 1
        ).toString()
      : "1";

  const handleSubmit = (event) => {
    event.preventDefault();

    // CHECKS IF ALL THE FIELDS HAVE VALUES OR NOT
    if (
      itemName.trim().length === 0 ||
      itemPrice.trim().length === 0 ||
      itemDescription.trim().length === 0
    ) {
      alert("Field input(s) cannot be empty");
      return;
    }
    // PROCEEDS FURTHER IF ALL THE CONDITIONS ARE MET
    addProduct();
  };

  // ADDS THE ITEM TO THE MENU
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

    // SETS ALL THE FORM VALUES BACK TO DEFAULT
    setItemName("");
    setItemPrice("");
    setItemDescription("");
  }

  return (
    <div>
      {/* ADD ITEM FORM */}
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
            onChange={(e) => setItemName(e.target.value)} // DYNAMICALLY CHANGES THE VALUES WITH EACH CHANGE IN THE FORM
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

      {/* SUBMITS THE FORM */}
      <button onClick={handleSubmit}>Submit</button>

      {/* REDIRECTS TO THE MENU */}
      <div
        className="outletNavItem"
        onClick={() => setActiveComponent("ViewItems")}
      >
        View Menu
      </div>
    </div>
  );
}
