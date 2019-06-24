import { connect } from "react-redux";
import Home from "./Home";
import {
  loadAllCars,
  fetchCarColors,
  filterbyProperty,
  fetchCarManufacturers,
  fetchCarbyStockNumber
} from "actions/simpleActions";

const mapStateToProps = state => {
  return {
    cars: state.cars.cars,
    totalCarsCount: state.cars.cars.totalCarsCount,
    totalPageCount: state.cars.cars.totalPageCount,
    colors: state.cars.colors,
    manufacturers: state.cars.manufacturers,
    car: state.cars.car
  };
};

const mapDispatchToProps = dispatch => ({
  loadAllCars: () => dispatch(loadAllCars()),
  fetchCarColors: () => dispatch(fetchCarColors()),
  fetchCarManufacturers: () => dispatch(fetchCarManufacturers()),
  filterbyProperty: filterCriteria =>
    dispatch(filterbyProperty(filterCriteria)),
  fetchCarbyStockNumber: stockNumber =>
    dispatch(fetchCarbyStockNumber(stockNumber))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
