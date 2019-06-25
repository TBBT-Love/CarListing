import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { filters } from "components/styles/filters.scss";

export default class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
      options: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.options !== this.props.options && nextProps.options) {
      let options = [];

      if (nextProps.filterName === "Color") {
        nextProps.options &&
          nextProps.options.map((color, index) =>
            options.push({ label: color, value: color })
          );
      } else if (nextProps.filterName === "Manufacturer") {
        nextProps.options &&
          nextProps.options.map((manufacturer, index) =>
            options.push({ label: manufacturer.name, value: manufacturer.name })
          );
      }
      this.setState({
        options: options
      });
    }
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.filterbyProperty(
      this.props.filterName === "Color" ? "color" : "manufacturer",
      selectedOption.label
    );
  };

  render() {
    const { selectedOption } = this.state;

    // const colourStyles = {
    //   control: styles => ({
    //     ...styles,
    //     fontfamily: "Arial"
    //   }),
    //   option: styles => ({ ...styles, "font-family": "Arial" })

    //   // option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    //   //   const color = chroma(data.color);
    //   //   return {
    //   //     ...styles,
    //   //     backgroundColor: isDisabled ? "red" : blue,
    //   //     color: "#FFF",
    //   //     cursor: isDisabled ? "not-allowed" : "default"
    //   //   };
    //   // }
    // };

    return (
      <React.Fragment>
        <div className={{ filters }}>
          <div>
            <p className="Title"> {this.props.filterName} </p>
            <div className="filterDropdown">
              <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={this.state.options}
                placeholder={
                  this.props.filterName === "Color"
                    ? "All car colors"
                    : "All manufacturers"
                }
                // styles={colourStyles}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Filters.propTypes = {
  options: PropTypes.array.isRequired,
  filterName: PropTypes.string.isRequired,
  filterbyProperty: PropTypes.func.isRequired
};
