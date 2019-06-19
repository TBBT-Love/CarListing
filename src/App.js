import React from 'react';
import './App.scss';
import HomePage from 'components/Home/HomePage';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Layout from 'components/common/layout';
import Navigation from 'components/common/Navigation';
import sell from 'components/sell/sell';
import purchase from 'components/purchase/purchase';
import myOrders from 'components/myOrders/myOrders';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Router>
            <div>
              {/* <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Purchase">Purchase</Link>
                </li>
                <li>
                  <Link to="/MyOrders">My Orders</Link>
                </li>
                <li>
                  <Link to="/Sell">Sell</Link>
                </li>
              </ul> */}

              <Route path="/" component={HomePage} />
              {/* <Route path="/Purchase" component={purchase} />
              <Route path="/MyOrders" component={myOrders} />
              <Route path="/Sell" component={sell} /> */}
            </div>
          </Router>
        </Layout>
      </div>
    )
  };
}
export default connect()(App);