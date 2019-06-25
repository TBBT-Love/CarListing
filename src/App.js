import React from "react";
import "./App.scss";
import Home from "components/home/Container";
import Layout from "components/common/Layout";
import ErrorPage from "components/common/ErrorPage";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import sell from "components/sell/sell";
import purchase from "components/purchase/purchase";
import myOrders from "components/myOrders/myOrders";
import CarDetails from "components/cardetails/Container";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Layout>
              <Switch>
                <Route exact path="/" component={withRouter(Home)} />
                <Route exact path="/Home" component={withRouter(Home)} />
                <Route
                  path="/Home/:stockNumber"
                  exact
                  component={CarDetails}
                />
                <Route exact path="/Purchase" component={purchase} />
                <Route exact path="/MyOrders" component={myOrders} />
                <Route exact path="/Sell" component={sell} />
                <Route component={ErrorPage} />
              </Switch>
            </Layout>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
