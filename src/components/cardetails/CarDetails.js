import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { filters } from "components/styles/filters.scss";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

export default class CarDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      car: {},
      buttonText: "Save",
      isSaved: false
    };
  }

  createNotification = type => {
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info("Info message", "", 2000);
          break;
        case "success":
          NotificationManager.success("Success message", "", 2000);
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000
          );
          break;
        case "error":
          NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("callback");
          });
          break;
      }
    };
  };

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
    let isSaved = false;

    if (buttonText === "Save") {
      localStorage.setItem("FavoriteCar", JSON.stringify(this.state.car));
      newText = "Remove from favourites.";
      isSaved = true;
      NotificationManager.success(
        "This car has been saved to your Favourites collection.",
        "",
        2000
      );
    } else {
      localStorage.removeItem("FavoriteCar");
      newText = "Save";
      isSaved = false;
      NotificationManager.info(
        "This car has been removed from your Favourites collection.",
        "",
        2000
      );
    }
    this.setState({
      buttonText: newText
    });
  };

  render() {
    return (
      <section>
        <React.Fragment>
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
        </React.Fragment>
        <section>
          If you like this car, click the button and save it in your collection
          of favourite items.
          <button className="saveButton" onClick={e => this.onSaveClick(e)}>
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
