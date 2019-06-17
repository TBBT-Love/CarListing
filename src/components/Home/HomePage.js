import React from 'react';
import ReactDOM from 'react-dom';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
    }

    simpleAction = () => {
        this.props.simpleAction();
    }
    render() {
        return (
            <div>
                I am main content.
           < button onClick={this.simpleAction} > Test redux action</button >
            </div >);
    }
}

export default HomePage;