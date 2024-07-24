import { Item } from "../../data";
import "./Card.css";
import { Link } from "react-router-dom";

interface CardProps {
  item: Item;
}

function Card({ item }: CardProps) {
  return (
    <div className="itemCard">
      <img src={item.thumbnails[0]} className="card-img-top" alt={item.title} />
      <div className="cardBody">
        <h5 className="cardTitle">{item.title}</h5>
        <p className="card-text truncated-description">{item.description}</p>
        <small className="cardText-body-secondary">${item.price}</small>
        <Link to={`/item/${item._id}`} className="btn btn-primary mt-2">
          Detalle
        </Link>
      </div>
    </div>
  );
}

export default Card;
