import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { textAction, submitAction } from 'actions/simpleActions';
import axios from 'axios'

const mapStateToProps = state => {
    return {
        form: state.form
    };
};


const mapDispatchToProps = (dispatch) => ({
    textAction: () =>
        dispatch(
            textAction()
        )
})

class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cars: [],
            store: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/cars')
            .then(json => console.log(json))
            .then(json => json.data.cars.map(result => (
                {
                    modelName: result.modelName,
                    stockNumber: result.stockNumber
                })))
            .then(newData => this.setState({ cars: newData.data.cars, store: newData.data }))
            .catch(error => alert(error))
    }

    render() {
        return (
            <div>
                I am main content.

                {this.state.cars.map(user => <li key={user.modelName}>{user.stockNumber}</li>)}

                < button onClick={this.props.textAction} > Test redux action</button >
            </div >);
    }
}

HomePage.propTypes = {
    textAction: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
