import { Item } from "../../data";
import "./Card.css";
import { Link } from "react-router-dom";

interface CardProps {
  item: Item;
}

function Card({ item }: CardProps) {
  return (
    <div className="card h-100">
      <img
        src={item.thumbnails[0]}
        className="card-img-top"
        alt={item.title}
        style={{ height: "200px", objectFit: "scale-down" }}
      />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text truncated-description">{item.description}</p>
        <small className="text-body-secondary">${item.price}</small>
        <Link to={`/item/${item.id}`} className="btn btn-primary mt-2">
          Detalle
        </Link>
      </div>
    </div>
  );
}

export default Card;
