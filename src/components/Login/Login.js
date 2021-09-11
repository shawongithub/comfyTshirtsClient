import React from 'react';
import './Login.css'

import { UserContext } from '../../App';
import { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom'

import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

initializeApp(firebaseConfig);


const Login = () => {
    const [user, setUser] = useContext(UserContext)

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const googleLoginHandler = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const loggedInUser = result.user;
                const updatedUser = { ...user }
                updatedUser.signIn = true
                updatedUser.email = loggedInUser.email
                setUser(updatedUser)
                history.replace(from);

            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div>
            <div className="login-container">
                <input value="Continue with google" type="submit" onClick={googleLoginHandler} />
            </div>
        </div>
    );
};

export default Login;