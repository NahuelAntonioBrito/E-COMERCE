import { items } from "../data";
import Card from "./Card";

const CardList: React.FC = () => {
  return (
    <div className="card-list">
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CardList;
