import React from 'react';
import './App.scss';
import HomePage from 'components/Home/Container';
import Layout from 'components/common/layout';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Router>
            <div>
              <Route path="/" component={HomePage} />
            </div>
          </Router>
        </Layout>
      </div>
    )
  };
}
export default connect()(App);