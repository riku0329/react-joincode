import ServiceActionTypes from "./service.types";

const INITIAL_STATE = {
  services: [],
  userServices: [],
  currentService: [],
  isFetching: false,
  errorMessage: null,
};

const serviceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ServiceActionTypes.FETCH_SERVICE_START:
    case ServiceActionTypes.FETCH_USER_SERVICES_START:
    case ServiceActionTypes.FETCH_SERVICES_START:
      return {
        ...state,
        isFetching: true,
      };
    case ServiceActionTypes.FETCH_SERVICE_FAILURE:
    case ServiceActionTypes.FETCH_USER_SERVICES_FAILURE:
    case ServiceActionTypes.FETCH_SERVICES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case ServiceActionTypes.FETCH_SERVICES_SUCCESS:
      return {
        ...state,
        services: action.payload,
        error: null,
        isFetching: false,
      };
    case ServiceActionTypes.FETCH_USER_SERVICES_SUCCESS:
      return {
        ...state,
        userServices: action.payload,
        error: null,
        isFetching: false,
      };
    case ServiceActionTypes.FETCH_SERVICE_SUCCESS:
      return {
        ...state,
        currentService: action.payload,
        error: null,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default serviceReducer;
