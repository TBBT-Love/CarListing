import React from "react";
import "components/styles/CarSpecifications.scss";

const CarSpecifications = props => {
  const _carDetailsClass = props.isCarDetails ? "car-title font-size-32 font-weigt-bold" : "font-size-18"
  const _carSectionClass = props.isCarDetails ? "car-details-text-section" : "car-tile-section"

  return (
    <section className={!props.isCarDetails ? 'view-details-section' : ""}  >
      <p className={_carDetailsClass}>
        {props.carEntry.manufacturerName} {props.carEntry.modelName}
      </p>
      <p className={_carSectionClass}>
        Stock # {props.carEntry.stockNumber} -{" "}
        {props.carEntry.mileage && props.carEntry.mileage.number}{" "}
        {props.carEntry.mileage && props.carEntry.mileage.unit} -{" "}
        {props.carEntry.fuelType} - {props.carEntry.color}
      </p>
    </section>
  );
};

export default CarSpecifications;
