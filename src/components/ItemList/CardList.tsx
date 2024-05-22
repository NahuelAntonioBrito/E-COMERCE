import { Item } from "../../data";
import Card from "../Card/Card";
import "./CardList.css";

interface CardListProps {
  products: Item[];
}

function CardList({ products }: CardListProps) {
  return (
    <div className="card-list">
      {products.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CardList;
