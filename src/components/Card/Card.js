import React from 'react';
import './Card.css'

const Card = props => {

    const { name, imageURL, price, _id } = props.product
    return (
        <div className="col-sm-12 col-md-4 container">
            <div className="card-container">
                <div className="image-div">
                    <img src={imageURL} alt="" />
                </div>
                <div className="name-div">{name}</div>
                <div className="price-div">{price}</div>
                <div className="button-div"><button onClick={() => props.addToCart(_id)}>Add to cart</button></div>
            </div>
        </div>
    );
};

export default Card;