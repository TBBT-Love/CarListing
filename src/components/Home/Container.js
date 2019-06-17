import { connect } from 'react-redux';
import HomePage from './HomePage';
import * as simpleActions from '/actions/simpleActions.js';


function mapStateToProps(state) {
    return {
        // fundComparisonPdf: state.fundComparisonReducer.fundComparisonPdf
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clickSimpleAction: () => {
            return dispatch(simpleActions.simpleAction());
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
