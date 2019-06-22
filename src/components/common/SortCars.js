import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { filters } from "components/styles/filters.scss";

export default class SortCars extends React.Component {
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

  componentWillReceiveProps(nextProps) {
    // if (nextProps.options !== this.props.options && nextProps.options) {
    //   let options = [];
    //   if (nextProps.filterName === "Color") {
    //     nextProps.options &&
    //       nextProps.options.map((color, index) =>
    //         options.push({ label: color, value: color })
    //       );
    //   } else if (nextProps.filterName === "Manufacturer") {
    //     nextProps.options &&
    //       nextProps.options.map((manufacturer, index) =>
    //         options.push({ label: manufacturer.name, value: manufacturer.name })
    //       );
    //   }
    //   this.setState({
    //     options: options
    //   });
    // }
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption }, () =>
      this.props.filterbyProperty("sort", selectedOption.value, true)
    );
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

SortCars.propTypes = {
  options: PropTypes.array.isRequired,
  filterName: PropTypes.string.isRequired,
  filterbyProperty: PropTypes.func.isRequired
};
