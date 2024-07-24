import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../api/products";
import "./SearchBar.css";

function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      if (query) {
        try {
          const allProducts = await products.getAll();
          const filteredItems = allProducts.filter((item: any) =>
            item.title.toLowerCase().includes(query.toLowerCase())
          );
          setResults(filteredItems);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      } else {
        setResults([]);
      }
    };

    fetchProducts();
  }, [query]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
  };

  const handleSelect = (itemId: string) => {
    navigate(`/item/${itemId}`);
    setQuery("");
    setResults([]);
  };

  const handleButtonClick = () => {
    if (results.length > 0) {
      handleSelect(results[0]._id);
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
        className="search-bar"
      />
      <button className="search-button" onClick={handleButtonClick}>
        Search
      </button>
      {query && (
        <ul className="search-results">
          {results.length > 0 ? (
            results.map((item) => (
              <li key={item._id} onClick={() => handleSelect(item._id)}>
                {item.title}
              </li>
            ))
          ) : (
            <li className="no-results">No products found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
