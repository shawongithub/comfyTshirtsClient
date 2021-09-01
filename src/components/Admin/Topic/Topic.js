import React from 'react';
import { useParams } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct'
import EditProduct from '../EditProduct/EditProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
const Topic = () => {
    let { topicId } = useParams();
    let element = <ManageProduct></ManageProduct>
    if (topicId === 'add-product') {
        element = <AddProduct></AddProduct>
    }
    if (topicId === 'edit-product') {
        element = <EditProduct></EditProduct>
    }
    return (
        <div>
            {element}
        </div>
    );
};

export default Topic;