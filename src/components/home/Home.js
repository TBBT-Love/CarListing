import React from "react";
import PropTypes from "prop-types";
import Filters from "components/filters/Filters";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
      selectedFilterValue: "",
      selectedFilter: "",
      availableFilters: [
        { filterName: "color", filterValue: "color" },
        { filterName: "manufacturer", filterValue: "manufacturer" }
      ]
    };
  }

  componentDidMount() {
    this.props.loadAllCars();
    this.props.fetchCarColors();
    this.props.fetchCarManufacturers();
  }

  onFilterChanged = (propertyName, propertyValue) => {
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

    return (
      <div>

        <div style={{
          'display': 'inline-block', 'border': '1px solid black',
          'width': '30%', 'margin-top': 'auto',
          'margin-bottom': 'auto',
          'text-align': 'left'
        }}>
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
          <button style={{
            'align-items': 'center',
            'justify-content': 'center'
          }} onClick={this.onFilterClick}>Filter</button>

        </div>
        <div style={{ 'display': 'inline-block' }}>
          {this.state.cars &&
            this.state.cars.map((user, index) => (
              <li id={index} key={index}>
                {user.stockNumber} {user.color}
              </li>
            ))}

        </div>


      </div>
    );
  }
}

HomePage.propTypes = {
  loadAllCars: PropTypes.func.isRequired,
  fetchCarColors: PropTypes.func.isRequired,
  filterbyProperty: PropTypes.func.isRequired
};
