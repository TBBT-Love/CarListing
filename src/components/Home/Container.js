import { connect } from 'react-redux';
import HomePage from './HomePage';
import { textAction, submitAction, vendorAction, createPost } from 'actions/simpleActions';


const mapStateToProps = state => {
    console.log("was mapStateToProps called", state);

    return {
        cars: state.cars.cars
    };
};


const mapDispatchToProps = dispatch => {
    console.log("was mapDispatchToProps called");

    return {
        onAddPost: post => {
            dispatch(createPost(post));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
