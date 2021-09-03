import React from 'react';
import './ManageCards.css'


const ManageCards = props => {
    const { name, price, type } = props.product
    return (
        <div className="manage-card-container">
            <div>{name}</div>
            <div>{type}</div>
            <div>{price}</div>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default ManageCards;