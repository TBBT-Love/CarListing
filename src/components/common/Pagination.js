import PropTypes from "prop-types";
import { filters } from "components/styles/filters.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      initialPage: 1
    };
  }

  setPage(page) {
    console.log("Page number ", page);
    this.setState(
      {
        currentPage: page
      },
      () => this.props.onPageChanged(this.state.currentPage)
    );
  }

  render() {
    return (
      <React.Fragment>
        <Link className="pagingLink" onClick={() => this.setPage(1)}>
          First
        </Link>
        <Link
          className="pagingLink"
          onClick={() => this.setPage(this.state.currentPage - 1)}
        >
          Previous
        </Link>
        Page {this.state.currentPage} of {this.props.totalRecords}
        <Link
          className="pagingLink"
          onClick={() => this.setPage(this.state.currentPage + 1)}
        >
          Next
        </Link>
        <Link
          className="pagingLink"
          onClick={() => this.setPage(this.props.totalRecords)}
        >
          Last
        </Link>
      </React.Fragment>
    );
  }
}

Pagination.propTypes = {
  totalRecords: PropTypes.number,
  // pageLimit: PropTypes.number,
  // initialPage: PropTypes.number,
  // currentPage: PropTypes.number,
  onPageChanged: PropTypes.func
};

Pagination.defaultProps = {
  initialPage: 1
  // pageSize: 10
};
