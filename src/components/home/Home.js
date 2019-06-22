import React from "react";
import PropTypes from "prop-types";
import Filters from "components/filters/Filters";
import CarTile from "components/common/CarTile";
import { filters } from "components/styles/filters.scss";
import Pagination from "components/common/Pagination";
import ErrorPage from "components/common/ErrorPage";

export default class Home extends React.Component {
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
    if (nextProps.cars.cars !== this.props.cars && nextProps.cars.cars) {
      let carsOptions = [];
      nextProps.cars &&
        nextProps.cars.cars.map((carOptions, index) =>
          carsOptions.push(carOptions)
        );
      this.setState({
        cars: carsOptions
      });
    }
  }

  render() {
    const shouldShowCarList = this.state.cars && this.state.cars.length > 0;

    return shouldShowCarList ? (
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
          <CarTile
            carEntries={this.state.cars}
            totalCarsCount={this.props.totalCarsCount}
            totalPageCount={this.props.totalPageCount}
            filterbyProperty={this.props.filterbyProperty}
          />
        </div>
        <Pagination
          totalRecords={this.props.totalPageCount}
          // pageLimit={10}
          // initialPage={1}
          // currentPage={1}
          onPageChanged={this.props.onPageChanged}
        />
      </div>
    ) : (
      <ErrorPage />
    );
  }
}

Home.propTypes = {
  loadAllCars: PropTypes.func.isRequired,
  fetchCarColors: PropTypes.func.isRequired,
  filterbyProperty: PropTypes.func.isRequired,
  onPageChanged: PropTypes.func.isRequired
};
