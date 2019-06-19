import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';




// const mapDispatchToProps = (dispatch) => {
//     return {
//         textAction: () =>
//             dispatch(
//                 //   textAction(),
//                 createPost()
//             ),

//     };
// };


export default class HomePage extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     cars: [],
        //     store: []

        // }
    }


    componentDidUpdate(prevProps, prevState) {

        console.log("was componentDidUpdate called");

        if (prevProps.someValue !== this.props.someValue) {
            //Perform some operation here
            //   this.setState({someState: someValue});
            //   this.classMethod();
        }
    }

    componentDidMount() {
        console.log("was componentDidMount called");

        const { dispatch } = this.props;
        //dispatch(vendorAction());
        this.props.onAddPost();
        // axios.get('http://localhost:3001/cars')
        //     .then(res => {
        //         this.setState((state, props) => {
        //             return { cars: res.data.cars };
        //         });
        //     })
        //     .then(json => console.log("CARS ", this.state.cars))
    }

    componentWillReceiveProps(nextProps) {
        console.log("was componentWillReceiveProps called");
        if (nextProps.hidden !== this.props.hidden) {
            //  IntercomAPI("update", { hide_default_launcher: nextProps.hidden });
        }
    }


    onTextAction = () => {
        this.props.onAddPost();
    }


    render() {
        console.log("props", this.props);
        return (
            <div>
                {this.props.cars && this.props.cars.map((user, index) => <li id={
                    index
                } key={user.modelName}>{user.stockNumber}</li>)}



                < button onClick={this.onTextAction} > Test redux action</button >
            </div >);
    }
}

HomePage.propTypes = {
    onAddPost: PropTypes.func.isRequired
}

//export default HomePage;