import "../styles/ProductDisplay.scss";

import StarRating from "./StarRating";

const ProductDisplay = (props) => {

    const { item } = props;

    if (item && Object.keys(item).length === 0 && Object.getPrototypeOf(item) === Object.prototype) {
        return (
            <div className="display">
                <h2>No Item Selected</h2>
            </div>
        )
    }

    const numOfstars = Math.round(item.rating.rate);

    return (
        <div className="display">
            <h2 className="price">${item.price.toFixed(2)}</h2>
            <p>{item.description}</p>
            <p>
                <StarRating rating={numOfstars} />
                <span> ({item.rating.count})</span>
            </p>
            <button className="btn">Add to Cart</button>
        </div>
    )

}

export default ProductDisplay;