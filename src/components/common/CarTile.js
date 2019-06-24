import React from "react";
import { Link, MenuItem } from "react-router-dom";
import FilterResultsStatus from "components/common/FilterResultsStatus";
import SortCars from "components/common/SortCars";

const CarTile = props => {
  return (
    <section className="carTileSection">
      <section className="topCarTileSection">
        <FilterResultsStatus
          totalCarsCount={props.totalCarsCount}
          totalPageCount={props.totalPageCount}
        />
        <SortCars
          filterName="Sort By"
          filterbyProperty={props.filterbyProperty}
        />
      </section>

      <div id="CarTileSection">
        {props.carEntries &&
          props.carEntries.map((carEntry, index) => (
            <div className="wholeTileSection" key={index}>
              <div style={{ float: "left", margin: "12px 12px 0px 8px" }}>
                <img style={{ height: "80px" }} src={carEntry.pictureUrl} />
              </div>
              <section style={{ marginLeft: "125px" }}>
                <p className={"car-title"}>
                  {carEntry.manufacturerName} {carEntry.modelName}
                </p>
                <p>
                  Stock # {carEntry.stockNumber} - {carEntry.mileage.number}{" "}
                  {carEntry.mileage.unit} -  {carEntry.fuelType} -{" "}
                  {carEntry.color}
                </p>
                <Link
                  className="viewDetailsLink"
                  onClick={e => props.viewCarDetails(carEntry.stockNumber)}
                  to={"/Home/" + carEntry.stockNumber}
                  params={{ stockNumber: carEntry.stockNumber }}
                >
                  View Details
                </Link>
              </section>
            </div>
          ))}
      </div>
    </section>
  );
};

export default CarTile;
