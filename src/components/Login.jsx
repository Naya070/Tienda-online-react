import React from 'react';
import '../styles/Login.scss';
import logo from "@logos/logo_yard_sale.svg";

const Login = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src= {logo} alt="logo" class="logo"/>
                <h1 class="title">Create a new password</h1>
                <p class="subtitle">Enter a new passwrd for yue account</p>
                <form action="/" class="form">
                    <label for="password" class="label">Password</label>
                    <input type="password" id="password" placeholder="*********" class="input input-password"/>
                    <label for="new-password" class="label">Password</label>
                    <input type="password" id="new-password" placeholder="*********" class="input input-password"/>
                    <input type="submit" value="Confirm" class="primary-button login-button"/>
                </form>
            </div>
        </div>
    );
};

export default Login;