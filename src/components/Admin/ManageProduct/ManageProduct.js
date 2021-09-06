import React from 'react';
import './ManageProduct.css'
import { useState, useEffect } from 'react';
import ManageCards from './ManageCards/ManageCards';

const ManageProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            }
            )
    }, [])

    const handleDelete = _id => {
        fetch('http://localhost:5000/deleteProduct', {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ _id: _id })
        })
            .then(res => console.log(res))
    }
    return (
        <div>
            <div className="manage-header">
                <div>Product Name</div>
                <div>Clothe Type</div>
                <div>Price</div>
                <div>Action</div>
            </div>
            <div className="manage-products">
                {
                    products.map(pd => <ManageCards product={pd} delete={handleDelete} key={pd.id} />)
                }

            </div>
        </div>
    );
};

export default ManageProduct;