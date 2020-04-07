import ServiceActionTypes from "./service.types";

export const createServiceStart = (newService) => ({
  type: ServiceActionTypes.CREATE_SERVICE_START,
  payload: newService,
});

export const createServiceSuccess = (newService) => ({
  type: ServiceActionTypes.CREATE_SERVICE_SUCCESS,
  payload: newService
});

export const createServiceFailure = (error) => ({
  type: ServiceActionTypes.CREATE_SERVICE_FAILURE,
  payload: error,
});
