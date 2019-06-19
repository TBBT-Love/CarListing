import * as  ActionTypes from 'actions/actionTypes';

const initialState = {
  cars: []
};

export function cars(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_POST:

      return Object.assign({}, state, {
        cars: action.payload.cars
      })

    default:
      return state;
  }
};  