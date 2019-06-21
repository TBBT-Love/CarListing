import React from "react";
//import { navigation } from 'components/styles/navigation.scss'
import { Link, MenuItem } from "react-router-dom";
import FilterResultsStatus from "components/common/FilterResultsStatus";
import SortCars from "components/common/SortCars";

const CarTile = props => {
  console.log("props", props);
  return (
    <div className="carTileSection">
      <FilterResultsStatus totalCarsCount={props.totalCarsCount} />
      <SortCars />

      {props.carEntries &&
        props.carEntries.map((carEntry, index) => (
          <React.Fragment key={carEntry.stockNumber}>
            <p className={"car-title"}>
              {carEntry.manufacturerName} {carEntry.modelName}
            </p>
            <p>
              Stock # {carEntry.stockNumber} -{carEntry.mileage.number}{" "}
              {carEntry.mileage.unit} -{carEntry.fuelType} - {carEntry.color}
            </p>
            <a
              href="http://facebook.github.io/react"
              className="viewDetailsLink"
            >
              View Details
            </a>
          </React.Fragment>
        ))}
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
