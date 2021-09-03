import React from 'react';
import './ManageProduct.css'
import ManageCards from './ManageCards/ManageCards';
import { products } from '../../../fakeData/fakeData';
const ManageProduct = () => {
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
                    products.map(pd => <ManageCards product={pd} key={pd.id} />)
                }

            </div>
        </div>
    );
};

export default ManageProduct;