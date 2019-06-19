import React from 'react';
import logo from 'components/assets/images/logo.png';
import Navigation from 'components/common/Navigation';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import sell from 'components/sell/sell';
import purchase from 'components/purchase/purchase';
import myOrders from 'components/myOrders/myOrders';
import { header } from 'components/styles/header.scss'

const LINKS = [
    { label: 'Purchase', to: 'https://www.robinwieruch.de/' },
    { label: 'My Orders', to: 'https://twitter.com/rwieruch' },
    { label: 'Sell', to: 'https://twitter.com/rwieruch' }
];

const Header = () => {
    return (
        <React.Fragment >
            <div className={header}>
                <img src={logo} className={'logo'} alt="Logo" />
                <Router>
                    <div style={{ float: "right" }}>
                        <Link className={'navigation-link'} to="/Purchase">Purchase</Link>
                        <Link className={'navigation-link'} to="/MyOrders">My Orders</Link>
                        <Link className={'navigation-link'} to="/Sell">Sell</Link>
                    </div>
                    <Route path="/Purchase" component={purchase} />
                    <Route path="/MyOrders" component={myOrders} />
                    <Route path="/Sell" component={sell} />
                </Router>
            </div>
        </React.Fragment>
    );
}






export default Header;