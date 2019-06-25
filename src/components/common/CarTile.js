import React from "react";
import { Link } from "react-router-dom";
import FilterResultsStatus from "components/common/FilterResultsStatus";
import CarSpecifications from "components/common/CarSpecifications";
import SortCars from "components/common/SortCars";
import "components/styles/carTile.scss";

const CarTile = props => {
  return (
    <section className="carTileSection font-size-14">
      <section className="topCarTileSection font-size-14">
        <FilterResultsStatus
          totalCarsCount={props.totalCarsCount}
          totalPageCount={props.totalPageCount}
        />
        <SortCars
          filterName="Sort By"
          filterbyProperty={props.filterbyProperty}
        />
      </section>

      <div>
        {props.carEntries &&
          props.carEntries.map((carEntry, index) => (
            <div className="wholeTileSection common-border" key={index}>
              <div className="float-left margin-car-tile">
                <img
                  className="header-height"
                  alt="img-car"
                  src={carEntry.pictureUrl}
                />
              </div>
              <CarSpecifications
                carEntry={carEntry}
                className={"font-size-18 "}
              />
              <Link
                className="viewDetailsLink"
                onClick={e => props.viewCarDetails(carEntry.stockNumber)}
                to={"/Home/" + carEntry.stockNumber}
                params={{ stockNumber: carEntry.stockNumber }}
              >
                View Details
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
};

export default CarTile;
