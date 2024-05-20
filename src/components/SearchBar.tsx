import { useState } from "react";
import items from "../../public/products.json";

function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<typeof items>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);

    if (value) {
      const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredItems);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="d-flex align-items-center">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
        className="form-control"
      />
      <ul className="list-unstyled ms-2">
        {results.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
