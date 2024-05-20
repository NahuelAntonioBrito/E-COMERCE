import { items } from "../../data";
import Card from "../Card/Card";

function CardList() {
  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-3 mb-4">
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
