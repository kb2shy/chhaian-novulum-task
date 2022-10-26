import "../styles/App.scss";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./Header";
import Products from "./Products";

const TITLE = "Heading";
const CONTENT = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sapiente quis at rerum commodi minima quidem alias, et dolorem accusantium, sequi ad obcaecati debitis non iusto, neque velit labore? Esse."

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://fakestoreapi.com/products?limit=5").then(resp => {
      setItems(resp.data);
      setIsLoading(false);
    });

  }, []);

  return (
    <div className="container">
      <Header title={TITLE} content={CONTENT} />
      {isLoading && <div>Loading...</div>}
      {!isLoading && <Products items={items} />}
    </div>
  );
}

export default App;
