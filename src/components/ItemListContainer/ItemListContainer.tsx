import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../../data";
import CardList from "../ItemList/CardList";
import { products } from "../../api/products";

type Props = {};

function ItemListContainer({}: Props) {
  const [product, setProduct] = useState<Item[]>([]);
  const { categoryId } = useParams<{ categoryId: string }>();

  useEffect(() => {
    if (categoryId) {
      products
        .getByCategory(categoryId)
        .then((response) => {
          setProduct(response);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      products
        .getAll()
        .then((response) => {
          setProduct(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [categoryId]);

  return (
    <div className="ItemListContainer">
      <CardList products={product} />
    </div>
  );
}

export default ItemListContainer;
