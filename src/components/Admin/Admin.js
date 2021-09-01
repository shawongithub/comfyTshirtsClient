import React from 'react';
import './Admin.css'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import Topic from './Topic/Topic';

const Admin = () => {
    let { path, url } = useRouteMatch();
    console.log(path)
    console.log(url)
    return (
        <div className='admin-container'>
            <div className="admin-sidebar">
                <div className="logo"><Link to='/'>ComfyTshirts</Link></div>
                <div className="manage-product"><Link to={`${url}/manage-product`}>ManageProduct</Link></div>
                <div className="add-product"><Link to={`${url}/add-product`}>AddProduct</Link></div>
                <div className="edit-product"><Link to={`${url}/edit-product`}>EditProduct</Link></div>
            </div>
            <div className="admin-works">
                <Switch>
                    <Route exact path={path}>
                        <h3>Please select a topic.</h3>
                    </Route>
                    <Route path={`${path}/:topicId`}>
                        <Topic></Topic>
                    </Route>
                </Switch>
            </div>

        </div>
    );
};

export default Admin;