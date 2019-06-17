import { FORM_SUBMIT, FORM_TEXT } from 'actions/actionTypes';


const defaultState = {
  text: '',
};


export default (state = defaultState, action) => {
  switch (action.type) {
    case FORM_TEXT:
      {

        console.log(action.type);
        console.log("I was here once")

        return {
          state, action
        }

      }


    default:
      return state;
  }
};