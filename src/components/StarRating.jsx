import "../styles/StarRating.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const StarRating = ({ rating }) => {

    return (
        <>
            {[...Array(5)].map((_, i) => {
                const ratingValue = i + 1;
                
                if (ratingValue <= rating) {
                    return (
                        <FontAwesomeIcon key={ratingValue} icon={faStar} className="star filled"/>   
                    )
                } else {
                    return (
                        <FontAwesomeIcon key={ratingValue} icon={faStar} className="star" />
                    )
                }
            })}
        </>
    )
} 

export default StarRating;