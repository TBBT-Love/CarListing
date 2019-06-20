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
        { filterName: "Color", filterValue: "color" },
        { filterName: "Manufacturer", filterValue: "manufacturerName" }
      ]
    };
  }

  componentDidMount() {
    this.props.loadAllCars();
    this.props.fetchCarColors();
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

  //  // Don't forget to return the array that .map creates!
  //  const displayTurtles = turtles.map((turtle, index) =>
  //  <div key={turtle.name + index}>
  //      <h1>{turtle.name} ({turtle.nickName})</h1>
  //      <p>Weapon of choice: {turtle.weapon}</p>
  //      <img src={turtle.imgUrl} alt={`${turtle.name}`} width="200"/>
  //      <hr/>
  //  </div>

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
