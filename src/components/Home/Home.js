import React from 'react';
import { products } from '../../fakeData/fakeData';
import './Home.css'
import Card from '../Card/Card'
const Home = () => {

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
                        products.map(pd => <Card product={pd} key={pd.id}></Card>)
                    }

                </div>

            </div>

        </div>
    );
};

export default Home;