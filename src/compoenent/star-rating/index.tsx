import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './index.css'
interface StarRatingProps {
    noOfStars: number;
}

const StarRating: React.FC<StarRatingProps> = ({ noOfStars }): JSX.Element => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex: number) {
        console.log(getCurrentIndex);
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex: number) {
        setHover(getCurrentIndex);
        console.log(getCurrentIndex);

    }

    function handleMouseLeave(): void {
        setHover(rating);
    }

    return (
        <>
            <div className="star-rating">
                {
                    [...Array(noOfStars)].map((_, index) => {
                       index+=1;
                        return (
                            <FaStar
                                key={index}
                                className={index<=(hover || rating)? `active`:`inactive`}
                                onClick={() => handleClick(index)}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave()}
                                size={40}
                            />
                        );
                    })
                }
            </div>
        </>
    );
}

export default StarRating;
