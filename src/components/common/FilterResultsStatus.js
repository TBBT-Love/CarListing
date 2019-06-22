import React from "react";
//import { navigation } from 'components/styles/navigation.scss'

const FilterResultsStatus = props => {

  return (
    <div id="FilterResultsStatus">
      <p className={"Title"}> Available cars </p>
      <br />
      Showing {props.totalPageCount} of {props.totalCarsCount} results
    </div>
  );
};

export default FilterResultsStatus;
