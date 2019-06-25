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
        <a className="pagingLink" onClick={() => this.setPage(1)}>
          First
        </a>
        <a
          className="pagingLink"
          onClick={() => this.setPage(this.state.currentPage - 1)}
        >
          Previous
        </a>
        Page {this.state.currentPage} of {this.props.totalRecords}
        <a
          className="pagingLink"
          onClick={() => this.setPage(this.state.currentPage + 1)}
        >
          Next
        </a>
        <a
          className="pagingLink"
          onClick={() => this.setPage(this.props.totalRecords)}
        >
          Last
        </a>
      </footer>
    );
  }
}

Pagination.propTypes = {
  totalRecords: PropTypes.number,
  onPageChanged: PropTypes.func
};
