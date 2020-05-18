import { takeLatest, all, call, put, select } from "redux-saga/effects";

import OfferActionTypes from "./offer.types";
import {
  createOfferDocument,
  fetchReceivedOffers,
  fetchSendOffers,
  createRef,
  firestore
} from "../../firebase/firebase.utils";
import {
  createOfferFailure,
  createOfferSuccess,
  fetchSendOffersFailure,
  fetchSendOffersSuccess,
  fetchReceivedOffersFailure,
  fetchReceivedOffersSuccess,
} from "./offer.acions";


import { selectCurrentUser } from "../user/user.selectors";

export function* createOffer({ payload: offer }) {
  try {
    yield put(createOfferSuccess(offer));
  } catch (error) {
    yield put(createOfferFailure(error));
  }
}

export function* createOfferInFairebase({ payload: offer }) {
  try {
    yield createOfferDocument(offer);
  } catch (error) {
    console.log("error", error.message);
  }
}

export function* onCreateOfferSuccess() {
  yield takeLatest(
    OfferActionTypes.CREATE_OFFER_SUCCESS,
    createOfferInFairebase
  );
}

export function* onCreateOfferStart() {
  yield takeLatest(OfferActionTypes.CREATE_OFFER_START, createOffer);
}

function* fetchSendOffersAsync() {
  try {
    const currenUser = yield select(selectCurrentUser);
    const { id } = currenUser;
    // const userRef = yield createRef("users", id);
    // const send = yield firestore.collection("offers")
    //   .where("fromUser", "==", userRef)
    //   .get()
    // const snapShot = yield send.docs.map((doc) => ({
    //   id: doc.id,
    //   ...doc.data()
    // }))
    const snapShot = yield call(fetchSendOffers, id);
    yield put(fetchSendOffersSuccess(snapShot));
  } catch (error) {
    yield put(fetchSendOffersFailure(error));
  }
}

export function* fetchSendOffersStart() {
  yield takeLatest(
    OfferActionTypes.FETCH_SEND_OFFERS_START,
    fetchSendOffersAsync
  );
}

function* fetchReceiveOffersAsync() {
  const currenUser = yield select(selectCurrentUser);
  const { id } = currenUser;
  try {
    const receivedOffers = yield call(fetchReceivedOffers, id);
    yield put(fetchReceivedOffersSuccess(receivedOffers));
  } catch (error) {
    yield put(fetchReceivedOffersFailure(error));
  }
}

export function* fetchReceivedOffersStart() {
  yield takeLatest(
    OfferActionTypes.FETCH_RECEIVED_OFFERS_START,
    fetchReceiveOffersAsync
  );
}

export function* offerSagas() {
  yield all([
    call(onCreateOfferStart),
    call(onCreateOfferSuccess),
    call(fetchSendOffersStart),
    call(fetchReceivedOffersStart)
  ]);
}
