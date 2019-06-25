import React from "react";
import PropTypes from "prop-types";
import "components/styles/carDetails.scss";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

import CarSpecifications from "components/common/CarSpecifications";

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
      <div className="display-inline main-section-height content">
        <section className="display-inline-block car-details-section">
          <CarSpecifications
            carEntry={this.state.car}
            className={"car-title font-size-32 font-weigt-bold"}
          />
          <section>
            This car is currently available and can be delivered as soon as
            tomorrow morning. Please be aware that delivery times shown in this
            page are not definitive and may change due to bad weather
            conditions.
          </section>
        </section>
        <section className="common-border display-inline-block save-section">
          <article>
            If you like this car, click the button and save it in your
            collection of favourite items.
          </article>
          <button
            className="button saveButton"
            onClick={e => this.onSaveClick(e)}
          >
            {this.state.buttonText}
          </button>
        </section>
        <NotificationContainer />
      </div>
    );
  }
}

CarDetails.propTypes = {
  car: PropTypes.object
};
