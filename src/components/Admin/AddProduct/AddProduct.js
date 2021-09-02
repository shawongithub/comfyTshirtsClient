import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'
import axios from 'axios';
const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const handleImageUpload = event => {
        const imageData = new FormData()
        imageData.set('key', 'bd41fb33322baa58de5b0354ff29792a')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(imageData)
    }

    return (
        <div>
            <h1>Add Product</h1>
            <div className='form-container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Product Name</label>
                    <br />
                    <input name="name" />
                    <br />
                    <label htmlFor="type">Cloth Type</label>
                    <br />
                    <input name="type" />
                    <br />
                    <label htmlFor="price">Add Price</label>
                    <br />
                    <input name="price" />
                    <br />

                    <label htmlFor="image">Upload  Image</label>
                    <br />
                    <input type="file" name="image" onChange={handleImageUpload} />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;