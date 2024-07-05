import { useEffect, useState } from "react";
import "./Header.scss";
import products from "../../helper/data";
import { categories } from "../../helper/data";

const Header = ({ setProdukte }) => {
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const getProductData = () => {
      if (category !== "all") {
        const filteredProdukte = products.filter(
          (product) => product.category === category
        );
        setProdukte(filteredProdukte);
      } else {
        setProdukte(products);
      }
    };
    getProductData();
  }, [category]);

  return (
    <header>
      <h1>Product List</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => setCategory(category.toLowerCase())}>
            {category}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
