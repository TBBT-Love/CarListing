import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

export default class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
      options: []
      // options: [
      //     { value: 'chocolate', label: 'Chocolate' },
      //     { value: 'strawberry', label: 'Strawberry' },
      //     { value: 'vanilla', label: 'Vanilla' },
      // ]
    };
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    let options = [];
    if (nextProps.options !== this.props.options && nextProps.options) {
      {
        nextProps.options &&
          nextProps.options.map((color, index) =>
            options.push({ label: color, value: color })
          );
      }
    }
    this.setState({
      options: options
    });
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    this.props.filterbyProperty(
      this.props.filterName === "Color" ? "color" : "manufacturerName",
      selectedOption.label
    );
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <React.Fragment>
        {this.props.filterName}
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={this.state.options}
          placeholder={"All car colors"}
        />
      </React.Fragment>
    );
  }
}

Filters.propTypes = {
  options: PropTypes.array.isRequired,
  filterName: PropTypes.string.isRequired,
  filterbyProperty: PropTypes.func.isRequired
};
