import ServiceActionTypes from "./service.types";

const INITIAL_STATE = {
  services: [],
  isFetching: false,
  errorMessage: null
};

const serviceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ServiceActionTypes.FETCH_SERVICES_START:
      return {
        ...state,
        isFetching: true
      }
    case ServiceActionTypes.FETCH_SERVICES_SUCCESS:
      return {
        ...state,
        services: action.payload,
        error: null,
        isFetching: false
      }
    case ServiceActionTypes.FETCH_SERVICES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetchung: false,
      }
    default:
      return state;
  }
};

export default serviceReducer;
