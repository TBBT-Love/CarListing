import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { textAction, submitAction } from 'actions/simpleActions';
import axios from 'axios'

class myOrders extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <hr className={'border-inline-end-color'} />
                My Orders
            </div >);
    }
}

export default myOrders;
