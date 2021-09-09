import React from 'react';
import './Login.css'

import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const app = initializeApp(firebaseConfig);


const Login = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const googleLoginHandler = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);

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