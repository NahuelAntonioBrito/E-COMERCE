import { Item } from "../../data";

interface ItemDetailProps {
  item: Item;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item }) => {
  return (
    <div className="item-detail">
      <h2>{item.title}</h2>
      <img
        src={item.thumbnails[0]}
        alt={item.title}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <p>Stock: {item.stock}</p>
    </div>
  );
};

export default ItemDetail;
