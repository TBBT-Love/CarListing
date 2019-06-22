import React from "react";
//import { navigation } from 'components/styles/navigation.scss'
import { Link, MenuItem } from "react-router-dom";
import FilterResultsStatus from "components/common/FilterResultsStatus";
import SortCars from "components/common/SortCars";

const CarTile = props => {
  console.log("props", props);
  return (
    <div className="carTileSection">
      <div className="topCarTileSection">
        <FilterResultsStatus totalCarsCount={props.totalCarsCount} 
        totalPageCount={props.totalPageCount} 
        />
        <SortCars
          filterName="Sort By"
          filterbyProperty={props.filterbyProperty}
        />
      </div>

      <div id="wholeTileSection">
        {props.carEntries &&
          props.carEntries.map((carEntry, index) => (
            <div className="wholeTileSection" key={index}>
              <div style={{ float: "left", margin: "12px 12px 0px 8px" }}>
                <img style={{ height: "80px" }} src={carEntry.pictureUrl} />
              </div>
              {/* <div style={{ float: "right" }}> */}
              <section style={{ marginLeft: "125px" }}>
                {/* <div style={{ float: "right" }}> */}

                <p className={"car-title"}>
                  {carEntry.manufacturerName} {carEntry.modelName}
                </p>
                <p>
                  Stock # {carEntry.stockNumber} -{carEntry.mileage.number}{" "}
                  {carEntry.mileage.unit} -{carEntry.fuelType} -{" "}
                  {carEntry.color}
                </p>
                <Link className="viewDetailsLink">View Details</Link>
              </section>
            </div>
          ))}
      </div>
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
