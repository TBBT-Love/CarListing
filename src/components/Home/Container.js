import { connect } from 'react-redux';
import HomePage from './HomePage';
import { textAction, submitAction } from 'actions/simpleActions';


const mapStateToProps = state => state.form;
const mapDispatchToProps = { textAction, submitAction };




const mapDispatchToProps = (dispatch) => {
    return {
        textAction: text =>
            dispatch({
                type: 'FORM_TEXT',
                text
            })
    }
};



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
