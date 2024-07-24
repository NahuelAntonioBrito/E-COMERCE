import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../../data";
import ItemDetail from "../Itemdetal/ItemDetail";
import { products } from "../../api/products";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState<Item | null>(null);
  const { itemId } = useParams<{ itemId: string }>();

  useEffect(() => {
    if (itemId) {
      console.log(itemId);
      products
        .getById(itemId)
        .then((response) => {
          if (response) {
            setProduct(response);
          } else {
            console.error("Product not found");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [itemId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ItemDetailContainer">
      <ItemDetail item={product} />
    </div>
  );
};

export default ItemDetailContainer;
