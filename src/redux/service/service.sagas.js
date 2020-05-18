import { takeLatest, all, call, put, select } from "redux-saga/effects";
// import { eventChannel } from "redux-saga";

import ServiceActionTypes from "./service.types";

import {
  createServiceDocument,
  firestore,
  servicesSnapshotToMap,
  getService,
} from "../../firebase/firebase.utils";

import { selectCurrentUser } from "../user/user.selectors";
import {
  createServiceSuccess,
  createServiceFailure,
  fetchServicesSuccess,
  fetchServicesFailure,
  fetchUserServicesSuccess,
  fetchUserServicesFailure,
  fetchServiceFailure,
  fetchServiceSucess,
} from "./service.actions";

// create service-----

export function* createService({ payload: newService }) {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const userId = yield currentUser.id;
      yield put(
        createServiceSuccess({
          newService,
          userId,
        })
      );
    } catch (error) {
      yield put(createServiceFailure(error));
    }
  }
}

export function* createServiceInFirebase({ payload: date }) {
  const { newService, userId } = date;
  try {
    yield createServiceDocument(newService, userId);
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

// fetch all services ---------

function* fetchServicesAsync() {
  try {
    const serviceRef = firestore.collection("services");
    const snapShot = yield serviceRef.orderBy("createdAt", "asc").get();
    const servicesMap = yield call(servicesSnapshotToMap, snapShot);
    yield put(fetchServicesSuccess(servicesMap));
  } catch (error) {
    yield put(fetchServicesFailure(error));
  }
}

export function* fetchServicesStart() {
  yield takeLatest(ServiceActionTypes.FETCH_SERVICES_START, fetchServicesAsync);
}

// user service -------

function* fetchUserServicesAsync() {
  try {
    const currentUser = yield select(selectCurrentUser);
    const { id } = currentUser;
    const serviceRef = firestore.collection("services");
    const snapShot = yield serviceRef.where("userId", "==", id).get();
    const userServicesMap = yield call(servicesSnapshotToMap, snapShot);
    yield put(fetchUserServicesSuccess(userServicesMap));
  } catch (error) {
    yield put(fetchUserServicesFailure(error));
  }
}

export function* fetchUserServicesStart() {
  yield takeLatest(
    ServiceActionTypes.FETCH_USER_SERVICES_START,
    fetchUserServicesAsync
  );
}

// fetch current service ---------

function* fetchServiceAsync({ payload: id }) {
  try {
    const serviceRef = firestore.collection("services").doc(id);
    const currentService = yield call(getService, serviceRef);
    yield put(fetchServiceSucess(currentService));
  } catch (error) {
    yield put(fetchServiceFailure(error));
  }
}

export function* fetchServiceStart() {
  yield takeLatest(ServiceActionTypes.FETCH_SERVICE_START, fetchServiceAsync);
}

export function* serviceSagas() {
  yield all([
    call(onCreateServiceStart),
    call(onCreateServiceSucess),
    call(fetchServicesStart),
    call(fetchUserServicesStart),
    call(fetchServiceStart),
  ]);
}
