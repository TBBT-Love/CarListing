import { connect } from "react-redux";
import HomePage from "./Home";
import {
  loadAllCars,
  fetchCarColors,
  filterbyProperty,
  fetchCarManufacturers
} from "actions/simpleActions";

const mapStateToProps = state => {
  console.log("mapStateToProps called", state);

  return {
    cars: state.cars.cars,
    totalCarsCount: state.cars.cars.totalCarsCount,
    totalPageCount: state.cars.cars.totalPageCount,
    colors: state.cars.colors,
    manufacturers: state.cars.manufacturers
    // filteredCarsbyColor: state.filteredCarsbyColor.cars
  };
};

const mapDispatchToProps = dispatch => ({
  loadAllCars: () => dispatch(loadAllCars()),
  fetchCarColors: () => dispatch(fetchCarColors()),
  fetchCarManufacturers: () => dispatch(fetchCarManufacturers()),
  filterbyProperty: (propertyName, propertyValue) =>
    dispatch(filterbyProperty(propertyName, propertyValue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
