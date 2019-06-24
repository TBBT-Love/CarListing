import React from "react";
import logo from "components/assets/images/icon-car.jpg";

import Navigation from "components/common/Navigation";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import sell from "components/sell/sell";
import purchase from "components/purchase/purchase";
import myOrders from "components/myOrders/myOrders";
import ErrorPage from "components/common/ErrorPage";
import { header } from "components/styles/header.scss";

const Header = () => {
  return (
    <React.Fragment>
      <div className={header}>
        <img src={logo} className={"logo"} alt="Logo" />

        <div style={{ float: "right", "marginTop": "45px" }}>
          <Link className={"navigation-link"} to="/Purchase">
            Purchase
          </Link>
          <Link className={"navigation-link"} to="/MyOrders">
            My Orders
          </Link>
          <Link className={"navigation-link"} to="/Sell">
            Sell
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
