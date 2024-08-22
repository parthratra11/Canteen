import { useState, useEffect } from "react";
import "./outletPage.css";
import { useNavigate } from "react-router-dom";
import ViewItems from "./viewItems";
import UpdateItems from "./updateItems";
import AddItems from "./addItems";
import DeleteItems from "./deleteItems";
import Orders from "./orders";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function OutletHeader() {
  // const navigate = useNavigate();
  function handleLog() {
    // localStorage.clear();
    // navigate("/");
  }

  return (
    <>
      <div className="navBar">
        <div className="main">
          <div className="greet">Greetings Outlet</div>
          <div className="rightmenue">
            <div className="support">Support</div>
            <div className="logout" onClick={handleLog}>
              <Button variant="danger">Log Out</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function OutletHomepage() {
  const [activeComponent, setActiveComponent] = useState("ViewItems");
  const [requestedProdId, setRequestedProdId] = useState("");
  const [products, setProducts] = useState([]);
  const outletId = 1;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/getproductinfo/${outletId}`
        );
        const data = await response.json();

        if (data.status === "success") {
          const formattedProducts = data.product_info.map((product) => ({
            id: product.productid,
            name: product.productname,
            price: product.productprice,
            description: product.productdescription,
          }));
          setProducts(formattedProducts);
        } else {
          console.error("Failed to fetch products:", data.message);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [outletId]);

  const renderComponent = () => {
    switch (activeComponent) {
      case "Orders":
        return <Orders />;

      case "ViewItems":
        return (
          <ViewItems
            setActiveComponent={setActiveComponent}
            products={products}
            setProducts={setProducts}
            requestedProdId={requestedProdId}
            setRequestedProdId={setRequestedProdId}
          />
        );

      case "AddItems":
        return (
          <AddItems
            setActiveComponent={setActiveComponent}
            products={products}
            setProducts={setProducts}
          />
        );

      case "UpdateItems":
        return (
          <UpdateItems
            setActiveComponent={setActiveComponent}
            products={products}
            setProducts={setProducts}
            requestedProdId={requestedProdId}
            setRequestedProdId={setRequestedProdId}
          />
        );

      case "DeleteItems":
        return (
          <DeleteItems
            setActiveComponent={setActiveComponent}
            products={products}
            setProducts={setProducts}
            requestedProdId={requestedProdId}
            setRequestedProdId={setRequestedProdId}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <OutletHeader />
      <div className="outletNavBar">
        <button
          className="outletNavItem"
          onClick={() => setActiveComponent("Orders")}
        >
          <span>Orders</span>
        </button>
        <button
          className="outletNavItem"
          onClick={() => setActiveComponent("ViewItems")}
        >
          View Menu
        </button>
        <button
          className="outletNavItem"
          onClick={() => setActiveComponent("AddItems")}
        >
          Add Items
        </button>
      </div>
      <div>{renderComponent()}</div>
    </>
  );
}
