import React from 'react';
import '../styles/MyMenu.scss'
//clase7

const MyMenu = () => {
    return (
        <div className="desktop-menu">
            <ul>
                <li>
                    <a href="/" className="title">My orders</a>
                </li>

                <li>
                    <a href="/">My account</a>
                </li>

                <li>
                    <a href="/">Sign out</a>
                </li>
            </ul>
        </div>
    );
};

export default MyMenu;