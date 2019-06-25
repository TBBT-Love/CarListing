import React from "react";
import logo from "components/assets/images/icon-car.jpg";
import { Link } from "react-router-dom";
import { header } from "components/styles/header.scss";

const Header = () => {
  return (
    <div className={header}>
      <Link to="/">
        <img src={logo} className={"logo"} alt="Logo" />
      </Link>

      <section className="float-right margin-top">
        <Link className={"navigation-link"} to="/Purchase">
          Purchase
        </Link>
        <Link className={"navigation-link"} to="/MyOrders">
          My Orders
        </Link>
        <Link className={"navigation-link"} to="/Sell">
          Sell
        </Link>
      </section>
    </div>
  );
};

export default Header;
