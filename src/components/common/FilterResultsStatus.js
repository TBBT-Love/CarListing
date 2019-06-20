import React from "react";
//import { navigation } from 'components/styles/navigation.scss'

const FilterResultsStatus = ({ props }) => (
  <div id="FilterResultsStatus">
    Available cars Showing 10 of {props.totalCarsCount.totalCarsCount} results
  </div>
);

export default FilterResultsStatus;
