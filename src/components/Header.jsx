import React, {useState, useContext} from 'react';
import '@styles/Header.scss';
import MyMenu from '@components/MyMenu';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import OrderDetail from '../containers/OrderDetail';
import AppContext from '../context/AppContext';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext);
    
    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="header-navbar-left">
                <img src={logo} alt="logo" className="header-nav-logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="header-navbar-right">
                <ul>
                    <li className="header-navbar-email" onClick={handleToggle}>
                    platzi@example.com
                    </li>
                    <li className="header-navbar-shopping-cart" 
                    onClick={() => setToggleOrders(!toggleOrders)}
                    >
                        <img src={shoppingCart} alt="shopping cart" />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul>
            </div>
            {toggle && <MyMenu />}
            {toggleOrders && <OrderDetail />}
        </nav>
    );
};

export default Header;