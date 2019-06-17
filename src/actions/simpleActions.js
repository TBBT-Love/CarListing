// export const simpleAction = () => dispatch => {
//     dispatch({
//      type: 'SIMPLE_ACTION',
//      payload: 'result_of_simple_action'
//     })
//    }

import { FORM_SUBMIT , FORM_TEXT } from './actionTypes'

export const textAction = text => ({
    type: FORM_TEXT,
    text,
});


export const submitAction = () => ({
    type: FORM_SUBMIT,
});




