import ServiceActionTypes from "./service.types";

export const createServiceStart = (newService) => ({
  type: ServiceActionTypes.CREATE_SERVICE_START,
  payload: newService,
});

export const createServiceSuccess = (newService) => ({
  type: ServiceActionTypes.CREATE_SERVICE_SUCCESS,
  payload: newService,
});

export const createServiceFailure = (error) => ({
  type: ServiceActionTypes.CREATE_SERVICE_FAILURE,
  payload: error,
});

export const fetchServicesStart = () => ({
  type: ServiceActionTypes.FETCH_SERVICES_START,
});

export const fetchServicesSuccess = (servicesMap) => ({
  type: ServiceActionTypes.FETCH_SERVICES_SUCCESS,
  payload: servicesMap,
});

export const fetchServicesFailure = (error) => ({
  type: ServiceActionTypes.FETCH_SERVICES_FAILURE,
  payload: error,
});

export const fetchUserServicesStart = () => ({
  type: ServiceActionTypes.FETCH_USER_SERVICES_START,
});

export const fetchUserServicesSuccess = (servicesMap) => ({
  type: ServiceActionTypes.FETCH_USER_SERVICES_SUCCESS,
  payload: servicesMap,
});

export const fetchUserServicesFailure = (error) => ({
  type: ServiceActionTypes.FETCH_USER_SERVICES_FAILURE,
  payload: error,
});

export const fetchServiceStart = (id) => ({
  type: ServiceActionTypes.FETCH_SERVICE_START,
  payload: id,
});

export const fetchServiceSucess = (currentService) => ({
  type: ServiceActionTypes.FETCH_SERVICE_SUCCESS,
  payload: currentService,
});

export const fetchServiceFailure = (error) => ({
  type: ServiceActionTypes.FETCH_SERVICE_START,
  payload: error,
});
