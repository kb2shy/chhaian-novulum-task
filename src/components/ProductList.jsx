import "../styles/Products.scss";

import React from "react";
import ProductCard from "./ProductCard";

const ProductList = (props) => {

    const { items, setSelectedItem, selectedItem, accordion } = props;

    return (
        <div className="items">
            { items.map((item) => {
                return <ProductCard key={item.id} setSelectedItem={setSelectedItem} item={item} selectedItem={selectedItem} accordion={accordion}/>
            })}
        </div>
    )
}

export default ProductList;