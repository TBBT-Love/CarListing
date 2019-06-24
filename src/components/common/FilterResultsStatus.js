import React from "react";
const FilterResultsStatus = props => {
  return (
    <article id="FilterResultsStatus">
      <p className={"Title"}> Available cars </p>
      <br />
      Showing {props.totalPageCount} of {props.totalCarsCount} results
    </article>
  );
};

export default FilterResultsStatus;
