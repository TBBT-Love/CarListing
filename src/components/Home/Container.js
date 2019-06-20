import { connect } from "react-redux";
import HomePage from "./HomePage";
import {
  loadAllCars,
  fetchCarColors,
  filterbyProperty
} from "actions/simpleActions";

const mapStateToProps = state => {
  console.log("was mapStateToProps called", state);

  return {
    cars: state.cars.cars,
    colors: state.cars.colors
    // filteredCarsbyColor: state.filteredCarsbyColor.cars
  };
};

const mapDispatchToProps = dispatch => ({
  loadAllCars: () => dispatch(loadAllCars()),
  fetchCarColors: () => dispatch(fetchCarColors()),
  filterbyProperty: (propertyName, propertyValue) =>
    dispatch(filterbyProperty(propertyName, propertyValue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
