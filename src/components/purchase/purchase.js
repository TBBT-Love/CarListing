import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { textAction, submitAction } from 'actions/simpleActions';
import axios from 'axios'

class purchase extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <hr className={'border-inline-end-color'} />
                Purchase
            </div >);
    }
}

export default purchase;
