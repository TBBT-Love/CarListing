import React from "react";
import { Link } from "react-router-dom";
import FilterResultsStatus from "components/common/FilterResultsStatus";

const CarSpecifications = props => {
  return (
    <section style={{ marginLeft: "125px" }}>
      <p className={"car-title"}>
        {props.carEntry.manufacturerName} {props.carEntry.modelName}
      </p>
      <p>
        Stock # {props.carEntry.stockNumber} - {props.carEntry.mileage.number}{" "}
        {props.carEntry.mileage.unit} -  {props.carEntry.fuelType} -{" "}
        {props.carEntry.color}
      </p>
      <Link
        className="viewDetailsLink"
        onClick={e => props.viewCarDetails(props.carEntry.stockNumber)}
        to={"/Home/" + props.carEntry.stockNumber}
        params={{ stockNumber: props.carEntry.stockNumber }}
      >
        View Details
                </Link>
    </section>
  )
};

export default CarSpecifications;
