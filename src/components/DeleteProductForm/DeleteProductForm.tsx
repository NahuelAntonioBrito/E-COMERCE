import React, { useState } from "react";
import { products } from "../../api/products";
import "./DeleteProductForm.css";

const DeleteProductForm = () => {
  const [productId, setProductId] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductId(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (productId) {
      try {
        const response = await products.deleteProduct(productId);
        console.log("Producto eliminado con ID:", productId, response);
        setProductId("");
      } catch (error) {
        console.error("Error al eliminar el producto:", error);
      }
    }
  };

  return (
    <form className="delete-product-form" onSubmit={handleSubmit}>
      <h2>Eliminar Producto</h2>
      <label htmlFor="productId">ID del Producto</label>
      <input
        type="text"
        id="productId"
        value={productId}
        onChange={handleChange}
        placeholder="Product ID"
        required
      />
      <button type="submit">Eliminar Producto</button>
    </form>
  );
};

export default DeleteProductForm;
