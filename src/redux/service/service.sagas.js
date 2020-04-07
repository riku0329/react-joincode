import { takeLatest, all, call, put, select } from "redux-saga/effects";
import { eventChannel } from "redux-saga";

import ServiceActionTypes from "./service.types";

import {
  createServiceDocument,
  firestore,
  servicesSnapshotToMap,
} from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../user/user.selectors";
import {
  createServiceSuccess,
  createServiceFailure,
  fetchServicesSuccess,
  fetchServicesFailure,
} from "./service.actions";

// create service-----

export function* createService({ payload: newService }) {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      yield put(
        createServiceSuccess({
          newService,
          currentUser,
        })
      );
    } catch (error) {
      yield put(createServiceFailure(error));
    }
  }
}

export function* createServiceInFirebase({ payload: date }) {
  const { newService, currentUser } = date;
  try {
    yield createServiceDocument(newService, currentUser);
  } catch (error) {
    console.log("error", error.message);
  }
}

export function* onCreateServiceSucess() {
  yield takeLatest(
    ServiceActionTypes.CREATE_SERVICE_SUCCESS,
    createServiceInFirebase
  );
}

export function* onCreateServiceStart() {
  yield takeLatest(ServiceActionTypes.CREATE_SERVICE_START, createService);
}

// fetch service ---------

export function* fetchServiceAsync() {
  try {
    const serviceRef = firestore.collection("services");
    const snapShot = yield serviceRef.get();
    const servicesMap = yield call(servicesSnapshotToMap, snapShot);
    yield put(fetchServicesSuccess(servicesMap));
  } catch (error) {
    yield put(fetchServicesFailure(error));
  }
}

export function* fetchServicesStart() {
  yield takeLatest(ServiceActionTypes.FETCH_SERVICES_START, fetchServiceAsync);
}

export function* serviceSagas() {
  yield all([
    call(onCreateServiceStart),
    call(onCreateServiceSucess),
    call(fetchServicesStart),
  ]);
}
