import React from "react";
import logo from "components/assets/images/icon-car.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Header>
      <div className={header}>
        <img src={logo} className={"logo"} alt="Logo" />
        <section className='float-right margin-top'>
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
    </Header>
  );
};

export default Header;
