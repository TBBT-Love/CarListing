// export const simpleAction = () => dispatch => {
//     dispatch({
//      type: 'SIMPLE_ACTION',
//      payload: 'result_of_simple_action'
//     })
//    }

import { FORM_SUBMIT , FORM_TEXT, FETCH_CARS } from './actionTypes'

export const textAction = text => ({
    type: FORM_TEXT,
    text,
});



export const fetchData = () => ({
    type: FETCH_CARS,
});


export const submitAction = () => ({
    type: FORM_SUBMIT,
});




