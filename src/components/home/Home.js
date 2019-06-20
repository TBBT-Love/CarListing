import React from "react";
import PropTypes from "prop-types";
import Filters from "components/filters/Filters";
import CarTile from "components/common/CarTile";
import { filters } from "components/styles/filters.scss";

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
        nextProps.cars.map((carOptions, index) => carsOptions.push(carOptions));
      this.setState({
        cars: carsOptions
      });
    }
  }

  render() {
    return (
      <div>
        <div className={"filterSection"}>
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
          <button className="filterButton" onClick={this.onFilterClick}>
            Filter
          </button>
        </div>
        <div id="carTile">
          {this.state.cars &&
            this.state.cars.map((carEntry, index) => (
              <CarTile
                carEntry={carEntry}
                totalCarsCount={this.props.totalCarsCount}
                totalPageCount={this.props.totalPageCount}
              />
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
