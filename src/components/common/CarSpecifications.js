import React from "react";
import "components/styles/CarSpecifications.scss";

const CarSpecifications = props => {
  return (
    <section>
      <p className={props.className}>
        {props.carEntry.manufacturerName} {props.carEntry.modelName}
      </p>
      <p className="car-section">
        Stock # {props.carEntry.stockNumber} -{" "}
        {props.carEntry.mileage && props.carEntry.mileage.number}{" "}
        {props.carEntry.mileage && props.carEntry.mileage.unit} -{" "}
        {props.carEntry.fuelType} - {props.carEntry.color}
      </p>
    </section>
  );
};

export default CarSpecifications;
