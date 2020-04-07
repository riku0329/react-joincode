import ServiceActionTypes from "./service.types";

import {
  firestore,
  servicesSnapshotToMap,
} from "../../firebase/firebase.utils";

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

export const fetchServicesStartAsync = () => {
  return (dispatch) => {
    const serviceRef = firestore.collection("services");
    dispatch(fetchServicesStart());

    serviceRef
      .onSnapshot(async (snapShot) => {
        const servicesMap = servicesSnapshotToMap(snapShot);
        dispatch(fetchServicesSuccess(servicesMap));
        console.log(servicesMap)
      })
      .catch((error) => dispatch(fetchServicesFailure(error.message)));
  };
};
