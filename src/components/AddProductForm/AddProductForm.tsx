import React, { useState } from "react";
import { products } from "../../api/products";
import { Item } from "../../data";
import "./AddProductForm.css";

const AddProductForm = () => {
  const [product, setProduct] = useState<Omit<Item, "_id" | "id">>({
    title: "",
    description: "",
    price: 0,
    thumbnails: [],
    status: true,
    code: "",
    stock: 0,
    category: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "price" || name === "stock") {
      setProduct({ ...product, [name]: Number(value) });
    } else if (name === "urlImg") {
      setProduct({ ...product, thumbnails: [value] });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await products.addProduct(product);
      console.log("Producto agregado:", response);
      setProduct({
        title: "",
        description: "",
        price: 0,
        thumbnails: [],
        status: true,
        code: "",
        stock: 0,
        category: "",
      });
    } catch (error) {
      console.error("Error al agregar el producto:", error);
    }
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>
      <label>Nombre del producto</label>
      <input
        type="text"
        name="title"
        value={product.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <label>Descripción</label>
      <input
        type="text"
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <label>Precio</label>
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <label>Código</label>
      <input
        type="text"
        name="code"
        value={product.code}
        onChange={handleChange}
        placeholder="Code"
        required
      />
      <label>Stock</label>
      <input
        type="number"
        name="stock"
        value={product.stock}
        onChange={handleChange}
        placeholder="Stock"
        required
      />
      <label>Categoría</label>
      <input
        type="text"
        name="category"
        value={product.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <label>URL de la imagen</label>
      <input
        type="text"
        name="urlImg"
        value={product.thumbnails[0] || ""}
        onChange={handleChange}
        placeholder="URL de la imagen"
        required
      />
      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default AddProductForm;
