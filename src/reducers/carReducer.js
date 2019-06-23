import * as ActionTypes from "actions/actionTypes";

const initialState = {
  cars: [],
  colors: [],
  manufacturers: [],
  car: {}
};

export function cars(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOAD_ALL_CARS:
      return Object.assign({}, state, {
        cars: action.payload
      });
    case ActionTypes.FETCH_CAR_COLORS:
      return Object.assign({}, state, {
        colors: action.payload.colors
      });

    case ActionTypes.FILTER_CARS:
      return Object.assign({}, state, {
        cars: action.payload
      });

    case ActionTypes.FETCH_CAR_MANUFACTURERS:
      return Object.assign({}, state, {
        manufacturers: action.payload.manufacturers
      });
    case ActionTypes.FETCH_CAR_BY_STOCK_NUMBER:
      return Object.assign({}, state, {
        car: action.payload.car
      });

    default:
      return state;
  }
}
