import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { textAction, submitAction } from 'actions/simpleActions';


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

    render() {
        return (
            <div>
                I am main content.
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
