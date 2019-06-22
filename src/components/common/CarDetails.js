import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { filters } from "components/styles/filters.scss";

export default class CarDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
      options: [
        { label: "None", value: "None" },
        { label: "Mileage - Ascending", value: "asc" },
        { label: "Mileage - Descending", value: "des" }
      ]
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption }, () =>
      this.props.filterbyProperty("sort", selectedOption.value)
    );
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;

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
      <React.Fragment>
        <div className={{ filters }}>
          <div>
            <p className={"filterlabel"}> {this.props.filterName} </p>
            <div className={"filterDropdown"}>
              <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={this.state.options}
                placeholder={"None"}
                styles={customStyles}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

CarDetails.propTypes = {
  options: PropTypes.array.isRequired,
  filterName: PropTypes.string.isRequired,
  filterbyProperty: PropTypes.func.isRequired
};
