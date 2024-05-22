import { Item } from "../../data";
import "./Card.css";

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
        <a href="#" className="btn btn-primary mt-2">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Card;
