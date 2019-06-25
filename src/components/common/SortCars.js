import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { filters } from "components/styles/sortCars.scss";

export default class SortCars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { label: "None", value: "None" },
        { label: "Mileage - Ascending", value: "asc" },
        { label: "Mileage - Descending", value: "des" }
      ]
    };
  }

  handleChange = selectedOption => {
    this.props.filterbyProperty("sort", selectedOption.value, true);
  };

  render() {
    const customStyles = {
      control: styles => ({ ...styles }),
      option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
          ...styles,
          backgroundColor: isFocused ? "#EA7F28" : "",
          color: "#4A4A4A"
        };
      }
    };

    return (
      <section className="display-inline-block">
        <p className="filterlabel"> {this.props.filterName} </p>
        <div className="ddnSortBy">
          <Select
            onChange={this.handleChange}
            options={this.state.options}
            placeholder={"None"}
            styles={customStyles}
          />
        </div>
      </section>
    );
  }
}

SortCars.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterbyProperty: PropTypes.func.isRequired
};
