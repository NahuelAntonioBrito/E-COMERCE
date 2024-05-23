import React, { useState, useEffect } from "react";
import { Item } from "../../data";
import "./UpdateProductForm.css";

const UpdateProductForm = () => {
  const [product, setProduct] = useState<Item | null>(null);

  useEffect(() => {}, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (product) {
      const { name, value } = e.target;
      if (name === "urlImg") {
        setProduct({ ...product, thumbnails: [value] });
      } else {
        setProduct({ ...product, [name]: value });
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (product) {
      console.log("Producto actualizado:", product);
    }
  };

  return (
    <form className="update-product-form" onSubmit={handleSubmit}>
      {product ? (
        <>
          <label htmlFor="title">Nombre del producto</label>
          <input
            type="text"
            id="title"
            name="title"
            value={product.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <label htmlFor="description">Descripción</label>
          <input
            type="text"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
          <label htmlFor="price">Precio</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />
          <label htmlFor="code">Código</label>
          <input
            type="text"
            id="code"
            name="code"
            value={product.code}
            onChange={handleChange}
            placeholder="Code"
            required
          />
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            placeholder="Stock"
            required
          />
          <label htmlFor="category">Categoría</label>
          <input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Category"
            required
          />
          <label htmlFor="urlImg">URL de la imagen</label>
          <input
            type="text"
            id="urlImg"
            name="urlImg"
            value={product.thumbnails[0] || ""}
            onChange={handleChange}
            placeholder="URL de la imagen"
            required
          />
          <button type="submit">Actualizar Producto</button>
        </>
      ) : (
        <p>No se ha seleccionado ningún producto para actualizar</p>
      )}
    </form>
  );
};

export default UpdateProductForm;
