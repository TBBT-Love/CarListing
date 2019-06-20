import * as ActionTypes from "actions/actionTypes";

const initialState = {
  cars: [],
  colors: [],
  manufacturers: []
  // filteredCarsbyColor: []
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

    case ActionTypes.FILTER_CAR_BY_COLORS:
      return Object.assign({}, state, {
        cars: action.payload.cars
      });

    case ActionTypes.FETCH_CAR_MANUFACTURERS:
      return Object.assign({}, state, {
        manufacturers: action.payload.manufacturers
      });

    default:
      return state;
  }
}
