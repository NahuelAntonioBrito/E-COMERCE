import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items, Item } from "../../data";
import ItemDetail from "../Itemdetal/ItemDetail";

const getProductById = (prodId: number): Promise<Item | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items.find((prod) => prod.id === prodId));
    }, 500);
  });
};

const ItemDetailContainer = () => {
  const [product, setProduct] = useState<Item | null>(null);
  const { itemId } = useParams<{ itemId: string }>();

  console.log("useParams result:", itemId);

  useEffect(() => {
    console.log("ingresa use effect");
    if (itemId) {
      console.log(itemId);
      const prodId = parseInt(itemId);
      console.log(prodId);
      getProductById(prodId)
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
