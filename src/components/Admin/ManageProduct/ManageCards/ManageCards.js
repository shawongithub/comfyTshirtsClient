import React from 'react';
import './ManageCards.css'


const ManageCards = props => {
    console.log(props.product)
    console.log(props.delete)
    const { name, price, type, _id } = props.product
    return (
        <div className="manage-card-container">
            <div>{name}</div>
            <div>{type}</div>
            <div>{price}</div>
            <div>
                <button>Edit</button>
                <button onClick={() => props.delete(_id)}>Delete</button>
            </div>
        </div>
    );
};

export default ManageCards;