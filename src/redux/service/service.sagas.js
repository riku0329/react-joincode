import { takeLatest, all, call, put, select } from "redux-saga/effects";

import ServiceActionTypes from "./service.types";

import { createServiceDocument } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../user/user.selectors";
import { createServiceSuccess, createServiceFailure } from "./service.actions";

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

export function* serviceSagas() {
  yield all([call(onCreateServiceStart), call(onCreateServiceSucess)]);
}
