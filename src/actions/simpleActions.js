import * as ActionTypes from "./actionTypes";
import { userService } from "services/autoOneService";

export const loadAllCars = () => {
  return dispatch => {
    return userService
      .get("/cars")
      .then(response => {
        dispatch(loadAllCarsSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const fetchCarColors = () => {
  return dispatch => {
    return userService
      .get("/colors")
      .then(response => {
        dispatch(fetchCarColorsSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const fetchCarManufacturers = () => {
  return dispatch => {
    return userService
      .get("/manufacturers")
      .then(response => {
        dispatch(fetchCarManufacturesSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const fetchCarManufacturesSuccess = data => {
  return {
    type: ActionTypes.FETCH_CAR_MANUFACTURERS,
    payload: data
  };
};

export const filterbyProperty = filterCriteria => {
  return dispatch => {
    var apiEndpoint = "/cars?";
    Array.isArray(filterCriteria) &&
      filterCriteria.map(function(val, index) {
        apiEndpoint += val.propertyName + "=" + val.propertyValue + "&";
      });

    apiEndpoint =
      apiEndpoint[apiEndpoint.length - 1] == "&"
        ? apiEndpoint.slice(0, -1)
        : apiEndpoint;

    return userService
      .get(apiEndpoint)
      .then(response => {
        dispatch(filterbyPropertySuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const fetchCarbyStockNumber = stockNumber => {
  return dispatch => {
    let apiEndpoint = "/cars/" + stockNumber;
    return userService
      .get(apiEndpoint)
      .then(response => {
        dispatch(fetchCarbyStockNumberSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const fetchCarbyStockNumberSuccess = data => {
  return {
    type: ActionTypes.FETCH_CAR_BY_STOCK_NUMBER,
    payload: data
  };
};

export const filterbyPropertySuccess = data => {
  return {
    type: ActionTypes.FILTER_CARS,
    payload: data
  };
};

export const loadAllCarsSuccess = data => {
  return {
    type: ActionTypes.LOAD_ALL_CARS,
    payload: data
  };
};

export const fetchCarColorsSuccess = data => {
  return {
    type: ActionTypes.FETCH_CAR_COLORS,
    payload: data
  };
};
