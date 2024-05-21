import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items, Item } from "../../data";
import CardList from "../ItemList/CardList";

type Props = {};

const getProducts = (): Promise<Item[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 500);
  });
};

const getProductByCategory = (categoryId: string): Promise<Item[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredItems = items.filter(
        (item) => item.category === categoryId
      );
      resolve(filteredItems);
    }, 500);
  });
};

function ItemListContainer({}: Props) {
  const [product, setProduct] = useState<Item[]>([]);
  const { categoryId } = useParams<{ categoryId: string }>();

  useEffect(() => {
    const asyncFun = categoryId ? getProductByCategory : getProducts;
    asyncFun(categoryId || "")
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div className="ItemListContainer">
      <CardList products={product} />
    </div>
  );
}

export default ItemListContainer;
