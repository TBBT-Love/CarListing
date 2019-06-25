import React from "react";
import errorPage from "components/styles/errorPage.scss";
import { Link } from "react-router-dom";

export default class ErrorPage extends React.Component {
  render() {
    return (
      <div id="ErrorPage" className="ErrorPage content">
        <p className={"errorTitle"}> 404 - Not Found </p>
        Sorry, the page you are looking for does not exist.
        <br />
        You can always go back to the
        <Link className="viewDetailsLink" to="/Home">
          homepage.
        </Link>
      </div>
    );
  }
}
