import React, { useState, useEffect } from "react";
import AddProductForm from "../AddProductForm/AddProductForm";
import UpdateProductForm from "../UpdateProductForm/UpdateProductForm";
import DeleteProductForm from "../DeleteProductForm/DeleteProductForm";
import { products } from "../../api/products";
import { Item } from "../../data";
import "./ProductManager.css";

const ProductManager = () => {
  const [activeForm, setActiveForm] = useState<"add" | "update" | "delete">(
    "add"
  );
  const [productId, setProductId] = useState<string>("");
  const [productList, setProductList] = useState<Item[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await products.getAll();
        setProductList(allProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleFormChange = (form: "add" | "update" | "delete") => {
    setActiveForm(form);
  };

  return (
    <div className="product-manager">
      <div className="form-selector">
        <button
          onClick={() => handleFormChange("add")}
          className={activeForm === "add" ? "active" : ""}
        >
          Add Product
        </button>
        <button
          onClick={() => handleFormChange("update")}
          className={activeForm === "update" ? "active" : ""}
        >
          Update Product
        </button>
        <button
          onClick={() => handleFormChange("delete")}
          className={activeForm === "delete" ? "active" : ""}
        >
          Delete Product
        </button>
      </div>

      {activeForm === "add" && <AddProductForm />}
      {activeForm === "update" && (
        <>
          <select
            onChange={(e) => setProductId(e.target.value)}
            value={productId}
            className="product-selector"
          >
            <option value="" disabled>
              Select a product to update
            </option>
            {productList.map((product) => (
              <option key={product._id} value={product._id}>
                {product.title}
              </option>
            ))}
          </select>
          {productId && <UpdateProductForm productId={productId} />}
        </>
      )}
      {activeForm === "delete" && <DeleteProductForm />}
    </div>
  );
};

export default ProductManager;
