import "../styles/Products.scss";
import { useState, useEffect } from "react";

import ProductDisplay from "./ProductDisplay";
import ProductList from "./ProductList";

const Products = ({ items }) => {

    const [selectedItem, setSelectedItem] = useState({});
    const [windowDimensions, setWindowDimensions] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight
    });

    const detectSize = () => {
        setWindowDimensions({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener("resize", detectSize);

        return () => {
            window.removeEventListener("resize", detectSize);
        }

    }, [windowDimensions])

    if (windowDimensions.winWidth < 768) {
        return (
            <div className="products">
                <ProductList items={items} selectedItem={selectedItem} setSelectedItem={setSelectedItem} accordion={true}/>
            </div>
        )
    }

    return (
        <div className="products">
            <ProductList items={items} selectedItem={selectedItem} setSelectedItem={setSelectedItem} accordion={false}/>
            <ProductDisplay item={selectedItem} />
        </div>
    )
}

export default Products;