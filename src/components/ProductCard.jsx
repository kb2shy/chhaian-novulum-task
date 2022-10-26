import "../styles/ProductCard.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import StarRating from "./StarRating";

const ProductCard = ({ item, setSelectedItem, selectedItem, accordion }) => {

    const { image, title, price, rating, description } = item;
    let selected = item.id === selectedItem.id ? "selected" : "";
    const numOfstars = Math.round(item.rating.rate);

    return (
        <div className={`card ${selected}`} onClick={() => setSelectedItem(item)}>
            <div className="image">
                <img src={image} alt={title} />
            </div>
            <div className="title">
                {title}
            </div>
            <div className={`arrow ${selected}`}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            {accordion && (item.id === selectedItem.id) && (
                <div className={`accordion ${selected}`}>
                    <p className="price">${price.toFixed(2)}</p>
                    <p>{description}</p>
                    <p>
                        <StarRating rating={numOfstars} />
                        <span> ({rating.count})</span>
                    </p>
                    <button className="btn">Add to Cart</button>
                </div>
            )}
        </div>
    )
}

export default ProductCard;