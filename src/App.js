import "./App.scss";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import products from "./helper/data";
import { useEffect, useState } from "react";

function App() {
  const [produkte, setProdukte] = useState([]);

  useEffect(() => {
    setProdukte(products);
  }, []);

  return (
    <div className="App">
      <Header setProdukte={setProdukte} />
      <ProductCard produkte={produkte} />
    </div>
  );
}

export default App;
