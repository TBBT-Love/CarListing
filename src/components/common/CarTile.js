import React from "react";
import { Link } from "react-router-dom";
import FilterResultsStatus from "components/common/FilterResultsStatus";
import CarSpecifications from "components/common/CarSpecifications";
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
              <CarSpecifications carEntry={carEntry}
                viewCarDetails={props.viewCarDetails}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default CarTile;
