import { connect } from "react-redux";
import CarDetails from "./CarDetails";

const mapStateToProps = state => {
  return {
    car: state.cars.car
  };
};

export default connect(
  mapStateToProps,
  null
)(CarDetails);
