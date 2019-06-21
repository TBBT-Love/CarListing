import React from "react";
//import { navigation } from 'components/styles/navigation.scss'

const FilterResultsStatus = props => {
  console.log("props FilterResultsStatus", props);

  return (
    <div id="FilterResultsStatus">
      <p className={"Title"}> Available cars </p>
      <br />
      Showing 10 of {props.totalCarsCount} results
    </div>
  );
};

export default FilterResultsStatus;
