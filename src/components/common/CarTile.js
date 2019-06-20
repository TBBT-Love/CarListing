import React from "react";
//import { navigation } from 'components/styles/navigation.scss'
import { Link, MenuItem } from "react-router-dom";
import FilterResultsStatus from "components/common/FilterResultsStatus";

const CarTile = props => {
  console.log("props", props);
  return (
    <div className="carTileSection">
      <FilterResultsStatus />
      <React.Fragment key={props.carEntry.stockNumber}>
        <p className={"car-title"}>
          {" "}
          {props.carEntry.manufacturerName} {props.carEntry.modelName}{" "}
        </p>
        <p>
          {" "}
          Stock # {props.carEntry.stockNumber} - {props.carEntry.mileage.number}{" "}
          {props.carEntry.mileage.unit} - {props.carEntry.fuelType} -{" "}
          {props.carEntry.color}
        </p>
        <a href="http://facebook.github.io/react" className="viewDetailsLink">
          View Details
        </a>
      </React.Fragment>
    </div>
  );
};

// html`<b>${username} says</b>: "${tag}"`
// "stockNumber": 17735,
// "manufacturerName": "BMW",
// "modelName": "Z3",
// "color": "red",
// "mileage": {
//   "number": 140520,
//   "unit": "km"
// },
// "fuelType": "Diesel",
// "pictureUrl": "http://localhost:3001/car.svg"

export default CarTile;
