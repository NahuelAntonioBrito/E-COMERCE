import { Item } from "../data";

interface CardProps {
  item: Item;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={item.thumbnails[0]}
              className="img-fluid rounded-start"
              alt={item.title}
              style={{ height: "500px", width: "400px" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">
                <small className="text-body-secondary">${item.price}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
