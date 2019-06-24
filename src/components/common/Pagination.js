import PropTypes from "prop-types";
import { filters } from "components/styles/filters.scss";
import { pagination } from "components/styles/pagination.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1
    };
  }

  setPage(page) {
    this.setState(
      {
        currentPage: page
      },
      () => this.props.onPageChanged("page", this.state.currentPage, true)
    );
  }

  render() {
    return (
      <footer id="pagingLinks" className="pagingLinks">
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
      </footer>
    );
  }
}

Pagination.propTypes = {
  totalRecords: PropTypes.number,
  onPageChanged: PropTypes.func
};
