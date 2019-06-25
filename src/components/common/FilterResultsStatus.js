import React from "react";
const FilterResultsStatus = props => {
  return (
    <section id="FilterResultsStatus" className="display-inline-block">
      <p className="Title"> Available cars </p>
      Showing {props.totalPageCount} of {props.totalCarsCount} results
    </section>
  );
};

export default FilterResultsStatus;
