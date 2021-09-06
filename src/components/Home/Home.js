import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css'
import Card from '../Card/Card'
const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            }
            )
    }, [])
    console.log(products)
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
                        products.map(pd => <Card product={pd} key={pd._id}></Card>)
                    }

                </div>

            </div>

        </div>
    );
};

export default Home;