import { connect } from "react-redux";
import Home from "./Home";
import {
  loadAllCars,
  fetchCarColors,
  filterbyProperty,
  fetchCarManufacturers,
  onPageChanged
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
    dispatch(filterbyProperty(propertyName, propertyValue)),
  onPageChanged: pageNumber => dispatch(onPageChanged(pageNumber))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
