import React from "react";
import PropTypes from "prop-types";
import Filters from "components/filters/Filters";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
      selectedFilterValue: "",
      // selectedManufacturer: "",
      selectedFilter: "",
      availableFilters: [
        { filterName: "color", filterValue: "color" },
        { filterName: "manufacturer", filterValue: "manufacturerName" }
      ]
    };
  }

  componentDidMount() {
    this.props.loadAllCars();
    this.props.fetchCarColors();
    this.props.fetchCarManufacturers();
  }

  onFilterChanged = (propertyName, propertyValue) => {
    console.log("on filter Changes", propertyName, propertyValue);

    this.setState({
      selectedFilterValue: propertyValue,
      selectedFilter: propertyName
    });
  };

  onFilterClick = () => {
    this.props.filterbyProperty(
      this.state.selectedFilter,
      this.state.selectedFilterValue
    );
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.cars !== this.props.cars && nextProps.cars) {
      let carsOptions = [];
      nextProps.cars &&
        nextProps.cars.map((carOptions, index) =>
          //  let jasper = Object.assign({}, carOptions);  // creating copy of state variable jasper
          carsOptions.push(carOptions)
        );

      console.log("caroptions", carsOptions);

      this.setState({
        cars: carsOptions
      });
      // "stockNumber": 17735,
      // "manufacturerName": "BMW",
      // "modelName": "Z3",
      // "color": "red",
      // "mileage": {
      //   "number": 140520,
      //   "unit": "km"
      // },
      // "fuelType": "Diesel",
      // "pictureUrl": "http://localhost:3001/car.svg"
    }
  }


  render() {
    console.log("props", this.props);

    return (
      <div>
        {this.state.cars &&
          this.state.cars.map((user, index) => (
            <li id={index} key={index}>
              {user.stockNumber} {user.color}
            </li>
          ))}
        {/* 
        {this.state.availableFilters.map((filter, index) => (
          <Filters
            filterName={"Color"}
            options={this.props.colors}
            filterbyProperty={this.onFilterChanged}
          />
        ))} */}

        <Filters
          filterName={"Color"}
          options={this.props.colors}
          filterbyProperty={this.onFilterChanged}
        />

        <Filters
          filterName={"Manufacturer"}
          options={this.props.manufacturers}
          filterbyProperty={this.onFilterChanged}
        />

        <button onClick={this.onFilterClick}>Filter</button>
      </div>
    );
  }
}

HomePage.propTypes = {
  loadAllCars: PropTypes.func.isRequired,
  fetchCarColors: PropTypes.func.isRequired,
  filterbyProperty: PropTypes.func.isRequired
};
