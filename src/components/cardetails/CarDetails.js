import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { saveButton } from "components/styles/carDetails.scss";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

export default class CarDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      car: {},
      buttonText: "Save in favourites"
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.car !== this.props.car && nextProps.car) {
      this.setState({
        car: nextProps.car
      });
    }
  }

  onSaveClick = e => {
    let buttonText = e.currentTarget.innerText;
    let newText = "";

    if (buttonText === "Save in favourites") {
      localStorage.setItem("FavoriteCar", JSON.stringify(this.state.car));
      newText = "Remove from favourites";
      NotificationManager.success(
        "This car has been saved to your Favourites collection.",
        "",
        1000
      );
    } else {
      localStorage.removeItem("FavoriteCar");
      newText = "Save in favourites";
      NotificationManager.info(
        "This car has been removed from your Favourites collection.",
        "",
        1000
      );
    }
    this.setState({
      buttonText: newText
    });
  };

  render() {
    return (
      <section className="display-inline main-section-height">
        <section className="display-inline-block details-section-height">
          <h1>
            {this.state.car.manufacturerName} {this.state.car.modelName}
          </h1>
          <h4>
            Stock # {this.state.car.stockNumber} -
            {this.state.car.mileage && this.state.car.mileage.number}{" "}
            {this.state.car.mileage && this.state.car.mileage.unit} -
            {this.state.car.fuelType} - {this.state.car.color}
          </h4>
          <article>
            This car is currently available and can be delivered as soon as
            tomorrow morning. Please be aware that delivery times shown in this
            page are not definitive and may change due to bad weather
            conditions.
          </article>
        </section>
        <section className="common-border display-inline-block save-section-height">
          If you like this car, click the button and save it in your collection
          of favourite items.
          <button className="button saveButton" onClick={e => this.onSaveClick(e)}>
            {this.state.buttonText}
          </button>
        </section>
        <NotificationContainer />
      </section>
    );
  }
}

CarDetails.propTypes = {
  car: PropTypes.object
};
