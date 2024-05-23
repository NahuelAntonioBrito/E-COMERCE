import { useState } from "react";
import AddProductForm from "../AddProductForm/AddProductForm";
import UpdateProductForm from "../UpdateProductForm/UpdateProductForm";
import DeleteProductForm from "../DeleteProductForm/DeleteProductForm";
import "./ProductManager.css"; // Asegúrate de importar el CSS

const ProductManager = () => {
  const [activeForm, setActiveForm] = useState<"add" | "update" | "delete">(
    "add"
  );

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
      {activeForm === "update" && <UpdateProductForm />}
      {activeForm === "delete" && <DeleteProductForm />}
    </div>
  );
};

export default ProductManager;
