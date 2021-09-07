import React from 'react';
import { useState, useEffect, useContext } from 'react';
import './Home.css'
import Card from '../Card/Card'
import { CartContext } from '../../App';

const Home = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useContext(CartContext)
    console.log(cart)
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            }
            )
    }, [])
    const handleAddToCart = _id => {
        const product = products.find(pd => pd._id === _id)
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className="home-container">
            <div className="searchField">
                <div className="search-div">
                    <div className="input-div"><input></input></div>
                    <div className="text-div"><button>Search</button></div>
                </div>
            </div>
            <div className="productContainer">
                <div className="row">
                    {
                        products.map(pd => <Card product={pd} addToCart={handleAddToCart} key={pd._id}></Card>)
                    }

                </div>

            </div>

        </div>
    );
};

export default Home;