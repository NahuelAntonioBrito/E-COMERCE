import React, { useState } from "react";
import "./DeleteProductForm.css";

const DeleteProductForm = () => {
  const [productId, setProductId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductId(parseInt(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (productId !== null) {
      console.log("Producto eliminado con ID:", productId);
    }
  };

  return (
    <form className="delete-product-form" onSubmit={handleSubmit}>
      <label htmlFor="productId">ID del Producto</label>
      <input
        type="number"
        id="productId"
        value={productId || ""}
        onChange={handleChange}
        placeholder="Product ID"
        required
      />
      <button type="submit">Eliminar Producto</button>
    </form>
  );
};

export default DeleteProductForm;
