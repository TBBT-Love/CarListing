import { connect } from "react-redux";
import CarDetails from "./CarDetails";
import { fetchCarbyStockNumber } from "actions/simpleActions";

const mapStateToProps = state => {
  return {
    car: state.cars.car
  };
};

export default connect(
  mapStateToProps,
  null
)(CarDetails);
